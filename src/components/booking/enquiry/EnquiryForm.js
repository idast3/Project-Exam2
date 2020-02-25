import React from "react";
import useForm from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const schema = yup.object().shape({
    clientName: yup.string().required("Full name is required"),
    email: yup
        .string()
        .email("Please enter a valid email")
        .required("Email is required"),
    checkin: yup.string().required("Check-in date is required"),
    checkout: yup.string().required("Check-out date is required"),

});

export default function EnquiryForm() {
    const { register, handleSubmit, watch, errors } = useForm({
        validationSchema: schema
    });

    function onSubmit(data) {
        console.log("data", data);
    }

    console.log(watch("firstName"));

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>


            <Form.Group>
                <Form.Label><b>Establishment</b></Form.Label>
                <Form.Control value="Establishment Name" name="establishment" id="establishment" readOnly ref={register} />
                {errors.establishment && <p className="error-msg">{errors.establishment.message}</p>}
            </Form.Group>

            <Form.Group>
                <Form.Label><b>Full Name</b></Form.Label>
                <Form.Control placeholder="Enter Your Name" name="clientName" id="clientName" ref={register} />
                {errors.clientName && <p className="error-msg">{errors.clientName.message}</p>}
            </Form.Group>


            <Form.Group>
                <Form.Label><b>Email Address</b></Form.Label>
                <Form.Control name="email" id="email" placeholder="name@example.com" ref={register} />
                {errors.email && <p className="error-msg">{errors.email.message}</p>}
            </Form.Group>

            <Form.Group>
                <Form.Label><b>Check-in</b></Form.Label>
                <Form.Control type="date" name="checkin" id="checkin" placeholder="name@example.com" ref={register} />
                {errors.checkin && <p className="error-msg">{errors.checkin.message}</p>}
            </Form.Group>

            <Form.Group>
                <Form.Label><b>Check-out</b></Form.Label>
                <Form.Control type="date" name="checkout" id="checkout" placeholder="name@example.com" ref={register} />
                {errors.checkout && <p className="error-msg">{errors.checkout.message}</p>}
            </Form.Group>





            <Button type="submit" variant="dark" className="submit-message">
                Submit
            </Button>
        </Form>
    );
}
