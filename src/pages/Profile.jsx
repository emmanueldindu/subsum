import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'


function Profile() {
  return (
    <div className="flex">
    {/* Sidebar */}
    <Sidebar />
    
    {/* Main Content */}
    <div className="flex-1 flex flex-col">
      <Navbar />
      <main className="p-6 bg-white min-h-screen">
        {/* Your dashboard content will go here */}
        <div className="bg-white w-full flex gap-6 rounded-lg p-6">
            <div className='bg-red-300 gap-[16px] h-[471px] w-[416px]'>


                </div>
                <div className="bg-green-200 h-[448px] w-[432px]">

                </div>

          
        </div>
      </main>
    </div>
  </div>
  )
}

export default Profile