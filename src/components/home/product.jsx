import React, { useEffect, useState } from 'react'
import axios from 'axios'
import StarIcon from '@mui/icons-material/Star';
import ApiIcon from '@mui/icons-material/Api';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DetailsIcon from '@mui/icons-material/Details';


const Product = () => {
    const [state, setState] = useState([])
    const [show, setShow] = useState()

    useEffect(() =>async()=> {
        const response = await axios.get('https://fakestoreapiserver.vercel.app/amazonproducts')
        setState(response.data)
    },[])

  return (
    <div className=' max-w-screen-2xl mx-auto grid grid-cols-4 gap-10 px-4 bg-gray-200 '>
        {
            state.map((ele)=>{
                return(
                    <div key={ele.id} className='bg-white h-auto border-[1px] border-gray-200 px-8 z-30 hover:border-transparent shadow-none hover:shadow-2xl duration-300 relative group-[]: flex flex-col gap-4 mt-8'>
                        <div className='ml-5 w-full  flex item-center'>
                            <img className='w-52 h-64 object-contain ' src={ele.image} />
                            <span className='text-sm capitalize italic top-2 right-4 absolute text-gray-600'>{ele.category}</span>
                           {/*<ul className='w-full -ml-12 h-36 bg-gray-100 top-28  absolute flex flex-col  gap-2 border-1 border-r'>
                                <li className='producti'> Compare <span> <ApiIcon/> </span></li>
                                <li className='producti'> Add to Cart <span> <ShoppingCartIcon/> </span></li>
                                <li className='producti'> View Details <span> <FavoriteIcon/> </span></li>
                                <li className='producti'> Add to wish List <span> <DetailsIcon/> </span></li>
                            </ul>*/}

            }
                        </div>
                        <div className='ml-5 flex item-center mb-3 '>
                            <h2 className='text-md font-semibold '>{ele.title.substring(0,15)}</h2>
                            <p className=' ml-16 flex text-gray-600 font-semibold'> <span>$</span>{ele.price}</p>
                        </div>
                        <div className=''>
                            <p className='text-sm -mt-6 text-ellipsis ml-4 '>{ele.description.substring(0,70)}</p>
                            <div className='mt-1 ml-5 text-yellow-500 mb-2'>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                            </div> 
                            <div>
                                <button className='w-full font-bold font-md  bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-500 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3 mb-2'> Add to Cart</button>
                            </div>
                        </div>
                      
                    </div>
                )
            })
        }
    </div>
  )
}

export default Product
