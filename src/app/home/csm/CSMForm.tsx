'use client'
import {useFormState, useFormStatus} from "react-dom";
import React from "react";
import {saveSession} from "@/actions/csm";
import {Button} from "@nextui-org/react";


const initialState = {
    message: "",
};
type phase = {
    phase: string
    id: number
}
export const CSMForm = ({phases, products}) => {
    const [state, formAction] = useFormState(saveSession, initialState);

    return <form className={'flex flex-col gap-4'} action={formAction}>
        <div className="block">
            <span className="text-gray-700">Customer journey phase name*</span>
            <select required className="p-2 h-12 border rounded flex items-center w-full" name={'journey_phase'}>
                {
                    phases.map((phase) => {
                        return <option key={phase.id} value={phase.phase}>{phase.phase}</option>
                    })
                }
            </select>
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
        <div className="block">
            <span className="text-gray-700">Product*</span>
            <select required className="p-2 h-12 border rounded flex items-center w-full" name={'product'}>
                {
                    products.map((product) => {
                        return <option key={product.id} value={product.name}>{product.name}</option>
                    })
                }
            </select>
        </div>
        <div>
            <span className="text-gray-700">Description</span>
            <textarea
                className="form-input  block w-full h-28"
                name={'description'}
                placeholder="description">
            </textarea>
        </div>
        <div className={'flex justify-around'}>
            <SaveButtons/>
        </div>

    </form>
}

const SaveButtons = () => {
    const {pending} = useFormStatus();
    if (pending) return <Button
        isLoading={true}
        className=" text-white btn-goback w-[130px] bg-primarySmall">
        Saving...
    </Button>
    return <>

        <Button
            type="submit"
            className=" text-white btn-goback w-[130px] bg-primarySmall"
            name={'launch'}>
            Launch
        </Button>
        <Button
            type="submit"
            className="btn-goback w-[130px] bg-darkViolet700"
            name={'save'}>
            Save for later
        </Button>
    </>
}
