import React from 'react'
import Banners from '../components/Banners'
import BestsellingBooks from '../home/FavoriteBook'
import FavBook from './FavBook'


const Home = () => {
  return (
   <div>
    <Banners/>
    <BestsellingBooks/>
    <FavBook/>
   </div>
  )
}

export default Home
