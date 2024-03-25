'use client'
import Banner from '@/components/Banner'
import AssistantLayout from '@/components/AssistantLayout'
import Navigation from '@/components/Navigation'
import Tags from '@/components/Tags'
import Title from '@/components/Title'
import React, {useEffect, useState} from "react";
import SpeakerBox from "@/components/SpeakerBox";
import ModalComplete from "@/components/ModalComplete";
import {handleStartCapture} from "@/app/session/[id]/sockets";
import {Conversation, getConversation} from "@/services/csm";
import {useParams} from "next/navigation";
import {Modal, ModalBody, ModalContent, ModalHeader} from "@nextui-org/react";
import {MaterialsForm} from "@/app/home/materials/MaterialsForm";

interface ActiveChatProps {
    tabRecorder: MediaRecorder;
    selectedDeviceId: string;
}
export default function ActiveChat({tabRecorder, selectedDeviceId}: ActiveChatProps) {

    const searchParams = useParams()
    const conversationId = searchParams.id
    const [assistantMessages, setAssistantMessages] = useState<string[]>([]);
    const [microphoneMessages, setMicrophoneMessages] = useState<string[]>([]);
    const [tabMessages, setTabMessages] = useState<string[]>([]);
    const [completeSessionAlert, setCompleteSessionAlert] = useState(false);
    const [conversation, setConversation] = useState<Conversation>();
    useEffect(() => {
        const init = async () => {
            await handleStartCapture({
                tabRecorder,
                selectedDeviceId,
                setMicrophoneMessages,
                setTabMessages,
                setAssistantMessages,
                conversationId
            });
            //get token cookie
            const cookies = document.cookie.split(';')[1].slice(7)
            return await getConversation(conversationId, {cookies})
        }
        init().then((conversation: Conversation) => {
            setConversation(conversation)
        }).catch(e => e);
    }, []);

    const placeholderClient = 'Your client\'s voice magic is being\n scooped up straight from your browser\n  tab, and you\'ll see it right here.';
    const placeholderUser = 'Your fantastic voice is captured straight \nfrom your microphone, and will be \ndisplayed here.'

    return (
        <div className={'xl:px-32 lg:px-20'}>
            {completeSessionAlert &&
              <Modal
                  isOpen={completeSessionAlert}
                  onClose={() => setCompleteSessionAlert(false)}
                  hideCloseButton
                  className={''}
              >
                  <ModalContent>
                      <ModalBody>
                          <ModalComplete conversationId={conversationId} onClose={setCompleteSessionAlert}/>
                      </ModalBody>
                  </ModalContent>
              </Modal> }
            <div className="w-full ">
                <Banner />
            </div>
            <div className="w-full h-12  mt-4 mx-auto flex justify-between align-center items-center">
                <Title clientName={conversation?.customer_name}/>
                <Navigation>
                    <button  className={`block py-4 text-base rounded hover:bg-tertiary hover-text-shadow bg-primary text-white nav-item`}>
            Settings
                    </button>
                    <button className={`block py-4 text-base rounded hover:bg-tertiary hover-text-shadow bg-primary text-white nav-item`}>
            Auto Scroll
                    </button>
                    <button className={`block py-4 text-base rounded hover:bg-tertiary hover-text-shadow bg-primary text-white nav-item`}>
            Pause
                    </button>
                    <button
                        onClick={() => {
                            setCompleteSessionAlert(true);
                        }}
                        className={`block py-4 text-base rounded hover:bg-tertiary hover-text-shadow bg-primary text-white nav-item`}>
            Complete
                    </button>
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
