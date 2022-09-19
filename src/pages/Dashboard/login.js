import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { TextField } from "../../components/TextField/TextField";
import * as Yup from "yup";

const Login = () => {
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string().required("password must contain at least 6 letter"),
  });

  let navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div id="dash__login">
          <div className="row d-flex align-items-center justify-content-between">
            <div className="col-md-5">
              <div className="dash__login-left">
                <div className="brand__logo text-center">
                  <img
                    src="https://cdn.logo.com/hotlink-ok/logo-social.png"
                    alt=""
                  />
                </div>
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  validationSchema={validate}
                  onSubmit={(values) => {
                    console.log(values);
                  }}
                >
                  {(formik) => (
                    <Form>
                      <div className="form-group">
                        <TextField label="Email" name="email" type="text" />
                      </div>
                      <div className="form-group">
                        <TextField
                          label="Password"
                          name="password"
                          type="password"
                        />
                      </div>
                      {/* <div className="bottom__form d-flex justify-content-between align-items-center">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          ></input>
                          <label
                            className="form-check-label"
                            for="flexCheckDefault"
                          >
                            Remember Me
                          </label>
                        </div>
                      </div> */}
                      <div className="my-3">
                        <button
                          className="btn btn-first btn-lg font-weight-medium auth-form-btn"
                          type="submit"
                          name="submit"
                          // onClick={() => navigate("/dashboard")}
                        >
                          Login
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
                <div className="dash__login-links mt-3">
                  {/* <a href=""> */}
                  <i className="fa-solid fa-arrow-left me-2"></i>Back to Home
                  {/* </a> */}
                </div>
              </div>
            </div>
            <div className="col-md-6 dash__login-img">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_960_720.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
