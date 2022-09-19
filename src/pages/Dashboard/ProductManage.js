import React from "react";
import SideBar from "../../components/BackComponent/Siderbar/Sidebar";
import Header from "../../components/BackComponent/Header"
// import { FaListAlt, FaRupeeSign } from "react-icons/fa";

const ProductManage = () => {
  return (
    <>
      <div className="d-flex  " id="main">
        <SideBar></SideBar>

        <div className="w-100">
          <div className="main__content">
            <Header></Header>
            <div className="main__content-wrapper">
              <div className="row mt-4">
                <div className="search__field d-flex align-items-center justify-content-between mt-3">
                  <h4 className="fw-bold">Add product</h4>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control w-50"
                      placeholder="Search"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    ></input>
                    <button
                      className="input-group-text btn btn-second"
                      id="basic-addon2"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
              <div className="row d-flex align-items-center">
                <div className="col-md-4 mb-3">
                  <div className="form-group">
                    <label for="exampleInputEmail1">Product Name</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Product Name"
                    ></input>
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="form-group">
                    <label for="exampleInputEmail1">Quantity</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="XXX"
                    ></input>
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="form-group">
                    <label for="exampleInputEmail1">Price</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Rs. XXX"
                    ></input>
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="form-group">
                    <label for="exampleInputEmail1">Description</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="about product"
                    ></input>
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <button className="btn btn-primary mt-3">Add Product</button>
                </div>
              </div>
              <div className="row mt-4">
                <div className="table-responsive">
                  <table className="table ">
                    <thead className="">
                      <tr>
                        <th scope="col">SN</th>
                        <th scope="col">Id</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Ram Hari Koirala</td>
                        <td>Otto</td>
                        <td>ramhari@gmail.com</td>
                        <td>@Baneshwor,33 - Ktm</td>
                        <td>
                           <button className="btn btn-bg">Edit</button>
                        </td>
                      
                      </tr>
                   
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductManage;
