import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/API";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import useForm from "react-hook-form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function HotelDetail() {

  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const onSubmit = data => {
      localStorage.setItem("Establishment", hotel.establishmentName);
      history.push("/enquiry");
  };

    let { id } = useParams();

    const [hotel, setHotel] = useState({});

    const url = BASE_URL + "get-establishment.php?id=" + id;

    let catering = "";



    useEffect(() => {

        async function fetchData() {
            const result = await axios(url);
            setHotel(result.data);
        }

        fetchData();
    }, [url]);

    if (hotel.selfCatering === "true") {
      catering = "Yes";
    } else if (hotel.selfCatering === "false") {
      catering = "No";
    }

    const mailTo = "mailto:"+ hotel.establishmentEmail;

    return (

      <div className="detail">
        <h2>{hotel.establishmentName}</h2>

        <Row>
          <Col sm={12} lg={6} >

            <img src={hotel.imageUrl} alt={hotel.establishmentName} className="hotel-img" />
          </Col>

          <Col sm={12} lg={6} >

            <h3>Description</h3>
            <p> {hotel.description}</p>

            <h3>Email</h3>
            <p><a href={mailTo}>{hotel.establishmentEmail}</a></p>

            <h3>Max Guests</h3>
            <p>{hotel.maxGuests}</p>


            <h3>Self Catering</h3>
            <p>{catering}</p>

            <h3>Google Coordinates</h3>
            <p>Latitude: {hotel.googleLat} / Longitude: {hotel.googleLong}  </p>
            <hr />

            <Form onSubmit={handleSubmit(onSubmit)}>
            <p className="detail__price">${hotel.price} / night</p>
              <Button type="submit" variant="dark" className="detail__book">
                  Book now
              </Button>
            </Form>
            </Col>
          </Row>
      </div>
    );
}
