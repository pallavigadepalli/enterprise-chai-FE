import Congratulations from "@/components/Congratulations"
import FeedbackButtons from "@/components/FeedbackButtons"
import SessionComplete from "@/components/SessionComplete"

export default function SessionWarning({summaryInfo}) {
    console.log(summaryInfo)
    return (
        <div className="w-full ">
            <Congratulations />
            <div className=" py-7 px-36">
                <SessionComplete summaryInfo={summaryInfo}/>
            </div>
            <FeedbackButtons />
        </div>
    )
}
