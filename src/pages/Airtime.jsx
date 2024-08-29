import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

function Airtime() {
  return (
    <div className="flex">
    {/* Sidebar */}
    <Sidebar />
    
    {/* Main Content */}
    <div className="flex-1 flex flex-col">
      <Navbar />
      <main className="p-6 w-full bg-white min-h-screen">
        {/* Your dashboard content will go here */}
        <div className="flex">
          
        </div>
      
      </main>
    </div>
  </div>
  )
}

export default Airtime