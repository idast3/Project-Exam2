import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


export default function MessageItem({ clientMessage }) {

    console.log(clientMessage)

    const { clientName, email, message } = clientMessage

    return (

      <div className="clientMessage">
      <Card>
          <Card.Body>
              <Card.Title>{clientName}</Card.Title>
              <p>Email: {email}</p>
              <p>Message: {message}</p>
          </Card.Body>
      </Card>
      </div>

    );
}

MessageItem.propTypes = {
    clientMessage: PropTypes.object.isRequired,
}
