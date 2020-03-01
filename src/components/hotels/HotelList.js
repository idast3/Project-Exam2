import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HotelItem from "./HotelItem"
import { BASE_URL } from "../../constants/API"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";



export default function HotelList() {

    const [hotels, setHotels] = useState([]);
    const [filteredCards, setFilteredCards] = useState([]);

    const url = BASE_URL + "get-establishments.php";

    useEffect(() => {

        async function fetchData() {
            const result = await axios(url);
            setHotels(result.data);
            setFilteredCards(result.data);
        }

        fetchData();
    }, [url]);

    function filterThroughCards(event) {
        const searchValue = event.target.value.toLowerCase();

        const searchedCards = hotels.filter(function(hotel) {
            //
            const lowercaseCardName = hotel.establishmentName.toLowerCase();

            if (lowercaseCardName.startsWith(searchValue)) {
                return true;
            } else {
                return false;
            }
        });

        setFilteredCards(searchedCards);
    }

    return (

        <div className="hotel-container">
          <div className="hotel-container__search">
           <h2>Find accommodations</h2>
            <Form className="search">
                <FormControl type="text" placeholder="Search..." className="mr-sm-2 search__input" onChange={event => filterThroughCards(event)}/>
            </Form>
          </div>

          <Row>

          {filteredCards.map(hotel => {
              const { id, establishmentName, imageUrl } = hotel;

              return (
                <Col sm={6} md={3} key={hotel.id}>
                  <HotelItem hotel={hotel} key={hotel.id} />
                </Col>
              );
          })}

          </Row>
        </div>

    )
}
