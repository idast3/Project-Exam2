import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/API";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import useForm from "react-hook-form";

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

    useEffect(() => {

        async function fetchData() {
            const result = await axios(url);
            console.log("dd");

            console.log(result.data);
            setHotel(result.data);
        }

        fetchData();
    }, [url]);

    return (
      <div className="hotel-detail-container">

          <h2>{hotel.establishmentName}</h2>

          <img src={hotel.imageUrl} alt={hotel.establishmentName} className="hotel-img" />

          <h3>Description</h3>
          <p> {hotel.description}</p>

          <h3>Email</h3>
          <p>{hotel.establishmentEmail}</p>

          <h3>Max Guests</h3>
          <p>{hotel.maxGuests}</p>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <Button type="submit" variant="dark" className="login-btn">
                Book now
            </Button>
          </Form>
      </div>
    );
}
