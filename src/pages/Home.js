import React from 'react'


const Home = ({isLoggedIn}) => {
  return (
  <div className=' w-screen h-screen flex justify-between  items-center max-w-[1000px] mx-auto gap-x-12 gap-y-0 text-white text-3xl  bg-black py-12'>
    <div className='w-11/12 max-w-[450px] ml-6 '>
      "Study is not just about memorizing facts; it is about embracing the joy of discovery and the thrill of intellectual growth."
    </div>
    <div className='relative w-11/12 max-w-[450px] mx-auto mr-[30px]'>
           <img 
             src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt="Students"
                width={558}
                height={490}
                loading="lazy"
                    className='  mt-2  -top-4 right-4 '
                />    
        </div>
        </div>
  )
}

export default Home
