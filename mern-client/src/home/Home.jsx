import React from 'react'
import Banners from '../components/Banners'
import BestsellingBooks from '../home/FavoriteBook'
import FavBook from './FavBook'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'
import Review from './Review'


const Home = () => {
  return (
   <div>
    <Banners/>
    <BestsellingBooks/>
    <FavBook/>
    <PromoBanner/> 
    <OtherBooks/> 
    <Review/> 
   </div>
  )
}

export default Home
