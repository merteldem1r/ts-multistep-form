import { FormEvent } from "react";

type AccountData = {
  email: string,
  password: string,
}

type AccountFormProps = {
  updateFields: (e: FormEvent<HTMLInputElement>) => void
} & AccountData;

export function AccountForm({ email, password, updateFields }: AccountFormProps) {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="self-center text-2xl font-medium mb-3">Account</h2>

      <label>Email</label>
      <input
        onInput={updateFields}
        value={email}
        name="email"
        required
        type="email" />

      <label>Password</label>
      <input
        onInput={updateFields}
        value={password}
        name="password"
        required
        type="password" />
    </div>
  )
}