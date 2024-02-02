import Image from 'next/image'


export default function TabAudio() {
  return (
    <div className="w-[560px] h-[180px] bg-primaryBG rounded-lg">
      <div className="h-12 bg-grayPlate rounded-t-lg flex items-center justify-between gap-4 p-4">
        <div className="flex items-center gap-4">
          <Image
          src={'/monitor-02.png'}
          alt='monitor'
          width={24}
          height={24}
          />
          <span className="text-white">Browser Tab Audio</span>
        </div>
        <div>
          <Image
          src={'/x-circle.png'}
          alt='x circle'
          width={24}
          height={24}
          />
        </div>
      </div>
    </div>
  )
}
