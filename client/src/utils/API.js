import axios from "axios";

//sample api call https://www.googleapis.com/books/v1/volumes?q=harry+potter
export default {
  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getGoogleBooks: function (title) {
    return axios.get("/api/googlebooks/" + title);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },
};
