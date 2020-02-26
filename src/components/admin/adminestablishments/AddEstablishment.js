import React from "react";
import useForm from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BASE_URL } from "../../../constants/API"

const schema = yup.object().shape({
    establishmentName: yup.string().required("Name is required"),
    establishmentEmail: yup
        .string()
        .email("Please enter a valid email")
        .required("Email is required"),
    description: yup.string().required("Description is required"),
    imageUrl: yup.string().required("URL is required"),
    price: yup.string().required("Price is required"),
    maxGuests: yup.string().required("Max guest number is required"),
    googleLat: yup.string().required("Latitude is required"),
    googleLong: yup.string().required("Longitude is required"),
    id: yup.string().required("ID number is required"),

});

export default function AddEstablishment() {
    const { register, handleSubmit, watch, errors } = useForm({
        validationSchema: schema
    });

    function onSubmit(data) {
        console.log("data", data);

        const url = BASE_URL + "add-establishments-success.php";

        const formData = new FormData();
        formData.append("establishmentName", data.establishmentName);
        formData.append("establishmentEmail", data.establishmentEmail);
        formData.append("imageUrl", data.imageUrl);
        formData.append("price", data.price);
        formData.append("maxGuests", data.maxGuests);
        formData.append("googleLat", data.maxGuests);
        formData.append("googleLong", data.googleLong);
        formData.append("description", data.description);
        formData.append("selfCatering", data.selfCatering);
        formData.append("id", Math.floor(Math.random() * Math.floor(4000)));

        fetch(url, {
            method: 'POST',
            mode: 'cors',
            body: formData
        })
        .then(function() {
            console.log("Establishment added")
        })
        .catch(error => console.log(error))

    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>

            <h1>New Establishment</h1>
            <Form.Group>
                <Form.Label><b>Establishment Name</b></Form.Label>
                <Form.Control name="establishmentName" id="establishmentName" placeholder="Establishment name" ref={register} />
                {errors.establishmentName && <p className="error-msg">{errors.establishmentName.message}</p>}
            </Form.Group>

            <Form.Group>
                <Form.Label><b>Establishment Email</b></Form.Label>
                <Form.Control name="establishmentEmail" id="establishmentEmail" placeholder="name@example.com" ref={register} />
                {errors.establishmentEmail && <p className="error-msg">{errors.establishmentEmail.message}</p>}
            </Form.Group>

            <Form.Group>
                <Form.Label><b>Image URL</b></Form.Label>
                <Form.Control name="imageUrl" id="imageUrl" placeholder="http://image.jpg" ref={register} />
                {errors.imageUrl && <p className="error-msg">{errors.imageUrl.message}</p>}
            </Form.Group>

            <Form.Group>
                <Form.Label><b>Price per person per night ($)</b></Form.Label>
                <Form.Control name="price" id="price" placeholder="$" ref={register} />
                {errors.price && <p className="error-msg">{errors.price.message}</p>}
            </Form.Group>

            <Form.Group>
                <Form.Label><b>Max Guests</b></Form.Label>
                <Form.Control name="maxGuests" id="maxGuests" placeholder="000" ref={register} />
                {errors.maxGuests && <p className="error-msg">{errors.maxGuests.message}</p>}
            </Form.Group>

            <Form.Group>
                <Form.Label><b>Google Coordinates Latitude</b></Form.Label>
                <Form.Control name="googleLat" id="googleLat" placeholder="00.000000" ref={register} />
                {errors.googleLat && <p className="error-msg">{errors.googleLat.message}</p>}
            </Form.Group>

            <Form.Group>
                <Form.Label><b>Google Coordinates Longitude</b></Form.Label>
                <Form.Control name="googleLong" id="googleLong" placeholder="00.000000" ref={register} />
                {errors.googleLong && <p className="error-msg">{errors.googleLong.message}</p>}
            </Form.Group>

            <Form.Group>
                <Form.Label><b>Description</b></Form.Label>
                <Form.Control as="textarea" rows="4" name="description" id="description" placeholder="Describe the establishment" ref={register} />
                {errors.description && <p className="error-msg">{errors.description.message}</p>}
            </Form.Group>

            <Form.Group>
                <Form.Label><b>Self Catering</b></Form.Label><br />
                <Form.Label htmlFor="true" className="Radio"><b>True</b></Form.Label>
                <Form.Control type="radio" value="true" name="selfCatering" id="true" ref={register} />
                <Form.Label htmlFor="false" className="Radio"><b>False</b></Form.Label>
                <Form.Control type="radio" value="false" name="selfCatering" id="false" ref={register} />
                {errors.selfCatering && <p className="error-msg">{errors.selfCatering.message}</p>}
            </Form.Group>

            {/* <Form.Group>
                <Form.Label><b>ID</b></Form.Label>
                <Form.Control name="id" id="id" placeholder="00" ref={register} />
                {errors.id && <p className="error-msg">{errors.id.message}</p>}
            </Form.Group> */}


            <Button type="submit" variant="dark" className="submit-message">
                Submit
            </Button>
        </Form>
    );
}
