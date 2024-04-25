
import {getSummary} from "@/services/summary";
import SessionWarning from "@/app/session/[id]/finished/SessionWarning";

export default async function Finished({params}) {
    const summaryInfo: any = await getSummary(params.id);
    return (
        <main className="w-full px-9">
            <SessionWarning summaryInfo={summaryInfo[0]}/>
        </main>
    )
}
