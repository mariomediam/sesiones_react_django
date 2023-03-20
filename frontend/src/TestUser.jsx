import "./App.css";
import { useState } from "react";


import { LoginComponent } from "./components/LoginComponent";
import { LoggedComponent } from "./components/LoggedComponent";
import { RegisterComponent } from "./components/RegisterComponent";
import { MenuComponent } from "./components/MenuComponent";

export const TestUser = () => {
  const [currentUser, setCurrentUser] = useState();
  const [registrationToggle, setRegistrationToggle] = useState(false);

  const update_form_btn = () => {
    if (registrationToggle) {
      document.getElementById("form_btn").innerHTML = "Register";
      setRegistrationToggle(false);
    } else {
      document.getElementById("form_btn").innerHTML = "Log in";
      setRegistrationToggle(true);
    }
  };

  if (currentUser) {
    return <LoggedComponent setCurrentUser={setCurrentUser} />;
  }
  return (
    <div>
      <MenuComponent update_form_btn = {update_form_btn} />      
      {registrationToggle ? (
        <RegisterComponent update_form_btn={update_form_btn} />
      ) : (
        <LoginComponent setCurrentUser={setCurrentUser} />
      )}
    </div>
  );
};
