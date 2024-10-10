import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Label, Textarea, TextInput } from "flowbite-react";

const EditBooks = () => {
  const{id} =useParams();
  const{bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL}=useLoaderData();
  
  const bookcategory = [
    "Fiction",
    "Non-fiction",
    "Religion",
    "History",
    "Science fiction",
    "Fantasy",
    "Horror",
    "Poetry",
    "Romance",
    "Art & Design",
    "Travel",
    "children books",
    "Business",
    "programming",
    "Self-help",
    "Auto-biography"
  ]

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookcategory[0]);

  // Moved handleBookSubmit outside of handleChangeSelectedvalue
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const categoryName = form.categoryName.value;  // Corrected category name here
    const imageURL = form.imageURL.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    console.log("Book Data:", {
      bookTitle,
      authorName,
      categoryName,
      imageURL,
      bookDescription,
      bookPDFURL,
    })  
  }

  const handleChangeSelectedvalue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);

    fetch(`http://localhost:5000/book/${id}`,{
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ category: event.target.value })
    }).then(res => res.json()).then(data => {
      alert("Book is  updated successfully")
      
    })
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='text-3xl font-bold mb-8 '>Update the Book data</h2>

      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        <div className='flex gap-8 '>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="BookTitle" />
            </div>
            <TextInput
              id="bookTitle"
              name='bookTitle'
              placeholder="Book Title"
              required
              type="text"
              defaultValue={bookTitle}

            />
          </div>

          {/* Author Name */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              name='authorName'
              placeholder="Author Name"
              required
              type="text"
              defaultValue={authorName}
            />
          </div>
        </div>

        {/* 2nd Row: URL and Category */}
        <div className='flex gap-8 '>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput
              id="imageURL"
              name='imageURL'
              placeholder="Book Image URL"
              required
              type="text"
              defaultValue={imageURL}
            />
          </div>

          {/* Book Category */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <select
              id='inputState'
              name='categoryName'  // Correct name attribute
              className='w-full rounded'
              value={selectedBookCategory}
              onChange={handleChangeSelectedvalue}
            >
              {bookcategory.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Book Description */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea
            id="bookDescription"
            name='bookDescription'
            placeholder="Write your book description..."
            required
            className='w-full'
            rows={5}
            defaultValue={bookDescription}
          />
        </div>

        {/* Book PDF Link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="Book PDF URL" />
          </div>
          <TextInput
            id="bookPDFURL"
            type="text"
            name='bookPDFURL'
            placeholder="Book PDF URL"
            required
            defaultValue={bookPDFURL}
          />
        </div>

        {/* Submit Button */}
        <Button type="submit" className='mt-5 bg-blue-500 text-white font-bold rounded'>
          Update Book
        </Button>
      </form>
    </div>
  )
}

export default EditBooks
