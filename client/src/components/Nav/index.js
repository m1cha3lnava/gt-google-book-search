import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Books
      </a>
      <a className="navbar-brand" href="/api/books">
        Search
      </a>
      <a className="navbar-brand" href="/api/books">
        Saved
      </a>
    </nav>
  );
}

export default Nav;
