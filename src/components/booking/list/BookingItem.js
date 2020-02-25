import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./BookingList.css";
import { withRouter } from "react-router-dom";

function BookingItem({ id, establishmentName, imageUrl, history }) {
    //
    let image = "https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2706&q=806";

    if (imageUrl) {
        image = imageUrl;
    }

    return (
        <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{establishmentName}</Card.Title>
                <Button variant="dark" block onClick={() => history.push(`/booking/${id}`)}>
                    Book now
                </Button>
            </Card.Body>
        </Card>
    );
}

BookingItem.propTypes = {
    id: PropTypes.string.isRequired,
    establishmentName: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    history: PropTypes.object.isRequired
};

export default withRouter(BookingItem);
