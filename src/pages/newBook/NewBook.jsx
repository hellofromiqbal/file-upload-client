import React, { useState } from 'react';

const NewBook = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [state, setState] = useState({
    bookTitle: '',
    bookAuthor: '',
    bookReleasedYear: 0,
  });
  const [bookImage, setBookImage] = useState();

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const upload = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('bookTitle', state.bookTitle);
      formData.append('bookAuthor', state.bookAuthor);
      formData.append('bookReleasedYear', state.bookReleasedYear);
      formData.append('bookImage', bookImage);

      const res = await fetch(`${apiUrl}/books/new`, {
        method: 'POST',
        body: formData
      });
      if (!res.ok) {
        const result = await res.json();
        throw new Error(result.message);
      } else {
        const result = await res.json();
        console.log(result.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="App">
      <form onSubmit={upload}>
        <input
          type="text"
          placeholder="Title"
          name="bookTitle"
          value={state.bookTitle}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Author"
          name="bookAuthor"
          value={state.bookAuthor}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Released Year"
          name="bookReleasedYear"
          value={state.bookReleasedYear}
          onChange={handleChange}
        />
        <input
          type="file"
          onChange={(e) => setBookImage(e.target.files[0])}
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default NewBook;