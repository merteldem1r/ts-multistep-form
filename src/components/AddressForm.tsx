import { FormEvent } from "react";

type AddressData = {
  city: string,
  state: string,
  street: string,
  zip: string,
}

type AddressFormProps = {
  updateFields: (e: FormEvent<HTMLInputElement>) => void
} & AddressData;

export function AddressForm({ city, state, street, zip, updateFields }: AddressFormProps) {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="self-center text-2xl font-medium mb-3">Address Information</h2>

      <label>City</label>
      <input
        onInput={updateFields}
        value={city}
        name="city"
        required
        type="text" />

      <label>State</label>
      <input
        onInput={updateFields}
        value={state}
        name="state"
        required
        type="text" />

      <label>Street</label>
      <input
        onInput={updateFields}
        value={street}
        name="street"
        required
        type="text" />

      <label>Zip</label>
      <input
        onInput={updateFields}
        value={zip}
        name="zip"
        required
        type="text" />
    </div>
  )
}