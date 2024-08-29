import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  ChevronDown,
  ChevronRight,
  Headset,
  LayoutDashboard,
  LogOut,
  Phone,
  RefreshCcw,
  SquareMenu,
  Tv,
  Wifi,
  Zap,
} from "lucide-react";
import logo from "../assets/Frame 25.png";
import mtn from '../assets/mtn.png'
import airtel from '../assets/airtel.png'
import etis from '../assets/9mob.png'

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="bg-[#EFF3FB] text-gray-900  w-64 space-y-16 py-7 px-2">
      <img src={logo} alt="Logo" className="mb-6" />

      {/* Navigation */}
      <nav className="space-y-2 t-[100px]">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "block flex py-2.5 px-4 rounded-xl my-auto transition duration-200 bg-blue-600 text-white"
              : "block flex py-2.5 px-4 rounded-xl my-auto transition duration-200 hover:bg-gray-200"
          }
        >
          {({ isActive }) => (
            <>
              <LayoutDashboard
                color={isActive ? "white" : "#6882B6"}
                className="h-5 w-5 mr-2 my-auto items-center"
              />
              {/* Text */}
              <h1
                className={`text-[11px] my-auto font-[500]  ${
                  isActive ? "text-white" : "text-[#6882B6]"
                }`}
              >
                Dashboard
              </h1>
            </>
          )}
        </NavLink>

        {/* Dropdown */}
  
        <NavLink
          to="/airtime"
          className={({ isActive }) =>
            isActive
              ? "block flex py-2.5 px-4 rounded-xl my-auto transition duration-200 bg-blue-600 text-white"
              : "block flex py-2.5 px-4 rounded-xl my-auto transition duration-200 hover:bg-gray-200"
          }
        >
          {({ isActive }) => (
            < >
              <Phone
                color={isActive ? "white" : "#6882B6"}
                className="h-5 w-5 mr-2 my-auto items-center"
              />
              {/* Text */}
              <h1
                className={`text-[11px] text-nowrap my-auto font-[500]  ${
                  isActive ? "text-white" : "text-[#6882B6]"
                }`}
              >
                Buy Airtime
              </h1>
              <ChevronDown color={isActive ? "white" : "#6882B6"}
                className="h-5 w-5 mx-[50px]  my-auto items-center"
              />
            </>
          )}
        </NavLink>




        <NavLink
          to="/data"
          className={({ isActive }) =>
            isActive
              ? "block flex py-2.5 px-4 rounded-xl my-auto transition duration-200 bg-blue-600 text-white"
              : "block flex py-2.5 px-4 rounded-xl my-auto transition duration-200 hover:bg-gray-200"
          }
        >
          {({ isActive }) => (
            < >
              <Wifi
                color={isActive ? "white" : "#6882B6"}
                className="h-5 w-5 mr-2 my-auto items-center"
              />
              {/* Text */}
              <h1
                className={`text-[11px] text-nowrap my-auto font-[500]  ${
                  isActive ? "text-white" : "text-[#6882B6]"
                }`}
              >
                Buy data
              </h1>
              <ChevronDown color={isActive ? "white" : "#6882B6"}
                className="h-5 w-5 mx-[50px]  my-auto items-center"
              />
            </>
          )}
        </NavLink>


        <NavLink
          to="/tv"
          className={({ isActive }) =>
            isActive
              ? "block flex py-2.5 px-2 rounded-xl my-auto transition duration-200 bg-blue-600 text-white"
              : "block flex py-2.5 px-4 rounded-xl my-auto transition duration-200 hover:bg-gray-200"
          }
        >
          {({ isActive }) => (
            < >
              <Tv
                color={isActive ? "white" : "#6882B6"}
                className="h-5 w-5 mr-2 my-auto items-center"
              />
              {/* Text */}
              <h1
                className={`text-[11px] text-nowrap my-auto font-[500]  ${
                  isActive ? "text-white" : "text-[#6882B6]"
                }`}
              >
                Tv subscription
              </h1>
              <ChevronDown color={isActive ? "white" : "#6882B6"}
                className="h-5 w-5 ml-4  my-auto items-center"
              />
            </>
          )}
        </NavLink>


       


        <NavLink
          to="/electric"
          className={({ isActive }) =>
            isActive
              ? "block flex py-2.5 px-2 rounded-xl my-auto transition duration-200 bg-blue-600 text-white"
              : "block flex py-2.5 px-4 rounded-xl my-auto transition duration-200 hover:bg-gray-200"
          }
        >
          {({ isActive }) => (
            < >
              <Zap
                color={isActive ? "white" : "#6882B6"}
                className="h-5 w-5 mr-2 my-auto items-center"
              />
              {/* Text */}
              <h1
                className={`text-[11px] text-nowrap my-auto font-[500]  ${
                  isActive ? "text-white" : "text-[#6882B6]"
                }`}
              >
                Pay Electric Bill
              </h1>
              <ChevronDown color={isActive ? "white" : "#6882B6"}
                className="h-5 w-5 ml-4  my-auto items-center"
              />
            </>
          )}
        </NavLink>

        <div className="space-y-4">
      <NavLink
        to="/airtime-to-cash"
        className={({ isActive }) =>
          isActive
          ? "block flex py-2.5 px-2 rounded-xl my-auto transition duration-200 bg-blue-600 text-white"
              : "block flex py-2.5 px-4 rounded-xl my-auto transition duration-200 hover:bg-gray-200"
        }
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
           {({ isActive }) => (
            <>
              <RefreshCcw
                color={isActive ? "white" : "#6882B6"}
                
                className="h-5 w-5 mr-2 my-auto items-center"
              />
              {/* Text */}
              <h1
                className={`text-[11px] text-nowrap my-auto font-[500]   ${
                  isActive ? "text-white" : "text-[#6882B6]"
                }`}
              >
                Airtime to cash
              </h1>
          
            </>
          )}
      </NavLink>

      {isDropdownOpen && (
        <div className="ml-6 space-y-2">
          <div className="flex items-center space-x-3">
            <NavLink
              to="#"
              className={({ isActive }) =>
                isActive
                  ? "block rounded bg-white shadow-lg w-[40px] h-[40px] rounded-[10px]"
                  : "block w-[40px] h-[40px] hover:bg-gray-200 rounded"
              }
            >
              <img src={mtn} alt="Airtel" className="w-full rounded-[10px] h-full object-cover" />
            </NavLink>
            <NavLink
              to="#"
              className={({ isActive }) =>
                isActive
                  ? "block rounded bg-white shadow-lg w-[40px] h-[40px] rounded-[10px]"
                  : "block w-[40px] h-[40px] hover:bg-gray-200 rounded"
              }
            >
              <img src={airtel} alt="MTN" className="w-full h-full rounded-[10px] object-cover" />
            </NavLink>
            <NavLink
              to="#"
              className={({ isActive }) =>
                isActive
                  ? "block rounded bg-white shadow-lg w-[40px] h-[40px] rounded-[10px]"
                  : "block w-[40px] h-[40px] hover:bg-gray-200 rounded"
              }
            >
              <img src={etis} alt="Glo" className="w-full h-full rounded-[10px] object-cover" />
            </NavLink>
            <NavLink
            to="#"
            className={({ isActive }) =>
              isActive
                ? "flex items-center space-x-2 text-blue-600 hover:underline"
                : "flex items-center space-x-2 text-gray-600 hover:text-blue-600 hover:underline"
            }
          >
            <span className="text-[12px] flex items-center">More <ChevronRight size={12}  /></span>
          </NavLink>
          </div>
       
        </div>
      )}
    </div>


        <NavLink
          to="/transaction"
          className={({ isActive }) =>
            isActive
              ? "block flex py-2.5 px-2 rounded-xl my-auto transition duration-200 bg-blue-600 text-white"
              : "block flex py-2.5 px-4 rounded-xl my-auto transition duration-200 hover:bg-gray-200"
          }
        >
          {({ isActive }) => (
            < >
              <SquareMenu
                color={isActive ? "white" : "#6882B6"}
                className="h-5 w-5 mr-2 my-auto items-center"
              />
              {/* Text */}
              <h1
                className={`text-[11px] text-nowrap my-auto font-[500]  ${
                  isActive ? "text-white" : "text-[#6882B6]"
                }`}
              >
                Transaction History
              </h1>
              {/* <ChevronDown color={isActive ? "white" : "#6882B6"}
                className="h-5 w-5 ml-4  my-auto items-center"
              /> */}
            </>
          )}
        </NavLink>


        <NavLink
          to="/help"
          className={({ isActive }) =>
            isActive
              ? "block flex py-2.5 px-2 rounded-xl my-auto transition duration-200 bg-blue-600 text-white"
              : "block flex py-2.5 px-4 rounded-xl my-auto transition duration-200 hover:bg-gray-200"
          }
        >
          {({ isActive }) => (
            < >
              <Headset
                color={isActive ? "white" : "#6882B6"}
                className="h-5 w-5 mr-2 my-auto items-center"
              />
              {/* Text */}
              <h1
                className={`text-[11px] text-nowrap my-auto font-[500]  ${
                  isActive ? "text-white" : "text-[#6882B6]"
                }`}
              >
                Help & Support
              </h1>
              {/* <ChevronDown color={isActive ? "white" : "#6882B6"}
                className="h-5 w-5 ml-4  my-auto items-center"
              /> */}
            </>
          )}
        </NavLink>
        
      </nav>

      <div className="mt-40">
        <NavLink
          to="/logout"
          className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-800"
        >
          <LogOut className="h-5 w-5 mr-2" />
          Log Out
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
