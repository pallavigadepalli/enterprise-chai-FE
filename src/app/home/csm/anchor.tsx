'use client'
import React from "react";

export default function  Anchor ({url, text}) {
    return (
        <a
            onClick={ () => {
                window.open(url, "CSMWindow", "popup")
            }}
            className={'bg-violetLight rounded px-2 py-1 shadow-md cursor-pointer'}>
            {text}
        </a>
    )
}
