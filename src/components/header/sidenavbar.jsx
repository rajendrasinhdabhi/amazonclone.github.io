import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Sidenavbar = ({title,one,two,three,four,five}) => {
  return (
    
    <div className=' border-b-slate-400  '>
        <h3 className='text-black font-bold text-xl ml-6 mb-3 mt-3'>{title}</h3>
        <ul className='ml-1 '>
            <li className='flex items-center justify-between hover:bg-zinc-300 px-6 py-2 cursor-pointer' >  {one}<span> <KeyboardArrowRightIcon/></span></li>
            <li className='flex items-center justify-between hover:bg-zinc-300 px-6 py-2 cursor-pointer' >  {two}<span> <KeyboardArrowRightIcon/></span></li>
            <li className='flex items-center justify-between hover:bg-zinc-300 px-6 py-2 cursor-pointer' >  {three}<span> <KeyboardArrowRightIcon/></span></li>
            <li className='flex items-center justify-between hover:bg-zinc-300 px-6 py-2 cursor-pointer' > {four}<span> <KeyboardArrowRightIcon/></span></li>
        
       
        </ul>
     </div>
     


     

   
    
  )
}

export default Sidenavbar
