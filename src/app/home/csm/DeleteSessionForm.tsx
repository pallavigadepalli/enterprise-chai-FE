'use client'
import React from "react";
import {deleteSession} from "@/services/sessions";
import Image from "next/image";

export const DeleteForm = ({id }: any) => {

    return <form action={deleteSession}

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
