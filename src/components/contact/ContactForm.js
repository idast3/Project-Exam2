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
    message: yup.string().required("Message is required"),

});

export default function App() {
    const { register, handleSubmit, watch, errors } = useForm({
        validationSchema: schema
    });

    function onSubmit(data) {
        console.log("data", data);
    }

    console.log(watch("firstName"));

    return (
        <Form onSubmit={handleSubmit(onSubmit)} action="http://localhost:8080/hotel-booking/server/get-contacts.php">

            <h1>Contact us</h1>
            <Form.Group>
                <Form.Label><b>Full Name</b></Form.Label>
                <Form.Control id="clientName" name="clientName" placeholder="Enter your full name" ref={register} />
                {errors.clientName && <p className="error-msg">{errors.clientName.message}</p>}
            </Form.Group>


            <Form.Group>
                <Form.Label><b>Email</b></Form.Label>
                <Form.Control name="email" id="email" placeholder="name@example.com" ref={register} />
                {errors.email && <p className="error-msg">{errors.email.message}</p>}
            </Form.Group>

            <Form.Group>
                <Form.Label><b>Message</b></Form.Label>
                <Form.Control as="textarea" rows="4" name="message" id="message" placeholder="Enter a message" ref={register} />
                {errors.message && <p className="error-msg">{errors.message.message}</p>}
            </Form.Group>



            <Button type="submit" variant="dark" className="submit-message">
                Submit
            </Button>
        </Form>
    );
}
