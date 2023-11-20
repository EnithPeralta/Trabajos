import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
const FormComponent = () => {
  const navigate = useNavigate()
  const { register, formState: { errors }, handleSubmit } = useForm();


  const clickBotonIniciar = handleSubmit((data) => {
    navigate('/HomePage');
  });

  return (
    <form onSubmit={clickBotonIniciar} className="container mt-5 p-10"  >
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h2 className="mb-4">Login</h2>
          <form id="loginForm">
            <div className="mb-3">
              <label htmlFor="username" className="form-label"> User:</label>
              <input
                type="text" className="form-control" id="username" name="username"
                {...register('userName',
                  {
                    required: {
                      value: true,
                      message: "Please enter a password"
                    },
                    minLength: {
                      value: 10,
                      message: "The user must have a minimum of 10 characters"
                    },
                    maxLength: {
                      value: 15,
                      message: "The user must have a maximum of 15 characters"
                    },
                  })
                } />
              {errors.userName && (
                <span className="text-danger"> {errors.userName.message} </span>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password:</label>
              <input
                type="password" className="form-control" id="password" name="password"
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
                })
                } />
              {errors.password && (
                <span className="text-danger"> {errors.password.message} </span>
              )}
            </div>  
            <button onClick={clickBotonIniciar}
              className="btn btn-outline-info">Start</button>
          </form>
          <div id="loginMessage" className="mt-3"></div>
        </div>
      </div>
    </form>
  )
}
export default FormComponent;