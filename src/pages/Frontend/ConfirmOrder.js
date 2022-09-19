import React from "react";
import Layout from "./Layout/Layout";
import { Formik, Form } from "formik";
import { TextField } from "../../components/TextField/TextField";
import * as Yup from "yup";

const ConfirmOrder = () => {
  const validate = Yup.object({
    fullname: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    phonenumber: Yup.string().required("phonenumber is required"),
  });
  return (
    <>
      <Layout>
        <div id="confirmorder">
          <div className="container">
            <div className="row d-flex justify-content-center py-5">
              <div className="col-md-4 ">
                <Formik
                  initialValues={{
                    fullname: "",
                    address: "",
                    phonenumber: "",
                    email: "",
                  }}
                  validationSchema={validate}
                  onSubmit={(values) => {
                    console.log(values);
                  }}
                >
                  {(formik) => (
                    <div className="">
                      <h3 className="title text-center mb-3">
                        Confirm Your Order
                      </h3>
                      <Form>
                        <TextField
                          label="Fullname"
                          name="fullname"
                          type="text"
                        />
                        <TextField
                          label="Address"
                          name="address"
                          type="text"
                        />
                        <TextField
                          label="Phonenumber"
                          name="phonenumber"
                          type="number"
                        />
                        <TextField label="Email" name="email" type="email" />            
                        <button
                          type="submit"
                          className=" w-100 mt-4 btn btn-first"
                        >
                          Confirm
                        </button>
                      </Form>
                    </div>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ConfirmOrder;
