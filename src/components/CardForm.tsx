import { ReactElement } from "react";
import { ICard } from "../App";
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import CompleteLogo from "../assets/icon-complete.svg";
import { render } from "react-dom";

interface ICardFrom {
  register: UseFormRegister<ICard>;
  // handleSubmit: (
  //   e?: React.BaseSyntheticEvent<object, any, any> | undefined
  // ) => Promise<void>;
  handleSubmit: UseFormHandleSubmit<ICard>;
  onSubmit: (formValues: ICard) => void;
  isSubmitting: boolean;
  isSubmitSuccessful: boolean;
  errors: FieldErrors<ICard>;
  resetForm: any;
}

export default function CardFrom({
  register,
  handleSubmit,
  errors,
  isSubmitting,
  isSubmitSuccessful,
  resetForm,
  onSubmit,
}: ICardFrom) {
  const holderName = register("name", {
    required: "Name required",
    pattern: {
      value: /^[A-Za-z ]+$/i,
      message: "Please enter the name correctly",
    },
  });
  const holderNumber = register("number", {
    required: "Number required",
    pattern: {
      value: /\b\d{4}[ ]?\d{4}[ ]?\d{4}[ ]?\d{4}\b/,
      message: "Please enter a 16 digit number",
    },
  });
  const month = register("expMonth", {
    required: "MM required",
    pattern: { value: /0[1-9]|1[0-2]/, message: "MM 01-12." },
  });
  const currentYear = new Date().getFullYear();
  const year = register("expYear", {
    required: "YY required",
    minLength: 2,
    maxLength: 2,
    min: {
      value: currentYear % 100,
      message: `YY >= ${currentYear}`,
    },
    max: {
      value: (currentYear % 100) + 20,
      message: `YY <= ${currentYear + 20}`,
    },
  });
  const cvc = register("cvc", {
    required: "CVC required",
    pattern: { value: /^[0-9]{3}$/, message: "Please enter valid CVC" },
  });

  function renderForm(): ReactElement {
    if (isSubmitSuccessful && !isSubmitting) {
      return (
        <div className="flex flex-col items-center gap-3">
          <img src={CompleteLogo} alt="Complete Icon SVG" className="mb-4" />
          <span className="text-xl uppercase tracking-wider text-inputPurple">
            Thank You!
          </span>
          <span className="text-darkGrayViolet">
            We've added your card details.
          </span>
          <button
            className="bg-veryDarkViolet rounded-md p-2 text-lightGrayViolet w-full"
            onClick={() =>
              resetForm({
                name: "",
                number: "",
                expMonth: "",
                expYear: "",
                cvc: "",
              })
            }
          >
            Complete
          </button>
        </div>
      );
    } else if (!isSubmitSuccessful && isSubmitting) {
      return (
        <div
          className="flex flex-col justify-center items-center text-xl sm:text-2xl text-inputPurple
      "
        >
          Loading...
        </div>
      );
    } else {
      return (
        <form className="flex flex-col gap-1" onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="flex flex-col">
            <label
              htmlFor="name"
              className="text-veryDarkViolet text-xs uppercase"
            >
              CardHolder Name
            </label>
            <input
              {...holderName}
              id={holderName.name}
              className={`border rounded-md border-lightGrayViolet hover:border-inputPurple  focus:outline-inputPurple p-2 ${
                errors.name?.message &&
                "border-errorRed hover:border-errorRed  focus:outline-errorRed"
              }`}
              placeholder="e.g. Jane Appleseed"
            />
            <span className="text-xs text-errorRed h-3">
              {errors.name ? errors.name.message : ""}
            </span>
          </fieldset>
          <fieldset className="flex flex-col gap-1">
            <label
              htmlFor="cardNumber"
              className="text-veryDarkViolet text-xs uppercase"
            >
              CardHolder Number
            </label>
            <input
              {...holderNumber}
              id={holderNumber.name}
              className={`border rounded-md border-lightGrayViolet hover:border-inputPurple  focus:outline-inputPurple p-2 ${
                errors.number?.message &&
                "border-errorRed hover:border-errorRed  focus:outline-errorRed"
              }`}
              placeholder="e.g. 1234 5678 9123 0000"
            />
            <span className="text-xs text-errorRed h-3">
              {errors.number ? errors.number.message : ""}
            </span>
          </fieldset>
          <fieldset className="grid grid-cols-2 gap-1">
            <label
              htmlFor="expMonth"
              className="text-veryDarkViolet text-xs uppercase"
            >
              Exp. Date (MM/YY)
            </label>
            <label
              htmlFor="cvc"
              className="text-veryDarkViolet text-xs uppercase"
            >
              CVC
            </label>
            <div className="flex gap-2">
              <input
                placeholder="MM"
                {...month}
                id={month.name}
                className={`border w-[50%] rounded-md border-lightGrayViolet hover:border-inputPurple  focus:outline-inputPurple p-2 ${
                  errors.expMonth?.message &&
                  "border-errorRed hover:border-errorRed  focus:outline-errorRed"
                }`}
              />

              <input
                placeholder="YY"
                {...year}
                id={year.name}
                className={`border w-[50%] rounded-md border-lightGrayViolet hover:border-inputPurple  focus:outline-inputPurple p-2 ${
                  errors.expYear?.message &&
                  "border-errorRed hover:border-errorRed  focus:outline-errorRed"
                }`}
              />
            </div>
            <input
              placeholder="e.g. 123"
              type="password"
              {...cvc}
              id={cvc.name}
              className={`border rounded-md border-lightGrayViolet hover:border-inputPurple  focus:outline-inputPurple p-2 ${
                errors.cvc?.message &&
                "border-errorRed hover:border-errorRed  focus:outline-errorRed"
              }`}
            />
            <div className="flex gap-4">
              <span className="text-xs text-errorRed h-3">
                {errors.expMonth ? errors.expMonth.message : ""}
              </span>
              <span className="text-xs text-errorRed h-3">
                {errors.expYear ? errors.expYear.message : ""}
              </span>
            </div>
            <span className="text-xs text-errorRed h-3">
              {errors.cvc ? errors.cvc.message : ""}
            </span>
          </fieldset>
          <button
            type="submit"
            className="p-2 my-4 bg-veryDarkViolet text-lightGrayViolet rounded-md"
          >
            Confirm
          </button>
        </form>
      );
    }
  }

  return (
    <div className="flex justify-center items-center">
      <div className="m-2 p-2 max-w-sm">{renderForm()}</div>
    </div>
  );
}
