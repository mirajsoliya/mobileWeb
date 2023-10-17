import React from 'react';
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { TbMinusVertical } from "react-icons/tb"

const Navbar = () => {
  return (
    <nav className="bg-red-400 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between ">
          <div className='flex flex-row items-center space-x-16'>
            <div className="text-white text-4xl font-semibold">LOGO</div>
            <div className=''>
              < TbMinusVertical className="text-white text-6xl " />
            </div>
          </div>
          <div>

            <a href="/" className='m-5 text-lg hover:font-bold  px-4 py-2 text-white  rounded-3xl'>Home</a>

            <a href="/product" className='m-5 text-lg hover:font-bold  px-4 py-2 text-white  rounded-3xl'>Product</a>

            <a href="/blogs" className='m-5 text-lg hover:font-bold  px-4 py-2 text-white  rounded-3xl'>Blogs</a>

            <a href="/contact" className='m-5 text-lg hover:font-bold  px-4 py-2 text-white  rounded-3xl'>Contact Us</a>

            <a href="/about" className='m-5 text-lg hover:font-bold  px-4 py-2 text-white  rounded-3xl'>About Us</a>

            <a href="/FAQ" className='m-5 text-lg hover:font-bold  px-4 py-2 text-white  rounded-3xl'>FAQ</a>


          </div>
          <div className='flex flex-row'>
            <AiOutlineHeart className='h-6 w-8 text-white m-2 hover:cursor-pointer' />
            <AiOutlineShoppingCart className='h-6 w-8 text-white  m-2 hover:cursor-pointer' />
          </div>
        </div>
      </div >
    </nav >
  );

}
export default Navbar;
