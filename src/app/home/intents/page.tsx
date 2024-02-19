import Header from "@/components/Header";
import React from "react";

export default function Intents() {
  return (
      <main className="w-full px-9">
        <Header title={'Set intent'}/>
          <IntentsForm />
      </main>
  )
}


const IntentsForm = () => {
    return (
        <form className={'w-1/2 flex flex-col gap-3'}>
            <label>Set Intent for your conversation</label>
            <label>Customer journey phase name*</label>
            <select name='phase'>
                <option disabled >Select one</option>
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
            <label className="block">
                Description
            </label>
            <textarea className={'form-input mt-1 block w-full'} placeholder={'Intent description'} name={'description'}/>
            <button type="submit" className="btn-primary w-full">
                Upload
            </button>
        </form>
    )
}
