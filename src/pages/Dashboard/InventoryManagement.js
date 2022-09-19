import React from "react";
import SideBar from "../../components/BackComponent/Siderbar/Sidebar";
import Header from "../../components/BackComponent/Header";


const InventoryManagement = () => {
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
                  <h4 className="fw-bold">Inventory Management</h4>
                  <div className="input-group ">
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
              <div className="row mt-4">
                <div className="table-responsive">
                  <table className="table ">
                    <thead className="">
                      <tr>
                        <th scope="col">SN</th>
                        <th scope="col">Id</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Remaining Qty</th>
                        <th scope="col">Add Stock</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>123876</td>
                        <td>samsung Note Ulta 20 - 256 GB and 12GB RAM</td>
                        <td>20</td>
                        <td>data</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>123876</td>
                        <td>samsung Note Ulta 20 - 256 GB and 12GB RAM</td>
                        <td>20</td>
                        <td>data</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>123876</td>
                        <td>samsung Note Ulta 20 - 256 GB and 12GB RAM</td>
                        <td>20</td>
                        <td>data</td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>123876</td>
                        <td>samsung Note Ulta 20 - 256 GB and 12GB RAM</td>
                        <td>20</td>
                        <td>data</td>
                      </tr>
                    </tbody>
                  </table>
                  <button className="btn btn-second text-end">Save</button>
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
