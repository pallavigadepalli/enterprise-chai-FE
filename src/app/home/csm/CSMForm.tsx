'use client'
import {useFormState} from "react-dom";
import React from "react";
import {saveSession} from "@/actions/csm";


const initialState = {
    message: "",
};
type phase = {
    phase: string
    id: number
}
interface CSMFormProps {
    phases: phase[]
}
export const CSMForm = ({phases}) => {
    const [state, formAction] = useFormState(saveSession, initialState);

    return <form className={'flex flex-col gap-4'} action={formAction}>
        <div className="block">
            <span className="text-gray-700">Customer journey phase name*</span>
            <select className="p-2 h-12 border rounded flex items-center w-full" name={'journey_phase'}>
                {
                    phases.map((phase) => {
                        return <option key={phase.id} value={phase.phase}>{phase.phase}</option>
                    })
                }
            </select>
        </div>
        <div className="block">
            <span className="text-gray-700">Customer company name*</span>
            <input
                required
                type="text"
                className="form-input mt-1 block w-full"
                name={'customer_name'}
                placeholder="customer company name"
            />
        </div>
        <div className="block">
            <span className="text-gray-700">Customer point of contact name*</span>
            <input
                required
                type="text"
                className="form-input mt-1 block w-full"
                name={'point_of_contact'}
                placeholder="customer point of contact name"
            />
        </div>
        <div>
            <span className="text-gray-700">Description</span>
            <textarea
                required
                className="form-input  block w-full h-28"
                name={'description'}
                placeholder="description">
            </textarea>
        </div>
        <div className={'flex justify-around'}>
            <button type="submit" className="bg-grayLight text-white btn-goback w-[130px]" name={'launch'}>
                Launch
            </button>
            <button type="submit" className="bg-grayLight text-white btn-goback w-[130px]" name={'save'}>
                Save for later
            </button>
        </div>

    </form>
}
