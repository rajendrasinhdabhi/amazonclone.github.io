import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';
import Sidenavbar from './sidenavbar';
import { useRef } from 'react';
import { useEffect } from 'react';

const Headerbottom = () => {
    const ref=useRef();
    useEffect(()=>{
        document.body.addEventListener("click",(e)=>{
            if(e.target.contains(ref.current)){
                setsidebar(false)
            }
        })
    })

const headerHover=[
    <p className='px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100 '></p>
]

const [sidebar,setsidebar]= useState(false)

  return (
    <div className='w-full px-4 h-[36px] bg-slate-700  text-white flex items-center  '>
      <ul className='flex item-center '>
        <li onClick={()=>setsidebar(!sidebar)} className='headerHover flex gap-1' > <MenuIcon/>All </li>
        <li className='headerHover'> Electronics</li>
        <li className='headerHover'> Mobiles</li>
        <li className='headerHover'> Today's Deals</li>
        <li className='headerHover'> Best Sellers</li>
        <li className='headerHover'> Amazon miniTV</li>
        <li className='headerHover'> Sell</li>
        <li className='headerHover'> Customer Service</li>
        <li className='headerHover'> Prime</li>
        <li className='headerHover'> Home & kitchens</li>
      </ul>

        {
            sidebar && (
                <div className='w-full h-screen text-black fixed top-0 left-0  bg-black bg-opacity-50 z-50 '>
                     <span onClick={()=>setsidebar(false)} className=' font-extrabold text-lg absolute top-0 left-[360px] text-white cursor-pointer '><CloseIcon /></span>
                    <div ref={ref} className='w-[350px] h-full relative bg-white border border-r-black overflow-y-scroll overflow-x-hidden'>
               
                        <div className='w-[350px] h-14 bg-slate-800 pl-10 py-3 text-white cursor-pointer'>
                            <AccountCircleIcon />
                            <span className=' text-xl font-extrabold ml-3'> Hello, sign in</span>
                        
                        </div>
                       

                        <div>
                            <Sidenavbar 
                            title="Digital Content And Devices"
                            one="Kindle"
                            two="Echo & Alexa"
                            three="Fire Tv"
                            four="Amazon Prime video"
                            
                            />
                            <Sidenavbar 
                            title="Shop By Category"
                            one="Mobiles,Computers"
                            two="TV,Appliances"
                            three="Men's Fashion"
                            four="Women's Fashion"
                            />
                            <Sidenavbar 
                            title="Programs & Features"
                            one="Gift Cards"
                            two="Mobile recharges"
                            three="Offers"
                            four="Banking"
                            
                            />
                            <Sidenavbar 
                            title="Help & Settings"
                            one="Your account"
                            two="Customer Service"
                            three="Sign in"
                            four="Help"
                            />
                        </div>

                       
                        

                        
                    </div>
                </div>
            )
        }

    </div>
  )
}

export default Headerbottom
