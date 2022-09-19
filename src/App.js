import Login from "./pages/Dashboard/login";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProductManage from "./pages/Dashboard/ProductManage";
import OrderMange from "./pages/Dashboard/OrderManage";
import InventoryManagement from "./pages/Dashboard/InventoryManagement";
import Notification from "./pages/Dashboard/Notification";
import ProfileDetails from "./pages/Dashboard/ProfileDetail";
import Home from "./pages/Frontend/home";
import Groceries from "./pages/Frontend/groceries";
import ViewCart from "./pages/Frontend/myCarts";
import ConfirmOrder from "./pages/Frontend/ConfirmOrder";
import OrderList from "./pages/Frontend/orderList";
import ProductDetail from "./pages/Frontend/productDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet";
import "./assets/scss/main.scss";

function App() {
  return (
    <>
      <Router>
        <ToastContainer></ToastContainer>
        <Helmet>
          <html lang="en" />
          <title>Ecommerce seo</title>
          <meta name="description" content="This is the seo website" />
          <meta name="theme-color" content="#E6E6FA" />
        </Helmet>
        <Routes>
          {/* Routes for user */}
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/groceries" element={<Groceries />} />
            <Route path="/view-cart" element={<ViewCart />} />
            <Route path="/confirm-order" element={<ConfirmOrder />} />
            <Route path="/order-list" element={<OrderList />} />
            <Route path="/product-detail" element={<ProductDetail />} />
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/login" element={<Login />} />
            <Route path="/product-management" element={<ProductManage />} />
            <Route path="/Notification" element={<Notification />} />
            <Route path="/order-management" element={<OrderMange />} />
            <Route
              path="/inventory-management"
              element={<InventoryManagement />}
            />
            <Route path="/profile" element={<ProfileDetails />} />
          </Route>

          {/* Routes for dashboard */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
