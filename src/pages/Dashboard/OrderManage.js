import React from "react";
import SideBar from "../../components/BackComponent/Siderbar/Sidebar";
import Header from "../../components/BackComponent/Header";

const OrderManage = () => {
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
                <div className="table-responsive mt-4">
                  <table className="table ">
                    <thead className="">
                      <tr>
                        <th scope="col">SN</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Phone no</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        <th scope="col">
                          <span className=""> Product Detail</span>
                          <div className="d-flex pt-2 align-items-center justify-content-between sub-table" >
                            <div className="col-3 text-center sub-table-th ">Id</div>
                            <div className="col-3 text-center sub-table-th ">Name</div>
                            <div className="col-3 text-center sub-table-th">Qty</div>
                            <div className="col-3 text-center sub-table-th">Rs.</div>
                          </div>
                        </th>
                        <th scope="col">status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Ram Hari Koirala</td>
                        <td>Otto</td>
                        <td>ramhari@gmail.com</td>
                        <td>@Baneshwor,33 - Ktm</td>
                        <td className="d-flex align-items-center sub-table-col">
                          <div className="col-3 text-center ">234</div>
                          <div className="col-3 text-center ">
                            samsung Note 20
                          </div>
                          <div className="col-3 text-center ">1</div>
                          <div className="col-3 text-center">9000 </div>
                        </td>
                        <td>
                          <select
                            className="form-select "
                            aria-label="Default select example"
                          >
                            <option value="1">Pending</option>
                            <option selected value="2">
                              Success
                            </option>
                            <option value="3">cancel</option>
                          </select>
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

export default OrderManage;
