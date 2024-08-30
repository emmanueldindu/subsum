import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import circle from "../assets/circle.png";
import { Camera, Copy } from "lucide-react";
import { NavLink } from "react-router-dom";
import bell from "../assets/bell.png";
import profile from "../assets/profile.png";

function Profile() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
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
        <main className="p-6 bg-white min-h-screen">
          {/* Your dashboard content will go here */}
          <div className="bg-white w-full flex gap-6 rounded-lg p-6">
            <div className="grid gap-[16px] h-[471px] w-[416px]">
              <div className="w-[416px] h-[184px] mx-auto grid rounded-[24px] items-center justify-center border  border-[#D7E1F4]">
                <img
                  className="h-[100px] w-[100px]  rounded-full "
                  src={circle}
                />
                <div className="flex gap-x-2 font-[600] text-[#4169E1]">
                  <Camera /> Upload Image
                </div>
              </div>
              <div className="w-[416px] h-[271px]  mx-auto grid rounded-[24px] p-[24px] gap-[16px] items-center justify-center border  border-[#D7E1F4]">
                <div className="flex w-[368px] items-center   justify-between">
                  <h1 className="text-[#4C689E] font-[400] text-[16px]">
                    Name
                  </h1>
                  <h1 className="text-[#4c689e] font-[600] text-[16px]">
                    Lawal Wahab Babatunde{" "}
                  </h1>
                </div>

                <div className="flex w-[368px] items-center   justify-between">
                  <h1 className="text-[#4C689E] font-[400] text-[16px]">
                    Email
                  </h1>
                  <h1 className="text-[#4c689e] font-[600] text-[16px]">
                    wabdotmail@gmail.com{" "}
                  </h1>
                </div>

                <div className="flex w-[368px] items-center   justify-between">
                  <h1 className="text-[#4C689E] font-[400] text-[16px]">
                    Phone Number
                  </h1>
                  <h1 className="text-[#4c689e] font-[600] text-[16px]">
                    0906 856 2949{" "}
                  </h1>
                </div>

                <div className="flex w-[368px] items-center   justify-between">
                  <h1 className="text-[#4C689E] font-[400] text-[16px]">
                    Account Status
                  </h1>
                  <h1 className="text-green-400 font-[600] text-[16px]">
                    Active{" "}
                  </h1>
                </div>

                <div className="flex w-[368px] items-center  h-[19px]  justify-between">
                  <h1 className="text-[#4C689E] font-[400] text-[16px]">
                    Referal Link
                  </h1>
                  <div className="grid h-[18px]">
                    <h1 className="text-[#4C689E]  font-[600] text-[16px]">
                      www.subsum.com/tre/wd...
                    </h1>
                    <div className="flex justify-end text-[#4169E1]">
                      <Copy size={14} />
                      <h1 className="text-[12px]">copy</h1>
                    </div>
                  </div>
                </div>

                <div className="flex w-[368px] items-center mt-2   justify-between">
                  <h1 className="text-[#4169E1] font-[600] text-[16px]">
                    Edit Details
                  </h1>
                </div>
              </div>
            </div>
            <div className=" h-[448px] w-[432px]">
              <div className="h-[56px] w-full justify-between flex border border-[#D7E1F4] p-[8px] rounded-[100px]">
                <div className="h-[40px] w-[204px] rounded-[100px] bg-[#EFF5FB]">
                  <h1 className="text-center justify-center my-auto p-2 text-[#3C517C] text-[14px] font-[600]">
                    Change Password
                  </h1>
                </div>
                <div className="h-[40px] w-[204px] rounded-[100px] border border-[#EFF5FB]">
                  <h1 className="text-center justify-center my-auto p-2 text-[#A9BADA] text-[14px] font-[600]">
                    Change Password
                  </h1>
                </div>
              </div>

              <div className="w-[431px] mt-4 h-[381px] p-[24px] rounded-[24px] grid border border-[#D7E1F4]">
                <div className="grid h-[73px] gap-[9px]">
                  <label className="text-[#4C689E] font-[400] text-[16px]">
                    Current Password
                  </label>
                  <input
                    className="w-[384px] h-[50px] p-[8px] border border-[#D7E1F4] rounded-[4px]"
                    placeholder="Enter Current Password"
                    type="text"
                  />
                </div>

                <div className="grid h-[73px] gap-[9px]">
                  <label className="text-[#4C689E] font-[400] text-[16px]">
                    New Password
                  </label>
                  <input
                    className="w-[384px] h-[50px] p-[8px] border border-[#D7E1F4] text-[#4c689e] rounded-[4px]"
                    placeholder="Enter New Password"
                    color="#4c689e"
                    type="text"
                  />
                </div>

                <div className="grid h-[73px] gap-[9px]">
                  <label className="text-[#4C689E] font-[400] text-[16px]">
                    Confirm New Password
                  </label>
                  <input
                    className="w-[384px] h-[50px] p-[8px] border border-[#D7E1F4] rounded-[4px]"
                    placeholder="Enter Current Password"
                    type="text"
                  />
                </div>

                <div className="h-[50px] w-[384px] opacity-[50%] rounded-[10px] bg-[#4169E1]  mt-3">
                  <h1 className="text-center p-2 text-white font-[600]">
                    Submit
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Profile;
