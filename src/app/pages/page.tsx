import Banner from '@/components/Banner'
import Layout from '@/components/Layout'
import NavItem from '@/components/NavItem'
import Navigation from '@/components/Navigation'
import Card from '@/components/Card'
import Tags from '@/components/Tags'
import Title from '@/components/Title'

export default function Progress() {
  return (
    <div>
      <div className="w-full ">
        <Banner />
      </div>
      <div className="w-full h-12  mt-4 mx-auto flex justify-between align-center items-center">
        <Title />
        <Navigation>
          <NavItem href="/new" isActive>
            Settings
          </NavItem>
          <NavItem href="/new" isActive>
            Auto Scroll
          </NavItem>
          <NavItem href="/new" isActive>
            Pause
          </NavItem>
          <NavItem href="/new" isActive>
            Complete
          </NavItem>
        </Navigation>
      </div>
      <div className='w-full '>
        <Tags />
      </div>
      <div className='
       w-full h-4 flex gap-10'>
        <Layout/>
        <div className=' flex flex-col w-[320]'>
          <div>
            <Card />
          </div>
        </div>
      </div>
    </div>
  )
}
