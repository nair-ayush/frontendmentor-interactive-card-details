import { useState } from "react";
import CardForm from "./components/CardForm";
import CardDisplay from "./components/CardDisplay";
import { useForm } from "react-hook-form";

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
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ICard>({
    defaultValues: card,
  });
  const onSubmit = (formValues: ICard) => {
    setCard(formValues);
  };
  return (
    <div className="h-full grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-none">
      <CardDisplay
        card={{
          name: watch("name"),
          number: watch("number"),
          expMonth: watch("expMonth"),
          expYear: watch("expYear"),
          cvc: watch("cvc"),
        }}
      />
      <CardForm
        register={register}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        isSubmitSuccessful={isSubmitSuccessful}
        resetForm={reset}
        onSubmit={onSubmit}
        errors={errors}
      />
    </div>
  );
}
