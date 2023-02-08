import React from 'react'
import img6 from "../../images/logo.png"
import img7 from "../../images/india.jpg"

const Footermiddle = () => {
  return (
    <div className='bg-slate-800'>
      <div className='flex justify-around  px-56 items-start pt-10 h-[300px] bg-slate-800 text-white border-b-[1px] border-l-zinc-300'>
        <div className=' ml-20 '>
          <h1 className=' text-lg font-semibold mb-2'> Get to Know Us</h1>
          <h4 className='bottom'> About Us</h4>
          <h4 className='bottom'> Careers</h4>
          <h4 className='bottom'> Press Releases</h4>
          <h4 className='bottom'> Amazon Science</h4>
        </div>
        <div>
          <h1 className=' text-lg font-semibold mb-2'>Connect with Us</h1>
          <h4 className='bottom'>Facebook</h4>
          <h4 className='bottom'>Twitter</h4>
          <h4 className='bottom'>Instagram</h4>
        </div>
        <div>
          	
          <h1 className=' text-lg font-semibold mb-2'>Make Money with Us</h1>
          <h4 className='bottom'>Sell on Amazon</h4>
          <h4 className='bottom'>Sell under Amazon Accelerator</h4>
          <h4 className='bottom'>Protect and Build Your Brand</h4>
          <h4 className='bottom'>Amazon Global Selling</h4>
          <h4 className='bottom'>Become an Affiliate</h4>
          <h4 className='bottom'>Fulfilment by Amazon</h4>
          <h4 className='bottom'>Advertise Your Products</h4>
          <h4 className='bottom'>Amazon Pay on Merchants</h4>
        </div>
        <div>
          <h1 className=' text-lg font-semibold mb-2'>Let Us Help You</h1>
          <h4 className='bottom'>COVID-19 and Amazon</h4>
          <h4 className='bottom'>Your Account</h4>
          <h4 className='bottom'>Returns Centre</h4>
          <h4 className='bottom'>100% Purchase Protection</h4>
          <h4 className='bottom'>Amazon App Download</h4>
          <h4 className='bottom'>Amazon Assistant Download</h4>
          <h4 className='bottom'>Help</h4>
        </div>
      </div>
      <div>
        <div className='flex justify-center mt-11 h-16'>
          <div className= ' mr-28 mt-4'>
            <img className='w-24' src={img6} />
          </div>
          <div className='flex justify-center items-center border-[1px] border-zinc-400 h-10 w-28 rounded-md'>
            <img  className='w-7 h-7 ml-2' src={img7} />
            <p className='text-white font-light ml-2'> English</p>
          </div>
        </div>
        <div>
          <div className='flex justify-center  text-white font-light  pb-3'>
          <h4  className='mr-2 bottom'>Australia </h4>
          <h4 className='mr-2 bottom '>Brazil</h4>
          <h4 className='mr-2 bottom'>Canada</h4>
          <h4 className='mr-2 bottom'>China</h4>
          <h4 className='mr-2 bottom'>France</h4>
          <h4 className='mr-2 bottom'>Germany</h4>
          <h4 className='mr-2 bottom'>Italy</h4>
          <h4 className='mr-2 bottom'>Japan</h4>
          <h4 className='mr-2 bottom'>Mexico</h4>
          <h4 className='mr-2 bottom'>Netherlands</h4>
          <h4 className='mr-2 bottom'>Poland</h4>
          <h4 className='mr-2 bottom'>Singapore</h4>
          <h4 className='mr-2 bottom'>Spain</h4>
          <h4 className='mr-2 bottom'>Turkey</h4>
          <h4 className='mr-2 bottom'>United Arab Emirates</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footermiddle
