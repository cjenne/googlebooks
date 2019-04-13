import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Search extends Component {
  state = {
    bookarray: []
  };
  // // When this component mounts, grab the book with the _id of this.props.match.params.id
  // // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  // componentDidMount() {
  //   API.getBook(this.props.match.params.id)
  //     .then(res => this.setState({ book: res.data }))
  //     .catch(err => console.log(err));
  // }

//Call getGoogleBooks function in order to render books from Google Books API

  render() {
    return (
      <SearchBox></SearchBox>
      <Container fluid>
        <Row>
          <Col>
            <Jumbotron>
              <h1>
                {book.title} by {book.author}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col>
            <article>
              <h1>Description</h1>
              <p>
                {book.description}
              </p>
              {/* //image and link will also be rendered.  I will need to review further as to correct syntax for rendering API call book schema properties */}
            </article>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
