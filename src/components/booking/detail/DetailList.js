import React from "react";
import PropTypes from "prop-types";
import ListGroup from "react-bootstrap/ListGroup";

export default function DetailList({ description, price, maxGuests }) {
    return (
        <ListGroup>
            <ListGroup.Item>
                <b>About</b>: {description}
            </ListGroup.Item>
            <ListGroup.Item>
                <b>Rooms</b>: {maxGuests}
            </ListGroup.Item>
            <ListGroup.Item>
                <b>Price</b>: {price}
            </ListGroup.Item>
        </ListGroup>
    );
}

DetailList.propTypes = {
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    maxGuests: PropTypes.string.isRequired
};
