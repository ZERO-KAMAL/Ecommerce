import React from "react";
import SideBar from "../../components/BackComponent/Siderbar/Sidebar";
import Header from "../../components/BackComponent/Header";
import { Formik, Form } from "formik";
import { TextField } from "../../components/TextField/TextField";
import * as Yup from "yup";

const InventoryManagement = () => {
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    oldpassword: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
    newpassword: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
  });
  return (
    <>
      <div className="d-flex" id="main">
        <SideBar></SideBar>

        <div className="w-100">
          <div className="main__content">
            <Header></Header>
            <div className="main__content-wrapper">
              <div className="row d-flex justify-content-center py-5">
                <div className="col-md-4 col-sm-6 ">
                  <Formik
                    initialValues={{
                      email: "",
                      oldpassword: "",
                      newpassword: "",
                      confirmPassword: "",
                    }}
                    validationSchema={validate}
                    onSubmit={values => {
                      console.log(values)
                    }}
                  >
                    {(formik) => (
                      <div>
                        <h3 className="title text-center mb-3">
                          Update Login password
                        </h3>
                        <Form>
                          <div className="form-group">
                            <TextField
                              label="Email"
                              name="email"
                              type="email"
                            />
                          </div>
                          <div className="form-group mt-3">
                            <TextField
                              label="Old Password"
                              name="oldpassword"
                              type="password"
                            />
                          </div>
                          <div className="form-group mt-3">
                            <TextField
                              label="New Password"
                              name="newpassword"
                              type="password"
                            />
                          </div>
                          <div className="form-group mt-3">
                            <TextField
                              label="Confirm Password"
                              name="confirmPassword"
                              type="password"
                            />
                          </div>

                          <button
                            type="submit"
                            className=" w-100 mt-4 btn btn-first"
                          >
                            Update
                          </button>
                        </Form>
                      </div>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InventoryManagement;
