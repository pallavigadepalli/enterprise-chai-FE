'use client'
import React from "react";
import Image from "next/image"
import {deleteMaterial} from "@/services/materials";

export const DeleteMaterialForm = ({id }) => {

    return <form action={deleteMaterial}
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
