import React from 'react';
import PropTypes from 'prop-types';
import Card from "react-bootstrap/Card";


export default function EnquiryItem({ bookingEnquiry }) {



    const { establishment, clientName, email, checkin, checkout } = bookingEnquiry

    return (

      <div className="bookingEnquiry">

      <Card className="clientMessage__card">
          <Card.Body>
              <Card.Title>{establishment}</Card.Title>
                <Card.Text>
                  <p className="clientMessage__detail">{checkin} – {checkout}</p>
                  <p><b>{clientName}</b></p>
                  <p>{email}</p>
                </Card.Text>
                <Card.Link href="#" className="clientMessage__action">Confirm</Card.Link><Card.Link href="#" className="clientMessage__action">Cancel</Card.Link>
          </Card.Body>
      </Card>

      </div>

    );
}

EnquiryItem.propTypes = {
    clientMessage: PropTypes.object.isRequired,
}
