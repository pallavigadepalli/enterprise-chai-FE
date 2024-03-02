
import Header from "@/components/Header";
import SessionBtns from "@/components/SessionBtns";
import Table from "@/components/Table";
import {TableRow, TableColumn } from "@/components/Table"
import Image from "next/image";



export default function List() {
  const columns: TableColumn[] = [
    { key: 'customerCompanyName', title: 'Customer company name', width: 'w-1/4' },
    { key: 'customerPoint', title: 'Customer point of contact', width: 'w-1/4' },
    { key: 'conversationIntent', title: 'Conversation Intent', width: 'w-1/4' },
    { key: 'tools', title:'',width:'w-1/4' },
  ]
  const getTools = () => (
    <div className="flex items-center justify-end gap-6">
      <Image
        src={'/Tags.png'}
        alt='launch'
        width={65}
        height={25}
        />
        <Image
        src={'/edit.png'}
        alt='edit'
        width={24}
        height={24}
        />
        <Image
        src={'/Cross Circle.png'}
        alt='cross circle'
        width={24}
        height={24}
        />
    </div>
  )
  const data: TableRow[] = [
    {
      customerCompanyName: 'Adobe',
      customerPoint: 'Ms. Milwaukee',
      conversationIntent: 'Touch Point Meeting',
      tools: getTools()
    }
  ]
  return (
    <div className="w-full px-9">
      <Header title={'CSM Companion'}/>
      <SessionBtns />
      <div className="flex justify-end gap-x-3">
        <button className="btn-settings">Settings</button>
        <button className="btn-feedback">
          <a href="/session/active">Create session</a>
        </button>
      </div>
      <Table title={"Active created sessions"} columns={columns} data={data}/>
    </div>
  )
}
