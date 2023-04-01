import { ICard } from "../App";
import CardLogo from "../assets/card-logo.svg";

interface ICardDisplayProps {
  card: ICard;
}

export default function CardDisplay({ card }: ICardDisplayProps) {
  const defaultNumber = "0000000000000000";
  const groups = card.number.length
    ? card.number.replace(/\s/g, "").match(/.{1,4}/g)!
    : defaultNumber.match(/.{1,4}/g)!;

  return (
    <div className="grid grid-rows-3 sm:grid-cols-3 sm:grid-rows-none relative">
      <div className="row-span-2 sm:col-span-2 card-bg-desktop">
        <div className="card-display-back w-[445px] h-[250px] bg-cover bg-center rounded-md">
          <div className="h-full w-full p-5 flex justify-end items-center text-lightGrayViolet text-xs sm:text-base">
            <span className="mr-3 sm:mr-5 sm:mb-1">000</span>
          </div>
        </div>
        <div className="card-display-front w-[445px] h-[250px] bg-cover bg-center rounded-md">
          <div className="h-full w-full p-5 flex flex-col justify-between text-lightGrayViolet">
            <img
              src={CardLogo}
              alt="Card Logo"
              className="h-[25%] w-[25%] self-start"
            />
            <div className="flex flex-col gap-3 sm:gap-5">
              <div className="flex justify-between text-sm sm:text-2xl w-full flex-1">
                {groups.map((group, index) => (
                  <div key={index} className="tracking-widest">
                    {group}
                  </div>
                ))}
              </div>
              <div className="flex justify-between uppercase text-[10px] sm:text-[16px] items-center">
                <div>{card.name || "Jane AppleSeed"}</div>
                <div>
                  <span>{card.expMonth || "00"}</span>
                  <span>/</span>
                  <span>{card.expYear || "00"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row-span-1 sm:col-span-1"></div>
    </div>
  );
}
