import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

function Tv() {
  return (
    <div className="flex">
    {/* Sidebar */}
    <Sidebar />
    
    {/* Main Content */}
    <div className="flex-1 flex flex-col">
      <Navbar />
      <main className="p-6 bg-gray-100 min-h-screen">
        {/* Your dashboard content will go here */}
        <div className="bg-white shadow rounded-lg p-6">
          <h1 className="text-2xl font-bold">Dashboard Content</h1>
        </div>
      </main>
    </div>
  </div>
  )
}

export default Tv