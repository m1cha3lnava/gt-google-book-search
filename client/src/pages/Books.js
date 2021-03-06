import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Container } from "../components/Grid";
import { Input } from "../components/Form";
import { ResultList, ResultListItem } from "../components/ResultList";

function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([]);
  // const [formObject, setFormObject] = useState({});
  const [title, setTitle] = useState("");
  // Load all books and store them with setBooks
  useEffect(() => {}, []);

  // Loads all books and sets them to books
  function loadBooks(title) {
    API.getGoogleBooks(title)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { value } = event.target;
    setTitle(value);
    console.log(value);
    //setFormObject({ ...formObject, [name]: value });
  }

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(title);
    // alert("click");
    loadBooks(title);
  };
  const handleSave = (book) => {
    // console.log(book);
    API.saveBook(book).then((results) => {
      console.log(results);
    });
  };
  return (
    <Container fluid>
      <Col size="md">
        <Jumbotron>
          <h1>Google Books Search</h1>
          <h5>Search for and Save Books of Interest</h5>
        </Jumbotron>
        <form className="form-control">
          <Input
            onChange={handleInputChange}
            name="title"
            value={title}
            placeholder="Book Title"
          />
          <button className="btn btn-info" onClick={handleFormSubmit}>
            Search Book
          </button>
        </form>
      </Col>
      <br />
      <Col size="md sm-12">
        {books.length ? (
          <ResultList>
            {console.log(title)}
            {books.map((book, id) => (
              <ResultListItem
                title={book.volumeInfo.title}
                description={book.volumeInfo.description}
                thumbnail={book.volumeInfo.imageLinks.thumbnail}
                href={book.volumeInfo.infoLink}
                key={id}
                handleSave={handleSave}
                authors={book.volumeInfo.authors}
              >
                <a href={book.volumeInfo.infoLink}>
                  <strong>
                    {book.volumeInfo.title} by
                    {book.volumeInfo.authors}
                  </strong>
                </a>
              </ResultListItem>
            ))}
          </ResultList>
        ) : (
          <h3>No Results to Display</h3>
        )}
      </Col>
    </Container>
  );
}

export default Books;
