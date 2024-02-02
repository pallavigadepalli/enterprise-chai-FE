import ComputerAudio from "@/components/ComputerAudio"
import Step from "@/components/Step"

export default function Config() {
  return (
    <main className="w-[1700px] h-[1040px] flex flex-col items-center justify-center bg-primaryBg">
      <div>
        <div className={'brand-name text-3xl flex ml-auto'}>
          <p>
            Welcome aboard to your
          </p>
          <span> Enterprise</span>
          <span className={'font-semibold'}>CH</span>
          <span className={'font-semibold'}>AI</span>
        </div>
      </div>
      <div>
        <p className="text-base leading-5 pt-10 pb-8">To make this experience tailored just for you, let&lsquo;s set up your audio preferences.</p>
      </div>
      <div>
        <ComputerAudio />
      </div>
      <div>
        <Step />
        <Step />
        <Step />
      </div>
      <div>

      </div>
    </main>
  )
}
