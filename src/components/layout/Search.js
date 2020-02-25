import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Search() {
    return (
      <div class="container">
        <div class="row">
            <div class="col-sm-12">
      <Form>
        <Form.Group controlId="searchInput">
          <Form.Control type="search" placeholder="Search" />
          <Button variant="dark" type="submit" >
          Search
          </Button>
          </Form.Group>
          </Form>
          </div>
        </div>
    </div>
    );
}

export default Search;
