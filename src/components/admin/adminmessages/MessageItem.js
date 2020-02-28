import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


export default function MessageItem({ hotel }) {

    console.log(hotel)

    const { id, establishmentName, imageUrl } = hotel

    return (

      <div className="hotel">
      <Card>
          <Card.Img variant="top" src={imageUrl} />
          <Card.Body>
              <Card.Title>{establishmentName}</Card.Title>
              <Link to={`hotel/${id}`} class="btn btn-dark">View more</Link>
          </Card.Body>
      </Card>
      </div>

    );
}

MessageItem.propTypes = {
    hotel: PropTypes.object.isRequired,
}
