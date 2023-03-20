import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

import { logout } from "../helpers/AuthService";
import { Whoami } from "./WhoamiComponent";

export const LoggedComponent = ({ setCurrentUser }) => {
  const submitLogout = async (e) => {
    e.preventDefault();
    await logout();
    setCurrentUser(false);
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Authentication App</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <form onSubmit={(e) => submitLogout(e)}>
                <Button type="submit" variant="light">
                  Log out
                </Button>
              </form>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Whoami />
    </div>
  );
};
