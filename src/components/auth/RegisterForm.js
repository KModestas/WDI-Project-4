import React from 'react';
import {Alert} from 'react-bootstrap';

const RegisterForm = ({ handleChange, handleSubmit, user, errors }) => {
  return (
    <div>
      <div className="marginDiv"></div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          {errors.username && <Alert bsStyle="danger">{errors.username}</Alert>}
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            value={user.username}
            className="form-control"
          />
        </div>

        <div className="form-group">
          {errors.email && <Alert bsStyle="danger">{errors.email}</Alert>}
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={user.email}
            className="form-control"
          />
        </div>


        <div className="form-group">
          {errors.password && <Alert bsStyle="danger">{errors.password}</Alert>}
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={user.password}
            className="form-control"
          />

        </div>
        <div className="form-group">
          {errors.passwordConfirmation && <Alert bsStyle="danger">{errors.passwordConfirmation}</Alert>}
          <input
            type="password"
            name="passwordConfirmation"
            placeholder="Confirm Password"
            onChange={handleChange}
            value={user.passwordConfirmation}
            className="form-control"
          />
        </div>

        <button className="main-button">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
