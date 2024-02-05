'use client'
import ComputerAudio from "@/components/ComputerAudio"
import Step from "@/components/Step"
import TabAudio from "@/components/TabAudio"
import Dropdown from "@/components/Dropdown";
import Image from "next/image";
import {useEffect, useState} from "react";

export default function Config() {
    const [audioDevices, setAudioDevices] = useState<>([]);

    useEffect(() => {
        async function fetchAudioDevices() {
            try {
                const devices = await navigator.mediaDevices.enumerateDevices();
                const audioInputs = devices.filter(device => device.kind === 'audioinput').map(device => ({
                    label: device.label,
                    value: device.deviceId
                }));
                setAudioDevices(audioInputs);
            } catch (error) {
                console.error('Error fetching audio devices:', error);
            }
        }

        fetchAudioDevices();
    }, []);
    const handleDeviceChange = (event) => {
        sessionStorage.setItem('selectedDeviceId', event.target.value);
    };


    return (
    <main className="w-full h-[1040px] flex flex-col items-center justify-center">
      <div>
        <div className={'brand-name text-3xl flex ml-auto'}>
          <p>
            Welcome aboard to your
          </p>
          <span> Enterprise</span>
          <span className={'font-semibold'}>CH</span>
          <span className={'font-semibold'}>AI</span>
        </div>
      </div>
      <div>
        <p className="text-base leading-5 pt-10 pb-8">To make this experience tailored just for you, let&lsquo;s set up your audio preferences.</p>
      </div>
      <div className="flex gap-12">
        <div>
          <Step />
          <Step />
          <Step />
        </div>
        <div className="grid gap-20 grid-cols-1">
            <div className="w-[560px] h-[180px] bg-primaryBG rounded-lg">
                <div className="h-12 bg-tertiary rounded-t-lg flex items-center justify-between gap-4 p-4">
                    <div className="flex items-center gap-4">
                        <Image
                            src={'/mic.png'}
                            alt='microphone'
                            width={24}
                            height={24}
                        />
                        <span className="text-white">Computer audio</span>
                    </div>
                    <div>
                        <Image
                            src={'/check-circle.png'}
                            alt='check-circle'
                            width={24}
                            height={24}
                        />
                    </div>
                </div>

                <div className="space-y-4 pt-10">
                    <Dropdown {...{options: audioDevices, onChange: handleDeviceChange}}/>
                </div>
            </div>
          <TabAudio />
        </div>
      </div>
    </main>
  )
}
