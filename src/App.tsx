import { useMultistepForm } from "./hooks/useMultistepForm.ts";
import { UserForm } from "./components/UserForm.tsx";
import { FormEvent } from "react";
import { AddressForm } from "./components/AddressForm.tsx";
import { AccountForm } from "./components/AccountForm.tsx";
import { useLocalStorage } from "./hooks/useLocalStorage.ts";

type FormData = {
  firstName: string,
  lastName: string,
  age: string,
  street: string,
  city: string,
  state: string,
  zip: string,
  email: string,
  password: string,
}

const INITIAL_DATA: FormData = {
  firstName: '',
  lastName: '',
  age: '',
  street: '',
  city: '',
  state: '',
  zip: '',
  email: '',
  password: '',
}

function App() {
  const [formData, setFormData] = useLocalStorage<FormData>('FORM', INITIAL_DATA)

  function updateFields(e: FormEvent<HTMLInputElement>) {
    const { name, value } = e.target as HTMLInputElement;

    setFormData((prev: FormData) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  const { step, currentStepIndex, steps, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <UserForm {...formData} updateFields={updateFields} />,
      <AddressForm {...formData} updateFields={updateFields} />,
      <AccountForm {...formData} updateFields={updateFields} />],
    )

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert('form submitted');
  }

  return (
    <div className="container flex justify-center mt-5">
      <div className="relative min-w-[425px] px-10 py-8 bg-white border-[1.5px] border-black rounded-sm">
        <form onSubmit={onSubmit}>
          <div className="absolute top-2 right-2">
            {`${currentStepIndex + 1}/${steps.length}`}
          </div>

          {step}

          <div className="mt-3 flex gap-2 justify-end">
            {!isFirstStep &&
              <button onClick={back} type="button" className="button">Back</button>
            }
            <button type="submit" className="button">
              {isLastStep ? 'Finish' : 'Next'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
