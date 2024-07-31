import React from "react";
import { BannerCard } from "../home/BannerCard.jsx";



const Banner = () => {
  return (
    <div className= 'px-4 lg:px-24 bg-teal-100 flex items-center '>
      <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
        {/* Left side*/}
        <div className='md:w-1/2 space-y-8 h-full'>
            <h2 className='text-6xl font-bold leading-snug text-black'>Buy and sell your books <span className='text-blue-700'>for the Best Prices</span></h2>
            <p className='md:w-4/5'>Welcome to Our book store, your one-stop destination for discovering and purchasing a wide range of e-books across all genres. Whether you're looking for the latest bestsellers, timeless classics, or hidden gems, our curated collection has something for every reader. Browse through our categories, check out featured books, and enjoy exclusive offers. Join our community of book lovers and start your reading adventure today!</p>
            <div className='md:w-1/2 space-y-8 h-full '>
              <input type="search" name="Search..." id="search" placeholder='Search a book.....' className='py-2 px-2 rounded -s-sm focus:outline-none'/>
              <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
            </div>
        </div>
        {/* Right side*/}
          <div>  
            <BannerCard></BannerCard>
          </div>
        </div>
    </div>
  )
}

export default Banner
