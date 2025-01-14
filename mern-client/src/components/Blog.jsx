import React from 'react';

const BookSellPage = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1>Welcome to BookStore</h1>
        <p>Browse and purchase your favorite books online</p>
      </header>
      
      <section>
        <h2>Featured Books</h2>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <div style={{ border: '1px solid #ccc', padding: '10px', width: '200px', textAlign: 'center' }}>
            <img src="book-image-url" alt="Book 1" style={{ width: '100%', height: 'auto' }} />
            <h3>Book Title 1</h3>
            <p>Price: $20</p>
            <button>Add to Cart</button>
          </div>
          <div style={{ border: '1px solid #ccc', padding: '10px', width: '200px', textAlign: 'center' }}>
            <img src="book-image-url" alt="Book 2" style={{ width: '100%', height: 'auto' }} />
            <h3>Book Title 2</h3>
            <p>Price: $25</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </section>

      <footer style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>© 2025 BookStore. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default BookSellPage;
