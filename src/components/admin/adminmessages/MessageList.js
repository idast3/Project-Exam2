import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from "../../../constants/API"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import MessageItem from "./MessageItem"



export default function MessageList() {

    const [hotels, setHotels] = useState([]);

    const url = BASE_URL + "get-establishments.php";

    useEffect(() => {

        async function fetchData() {
            const result = await axios(url);
            setHotels(result.data);
        }

        fetchData();
    }, [url]);

    return (

        <div className="hotel-container">
         <h2>Find accommodations</h2>
        <Form inline className="search">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
        <Row>
            {hotels.map(hotel => (
              <Col sm={6} md={3} key={hotel.id}>
                <MessageItem hotel={hotel} key={hotel.id} />
              </Col>
            ))}
        </Row>
        </div>

    )
}
