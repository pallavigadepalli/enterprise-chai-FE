'use client'
import Banner from '@/components/Banner'
import Layout from '@/components/Layout'
import NavItem from '@/components/NavItem'
import Navigation from '@/components/Navigation'
import Tags from '@/components/Tags'
import Title from '@/components/Title'
import {useEffect, useState} from "react";
import SpeakerBox from "@/components/SpeakerBox";

const microphoneAudioSocket = process.env.WS + '/listen';
const tabAudioSocket = process.env.WS + '/listen2';
const assistantSocket = process.env.WS + '/result';


export default function ActiveChat({tabRecorder, selectedDeviceId}) {
    const microphoneWS = new WebSocket(microphoneAudioSocket);
    const tabWS = new WebSocket(tabAudioSocket);
    const assistantWS = new WebSocket(assistantSocket);

    const [assistantMessages, setAssistantMessages] = useState<string[]>([]);
    const [microphoneMessages, setMicrophoneMessages] = useState<string[]>(["Hello, it's me","Hello, thank you for yor time", "Plain as day", "Long story short, please"]);
    const [tabMessages, setTabMessages] = useState<string[]>(["Hello there!","How you doin'?","Fine, thank you"]);

    useEffect(() => {
        const handleStartCapture = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: { deviceId: selectedDeviceId } });
                const micRecorder = new MediaRecorder(stream);
                micRecorder.start(100)

                micRecorder.addEventListener('dataavailable', evt => {
                    if (evt.data.size > 0 && microphoneWS.readyState === WebSocket.OPEN) {
                        microphoneWS.send(evt.data);
                    }
                });

                tabRecorder.addEventListener('dataavailable', evt => {
                    if (evt.data.size > 0 && tabWS.readyState === WebSocket.OPEN) {
                        tabWS.send(evt.data);
                    }
                })
                tabRecorder.start(100)

                microphoneWS.onopen = () => {
                    micRecorder.start(100)
                };
                microphoneWS.onerror = (error) => {
                    console.error('WebSocket error:', error);
                };
                microphoneWS.onmessage = (event) => {
                    setMicrophoneMessages(_value => [..._value, event.data]);
                }
            } catch (error) {
                console.error('Error capturing audio:', error);
            }
        };
        handleStartCapture().then(() => {
            assistantWS.onmessage = (event) => {
                setAssistantMessages(_value => [..._value, event.data]);
            }
            tabWS.onmessage = (event) => {
                setTabMessages(_value => [..._value, event.data]);
            }
            console.log('Microphone capture started');
        })
    }, []);
  return (
    <div>
      <div className="w-full ">
        <Banner />
      </div>
      <div className="w-full h-12  mt-4 mx-auto flex justify-between align-center items-center">
        <Title />
        <Navigation>
          <NavItem href="/new" isActive>
            Settings
          </NavItem>
          <NavItem href="/new" isActive>
            Auto Scroll
          </NavItem>
          <NavItem href="/new" isActive>
            Pause
          </NavItem>
          <NavItem href="/new" isActive>
            Complete
          </NavItem>
        </Navigation>
      </div>
      <div className='w-full '>
        <Tags />
      </div>
      <div className='w-full h-4 flex gap-10'>
        <Layout messages={assistantMessages} />
        <div className=' flex flex-col w-[320]'>
          <div>
            <SpeakerBox name={'Ms. Wilson'} messages={microphoneMessages}/>
            <SpeakerBox name={'Dave Matthews'} messages={tabMessages}/>
          </div>
        </div>
      </div>
    </div>
  )
}
