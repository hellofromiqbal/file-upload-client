/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch(`${apiUrl}/books`)
      .then((res) => res.json())
      .then((data) => setBooks(data.data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <Link to={"/books/new"}>Add Book</Link>
      {books.map((book) => (
        <div key={book?._id}>
          <h3>{book?.bookTitle}</h3>
          <p>{book?.bookAuthor}</p>
          <p>{book?.bookReleasedDate}</p>
          <img src={book?.bookImage} alt={book?.bookTitle} />
        </div>
      ))}
    </div>
  )
};

export default Home;