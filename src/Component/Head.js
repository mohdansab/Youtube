import React from 'react'
import { toggleMenu } from '../Utils/AppSlice'
import { useDispatch } from 'react-redux';

function Head() {
    const dispatch=useDispatch();

    const toggleMenuHandler=()=>{
        dispatch(toggleMenu())
    };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
        <div className='flex col-span-1'>
        <img
        onClick={()=> toggleMenuHandler()}
        className='h-8 cursor-pointer'
        alt='menu'
         src='https://as2.ftcdn.net/v2/jpg/01/09/84/11/1000_F_109841191_B1qcKCxRwwt4DWIBpXD7bc4IPcozRBzT.jpg'
         />
         <a href='/'>
         <img 
         className='h-8 mx-3 '
         alt='youtube-logo'
         src='https://www.shutterstock.com/image-vector/youtube-logo-social-media-icon-260nw-2310134969.jpg'
         />
         </a>
         </div>
        <div className='col-span-10 px-10'>
            <input className='w-1/2 border border-gray-400 rounded-l-full' type='text'/>
            <button className='border border-gray-400 p-1/2 rounded-r-full bg-gray-100'>Search</button>
        </div>
        <div className='col-span-1'>
            <img
            className='h-8'
            alt='user' 
            src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
            />
        </div>
    </div>
  )
}

export default Head
