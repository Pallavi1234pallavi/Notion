import React from 'react'
import logo from "../assets/Logo.svg"
import {Link} from "react-router-dom"
import {toast} from "react-hot-toast"


const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex justify-between items-center text-richblack-100   w-11/12 max-w-[1160px]  py-4 mx-auto '  >

        <Link to="/"> 
            <img src={logo} alt="Logo" width={160} height={32} loading="lazy"/>
        </Link>
       

        <nav>
            <ul className='flex gap-x-6 text-richblack-100 '>
                <li >
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>

        {/* Login - SignUp - LogOut - Dashboard */}
        <div className='flex ml-5 mr-3 gap-3 '>
            { !isLoggedIn &&
                <Link to="/login">
                    <button className='text-richblack-100 bg-richblack-800  py-[8px]
                    px-[12px]
                    rounded-[8px]
                    border
                    border-white'>
                        Login
                    </button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to="/signup">
                    <button className='text-richblack-100 bg-richblack-800  py-[8px]
                    px-[12px]
                    rounded-[8px]
                    border
                    border-white' >
                        Sign Up
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/">
                    <button onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                    }} className='text-richblack-100 bg-richblack-800  py-[8px]
                    px-[12px]
                    rounded-[8px]
                    border
                    border-white'>
                        Log Out
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/dashboard">
                    <button className='text-richblack-100e bg-richblack-800  py-[8px]
                    px-[12px]
                    rounded-[8px]
                    border
                    border-white'>
                        Dashboard
                    </button>
                </Link>
            }
        </div>
      
    </div>
  )
}

export default Navbar
