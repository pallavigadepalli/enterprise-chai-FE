
export default function FeedbackButtons() {
    return (
        <div className="flex items-center   justify-around pt-12">
            <div className=" flex justify-between w-[640px] px-12">
                <a className="btn-session" href={'/home/csm'}>Go Back</a>
                <a className="btn-summary">Call Summary</a>
                <a className="btn-feedback">Share feedback</a>
            </div>
        </div>
    )
}
