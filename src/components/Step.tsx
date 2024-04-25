import React from "react";

export default function Step(props: { text: React.ReactNode, title: string } ) {
    return (
        <div className="w-[436px] h-[140px] flex flex-col bg-grayPlateBg px-8 py-4 mb-4 rounded-lg font-medium">
            <h4>{props.title}</h4>
            <p className="pt-4 text-blackCustom">{props.text}</p>
        </div>
    )
}
