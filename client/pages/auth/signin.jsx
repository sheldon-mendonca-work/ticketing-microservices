import axios from "axios";
import Router from 'next/router';
import { useState } from "react";
import useRequest from "../../hooks/use-request";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { doRequest, errors } = useRequest({
    url: '/api/users/signin',
    method: 'post',
    body: {
      email,
      password
    },
    onSuccess: () => Router.push('/')
  });

  const onSubmitHandler = async event => {
    event.preventDefault();

    await doRequest();
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <h1>Sign In</h1>
        <div className="form-group">
          <label htmlFor="email" className="email">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errors}
        <button className="btn btn-primary">Sign In</button>
      </form>
    </>
  );
};

export default SignIn;
