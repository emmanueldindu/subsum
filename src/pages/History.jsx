import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { CheckCircle,  CreditCard, FileWarning,  } from 'lucide-react'; // Import your icons
import { NavLink } from 'react-router-dom';
import bell from "../assets/bell.png";
import profile from "../assets/profile.png";
import filter from "../assets/filter.png";

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

        {
          service: 'MTN DATA VTU',
          serviceIcon: <FileWarning className="text-red-500 h-6 w-6" />, 
          amount: '₦2000.00',
          totalAmount: '₦100.00',
          status: 'Failed',
          statusColor: 'text-red-500',
          paymentMethod: 'Wallet',
          transactionNo: '170456453860850336938179613',
          date: '6th January, 2024, 06:29PM',
          action: 'Open',
          phone: '09029385454'
        },
        {
          service: 'DSTV Subscription',
          serviceIcon: <CreditCard className="text-yellow-500 h-6 w-6" />, 
          amount: '₦4500.00',
          totalAmount: '₦4500.00',
          status: 'Successful',
          statusColor: 'text-green-500',
          paymentMethod: 'Card Payment',
          transactionNo: '170456453860850336938179613',
          date: '7th January, 2024, 01:45PM',
          action: 'Open',
          phone: '08123456789'
        },
        {
          service: 'Airtel Airtime VTU',
          serviceIcon: <CheckCircle className="text-green-500 h-6 w-6" />, 
          amount: '₦500.00',
          totalAmount: '₦500.00',
          status: 'Successful',
          statusColor: 'text-green-500',
          paymentMethod: 'Wallet',
          transactionNo: '17045621860850336938179613',
          date: '8th January, 2024, 09:15AM',
          action: 'Open',
          phone: '08012345678'
        },
        {
          service: 'Netflix Subscription',
          serviceIcon: <CreditCard className="text-yellow-500 h-6 w-6" />, 
          amount: '₦2800.00',
          totalAmount: '₦2800.00',
          status: 'Initiated',
          statusColor: 'text-orange-500',
          paymentMethod: 'Transfer',
          transactionNo: '17045621860850336938179613',
          date: '9th January, 2024, 11:20AM',
          action: 'Open',
          phone: '09087654321'
        },
        {
          service: 'Electricity Bill Payment',
          serviceIcon: <FileWarning className="text-red-500 h-6 w-6" />, 
          amount: '₦10000.00',
          totalAmount: '₦10000.00',
          status: 'Failed',
          statusColor: 'text-red-500',
          paymentMethod: 'Wallet',
          transactionNo: '17045621860850336938179613',
          date: '10th January, 2024, 05:30PM',
          action: 'Open',
          phone: '07012345678'
        },
        {
          service: 'GOTV Subscription',
          serviceIcon: <CreditCard className="text-yellow-500 h-6 w-6" />, 
          amount: '₦3200.00',
          totalAmount: '₦3200.00',
          status: 'Successful',
          statusColor: 'text-green-500',
          paymentMethod: 'Card Payment',
          transactionNo: '17045621860850336938179613',
          date: '11th January, 2024, 04:15PM',
          action: 'Open',
          phone: '09098765432'
        },
        {
          service: '9Mobile Airtime VTU',
          serviceIcon: <CheckCircle className="text-green-500 h-6 w-6" />, 
          amount: '₦200.00',
          totalAmount: '₦200.00',
          status: 'Successful',
          statusColor: 'text-green-500',
          paymentMethod: 'Wallet',
          transactionNo: '17045621860850336938179613',
          date: '12th January, 2024, 10:05AM',
          action: 'Open',
          phone: '08076543210'
        },
        {
          service: 'StarTimes Subscription',
          serviceIcon: <CreditCard className="text-yellow-500 h-6 w-6" />, 
          amount: '₦1500.00',
          totalAmount: '₦1500.00',
          status: 'Initiated',
          statusColor: 'text-orange-500',
          paymentMethod: 'Transfer',
          transactionNo: '17045621860850336938179613',
          date: '13th January, 2024, 02:45PM',
          action: 'Open',
          phone: '08123456789'
        },
        {
          service: 'Spectranet Subscription',
          serviceIcon: <FileWarning className="text-red-500 h-6 w-6" />, 
          amount: '₦7000.00',
          totalAmount: '₦7000.00',
          status: 'Failed',
          statusColor: 'text-red-500',
          paymentMethod: 'Wallet',
          transactionNo: '17045621860850336938179613',
          date: '14th January, 2024, 07:30PM',
          action: 'Open',
          phone: '09012345678'
        },
        {
          service: 'MTN Data Bundle',
          serviceIcon: <CheckCircle className="text-green-500 h-6 w-6" />, 
          amount: '₦3500.00',
          totalAmount: '₦3500.00',
          status: 'Successful',
          statusColor: 'text-green-500',
          paymentMethod: 'Wallet',
          transactionNo: '17045621860850336938179613',
          date: '15th January, 2024, 08:00AM',
          action: 'Open',
          phone: '08098765432'
        },
        {
          service: 'Smile Data Subscription',
          serviceIcon: <CreditCard className="text-yellow-500 h-6 w-6" />, 
          amount: '₦5000.00',
          totalAmount: '₦5000.00',
          status: 'Successful',
          statusColor: 'text-green-500',
          paymentMethod: 'Card Payment',
          transactionNo: '17045621860850336938179613',
          date: '16th January, 2024, 03:30PM',
          action: 'Open',
          phone: '09023456789'
        }
        
        // Add more dummy data as needed
      ];
      
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
      <div className="flex w-full mt-3  h-[40px]  px-12 justify-between">
          <h1 className="text-[#2B3B5A] text-[20px] font-[500]">
            Transaction History
          </h1>
          <div className="flex gap-x-2 i">
            <h1 className="text-[16px]  text-[#4169E1] font-[600] ">
              Upgrade To Merchant
            </h1>
            <img src={bell} className="h-[32px] w-[32px]" />
            <NavLink to="/profile">
              <img src={profile} className="h-[32px] w-[32px]" />
            </NavLink>
          </div>
        </div>
        <main className="p-6 bg-white w-full min-h-screen">
          <img className='px-6'  src={filter}/>
          {/* Your dashboard content will go here */}
         
          <div className="overflow-x-auto p-6 w-full">
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
          <button className="bg-[#EFF3FB] text-[#4169E1] py-1 px-3 rounded">
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