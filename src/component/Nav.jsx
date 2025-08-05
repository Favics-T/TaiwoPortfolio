import React from 'react'


const Nav = () => {
    const list =[
        {name:"About", path:""},
         {name:"Projects", path:""},
          {name:"Experience", path:""},
          {name:"Portfolio"}
    
]
  return (
    <div className=' items-center justify-center w-full flex text-white border'>
      <div className='shadow-xl items-center justify-center rounded-lg bg-[#0c011a] p-4 flex gap-10 fixed top-2 text-white'>
        {
            list.map(({name,path})=>(
                <li className='list-none cursor-pointer hover:text-[#f04a7c]'>{name}</li>
            ))
        }
      </div>
    </div>
  )
}

export default Nav
