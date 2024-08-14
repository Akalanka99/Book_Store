import React, { useEffect, useState } from 'react'
import { Card } from "flowbite-react";

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then(res => res.json())
      .then(data => setBooks(data));
      
  }, [])
  return (
    <div className='my-28 px-4 lg:px-24 '>
      <h2 className='text-5xl font-bold text-center mb  '>All Books are here</h2>
      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 ' >
        {
          books.map(book => <Card >
            <img src={book.imageURL} alt="image 1" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
             <p className='px-2'>
              {book.bookTitle}
             </p>
            </h5>
            <p className="font-normal text-gray-700 px-2 dark:text-gray-400">
              <p>
              {book.bookDescription}
              </p>
            </p>
            <button className='bg-blue-700 text-white px-5 py-2 rounded  font-semibold'>
              Buy Now
              </button>
          </Card>)
        }
      </div>
    </div>
  )
}

export default Shop
