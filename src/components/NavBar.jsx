import React,{useState} from 'react'

const NavBar = () => {
 const[open,setOpen]=useState(false)
 const setToggele=()=>{
    setOpen(!open)
 }
  return (
    <div className='flex justify-between items-center  bg-gray-300 p-[1rem] opacity-80'>
        <h1 className='text-[1.5rem]'>nex<span className ="text-green-500 text-[2rem]" >LOOP</span> </h1>
        <div onClick={setToggele} className='md:hidden text-3xl absolute right-8 cursor-pointer '>
        <ion-icon name={open?"close":"menu"}></ion-icon>
        </div>
        <ul className={`md:flex hidden  gap-2 `}>
          <li className=' bg-white p-3 rounded-[30px] text-center shadow-md shadow-black-300'  >Home</li>
          <li className=' bg-white p-3 rounded-[30px] text-center shadow-md shadow-black-300'  >About</li>
          <li className=' bg-white p-3 rounded-[30px] text-center shadow-md shadow-black-300'  >Community</li>
        </ul>
        {open && <ul className={`md:flex flex mr-[3rem] gap-2 `}>
          <li className=' bg-white px-2 rounded-[30px] text-center shadow-md shadow-black-300'  >Home</li>
          <li className=' bg-white px-2 rounded-[30px] text-center shadow-md shadow-black-300'  >About</li>
          <li className=' bg-white px-2 rounded-[30px] text-center shadow-md shadow-black-300'  >Community</li> 
        </ul>}
    </div>
  )
}

export default NavBar