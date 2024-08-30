import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Copy, Edit, Wallet } from "lucide-react";
import share from "../assets/share.png";
import edit from "../assets/edit-03.png";
import frame from "../assets/Frame 26085683.png";
import bell from "../assets/bell.png";
import profile from "../assets/profile.png";
import { NavLink } from "react-router-dom";

function Dashboard() {
  return (
    <div className="flex bg-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* <Navbar /> */}
        <div className="flex w-full h-[32px] py-6 px-12 justify-between">
          <h1 className="text-[#2B3B5A] text-[20px] font-[500]">
            Welcome, Lawal Wahab
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
        <main className="p-6  min-h-screen">
          {/* Your dashboard content will go here */}
          <div className="bg-white h-[450px]  flex justify-between w-full p-6">
            <div className="w-1/2 grid gap-y-6">
              <div className="w-[460px] h-[112px] flex items-center p-4 justify-between rounded-[24px] border border-[#D7E1F4]">
                <div className="w-1/2 grid p-2">
                  <h1 className="text-[#3C517c] text-[16px] font-[400]">
                    wallet balance
                  </h1>
                  <h1 className="text-[#3C517C] text-[36px] font-[600]">
                    ₦3000
                  </h1>
                </div>

                <div className="w-1/2 ">
                  <div className="bg-[#4169E1] text-center p-3 h-[50px] w-[194px] rounded-[10px]">
                    <h1 className="text-[16px] text-white">Fund Wallet</h1>
                  </div>
                </div>
              </div>

              <div className="w-[460px] h-[112px] flex items-center p-4 justify-between rounded-[24px] border border-[#D7E1F4]">
                <div className="w-1/2 grid text-nowrap p-2">
                  <h1 className="text-[#3C517c] text-[16px] font-[400]">
                    Referral
                  </h1>
                  <h1 className="text-[#3C517c] text-[16px] font-[400]">
                    Referral code:{" "}
                    <span className="font-[600]">18/52ha089</span>
                  </h1>
                  <div className="flex justify-between mt-3">
                    <div className="flex gap-1 items-center">
                      <Copy className="" size={15} color="#4169E1" />
                      <h1 className="text-[#4169e1] text-[14px]">copy</h1>
                    </div>

                    <div className="flex gap-1 items-center">
                      <img src={edit} className="w-[19px] h-[19px]" />
                      <h1 className="text-[#4169e1] text-[14px]">Edit</h1>
                    </div>

                    <div className="flex gap-1 items-center">
                      <img src={share} className="w-[19px] h-[19px]" />
                      <h1 className="text-[#4169e1] text-[14px]">Share</h1>
                    </div>
                  </div>
                </div>

                <div className="w-1/2 "></div>
              </div>

              <div className="w-[460px] h-[112px] flex items-center p-4 justify-between rounded-[24px] border border-[#D7E1F4]">
                <div className="w-1/2 grid p-2">
                  <h1 className="text-[#3C517c] text-[16px] font-[400]">
                    Total referrals made
                  </h1>
                  <h1 className="text-[#3C517C] text-[24px] font-[600]">0</h1>
                  <div className="flex gap-1 items-center">
                    <Wallet className="" size={15} color="#4169E1" />
                    <h1 className="text-[#4169e1] text-[14px]">cashout</h1>
                  </div>
                </div>

                <div className="w-1/2 mb-5 ">
                  <h1 className="text-[#3C517c]  text-[16px] font-[400]">
                    Current wallet bonus
                  </h1>

                  <h1 className="text-[#3C517C]  text-[24px] font-[600]">
                    ₦0.00
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <img src={frame} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
