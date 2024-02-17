import Header from "@/components/Header";
import React from "react";

export default function Dashboard() {
  return (
      <main className="w-full px-9">
        <Header />
          <MaterialsForm />
      </main>
  )
}


const MaterialsForm = () => {
    return <div className={'w-1/2 flex flex-col'}>
        <label>Set Intent for your conversation</label>
        <select name={'phase'}>
            <option disabled={}>Select one</option>
        </select>
        <label className="block">
            <span className="text-gray-700">Customer company name*</span>
            <input
                type="text"
                className="form-input mt-1 block w-full"
                required
                name={'name'}
                placeholder="Customer company name*"
            />
        </label>
        <label className="block">
            <span className="text-gray-700">Customer point of contact name*</span>
            <input
                type="text"
                className="form-input mt-1 block w-full"
                required
                name={'point'}
                placeholder="Customer company name*"
            />
        </label>

    </div>
}
