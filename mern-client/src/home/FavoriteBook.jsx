import React, { useState, useEffect } from 'react';

const FavoriteBook = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then(res => res.json())
      .then(data => console.log(data))
      
  }, []);

  return (
    <div>
      <h1>Favorite Books</h1>
      
    </div>
  );
}

export default FavoriteBook;
