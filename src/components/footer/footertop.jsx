import React from 'react'

const Footertop = () => {
  return (
    <div className='w-full bg-white py-6'>
      <div className='w-full border-t-[1px] border-b-[1px] py-8'>
        <div className='w-64 mx-auto text-center'>
            <p className='text-sm mb-2'> See Personalised recommendations</p>
            <button className='w-32 bg-yellow-300 rounded-md py-1 font-semibold cursor-pointer hover:bg-yellow-600 active:'>Sign In</button>
            <p className=' text-sm mt-1'> New Customer ? <a className='text-sm text-blue-600 font-semibold' href="#"> Sign Up </a></p>
        </div>

      </div>
    </div>
  )
}

export default Footertop
