
import Header from "@/components/Header";
import Table from "@/components/Table";
import {TableRow, TableColumn } from "@/components/Table"
import {Modal, ModalBody, ModalContent, ModalHeader} from "@nextui-org/react";
import React from "react";
import moment from "moment";
import {CSMForm} from "@/app/home/csm/CSMForm";
import {getJourneyPhases, getSessions} from "@/services/sessions";
import {getMaterials} from "@/services/materials";
import {DeleteForm} from "@/app/home/csm/DeleteSessionForm";

export default async function List({searchParams}: any ) {
    const isPending = searchParams.status === 'pending' || !searchParams.status;
    const phases = await getJourneyPhases()
    const sessions = await getSessions(isPending)
    const products = await getMaterials();
    const tableTitle = isPending ? "Active created sessions" : "Call Summary";




    const pendingCallsColumns: TableColumn[] = [
        { key: 'customerCompanyName', title: 'Customer company name', width: 'w-1/4' },
        { key: 'customerPoint', title: 'Customer point of contact', width: 'w-1/4' },
        { key: 'conversationIntent', title: 'Conversation Intent', width: 'w-1/4' },
        { key: 'created', title: 'Created', width: 'w-1/4' },
        { key: 'tools', title:'',width:'w-1/4' },
    ];

    const finishedCallsColumns: TableColumn[] = [
        { key: 'session_number', title: 'Sesssion no', width: 'w-1/4' },
        { key: 'conversationIntent', title: 'Conversation Intent', width: 'w-1/4' },
        { key: 'customerCompanyName', title: 'Customer company name', width: 'w-1/4' },
        { key: 'created', title: 'Date', width: 'w-1/4' },
    ];
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
            <DeleteForm id={id}/>
        </div>
    )
    const data: TableRow[] = sessions.sessions.map((session:any) => {
        return {
            ...session,
            customerCompanyName: session['product_company'],
            customerPoint: session['point_of_contact'],
            conversationIntent: session['journey_phase'],
            created: moment(session['created_at']).format('DD-MMM-YYYY hh:mm a'),
            tools: getTools(session.id),
            rowUrl: isPending ? null : `/session/${session.id}/finished`
        }
    })
    return (
        <div className="w-full px-9">
            <Header title={'CSM Companion'}/>
            <div className='flex align-middle gap-x-3'>
                <a href={`/home/csm?status=pending`}>
                    <button className={`btn-intents  ${isPending ?  'font-bold' : 'text-grayDark1'}`}>
                        Created sessions
                    </button>
                </a>
                <a href={`/home/csm?status=completed`}>
                    <button className={`btn-intents  ${!isPending ?  'font-bold' : 'text-grayDark1'}`}>Completed sessions</button>
                </a>
            </div>
            <div className="flex justify-end gap-x-3">
                <button className="btn-settings">Settings</button>

                <a href="/home/csm?action=new">
                    <button className="btn-feedback">
                        Create session
                    </button>
                </a>

            </div>
            <Table
                title={tableTitle}
                columns={isPending ? pendingCallsColumns : finishedCallsColumns}
                data={data}
            />
            <Modal
                isOpen={searchParams.action === 'new'}
                size={'xl'}
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


