import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { BASE_URL } from "../../../constants/API";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BookingItem from "./BookingItem";

export default function BookingList() {
    const [cards, setCards] = useState([]);
    const [filteredCards, setFilteredCards] = useState([]);

    useEffect(function() {
          fetch(BASE_URL)
              .then(function(response) {
                  return response.json();
              })
              .then(function(json) {
                  console.log(json);
              })
              .catch(function(error) {
                  console.log(error);
              });
      }, []);

    function filterThroughCards(event) {
        const searchValue = event.target.value.toLowerCase();

        const searchedCards = cards.filter(function(card) {
            //
            const lowercaseCardName = card.name.toLowerCase();

            if (lowercaseCardName.startsWith(searchValue)) {
                return true;
            } else {
                return false;
            }
        });

        setFilteredCards(searchedCards);
    }

    return (
        <>
            <Form inline className="search">
                <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={event => filterThroughCards(event)} />
            </Form>
            <Row>
                {filteredCards.map(card => {
                    const { id, establishmentName, imageUrl } = card;

                    return (
                        <Col sm={6} md={3} key={id}>
                            <BookingItem id={id} establishmentName={establishmentName} imageUrl={imageUrl} />
                        </Col>
                    );
                })}
            </Row>
        </>
    );
}
