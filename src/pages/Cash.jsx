import React, {useState} from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import mtn from '../assets/mtn.png'
import airtel from '../assets/airtel.png'
import etis from '../assets/9mob.png'
import bell from "../assets/bell.png";
import profile from "../assets/profile.png";
import { NavLink } from "react-router-dom";


function Cash() {


    const [selectedNetwork, setSelectedNetwork] = useState('Etisalat');

    const handleChange = (event) => {
      setSelectedNetwork(event.target.value);
    };

    const networks = {
        Etisalat: {
          name: 'Etisalat',
          imageUrl: etis, // replace with the actual path
        },
        MTN: {
          name: 'MTN',
          imageUrl: mtn, // replace with the actual path
        },
        Airtel: {
          name: 'Airtel',
          imageUrl: airtel, // replace with the actual path
        },
       
      };
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
      <div className="flex w-full h-[32px] mt-3  px-12 justify-between">
          <h1 className="text-[#2B3B5A] text-[20px] font-[500]">
            Airtime to Cash
          </h1>
          <div className="flex gap-x-2 i">
            <h1 className="text-[16px]  text-[#4169E1] font-[600] ">
              Upgrade To Merchant
            </h1>
            <img src={bell} className="h-[32px] w-[32px]" />
            <NavLink  to="/profile">
              <img src={profile} className="h-[32px] w-[32px]" />
            </NavLink>
          </div>
        </div>
        <main className="p-6 w-full bg-white min-h-screen">
          {/* Your dashboard content will go here */}
          <div className="flex mt-4 mx-auto justify-between w-[500px]">
            <div className="grid gap-[8px]">
              <h1 className="mx-auto text-[14px] text-[#4169E1]">Fill info</h1>
              <div className="w-[160px] h-[7px] bg-[#4169E1] rounded-[10px]"></div>
            </div>

            <div className="grid gap-[8px]">
              <h1 className="mx-auto text-[14px] text-[#D7E1F4]">
                Make Payment
              </h1>
              <div className="w-[160px] h-[7px] bg-[#D7E1F4] rounded-[10px]"></div>
            </div>

            <div className="grid gap-[8px]">
              <h1 className="mx-auto text-[14px] text-[#D7E1F4]">
                View Receipt
              </h1>
              <div className="w-[160px] h-[7px] bg-[#D7E1F4] rounded-[10px]"></div>
            </div>
          </div>

          <div className="grid w-[500px] h-[450px] rounded-[12px] p-[24px] mt-12 bg-[#F7F9FD] mx-auto">
            <h1 className="font-[600] text-[20px] text-center text-[#6882B6]">
              Airtime to Cash{" "}
            </h1>
            <div className="flex w-full justify-between h-[73px] gap-[12px] ">
              <div className="grid items-center ">
                <h1 className="text-[#6882B6] font-[400]"> Select Network </h1>
                <div className="bg-white border h-[50px]  items-center border-[#c7dbef] w-[220px] p-[8px] rounded-[8px]">
                <div className="relative  flex items-center">
        <div className="w-10 h-10 mr-2">
          <img
            src={networks[selectedNetwork].imageUrl}
            alt={networks[selectedNetwork].name}
            className="w-full h-full object-contain"
          />
        </div>
        <select
          value={selectedNetwork}
          onChange={handleChange}
          className="block w-full  text-[#6882B6]  text-base  rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          {Object.keys(networks).map((key) => (
            <option className="text-[#6882B6]" key={key} value={key}>
    
          <h1 className="text-[#6882B6]">
          {networks[key].name}
            </h1> 
                
            </option>
          ))}
        </select>
        </div>
                </div>
              </div>

              <div className="grid">
                <h1 className="text-[#6882B6] font-[400]"> Phone Number </h1>
                <input
                  className="bg-white border outline-none border-[#c7dbef] w-[220px] p-[8px] rounded-[8px]"
                  type="text"
                  placeholder="08094562673"
                />
              </div>
            </div>

            <div className="grid h-[71px]">
              <h1 className="text-[#6882B6] font-[400]"> Amount </h1>
              <input
                className="bg-white border outline-none border-[#c7dbef] w-full p-[8px] rounded-[8px]"
                type="text"
                placeholder="₦5,000"
              />
            </div>

            <div className="grid h-[71px]">
              <h1 className="text-[#6882B6] font-[400]"> Airtime Share Pin </h1>
              <input
                className="bg-white border outline-none border-[#c7dbef] w-full p-[8px] rounded-[8px]"
                type="text"
                placeholder="35467576433"
              />
            </div>

            <div className="flex w-full h-[50px] rounded-[10px] border border-[#D7E1F4] bg-[#4169e1] p-[8px] ">
              <h1 className="text-[14px] text-white text-center mx-auto font-[600]    ">
                {" "}
                Proceed
              </h1>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Cash;
