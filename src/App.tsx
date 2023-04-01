import { useState } from "react";
import CardForm from "./components/CardForm";
import CardDisplay from "./components/CardDisplay";

export interface ICard {
  name: string;
  number: string;
  expMonth: string;
  expYear: string;
  cvc: string;
}

export default function App() {
  const [card, setCard] = useState<ICard>({
    name: "",
    number: "",
    expMonth: "",
    expYear: "",
    cvc: "",
  });
  return (
    <div className="h-full grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-none">
      <CardDisplay card={card} />
      <CardForm cardDetails={card} setCardDetails={setCard} />
    </div>
  );
}
