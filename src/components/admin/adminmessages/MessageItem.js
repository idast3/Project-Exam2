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

      <Card className="clientMessage_card">
          <Card.Body>
              <Card.Title>{clientName}</Card.Title>
                <Card.Text>
                  <p className="clientMessage_email">{email}</p>
                  <p>{message}</p>
                </Card.Text>
                <Card.Link href="#" className="clientMessage_action">Reply</Card.Link><Card.Link href="#" className="clientMessage_action">Delete</Card.Link>
          </Card.Body>
      </Card>

      </div>

    );
}

MessageItem.propTypes = {
    clientMessage: PropTypes.object.isRequired,
}
