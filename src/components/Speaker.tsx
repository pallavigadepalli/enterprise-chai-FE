import Image from 'next/image'
import React from 'react'
import iconMic from "../../public/microphone-01.svg"

export default function Speaker() {
    return (
        <div className="flex speaker bg-white rounded-full mr-4">
            <Image
                src={iconMic}
                alt='microphone'
                width={20}
                height={20}
            />
            <div className="flex-shrink-0 speaking text-center text-grayPlate">
        speaking
            </div>
        </div>
    )
}
