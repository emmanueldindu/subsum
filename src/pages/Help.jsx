import React from 'react'
import Sidebar from '../components/Sidebar'
import faq from '../assets/Frame 26086241.png'
import Navbar from '../components/Navbar'
import { ArrowRight } from 'lucide-react'
import what from '../assets/whats.png'
import report from '../assets/report.png'
import chat from '../assets/chat.png'
import phone from '../assets/call.png'
import review from '../assets/renew.png'

function Help() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 white w-full min-h-screen">
          {/* Your dashboard content will go here */}
          <div className="w-[70%]  gap-y-5 grid">
            <div className="w-full flex justify-between">
            <div className="h-[90px] w-[330px] border border-[#D7E1F4] flex rounded-[24px] p-[12px] gap-[14px]">
                <div className='w-[20%]'>
                    <img src={faq}  />
                </div>
                <div className="grid w-[70%]">
                    <h1 className='text-[14px] font-[400] leading-[28px] text-[#6882B6]'>Frequently Asked Questions</h1>
                    <div className="flex text-[12px] items-center gap-x-1 font-[700] leading-[28px] text-[#6882B6]">See FAQ <ArrowRight className='items-center' size={13} /></div>
                </div>

            </div>


            <div className="h-[90px] w-[330px] border border-[#D7E1F4] flex rounded-[24px] p-[12px] gap-[14px]">
            <div className='w-[20%]'>
                    <img src={chat}  />
                </div>
                <div className="grid w-[70%]">
                    <h1 className='text-[14px] font-[400] leading-[28px] text-[#6882B6]'>Live Chat</h1>
                    <div className="flex text-[12px] items-center gap-x-1 font-[700] leading-[28px] text-[#6882B6]">Chat Now <ArrowRight className='items-center' size={13} /></div>
                </div>

            </div>
            </div>


            <div className="w-full flex justify-between">
            <div className="h-[90px] w-[330px] border border-[#D7E1F4] flex rounded-[24px] p-[12px] gap-[14px]">
            <div className='w-[20%]'>
                    <img src={what}  />
                </div>
                <div className="grid w-[70%]">
                    <h1 className='text-[14px] font-[400] leading-[28px] text-[#6882B6]'>Whatsapp</h1>
                    <div className="flex text-[12px] items-center gap-x-1 font-[700] leading-[28px] text-[#6882B6]">Drop a Message <ArrowRight className='items-center' size={13} /></div>
                </div>

            </div>
            <div className="h-[90px] w-[330px] border border-[#D7E1F4] flex rounded-[24px] p-[12px] gap-[14px]">
            <div className='w-[20%]'>
                    <img src={phone}  />
                </div>
                <div className="grid w-[70%]">
                    <h1 className='text-[14px] font-[400] leading-[28px] text-[#6882B6]'>Phone Call</h1>
                    <div className="flex text-[12px] items-center gap-x-1 font-[700] leading-[28px] text-[#6882B6]">Call Us <ArrowRight className='items-center' size={13} /></div>
                </div>

            </div>
            </div>



            <div className="w-full flex justify-between">
            <div className="h-[90px] w-[330px] border border-[#D7E1F4] flex rounded-[24px] p-[12px] gap-[14px]">
            <div className='w-[20%]'>
                    <img src={report}  />
                </div>
                <div className="grid w-[70%]">
                    <h1 className='text-[14px] font-[400] leading-[28px] text-[#6882B6]'>Report Our Support</h1>
                    <div className="flex text-[12px] items-center gap-x-1 font-[700] leading-[28px] text-[#6882B6]">Not Satisfied? <ArrowRight className='items-center' size={13} /></div>
                </div>

            </div>
            <div className="h-[90px] w-[330px] border border-[#D7E1F4] flex rounded-[24px] p-[12px] gap-[14px]">
            <div className='w-[20%]'>
                    <img src={review}  />
                </div>
                <div className="grid w-[70%]">
                    <h1 className='text-[14px] font-[400] leading-[28px] text-[#6882B6]'>Review Our App</h1>
                    <div className="flex text-[12px] justify-center items-center gap-x-1 font-[700] leading-[28px] bg-[#EFF3FB] rounded-[100px] w-[110px] h-[18px] text-[#6882B6]">Coming soon</div>
                </div>

            </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Help