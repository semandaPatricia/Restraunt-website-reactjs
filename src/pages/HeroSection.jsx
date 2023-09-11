import React from 'react'

const HeroSection = () => {
  return (
    
    <div className="bg-gray-900 ">
    <header>
       
    </header>
    <section className=" mx-auto h-screen max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8 ">
        <div className="space-y-4 flex-1 sm:text-center lg:text-left">
            <h1 className="text-white font-bold text-4xl xl:text-5xl">
            ENJOY FOODS 
                 <span className="text-lime-500"> made with fresh ingredients</span>
            </h1>
            <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
            </p>
            <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                <a href="menu " className="px-7 py-3 w-full bg-white text-gray-800 text-center rounded-md shadow-md block sm:w-auto">
                    Place Order
                </a>
               
            </div>
        </div>
        <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
            <img src="https://images.unsplash.com/photo-1582169505937-b9992bd01ed9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1620&q=80"  alt='pizza'  className="w-full mx-auto sm:w-10/12  lg:w-full" />
        </div>
    </section>
</div>
    
  )
}

export default HeroSection