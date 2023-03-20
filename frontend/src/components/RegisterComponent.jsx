import { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { register } from "../helpers/AuthService";



export const RegisterComponent = ( { update_form_btn } ) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    firstname: "",
    lastname: "",
  });

  const { username, password, email, firstname, lastname } = { ...user };

  const setValues = ({ target }) => {
    const { name, value } = target;
    setUser({ ...user, [ name ] : value })
  };

  const submitRegistration = async (e) => {
    e.preventDefault();

    try {
      await register(username, password, email, firstname, lastname);
      update_form_btn();
    } catch (error) {
      console.log("************** error ********** ");
      console.error(error);
      console.log("************** error ********** ");
    }
  };

  return (
    <div className="center">
      <Form
      onSubmit={(e) => submitRegistration(e)}
      >
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            name="username"            
            onChange={setValues}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={setValues}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            name="email"    
            onChange={setValues}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicFirstname">
          <Form.Label>First name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter First name"
            value={firstname}
            name="firstname"            
            onChange={setValues}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLastname">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Last name"
            value={lastname}
            name="lastname"            
            onChange={setValues}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};
