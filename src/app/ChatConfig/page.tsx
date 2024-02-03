import ComputerAudio from "@/components/ComputerAudio"
import Step from "@/components/Step"
import TabAudio from "@/components/TabAudio"

export default function Config() {
  return (
    <main className="w-full h-[1040px] flex flex-col items-center justify-center">
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
      <div className="flex gap-12">
        <div>
          <Step />
          <Step />
          <Step />
        </div>
        <div className="grid gap-20 grid-cols-1">
          <ComputerAudio />
          <TabAudio />
        </div>
      </div>
    </main>
  )
}
