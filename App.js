import React, { useState } from "react";
import "./styles.css";

const bookList = {
  javaScript: [
    {
      name: "The Incredible Hulk",
      releaseDate: "2008",
      ratingIMDb: "6.7/10",
      director: "Louis Leterrier",
      poster: "https://wallpapercave.com/wp/2Cf6ajq.jpg"
    },
    {
      name: "Iron Man",
      releaseDate: "2008",
      ratingIMDb: "7.9/10",
      director: "Jon Faverou",
      poster: "https://wallpaperaccess.com/full/1653412.jpg"
    }
  ],

  "c++": [
    {
      name: "Batman Begins",
      releaseDate: "2005",
      ratingIMDb: "8.2/10",
      director: "Christopher Nolan",
      poster: "https://wallpapercave.com/wp/wp2722476.jpg"
    },
    {
      name: "The Dark Knight",
      releaseDate: "2008",
      ratingIMDb: "9/10",
      director: "Christopher Nolan",
      poster: "https://cdn.wallpapersafari.com/52/41/kl4GTX.jpg"
    }
  ]
};

export default function App() {
  const [recomendedBooks, setUserBooks] = useState("javaScript");
  function onClickBook(books) {
    setUserBooks(books);
  }

  var lkm = Object.keys(bookList);

  return (
    <div className="App">
      <h1>Good Books</h1>
      <div>
        {lkm.map((books) => (
          <button
            key={books}
            className="container"
            onClick={() => onClickBook(books)}
          >
            {books}
          </button>
        ))}
        {/* 
{Object.keys(bookList).map((books) => (
          <button
            onClick={() => onClickBook(books)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {books}
          </button>
        ))} */}
      </div>
      <div>
        {bookList[recomendedBooks].map((books) => {
          return (
            <div className="info-card">
              <img className="left-card" src={books.poster} alt="poster" />

              <div className="right-card">
                <div className="game-name"> {books.name}</div>
                <div className="game-date">
                  Released On : {books.releaseDate}
                </div>
                <div className="books-rating">
                  IMDb Rating : {books.ratingIMDb}
                </div>
                <div className="game-director">
                  Directed by : {books.director}
                </div>
              </div>
            </div>
          );
        })}{" "}
      </div>
    </div>
  );
}
