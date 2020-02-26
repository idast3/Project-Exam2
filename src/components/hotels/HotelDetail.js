import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/API"

export default function HotelDetail() {

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
          <p>Email: {hotel.establishmentEmail}</p>
      </div>
    );
}