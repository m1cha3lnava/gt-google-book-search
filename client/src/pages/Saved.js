import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { ResultList, ResultListItem } from "../components/ResultList";

function Saved(props) {
  const [books, setBook] = useState([]);

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  const { id } = useParams();
  useEffect(() => {
    loadBooks();
  }, []);

  function loadBooks() {
    API.getBooks()
      .then((res) => setBook(res.data))
      .catch((err) => console.log(err));
  }
  // Deletes a book from the database with a given id, then reloads books from the db
  function handleDelete(id) {
    API.deleteBook(id)
      .then((res) => loadBooks())
      .catch((err) => console.log(err));
  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>My Saved Books</h1>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col size="md sm-12">
          {books.length ? (
            <ResultList>
              {books.map((book, id) => (
                <ResultListItem
                  title={book.title}
                  description={book.synopsis}
                  thumbnail={book.image}
                  href={book.link}
                  key={id}
                  id={book._id}
                  handleDelete={handleDelete}
                  authors={book.authors}
                >
                  <a href={book.link}>
                    <strong>
                      {book.title} by
                      {book.authors}
                    </strong>
                  </a>
                </ResultListItem>
              ))}
            </ResultList>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Saved;
