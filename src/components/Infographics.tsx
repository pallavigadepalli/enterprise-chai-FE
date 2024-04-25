export default function Infographics() {
    return (
        <div className="pt-6">
            <div className=" grid grid-cols-2 grid-rows-1 gap-x-11 gap-y-3.5">
                <div className="infographics-square bg-infoGraphicA ">
                    <p className="infographics-title">Assigned customers</p>
                    <p className="text-5xl font-bold">20</p>
                    <div className="border-t border-primaryDark mt-8 mb-8">
                        <small>View report</small>
                    </div>
                </div>
                <div className="infographics-square bg-infoGraphicB">
                    <p className="infographics-title">Upcoming renewals</p>
                    <p className="text-5xl font-bold">12</p>
                    <div className="border-t border-primaryDark mt-8 mb-8">
                        <small>View report</small>
                    </div>
                </div>
                <div className="infographics-square bg-infoGraphicC">
                    <p className="infographics-title">Upcoming EBR’s</p>
                    <p className="text-5xl font-bold">06</p>
                    <div className="border-t border-primaryDark mt-8 mb-8">
                        <small>View report</small>
                    </div>
                </div>
                <div className="infographics-square bg-infoGraphicD">
                    <p className="infographics-title">Ready for references</p>
                    <p className="text-5xl font-bold">03</p>
                    <div className="border-t border-primaryDark mt-8 mb-8">
                        <small>View report</small>
                    </div>
                </div>
            </div>
        </div>

    )
}
