'use client'
import Header from "@/components/Header";
import React, {useEffect} from "react";
import Image from "next/image";
import {useForm} from "react-hook-form";
import axios from "axios";

export default function Materials() {
  return (
      <main className="w-full px-9">
        <Header title={'Materials'} subtitle={''}/>
          <MaterialsForm />
      </main>
  )
}

interface IFormInput {
    product: string;
    company: string;
    tags: string;
    file: File;

}

const MaterialsForm = () => {
    const {register, handleSubmit} = useForm<any>()
    const [file, setFile] = React.useState<File | null>(null)
    async function submitForm(data: IFormInput) {
        const formData = new FormData();
        formData.append('title', data.company);
        formData.append('product', data.product);
        formData.append('tags', data.tags);
        if (!file) {
            return
        }
        formData.append('file', file);
        try {
            const response = await axios.post(process.env.NEXT_PUBLIC_BACKEND + '/upload',formData, {

                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Token ' + localStorage.getItem('token'),
                },

            })
            console.log(response)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
         fetch(process.env.NEXT_PUBLIC_BACKEND + '/documents', {
            headers: {
                'Authorization': 'Token ' + localStorage.getItem('token'),
            },
        }).then(response => response.json()).then(data => console.log(data))
    }, []  )
    return <form className={'w-1/2 flex flex-col gap-4'} onSubmit={handleSubmit(submitForm)}>
        <label className="block">
            <span className="text-gray-700">Customer company name*</span>
            <input
                type="text"
                className="form-input mt-1 block w-full"
                {...register('company')}
                placeholder="Customer company name*"
            />
        </label>
        <label className="block">
            <span className="text-gray-700">Product name</span>
            <input
                type="text"
                className="form-input mt-1 block w-full"
                {...register('product')}
                placeholder="Product name*"
            />
        </label>
        <label className="block">
            <span className="text-gray-700">Add tags</span>
            <input
                type="text"
                className="form-input mt-1 block w-full"
                {...register('tags')}
                placeholder="Add tags here"
            />
        </label>
        <h3 className='mb-5'>Upload files</h3>
        <div className="flex gap-2  pb-4 mb-8 bg-grayb items-center justify-center h-32 flex-col">
            <label className={'cursor-pointer'}>
                <Image src={'/elements.svg'} width={50} height={50} alt="pdf" />
                <input
                    type="file"
                    className="hidden"
                    onChange={(e) => {
                        if (e.target.files) {
                            setFile(e.target.files[0])
                        }
                    }
                    }
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
