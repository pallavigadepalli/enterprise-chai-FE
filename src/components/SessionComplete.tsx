import Image from "next/image";

export default function SessionComplete() {
  return (
    <div className="flex-col">
      <div className="flex justify-center items-center font-bold gap-1">
        <span className="text-2xl text-primarySmall">Congratulations</span>
        <Image src={'/celebration.png'} alt="celebration" width={48} height={52}/>
        <span className="text-2xl text-primarySmall">on a successful conversation!</span>
      </div>
      <div className="flex justify-center">
        <p className="text-base text-primarySmall pt-3">Your call summary can also be found at CSM Companion Tab</p>
      </div>
      <div className="flex  w-[640px] px-12 justify-around pt-12">
        <button className="btn-session">Go Back</button>
        <button className="btn-summary">Call Summary</button>
        <button className="btn-feedback">Share feedback</button>
      </div>
    </div>
  )
}
