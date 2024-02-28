
export default function ModalComplete() {
  return (
      <div className={"fixed left-0 top-0  h-full w-full overflow-y-auto overflow-x-hidden outline-none"}>


    <div className="bg-violetLight w-[500px] h-[160px] flex flex-col justify-center items-center rounded-lg  relative w-auto translate-y-[-50px] transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px] transform-none opacity-100">
      <p className="text-lg text-primarySmall">Are you sure you want to complete your session?</p>
      <div className="flex w-[292px] justify-between items-center pt-4">
        <button className="btn-goback bg-whiteGray">Go Back</button>
        <a href={'/session/finished'}>
          <button className="btn-goback bg-primarySmall text-white">Complete</button>
        </a>
      </div>
    </div>   </div>
  )
}
