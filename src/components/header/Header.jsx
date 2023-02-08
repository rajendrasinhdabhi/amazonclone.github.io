import React from 'react'
import img from "../../images/logo.png"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useState } from 'react';
import { allitems } from '.';
import Headerbottom from './Headerbottom';
import { useEffect,useRef } from 'react';

const Header = () => {
const [showAll,setShowAll]=useState(false)
const menuref=useRef();
useEffect(() =>{
  let handler = (e)=>{
    if(!menuref.current.contains(e.target)){
      setShowAll(false);
    }
  }
  document.addEventListener("mousedown",handler)
})

  return (
    <div className='w-full sticky top-0 z-50 ' >
      <div className='w-full  bg-black text-white px-4 py-3 flex items-center'>
        
        <div className='px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100 ' >
            <img  className='w-24 mt-2' src={img} />
        </div>
        
        <div className="headerHover" >
          <LocationOnIcon />
          <p className='text-sm text-white font-light flex flex-col'> Deliver to <span className='text-sm font-semibold -mt-1 ml-2 text-white'> India</span></p>
        </div>
        
        <div className='h-10 rounded-md flex flex-grow relative ml-2 '>
          <span  onClick={()=>setShowAll (!showAll)} className=' flex justify-center items-center  bg-slate-500 rounded-tl-md rounded-bl-md cursor-pointer '>All </span><span onClick={()=>setShowAll (!showAll)}  className=' flex justify-center items-center  bg-slate-500 cursor-pointer'> <ArrowDropDownIcon/></span>
          {
            showAll &&(
              <div ref={menuref} className="">
                <ul className='z-50 absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-black text-black   ' >
                  {
                    allitems.map((item)=>(
                      <li className='ml-1 text-sm bg-white mb-1  hover:bg-blue-400 cursor-pointer duration-200' key={item._id}> {item.title}</li>
                    ))
                  }

                </ul>
              </div>
            )
          }

          <input className='h-full text-base text-black flex-grow outline-none border-none px-2  ' type="text"/>
          <span className='w-12 h-full flex items-center justify-center bg-yellow-200 hover:bg-yellow-500 duration-300 text-black cursor-pointer rounded-tr-md rounded-br-md '> <SearchIcon /> </span>
        
        </div >

        <div className='px-2 flex-col items-start ml-2 justify-center border  border-transparent  hover:border-white duration-200 cursor-pointer'>
        <p className='text-xs text-lightText font-light '> Hello, sign in </p>
        <p className='text-sm font-semibold -mt-1 text-white'> Accounts & Lists {""}
          <span>
            <ArrowDropDownIcon/>
          </span>
        </p>
        </div>

        <div className='p-1 ml-2 justify-center item-center border border-transparent hover:border-white duration-150 cursor-pointer ' >
          <p className='text-xs text-light font-semibold '> Returns</p>
          <p className='text-sm font-semibold -mt-1'> & Orders </p>
        </div>

        <div className='p-1 ml-2 flex justify-center items-center border border-transparent hover:border-white duration-150 relative'>
        <span className=' text-2xl'>< ShoppingCartIcon /></span>
        <p className='ml-1 text-sm font-semibold'> Cart</p>
        <span className=' absolute text-yellow-600 text-lg font-bold h-5 w-5 -ml-5 -mt-8'> 0</span>
        </div>
        
      </div>

      <div>
          <Headerbottom/>
      </div>

    </div>
  )
}

export default Header
