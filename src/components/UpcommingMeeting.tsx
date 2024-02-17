import Image from "next/image";

export default function UpcommingMeeting() {
  return (
    <div className="w-[408px] py-3 px-8 shadow-md">
      <h2 className="pb-4">Upcoming Meetings</h2>
      <div className="grid grid-cols-1 divide-y">
        <div className="flex justify-between  items-center py-2">
          <div className="upcomming-date">
            <span>Mon</span>
            <span className="text-primarySmall text-xl">10</span>
          </div>

          <div>
            <h5>Onboarding with JP Morgan</h5>
            <small className="">9:00 AM - 11:30PM</small>
          </div>
          <div>
            <button>
              <Image 
              src={'/Icon-button.png'}
              alt="Icon button"
              width={23}
              height={24}
              />
            </button>
          </div>
        </div>
      <div className="flex justify-between items-center py-2">
          <div className="upcomming-date">
            <span>Mon</span>
            <span className="text-primarySmall text-xl">10</span>
          </div>
        <div>
          <h5>Onboarding with JP Morgan</h5>
          <small className="">9:00 AM - 11:30PM</small>
        </div>
        <div>
          <button>
            <Image 
            src={'/Icon-button.png'}
            alt="Icon button"
            width={23}
            height={24}
            />
          </button>
        </div>
      </div>
      <div className="flex pt-2 justify-start">
        <div className="btn-meeting flex justify-center items-center">
          View all meetings
        </div>
      </div>
    </div>
    </div>
    
  )
}
