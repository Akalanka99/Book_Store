import React, { useState, useEffect } from 'react';
import BookCards from '../components/BookCards';

const BestsellingBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then(res => res.json())
      .then(data => setBooks(data.slice(0, 8)))
      
  }, [])

  return (
    <div>
      <BookCards books={books} headLine="Best Selling Books "/>
      
    </div>
  );
}

export default BestsellingBooks;
