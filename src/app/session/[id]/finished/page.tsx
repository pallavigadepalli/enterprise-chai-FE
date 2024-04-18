import SessionWarning from "@/app/complete/page";
import {getSummary} from "@/services/summary";

export default async function Finished({params}) {
    const summaryInfo = await getSummary(params.id);
    return (
        <main className="w-full px-9">
            <SessionWarning summaryInfo={summaryInfo[0]}/>
        </main>
    )
}
