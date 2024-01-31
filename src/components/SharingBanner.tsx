
export default function Banner() {
  return (
    <div className="h-14 py-3 bg-white  flex  w-full items-center  mb-4 shadow-md shadow-opacity-15 gap-4 px-10"> 
      <p className="min-w-483 h-6  truncate leading-3 self-center text-black sharing-banner">Sharing https://meet.google.com to app.enterpriseCHAI.com</p>
      <button className=" min-w-80 h-8 p-2  rounded-full banner-view bg-indigo-200 ">View tab: meet.google.com </button>
      <button className="min-w-32 h-8 text-white bg-indigo-500  banner-view p-2  rounded-full">Stop sharing</button>
    </div>
  );
}