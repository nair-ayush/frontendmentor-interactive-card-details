import { useState } from "react";
import { ICard } from "../App";

interface ICardFrom {
  cardDetails: ICard;
  setCardDetails: React.Dispatch<React.SetStateAction<ICard>>;
}

export default function CardFrom({ cardDetails, setCardDetails }: ICardFrom) {
  return (
    <div className="flex justify-center items-center">
      <div className="m-2 p-2 max-w-sm">
        <form className="flex flex-col gap-3">
          <fieldset className="flex flex-col gap-1">
            <label
              htmlFor="cardHolderName"
              className="text-veryDarkViolet text-xs uppercase"
            >
              CardHolder Name
            </label>
            <input
              type="text"
              value={cardDetails.name}
              onChange={(e) =>
                setCardDetails((prev) => ({ ...prev, name: e.target.value }))
              }
              id="cardHolderName"
              className={`border rounded-md border-lightGrayViolet hover:border-inputPurple  focus:outline-inputPurple p-2`}
              placeholder="e.g. Jane Appleseed"
            />
          </fieldset>
          <fieldset className="flex flex-col gap-1">
            <label
              htmlFor="cardNumber"
              className="text-veryDarkViolet text-xs uppercase"
            >
              CardHolder Name
            </label>
            <input
              type="text"
              id="cardNumber"
              value={cardDetails.number}
              onChange={(e) =>
                setCardDetails((prev) => ({ ...prev, number: e.target.value }))
              }
              className={`border rounded-md border-lightGrayViolet hover:border-inputPurple  focus:outline-inputPurple p-2`}
              placeholder="e.g. 1234 5678 9123 0000"
            />
          </fieldset>
          <fieldset className="grid grid-cols-2 gap-2">
            <label
              htmlFor="expiry"
              className="text-veryDarkViolet text-xs uppercase"
            >
              Exp. Date (MM/YY)
            </label>
            <label
              htmlFor="expiry"
              className="text-veryDarkViolet text-xs uppercase"
            >
              CVC
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="MM"
                value={cardDetails.expMonth}
                onChange={(e) =>
                  setCardDetails((prev) => ({
                    ...prev,
                    expMonth: e.target.value,
                  }))
                }
                className={`border w-20 rounded-md border-lightGrayViolet hover:border-inputPurple  focus:outline-inputPurple p-2`}
              />
              <input
                type="number"
                placeholder="YY"
                value={cardDetails.expYear}
                onChange={(e) =>
                  setCardDetails((prev) => ({
                    ...prev,
                    expYear: e.target.value,
                  }))
                }
                className={`border w-20 rounded-md border-lightGrayViolet hover:border-inputPurple  focus:outline-inputPurple p-2`}
              />
            </div>
            <input
              type="number"
              placeholder="e.g. 123"
              value={cardDetails.cvc}
              onChange={(e) =>
                setCardDetails((prev) => ({ ...prev, cvc: e.target.value }))
              }
              className={`border rounded-md border-lightGrayViolet hover:border-inputPurple  focus:outline-inputPurple p-2`}
            />
          </fieldset>
          <button className="p-2 my-4 bg-veryDarkViolet text-lightGrayViolet rounded-md">
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}
