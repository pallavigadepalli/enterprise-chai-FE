'use client'
import Banner from '@/components/Banner'
import AssistantLayout from '@/components/AssistantLayout'
import NavItem from '@/components/NavItem'
import Navigation from '@/components/Navigation'
import Tags from '@/components/Tags'
import Title from '@/components/Title'
import {useEffect, useState} from "react";
import SpeakerBox from "@/components/SpeakerBox";

const socketURL = process.env.NEXT_PUBLIC_WS;
const microphoneAudioSocket = socketURL + '/listen';
const tabAudioSocket = socketURL + '/listen2';
const assistantSocket = socketURL + '/result';

interface ActiveChatProps {
    tabRecorder: MediaRecorder;
    selectedDeviceId: string;
}
export default function ActiveChat({tabRecorder, selectedDeviceId}: ActiveChatProps) {

    const [assistantMessages, setAssistantMessages] = useState<string[]>([]);
    const [microphoneMessages, setMicrophoneMessages] = useState<string[]>([]);
    const [tabMessages, setTabMessages] = useState<string[]>([]);

    useEffect(() => {


        const handleStartCapture = async () => {
            const microphoneWS = new WebSocket(microphoneAudioSocket);
            const tabWS = new WebSocket(tabAudioSocket);
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
            const assistantWS = new WebSocket(assistantSocket);
            assistantWS.onmessage = (event) => {
                setAssistantMessages(_value => [..._value, event.data]);
            }
            tabWS.onmessage = (event) => {
                setTabMessages(_value => [..._value, event.data]);
            }
            console.log('Microphone capture started');
        })
    }, [selectedDeviceId, tabRecorder]);

    const placeholderClient = 'Your client\'s voice magic is being\n scooped up straight from your browser\n  tab, and you\'ll see it right here.';
    const placeholderUser = 'Your fantastic voice is captured straight \nfrom your microphone, and will be \ndisplayed here.'
  return (
    <div className={'xl:px-32 lg:px-20'}>
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
        <AssistantLayout messages={assistantMessages} />
        <div className=' flex flex-col w-[320]'>
          <div>
              <SpeakerBox name={'Customer'} messages={tabMessages} placeholder={placeholderClient}/>
              <SpeakerBox name={'You'} messages={microphoneMessages} placeholder={placeholderUser}/>
          </div>
        </div>
      </div>
    </div>
  )
}
