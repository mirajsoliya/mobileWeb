import './App.css'
import Navbar from './components/Navbar';
import Slider from './components/Slider'
import { CiMail } from "react-icons/ci";
import Categories from './components/categories';
import Product from './components/Product';
import Blogs from './components/Blogs';
import Services from './components/Services';
import Sections from './components/sections'
import Footer from './components/Footer';
import Team from './components/Team';

function App() {
  return (
    <>
      <Upline />
      <Navbar />
      <Slider />
      <Categories />
      <Product/>
      <Team />
      <Blogs/>
      <Services/>
      <Sections/>
      <Footer/>
      
    </>
  )
}


const Upline = () => {
  return (
    <div className='bg-red-200 flex flex-row h-14 items-center'>
      <div className='flex-1 ml-10'>
        <div className=' flex flex-row'>
          <CiMail className='h-6 w-8 text-red-600 font-bold' />
          <h2 className='text-red-600 font-bold'>demo123@gmail.com</h2>
        </div>
      </div>
      <div className='flex-1 text-right'>
        <div className='items-center'>
          <a href='' className='m-5 hover:bg-red-500 hover:text-red-50 px-4 py-2  text-red-600 font-bold transistion-all duration-300 rounded-3xl'>Register</a>
          <a href='' className='m-5 hover:bg-red-500 hover:text-red-50 px-4 py-2 text-red-600 font-bold transistion-all duration-300 rounded-3xl'>Login</a>
        </div>
      </div>
    </div>
  )
}

export default App
