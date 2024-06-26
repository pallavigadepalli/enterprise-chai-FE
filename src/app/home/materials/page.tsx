import Header from "@/components/Header";
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody} from "@nextui-org/react";
import {MaterialsForm} from "@/app/home/materials/MaterialsForm";
import MaterialsTable from "@/app/home/materials/MaterialTable";
import {getMaterials, getTemplates} from "@/services/materials";
import TemplatesTable from "@/app/home/materials/TemplatesTable";


export default async function Materials({searchParams}: any ) {
    const data = await getMaterials();
    const templates = await getTemplates();
    return (
        <main className="w-full px-9">
            <Modal
                isOpen={searchParams.action === 'new'}
                closeButton={<a href={'/home/materials'}>X</a>}
            >
                <ModalContent>
                    <ModalHeader className="flex flex-col gap-1">
                        <p className={'text-primarySmall'}>Upload a new document</p>
                        <p>List of recommended documents</p>
                    </ModalHeader>
                    <ModalBody>
                        <MaterialsForm/>
                    </ModalBody>
                </ModalContent>
            </Modal>
            <Modal
                isOpen={searchParams.action === 'template'}
                size={'xl'}
                closeButton={<a href={'/home/materials'}>X</a>}
            >
                <ModalContent>
                    <ModalHeader className="flex flex-col gap-1">
                        <p className={'text-lg font-bold'}>Recommended Documents</p>
                    </ModalHeader>
                    <ModalBody>
                        <TemplatesTable data={templates}/>
                    </ModalBody>
                </ModalContent>
            </Modal>
            <Header title={'Materials'} subtitle={''}/>
            <div className="flex justify-end gap-x-3">
                <a href={'/home/materials?action=template'}>
                    <button className={'bg-darkViolet700 w-36 h-12'}>
                        Template
                    </button>
                </a>
                <a href={'/home/materials?action=new'}>
                    <button className={'bg-primarySmall text-white w-36 h-12'}>New</button>
                </a>
            </div>
            <div>
                <MaterialsTable data={data.materials}/>
            </div>
        </main>
    )
}



