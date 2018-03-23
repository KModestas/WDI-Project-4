import React from 'react';

const RegisterForm = ({ handleChange, handleSubmit, user, errors }) => {
  return (
    <div>
      <div className="marginDiv"></div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            value={user.username}
            className="form-control"
          />
          {errors.username && <p style={{color: 'red'}}>{errors.username}</p>}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={user.email}
            className="form-control"
          />
        </div>
        {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={user.password}
            className="form-control"
          />
          {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}
        </div>
        <div className="form-group">
          <input
            type="password"
            name="passwordConfirmation"
            placeholder="Confirm Password"
            onChange={handleChange}
            value={user.passwordConfirmation}
            className="form-control"
          />
          {errors.passwordConfirmation && <p style={{color: 'red'}}>{errors.passwordConfirmation}</p>}
        </div>

        <button className="main-button">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
