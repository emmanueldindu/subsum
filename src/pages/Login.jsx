import React, {useState} from 'react'
import Left from '../assets/left.png'
import { ChevronLeft, Eye, EyeOff } from 'lucide-react'
import google from '../assets/gogl.png'
import { useNavigate } from 'react-router-dom'

function Login() {

  const [rememberMe, setRememberMe] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setRememberMe(!rememberMe);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here, then navigate to dashboard
    navigate('/dashboard');
  };


  return (
    <div className='w-full h-[100vh] flex justify-between'>
      <div className="w-[30%]  bg-blue-200 h-[100vh] grid">
        <img  
        src={Left} className='w-full h-[100vh]'
        />
      </div>
      <div className='grid w-[70%] p-[24px]'>
        <div className="flex h-[50px]  items-center justify-between">
          <div className='flex text-[#4169E1] font-[600]'><ChevronLeft /> Home </div>
          <div className='bg-[#4169E1] rounded-[10px] text-white text-center p-3 w-[162px] h-[50px]'>Sign Up</div>
        </div>

        <div className='w-[500px] h-[500px] mx-auto'>
      <h1 className='mx-auto text-center text-[24px] text-[#4C689E] font-[600]'>Login</h1>
      
      <div className="h-[55px] w-[422px] bg-white shadow-md border rounded-[12px] p-4 border-[#D7E1F4] mx-auto mt-5 flex items-center justify-center gap-x-2 cursor-pointer">
        <img src={google} alt="Google" className="w-5 h-5" />
        <h1 className="text-[#4C689E] font-semibold">Login with Google</h1>
      </div>

      <div className="flex items-center justify-center mt-5">
        <hr className="w-1/4 border-t border-[#D7E1F4]" />
        <span className="mx-2 text-[#4C689E]">Or continue with</span>
        <hr className="w-1/4 border-t border-[#D7E1F4]" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 mt-5">
        <div className="w-[422px] mx-auto">
          <label className="text-[#4C689E] font-semibold">Email Address</label>
          <input 
            type="email"
            placeholder="wabdotmail@gmail.com"
            className="w-full h-[55px] px-3 py-2 border rounded-[12px] border-[#D7E1F4] mt-2 text-[#4C689E] focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="w-[422px] mx-auto relative">
          <label className="text-[#4C689E] font-semibold">Password</label>
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Gabon4351"
            className="w-full h-[55px]  px-3 py-2 border rounded-[12px] border-[#D7E1F4] mt-2 text-[#4C689E] focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            type="button"
            className="absolute right-3 top-11 text-[#4169E1]"
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? <EyeOff /> : <Eye />} {/* Toggle between eye icon and crossed eye */}
          </button>
        </div>

        <div className="w-[422px] mx-auto flex items-center justify-between mt-4">
          <div className="flex items-center">
          <div
              onClick={handleToggle}
              className={`relative inline-block w-[44px] h-[24px] rounded-full cursor-pointer transition-colors duration-200 ${
                rememberMe ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <div
                className={`absolute left-[4px] top-[2px] w-[20px] h-[20px] bg-white rounded-full transition-transform duration-200 ${
                  rememberMe ? 'transform translate-x-[20px]' : ''
                }`}
              />
            </div>
            <label htmlFor="rememberMe" className="ml-2 text-[#4C689E]">
              Remember me
            </label>
          </div>
          <a href="#" className="text-[#FF6B6B] text-sm font-semibold">
            Recover Password
          </a>
        </div>

        <div className="w-[422px] mx-auto mt-5">
          <button className="w-full h-[55px] bg-[#4169E1] text-white rounded-[12px] font-semibold">
            Log in
          </button>
        </div>
      </form>
    </div>

      </div>
    </div>
  )
}

export default Login