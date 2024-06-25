import React from 'react'
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Dropdown from '../../../components/dropdown/Dropdown';
// import { RiArrowDropDownLine } from "react-icons/ri";
import Profile from "../../../../assets/images/profile.png";


const Header = () => {
  return (
    <div className=" flex  flex-row  w-full justify-between bg-slate-200  p-3 ps-6" >
      <div className=' flex '>
        <ul className=' flex  gap-6'>
          <li className=' hover:font-semibold hover:text-blue-500'>
            <Link to={"/"} className='flex gap-2'>
              <HiOutlineUserGroup className='text-2xl' />
              <h5 className='font-bold '>HR</h5>
            </Link>
          </li>
          <li className=' hover:text-blue-500 font-bold' >
            <Link to={""} className="">
              <h5 className='font-medium '>Overview</h5>
            </Link>
          </li>
          <li className=' hover:text-blue-500'>
            <Link to={""} className="">
              <h5 className='font-medium '>People</h5>
            </Link>
          </li>
          <Dropdown />
      

          {/* <li className='  hover:text-blue-500 hover:underline'>
            <Link to={""} className="">
              <h5 className='font-medium '>Reports</h5>
            </Link>
          </li> */}
          <li className='hover:text-blue-500 '>
            <Link to={""} className="">
              <h5 className='font-medium '>Helps</h5>
            </Link>
          </li>

        </ul>
      </div>
      <div className=' flex gap-3 justify-center text-center'>
        <IoNotificationsOutline className='text-xl font-bold' />
        {/* <div className='flex gap-1'>
          <h5 className=' font-semibold'>sharthik</h5>
          <RiArrowDropDownLine className='text-xl' />

        </div> */}
      </div>
    </div>



  )
}

export default Header
