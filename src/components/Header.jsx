
import React from 'react'
 import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { IoSettingsSharp } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { FaUserAlt } from "react-icons/fa";
import { IoHome } from "react-icons/io5"
// import { HiMiniAcademicCap } from "react-icons/hi2";
// import { HiOutlineMenu } from "react-icons/hi";

// import { IoSettingsSharp } from "react-icons/io5";

const Header = () => {
  return (
    
     
 
  
    <div className="p-5">
    <Navbar fluid rounded className="bg-white shadow-lg ring-1 ring-red-200">
      <NavbarBrand href="">
        <img  />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-red-900">FRND</span>
      </NavbarBrand>
      <div className="flex items-center gap-2 md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <DropdownHeader>
            
            <span className=" truncate text-sm font-medium flex gap-3"> <FaUserAlt />User</span>
          </DropdownHeader>
          <DropdownItem className='gap-3'> <LuLayoutDashboard /> Dashboard</DropdownItem>
          <DropdownItem className='gap-3'> <IoSettingsSharp/> Settings</DropdownItem>
          
          <DropdownDivider />
          <DropdownItem className='gap-3'> <LiaSignOutAltSolid />Sign out</DropdownItem>
        </Dropdown>
        <NavbarToggle className="rounded-lg border border-red-200 text-red-900 hover:bg-yellow-100 focus:ring-2 focus:ring-red-300 md:hidden" />
      </div>
      <div className="w-full md:order-1 md:w-auto">
         <NavbarCollapse className="mt-4 w-full rounded-xl border border-red-100 bg-yellow-50 p-2 shadow-inner md:mt-0 md:flex md:items-center md:gap-1 md:border-0 md:bg-transparent md:p-0 md:shadow-none">
        <NavbarLink href="#" className=" flex gap-2 rounded-lg px-4 py-3 text-red-900 hover:bg-yellow-100 hover:text-red-700 md:py-2">
         <IoHome /> Home
                
                
              
        </NavbarLink>
        <NavbarLink href="#" className="rounded-lg px-4 py-3 text-red-900 hover:bg-yellow-100 hover:text-red-700 md:py-2">About</NavbarLink>
        <NavbarLink href="#" className="rounded-lg px-4 py-3 text-red-900 hover:bg-yellow-100 hover:text-red-700 md:py-2">Services</NavbarLink>
        <NavbarLink href="#" className="rounded-lg px-4 py-3 text-red-900 hover:bg-yellow-100 hover:text-red-700 md:py-2">Pricing</NavbarLink>
        <NavbarLink href="#" className="rounded-lg px-4 py-3 text-red-900 hover:bg-yellow-100 hover:text-red-700 md:py-2">Contact</NavbarLink>
      </NavbarCollapse>
      </div>
     
    </Navbar>
    </div>
  );
}
    
  


export default Header

