import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';

const FormComponent = () => {
  const navigate = useNavigate();
  const { register, formState: { errors }, handleSubmit } = useForm();

  const clickBotonIniciar = handleSubmit((data) => {
    navigate('/HomePage');
  });

  return (
    <div className="card m-5 p-4 align-items-center" style={{ maxWidth: '500px', margin: '0 auto'}}>
      <h2 className="card-title mb-4">Login</h2>
      <form onSubmit={clickBotonIniciar}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">User:</label>
          <input
            type="text"
            className="form-control"
            id="username"
            {...register('userName', {
              required: {
                value: true,
                message: "Please enter a username"
              },
              minLength: {
                value: 10,
                message: "The username must have a minimum of 10 characters"
              },
              maxLength: {
                value: 15,
                message: "The username must have a maximum of 15 characters"
              },
            })}
          />
          {errors.userName && (
            <span className="text-danger"> {errors.userName.message} </span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            {...register('password', {
              required: {
                value: true,
                message: "Please enter a password"
              },
              minLength: {
                value: 10,
                message: "The password must be at least 10 characters long"
              },
              maxLength: {
                value: 15,
                message: "The password must have a maximum of 15 characters"
              },
            })}
          />
          {errors.password && (
            <span className="text-danger"> {errors.password.message} </span>
          )}
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">Start</button>
        </div>
      </form>
      <div id="loginMessage" className="mt-3"></div>
    </div>
  );
}

export default FormComponent;

