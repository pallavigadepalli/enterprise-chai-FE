import Image from "next/image";

export default function CustomerJourney() {
  return (
    <div className="w-[570px] py-3 px-8 shadow-md">
      <h2 className="pb-4">Customer Journey Templates</h2>
      <div className="grid grid-cols-1 divide-y">
        <div className="flex justify-between  items-center py-2">
          <div className="customer-journey">
            <span className="text-primarySmall text-xl">10</span>
          </div>

          <div>
            <h5>Pre-Sale Product Purchase & Introductions</h5>
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
      <div className="flex justify-between  items-center py-2">
          <div className="customer-journey">
            <span className="text-primarySmall text-xl">10</span>
          </div>
        <div>
          <h5>Post-Sale Stakeholder Kickoff & Onboarding</h5>
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
          View all templates
        </div>
      </div>
    </div>
    </div>
    
  )
}

