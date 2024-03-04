'use client'
import Header from "@/components/Header";
import React from "react";
import Image from "next/image";
import {saveFile} from "@/actions/materials";
import {useFormState} from "react-dom";


export default function Materials() {
  return (
      <main className="w-full px-9">
        <Header title={'Materials'} subtitle={''}/>
          <MaterialsForm />
      </main>
  )
}

const initialState = {
    message: "",
};

const MaterialsForm = () => {
    const [state, formAction] = useFormState(saveFile, initialState);
    console.log(state);
    return <form className={'w-1/2 flex flex-col gap-4'} action={formAction}>
        <label className="block">
            <span className="text-gray-700">Customer company name*</span>
            <input
                type="text"
                className="form-input mt-1 block w-full"
                placeholder="Customer company name*"
                name={'title'}
            />
        </label>
        <label className="block">
            <span className="text-gray-700">Product name</span>
            <input
                type="text"
                className="form-input mt-1 block w-full"
                name={'product'}
                placeholder="Product name*"
            />
        </label>
        <label className="block">
            <span className="text-gray-700">Add tags</span>
            <input
                type="text"
                className="form-input mt-1 block w-full"
                name={'tags'}
                placeholder="Add tags here"
            />
        </label>
        <h3 className='mb-5'>Upload files</h3>
        <div className="flex gap-2  pb-4 mb-8 bg-grayb items-center justify-center h-32 flex-col">
            <label className={'cursor-pointer'}>
                <Image src={'/elements.svg'} width={50} height={50} alt="pdf" />
                <input
                    type="file"
                    name={'file'}
                    className="hidden"
                />
            </label>
            <span className={'text-sm text-grayLight'}>Click to upload</span>

        </div>
        <legend className={'text-grayLight'}>Upload File (PDF, DOCX, TXT, PPT files up to 10MB)</legend>
        <button type="submit" className="btn-primary w-full">
            Upload
        </button>
    </form>
}
