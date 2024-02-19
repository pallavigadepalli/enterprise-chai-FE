
export default function ModalComplete() {
  return (
    <div className="bg-violetLight w-[500px] h-[160px] flex flex-col justify-center items-center rounded-lg">
      <p className="text-lg text-primarySmall">Are you sure you want to complete your session?</p>
      <div className="flex w-[292px] justify-between items-center pt-4">
        <button className="btn-goback bg-whiteGray">Go Back</button>
        <button className="btn-goback bg-primarySmall text-white">Complete</button>
      </div>
    </div>
  )
}
