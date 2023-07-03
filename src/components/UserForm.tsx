import { FormEvent } from "react";

type UserData = {
  firstName: string,
  lastName: string,
  age: string,
}

type UserFormProps = {
  updateFields: (e: FormEvent<HTMLInputElement>) => void
} & UserData;

export function UserForm({ firstName, lastName, age, updateFields }: UserFormProps) {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="self-center text-2xl font-medium mb-3">User Details</h2>

      <label>First Name</label>
      <input
        onInput={updateFields}
        value={firstName}
        name="firstName"
        required
        type="text" />

      <label>Last Name</label>
      <input
        onInput={updateFields}
        value={lastName}
        name="lastName"
        required
        type="text" />

      <label>Age</label>
      <input
        onInput={updateFields}
        value={age}
        name="age"
        required
        min={1}
        type="number" />
    </div>
  )
}