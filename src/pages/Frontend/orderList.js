import React, { useState } from "react";
import Breadcumbs from "../../components/FrontComponent/Breadcrumbs";
import Layout from "./Layout/Layout";
import ProductImage from "../../assets/images/product1.svg";

const OrderList = () => {
  const [crumbs, setCrumbs] = useState(["Home", "View-Cart"]);
  const selected = (crumb) => {
    console.log(crumb);
  };
  return (
    <>
      <Layout>
        <div id="orderList">
          <div className="container">
            <Breadcumbs crumbs={crumbs} selected={selected}></Breadcumbs>
            <div className="section__title d-flex align-items-center justify-content-between">
              <h3>My Orders</h3>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="py-5">
                  <div className="table-responsive">
                    <table
                      className="table table-row-dashed table-row-gray-300 gy-7"
                      align="center"
                    >
                      <tbody>
                        <tr>
                          <td>
                            <img src={ProductImage} alt="" />
                          </td>
                          <td>
                            <h4>Baltra Frosty Air a 30 L</h4>
                          </td>
                          <td>Qty: 1</td>
                          <td>
                            <div className="status py-1">Pending</div>
                          </td>
                          <td>Order on 22 Jan 2022</td>
                          <td>$320,800</td>
                        </tr>
                        <tr>
                          <td>
                            <img src={ProductImage} alt="" />
                          </td>
                          <td>
                            <h4>Khind Bread Maker BM750</h4>
                          </td>
                          <td>Qty: 1</td>
                          <td>
                            <div className="status py-1">Pending</div>
                          </td>
                          <td>Order on 22 Jan 2022</td>
                          <td>$320,800</td>
                        </tr>
                        <tr>
                          <td>
                            <img src={ProductImage} alt="" />
                          </td>
                          <td>
                            <h4>Khind Automatic Rice Cooker 1.8Ltr RC181</h4>
                          </td>
                          <td>Qty: 1</td>
                          <td>
                            <div className="status py-1">Pending</div>
                          </td>
                          <td>Order on 22 Jan 2022</td>
                          <td>$320,800</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default OrderList;
