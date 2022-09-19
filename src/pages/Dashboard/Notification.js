import React from "react";
import SideBar from "../../components/BackComponent/Siderbar/Sidebar";
import Header from "../../components/BackComponent/Header"

const Notification = () => {
  return (
    <>
      <div className="d-flex  " id="main">
        <SideBar></SideBar>

        <div className="w-100">
          <div className="main__content">
            <Header></Header>
            <div className="main__content-wrapper">
              <div className="row mt-5">
                <div className="search__field d-flex align-items-center justify-content-between">
                  <h4 className="fw-bold">Order</h4>

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
                <div className="table-responsive mt-4">
                  <table className="table ">
                    <thead className="">
                      <tr>
                        <th scope="col">SN</th>
                        <th scope="col">Particular</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Someone just order for samsung note ulta</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            aria-label="Default select example"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Someone just order for samsung note ulta</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            aria-label="Default select example"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Someone just order for samsung note ulta</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            aria-label="Default select example"
                          >
                            Delete
                          </button>
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

export default Notification;
