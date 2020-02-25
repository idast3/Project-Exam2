import React from "react";
import useForm from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useHistory } from "react-router-dom";

export default function LoginForm() {
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();
    const onSubmit = data => {
        localStorage.setItem("username", data.Username);
        history.push("/admin");
    };

    console.log(errors);

    return (
        <Container>

            <h1>Admin Login</h1>

            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Control id="Username" type="text" placeholder="Username" name="Username" ref={register({ required: true, min: 3, maxLength: 10 })} />

                <Form.Control id="Password" type="text" placeholder="Password" name="Password" ref={register({ required: true, maxLength: 20 })} />
                <Button type="submit" variant="dark" className="login-btn">
                    Sign in
                </Button>
            </Form>
        </Container>
    );
}
