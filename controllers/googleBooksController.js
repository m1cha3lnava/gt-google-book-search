 const axios = require("axios")

// Defining methods for the booksController
module.exports = {
  findByTitle: function (req, res) {
    const title = req.params.title
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title).then(results => {
      res.json(results.data.items)
    })
  } 
};
