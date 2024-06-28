import AudioConfig from "@/app/session/[id]/active/AudioConfig";
import {getConversation} from "@/services/csm";


export default async function Config({params}) {
    const conversation = await getConversation(params.id);

    return (<AudioConfig conversation={conversation}/>)
}
