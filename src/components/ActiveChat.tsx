'use client'
import Banner from '@/components/Banner'
import Layout from '@/components/Layout'
import NavItem from '@/components/NavItem'
import Navigation from '@/components/Navigation'
import Card from '@/components/Card'
import Tags from '@/components/Tags'
import Title from '@/components/Title'
import {useEffect, useState, useRef} from "react";

const sendingSocket = 'wss://free.blr2.piesocket.com/v3/1?api_key=wGHFPvnJsTqHCs2qBVyWK4zLxMGA3SZ8iMxLFbqP&notify_self=1';
const receivingSocket = 'wss://free.blr2.piesocket.com/v3/1?api_key=wGHFPvnJsTqHCs2qBVyWK4zLxMGA3SZ8iMxLFbqP&notify_self=1';

export default function ActiveChat({recorder, selectedDeviceId}) {
    const ws1 = new WebSocket(sendingSocket);
    const ws2 = new WebSocket(receivingSocket);

    const [messages, setMessages] = useState<string[]>([]);
    useEffect(() => {
        const handleStartCapture = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: { deviceId: selectedDeviceId } });
                return stream;
            } catch (error) {
                console.error('Error capturing audio:', error);
            }
        };
        handleStartCapture()
            .then(stream => {
                const recorder = new MediaRecorder(stream);

                try {

                    recorder.addEventListener('dataavailable', evt => {
                        if (evt.data.size > 0 && ws1.readyState === WebSocket.OPEN) {
                            ws1.send(evt.data);
                        }
                    });

                    ws1.onopen = () => {
                        recorder.start(100)
                    };
                    ws1.onerror = (error) => {
                        console.error('WebSocket error:', error);
                    };
                    ws2.onmessage = (event) => {
                        setMessages(_value => [..._value, event.data]);
                    }
                } catch (error) {
                    console.error('Error capturing audio:', error);
                }
            })
            .catch(error => {
                console.error('Error starting audio capture:', error);
            });
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
      <div className='
       w-full h-4 flex gap-10'>
        <Layout messages={messages} />
        <div className=' flex flex-col w-[320]'>
          <div>
            <Card />
          </div>
        </div>
      </div>
    </div>
  )
}
