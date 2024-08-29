import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { CheckCircle,  CreditCard,  } from 'lucide-react'; // Import your icons


function History() {
    const data = [
        {
          service: 'Mtn Airtime VTU',
          serviceIcon: <CreditCard className="text-yellow-500 h-6 w-6" />, 
          amount: '₦100.00',
          totalAmount: '₦100.00',
          status: 'Initiated',
          statusColor: 'text-orange-500',
          paymentMethod: 'Transfer',
          transactionNo: '17045621860850336938179613',
          date: '6th January, 2024, 06:29PM',
          action: 'Open',
          phone: '09029384549'
        },
        {
          service: 'Airtel DATA VTU',
          serviceIcon: <CheckCircle className="text-green-500 h-6 w-6" />, 
          amount: '₦2000.00',
          totalAmount: '₦100.00',
          status: 'Successful',
          statusColor: 'text-green-500',
          paymentMethod: 'Wallet',
          transactionNo: '17045621860850336938179613',
          date: '6th January, 2024, 06:29PM',
          action: 'Open',
          phone: '09029385454'
        },
        // Add more dummy data as needed
      ];
      
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 bg-white min-h-screen">
          {/* Your dashboard content will go here */}
         
          <div className="overflow-x-auto w-full">
          <table className="min-w-full bg-white">
  <thead className="bg-white text-nowrap text-[12px] text-[#6882B6]">
    <tr>
      <th className="py-2 px-4 text-left">Service</th>
      <th className="py-2 px-4 text-left">Amount</th>
      <th className="py-2 px-4 text-left">Total Amount</th>
      <th className="py-2 px-4 text-left">Status</th>
      <th className="py-2 px-4 text-left">Payment Method</th>
      <th className="py-2 px-4 text-left">Transaction No</th>
      <th className="py-2 px-4 text-left">Actions</th>
    </tr>
  </thead>
  <tbody className="text-xs text-[#6882B6]">
    {data.map((item, index) => (
      <tr key={index} className="border-b border-gray-200">
        <td className="py-2 px-4 flex items-start gap-x-2">
          <span className="flex items-start">{item.serviceIcon}</span>
          <span className="flex flex-col">
            <span className="font-semibold whitespace-nowrap">{item.service}</span>
            <span className="text-[#6882B6]">{item.phone}</span>
          </span>
        </td>
        <td className="py-2 px-4 font-semibold align-top">{item.amount}</td>
        <td className="py-2 px-4 font-semibold align-top">{item.totalAmount}</td>
        <td className={`py-2 px-4 align-top ${item.statusColor}`}>{item.status}</td>
        <td className="py-2 px-4 align-top">{item.paymentMethod}</td>
        <td className="py-2 px-4 text-[11px] align-top">
          <div className="flex flex-col">
            <span>{item.transactionNo}</span>
            <span>{item.date}</span>
          </div>
        </td>
        <td className="py-2 px-4 align-top">
          <button className="bg-blue-500 text-white py-1 px-3 rounded">
            {item.action}
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>


    </div>
        </main>
      </div>
    </div>
  )
}

export default History