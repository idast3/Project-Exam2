import React from 'react';
import PropTypes from 'prop-types';
import Card from "react-bootstrap/Card";


export default function MessageItem({ clientMessage }) {


    const { clientName, email, message } = clientMessage

    return (

      <div className="clientMessage">

      <Card className="clientMessage__card">
          <Card.Body>
              <Card.Title>{clientName}</Card.Title>
                <Card.Text>
                  <p className="clientMessage__detail">{email}</p>
                  <p>{message}</p>
                </Card.Text>
                <Card.Link href="#" className="clientMessage__action">Reply</Card.Link><Card.Link href="#" className="clientMessage__action">Delete</Card.Link>
          </Card.Body>
      </Card>

      </div>

    );
}

MessageItem.propTypes = {
    clientMessage: PropTypes.object.isRequired,
}
