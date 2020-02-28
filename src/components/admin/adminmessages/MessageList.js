import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from "../../../constants/API"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import MessageItem from "./MessageItem"



export default function MessageList() {

    const [messages, setMessages] = useState([]);

    const url = BASE_URL + "get-contacts.php";

    useEffect(() => {

        async function fetchData() {
            const result = await axios(url);
            setMessages(result.data);
        }

        fetchData();
    }, [url]);

    return (

        <div className="message-container">

        <Row>
            {messages.map(clientMessage => (
              <Col sm={6} md={3} key={clientMessage.clientName}>
                <MessageItem clientMessage={clientMessage} key={clientMessage.clientName} />
              </Col>
            ))}
        </Row>
        </div>

    )
}
