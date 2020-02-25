import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import "./hotel.css"

export default function HotelItem({ hotel }) {
    
    console.log(hotel)

    const { id, establishmentName, imageUrl } = hotel 

    return (
      <div className="hotel">
          <h4>{establishmentName}</h4>
          <img src={imageUrl} alt={establishmentName} />
          <Link to={`hotel/${id}`} class="btn btn-primary">View more</Link>
      </div>
    );
}

HotelItem.propTypes = {
    hotel: PropTypes.object.isRequired,
}