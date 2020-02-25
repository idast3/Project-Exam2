import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import DetailList from "./DetailList";

export default function BookingDetail({ details }) {
    const { establishmentName, imageUrl, description, price, maxGuests } = details;


    return (
        <Row>
            <Col md={6} className="detail-image">
                <Image src={imageUrl} />
            </Col>
            <Col>
                <h1>{establishmentName}</h1>
                <DetailList description={description} price={price} maxGuests={maxGuests} />
            </Col>
        </Row>
    );
}

BookingDetail.propTypes = {
    details: PropTypes.object.isRequired
};
