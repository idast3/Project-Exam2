import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HotelItem from "./HotelItem"
import { BASE_URL } from "../../constants/API"

export default function HotelList() {

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
        {hotels.map(hotel => (
            <HotelItem hotel={hotel} key={hotel.id} />
        ))};
      </div>
    );
}