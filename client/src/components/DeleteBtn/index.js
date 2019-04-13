import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn() {
  return (
    <span className="delete-btn" buttonAction={this.deleteBook} role="button" tabIndex="0">
      ✗
    </span>
  );
}

export default DeleteBtn;
