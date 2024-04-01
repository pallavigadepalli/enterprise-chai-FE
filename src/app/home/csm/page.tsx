
import Header from "@/components/Header";
import SessionBtns from "@/components/SessionBtns";
import Table from "@/components/Table";
import {TableRow, TableColumn } from "@/components/Table"
import Image from "next/image";
import {Modal, ModalBody, ModalContent, ModalHeader} from "@nextui-org/react";
import React from "react";
import moment from "moment";
import {CSMForm} from "@/app/home/csm/CSMForm";
import {getJourneyPhases, getSessions} from "@/services/sessions";
import {getMaterials} from "@/services/materials";



export default async function List({searchParams}) {
    const phases = await getJourneyPhases()
    const sessions = await getSessions()
    const products = await getMaterials();


    const columns: TableColumn[] = [
        { key: 'customerCompanyName', title: 'Customer company name', width: 'w-1/4' },
        { key: 'customerPoint', title: 'Customer point of contact', width: 'w-1/4' },
        { key: 'conversationIntent', title: 'Conversation Intent', width: 'w-1/4' },
        { key: 'created', title: 'Created', width: 'w-1/4' },
        { key: 'tools', title:'',width:'w-1/4' },
    ]
    const getTools = (id: number) => (
        <div className="flex items-center justify-end gap-6">
            <a href={`/session/${id}/active`} className={'bg-violetLight rounded px-2 py-1 shadow-md'}>
                Launch
            </a>
            {/*            <a href={`/home/csm?action=edit&id=${id}`}>
                <Image
                    src={'/edit.png'}
                    alt='edit'
                    width={24}
                    height={24}
                />
            </a>*/}
            <a href={`/home/csm?action=delete&id=${id}`}>
                <Image
                    src={'/Cross Circle.png'}
                    alt='cross circle'
                    width={24}
                    height={24}
                />
            </a>
        </div>
    )
    const data: TableRow[] = sessions.sessions.map((session) => {
        return {
            customerCompanyName: session['product_company'],
            customerPoint: session['point_of_contact'],
            conversationIntent: session['journey_phase'],
            created: moment(session['created_at']).format('DD-MMM-YYYY hh:mm a'),
            tools: getTools(session.id)
        }
    })
    return (
        <div className="w-full px-9">
            <Header title={'CSM Companion'}/>
            <SessionBtns />
            <div className="flex justify-end gap-x-3">
                <button className="btn-settings">Settings</button>
                <button className="btn-feedback">
                    <a href="/home/csm?action=new">Create session</a>
                </button>
            </div>
            <Table title={"Active created sessions"} columns={columns} data={data}/>
            <Modal
                isOpen={searchParams.action === 'new'}
                closeButton={<a href={'/home/csm'}>X</a>}
            >
                <ModalContent>
                    <ModalHeader className="flex flex-col gap-1">
                        <p className={'text-primarySmall'}>Create new session</p>
                    </ModalHeader>
                    <ModalBody>
                        <CSMForm phases={phases.phases} products={products.materials}/>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    )
}
