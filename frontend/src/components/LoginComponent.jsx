import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { login } from "../helpers/AuthService";

export const LoginComponent = ({ setCurrentUser }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const { username, password } = { ...user }

  const setValues = ({ target }) => {
    const { name, value } = target;
    setUser({ ...user, [ name ] : value })
  };

  const submitLogin = async (e) => {
    e.preventDefault();

    try {
      await login(username, password);
      setCurrentUser(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="center">
      <Form onSubmit={(e) => submitLogin(e)}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            name="username"
            onChange={setValues}
          />
          <Form.Text className="text-muted">
            We'll never share your username with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            name="password"
            onChange={setValues}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
