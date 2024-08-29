import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import circle from "../assets/circle.png";
import { Camera, Copy } from "lucide-react";

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
    <h1 className="text-[#4C689E] font-[400] text-[16px]">Name</h1>
    <h1 className="text-[#4c689e] font-[600] text-[16px]">Lawal Wahab Babatunde </h1>
</div>

<div className="flex w-[368px] items-center   justify-between">
    <h1 className="text-[#4C689E] font-[400] text-[16px]">Email</h1>
    <h1 className="text-[#4c689e] font-[600] text-[16px]">wabdotmail@gmail.com </h1>

</div>

<div className="flex w-[368px] items-center   justify-between">
    <h1 className="text-[#4C689E] font-[400] text-[16px]">Phone Number</h1>
    <h1 className="text-[#4c689e] font-[600] text-[16px]">0906 856 2949 </h1>
</div>

<div className="flex w-[368px] items-center   justify-between">
    <h1 className="text-[#4C689E] font-[400] text-[16px]">Account Status</h1>
    <h1 className="text-green-400 font-[600] text-[16px]">Active </h1>
</div>

<div className="flex w-[368px] items-center  h-[19px]  justify-between">
    <h1 className="text-[#4C689E] font-[400] text-[16px]">Referal Link</h1>
    <div className="grid h-[18px]">
    <h1 className="text-[#4C689E]  font-[600] text-[16px]">www.subsum.com/tre/wd...</h1>
    <div className="flex justify-end text-[#4169E1]">
        <Copy />
        <h1>copy</h1>
    </div>
    </div>

</div>

<div className="flex w-[368px] items-center mt-2   justify-between">
    <h1 className="text-[#4169E1] font-[600] text-[16px]">Edit Details</h1>
</div>

              </div>
            </div>
            <div className="bg-green-200 h-[448px] w-[432px]"></div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Profile;
