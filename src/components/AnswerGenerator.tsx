import Image from 'next/image'
import aimIcon from "../../public/aim.svg"


export default function AnswerGenerator() {
  return (
    <div className="flex mr-4 h-8 pt-4 bg-white mx-auto rounded-full items-center p-4 gap-4">
      <Image
      src={aimIcon}
      alt='aim Icon'
      width={20}
      height={20}
      />
      <div className="flex-shrink-0 answer-generator">
        Generating answers
      </div>
    </div>
  )
}
