import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from "../../../constants/API"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import EnquiryItem from "./EnquiryItem"



export default function EnquiryList() {

    const [enquiries, setEnquiries] = useState([]);

    const url = BASE_URL + "get-enquiries.php";

    useEffect(() => {

        async function fetchData() {
            const result = await axios(url);
            setEnquiries(result.data);
        }

        fetchData();
    }, [url]);

    return (

        <div className="enquiry-container">

        <Row>
            {enquiries.map(bookingEnquiry => (
              <Col sm={6} md={3} key={bookingEnquiry.establishment}>
                <EnquiryItem bookingEnquiry={bookingEnquiry} key={bookingEnquiry.establishment} />
              </Col>
            ))}
        </Row>
        </div>

    )
}
