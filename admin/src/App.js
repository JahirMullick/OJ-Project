
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet
} from "react-router-dom";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import OrderList from "./pages/orderList/OrderList";
import Order from "./pages/order/Order";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
// import { useSelector } from "react-redux";


const AppLayout = ({ admin }) => admin ? (
  <>
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
      </div>
      <Outlet />
    </div>

  </>
) : null;

// function App() {
//   // const admin = useSelector((state) => state.user.currentUser.isAdmin);
//   const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user || "{}")?.currentUser?.isAdmin;
//   return (
// <Router>
//   <Routes>
//     <Route path="/login" element={<Login />} />
//   </Routes>
//   <Topbar />
//   <div className="container">
//     <Sidebar />
//     <Routes>
//       <Route path="/" exact={true} element={<Home />} />
//       <Route path="/users" element={<UserList />} />
//       <Route path="/user/:userId" element={<User />} />
//       <Route path="/newUser" element={<NewUser />} />
//       <Route path="/products" element={<ProductList />} />
//       <Route path="/product/:productId" element={<Product />} />
//       <Route path="/newproduct" element={<NewProduct />} />
//     </Routes>
//   </div>
// </Router>







// }

// export default App;



function App() {
  const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user || "{}")?.currentUser?.isAdmin;

  // const admin = useSelector((state) => state.user.currentUser.isAdmin);

  return (
    // <Router>
    //   <Routes>
    //     <Route path="/login" element={<Login />} />
    //     {admin && (
    //       <>
    //         <Route path="/" element={<Topbar />} />
    //         <Route path="/" element={
    //           <>
    //             <div className="container">
    //               <Route index element={<Sidebar />} />
    //               <Route index element={<Home />} />
    //               <Route path="/users" element={<UserList />} />
    //               <Route path="/user/:userId" element={<User />} />
    //               <Route path="/newUser" element={<NewUser />} />
    //               <Route path="/productList" element={<ProductList />} />
    //               <Route path="/product/:productId" element={<Product />} />
    //               <Route path="/newProduct" element={<NewProduct />} />
    //             </div>
    //           </>
    //         } />
    //       </>
    //     )}
    //   </Routes>
    // </Router>

    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        {admin && (
          <>
            <Route path="/" element={<AppLayout admin={admin} />}>
              <Route index element={<Home />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/user/:userId" element={<User />} />
              <Route path="/newUser" element={<NewUser />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/product/:productId" element={<Product />} />
              <Route path="/newProduct" element={<NewProduct />} />
              <Route path="/orders" element={<OrderList />} />
              <Route path="/order/:orderId" element={<Order />} />
            </Route>
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;


