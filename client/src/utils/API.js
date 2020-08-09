import axios from "axios";

//sample api call https://www.googleapis.com/books/v1/volumes?q=harry+potter
export default {
  //performs API call with title as the param from Books.js 
  getGoogleBooks: function (title) {
    return axios.get("/api/googlebooks/" + title);
  },
  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
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
