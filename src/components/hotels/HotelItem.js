import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import "../../css/styles.css"
import Card from "react-bootstrap/Card";


export default function HotelItem({ hotel }) {

    const { id, establishmentName, imageUrl, description, price } = hotel

    return (

      <div className="hotel">
      <Card className="hotel__card">
          <Card.Img variant="top" src={imageUrl} />
          <Card.Body>
              <Card.Title className="hotel__name" >{establishmentName}</Card.Title>
              <p className="hotel__price">${price}</p>
              <Link to={`hotel/${id}`} class="btn btn-dark">View more</Link>
          </Card.Body>
      </Card>
      </div>

    );
}

HotelItem.propTypes = {
    hotel: PropTypes.object.isRequired,
}
