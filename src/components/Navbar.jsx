import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
      <header className="bg-white shadow py-4 px-4 flex justify-between items-center">
      <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Other nav items */}
        <div className="flex items-center space-x-4">
          {/* Other links */}
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold"
                : "text-gray-300 hover:text-white transition duration-200"
            }
          >
            Profile
          </NavLink>
        </div>
      </div>
    </nav>
      </header>
    );
  };
  
  export default Navbar;