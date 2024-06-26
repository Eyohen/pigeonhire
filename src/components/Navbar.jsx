import React, { useState } from "react";

import logo from "../assets/logo.svg";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiMenuFill } from "react-icons/ri";
import { SlMagnifier } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState();
  const [data, setData] = useState([]);
  const navigate = useNavigate()

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="bg-white">
      <div className="flex justify-between items-center px-[4px] md:px-[120px] py-5">
        <div className="">
          <img src={logo} alt="" className="" />
        </div>

        <div className="flex gap-9 items-center px-6 font-nunito">
          <Link to={"/"}>
            
            <p className="text-[#201327] text-base font-medium hover:text-[#F08E1F] hidden md:block">
              Home
            </p>
          </Link>
          <Link to={"/aboutus"}><p className="text-[#201327] text-base font-medium hover:text-[#F08E1F] hidden md:block">
            About Us
          </p> </Link>
          <p onClick={user ? (() => navigate('/browseowner')) : (() => navigate('/login'))} className="text-[#201327] text-base font-medium hover:text-[#F08E1F] hidden md:block">
            Communities
          </p>
          <Link to={"/pricing"}>
            <p className="text-[#201327] text-base font-medium hover:text-[#F08E1F] hidden md:block">
              Pricing
            </p>
          </Link>
          <Link to={"/blog"}><p className="text-[#201327] text-base font-medium hover:text-[#F08E1F] hidden md:block">
            Blog
          </p> </Link>
          <Link to={"/faq"}><p className="text-[#201327] text-base font-medium hover:text-[#F08E1F] hidden md:block">
            FAQ
          </p></Link>
          <Link to={"/contactus"}>
            <p className="text-[#201327] text-base font-medium hover:text-[#F08E1F] hidden md:block">
              Contact Us
            </p>
          </Link>
        </div>

{user ? (<div>
          <p onClick={logout} className="text-white px-6 py-2 rounded-full text-lg font-nunito font-normal hidden md:block bg-[#F08E1F]">
     {user?.fname}
          </p>
        </div>) : (<div>
          <p onClick={()=> navigate('/login')} className="text-white px-6 py-2 rounded-full text-lg font-nunito font-normal hidden md:block bg-[#F08E1F]">
        Sign In
          </p>
        </div>)}

       

        <div className="md:hidden">
          <RiMenuFill size={25} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
