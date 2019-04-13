import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <span class="navbar-brand mb-0 h1">Google Books</span>
      <a className="navbar-brand" href="/">
        Search
      </a>
      <a className="navbar-brand" href="/books">
        Saved
      </a>
    </nav>
  );
}

export default Nav;
