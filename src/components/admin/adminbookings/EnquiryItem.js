import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


export default function EnquiryItem({ bookingEnquiry }) {

    console.log(bookingEnquiry)

    const { establishment, clientName, email, checkin, checkout } = bookingEnquiry

    return (

      <div className="bookingEnquiry">

      <Card className="clientMessage_card">
          <Card.Body>
              <Card.Title>{establishment}</Card.Title>
                <Card.Text>
                  <p className="clientMessage_email">{checkin} – {checkout}</p>
                  <p><b>{clientName}</b></p>
                  <p>{email}</p>
                </Card.Text>
                <Card.Link href="#" className="clientMessage_action">Confirm</Card.Link><Card.Link href="#" className="clientMessage_action">Cancel</Card.Link>
          </Card.Body>
      </Card>

      </div>

    );
}

EnquiryItem.propTypes = {
    clientMessage: PropTypes.object.isRequired,
}
