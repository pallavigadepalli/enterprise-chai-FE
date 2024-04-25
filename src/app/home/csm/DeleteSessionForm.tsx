'use client'
import React from "react";
import Image from "next/image";
import {deleteSession} from "@/services/sessions";
import {useFormState} from "react-dom";

const initialState: any  = {
    message: "",
};
export const DeleteForm = ({id }: any) => {
    // eslint-disable-next-line no-unused-vars
    const [state, formAction] = useFormState(deleteSession, initialState);

    return <form action={deleteSession}
        onSubmit={
            async (e) => {
                e.stopPropagation();

            }
        }
    >
        <input type="hidden" name={'id'} value={id}/>
        <button type={"submit"}>
            <Image
                src={'/Cross Circle.png'}
                alt='cross circle'
                className='cursor-pointer'
                width={24}
                height={24}
            />
        </button>
    </form>
}
