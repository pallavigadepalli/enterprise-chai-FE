'use client'
import Banner from '@/components/Banner'
import Layout from '@/components/Layout'
import NavItem from '@/components/NavItem'
import Navigation from '@/components/Navigation'
import Card from '@/components/Card'
import Tags from '@/components/Tags'
import Title from '@/components/Title'
import {useEffect} from "react";

export default function Progress() {

    useEffect(() => {
        const handleStartCapture = async () => {
            const selectedDeviceId = sessionStorage.getItem('selectedDeviceId');
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
                    const ws = new WebSocket('ws://localhost:5555/listen2');

                    recorder.addEventListener('dataavailable', evt => {
                        if (evt.data.size > 0 && ws.readyState === WebSocket.OPEN) {
                            ws.send(evt.data);
                        }
                    });

                    ws.onopen = () => {
                        console.log('WebSocket connection opened');

                        recorder.onstop = () => {
                            console.log('MediaRecorder stopped');
                        };

                        recorder.start(100)

                    };

                    // When WebSocket connection encounters an error
                    ws.onerror = (error) => {
                        console.error('WebSocket error:', error);
                    };

                    // When WebSocket connection is closed
                    ws.onclose = () => {
                        console.log('WebSocket connection closed');
                    };
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
        <Layout/>
        <div className=' flex flex-col w-[320]'>
          <div>
            <Card />
          </div>
        </div>
      </div>
    </div>
  )
}
