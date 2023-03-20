import { useEffect, useState } from "react";

import { whoAmi } from "../helpers/AuthService";

export const Whoami = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
  });

  const { username, email, first_name, last_name } = { ...user };

  const getUser = async () => {
    const data = await whoAmi();
    setUser({ ...data });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          <small>username: </small>
          {username}
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">{`${first_name} ${last_name}`}</h6>
        <p className="text-info">{email}</p>
      </div>
    </div>
  );
};
