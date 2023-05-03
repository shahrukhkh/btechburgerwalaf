import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from "./components/home/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Contact from "./components/contact/Contact";
import Cart from "./components/cart/Cart";
import Shpping from "./components/cart/Shipping";
import ConfirmOrder from "./components/cart/ConfirmOrder";
import PaymentSuccess from "./components/cart/PaymentSuccess";
import Login from "./components/login/Logiin";
import Profile from "./components/profile/Profile";
import MyOrders from "./components/myOrders/MyOrders";
import OrderDtails from "./components/myOrders/OrderDtails";
import Dashboard from "./components/admin/Dashboard";
import Users from "./components/admin/Users";
import Orders from "./components/admin/Orders";
import Abbout from "./components/about/Abbout";
import NotFound from "./components/layout/NotFound";
import { useEffect } from "react";
import {useDispatch,useSelector} from "react-redux";
import {loadUser} from "./redux/actions/user";
import toast, {Toaster} from "react-hot-toast";
import {ProtectedRoute} from "protected-route-react";



import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/menu.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";
import "./styles/confirmOrder.scss";
import "./styles/paymentSuccess.scss";
import "./styles/login.scss";
import "./styles/profile.scss";
import "./styles/table.scss";
import "./styles/orderDetails.scss";
import "./styles/dashboard.scss";
import "./styles/abbout.scss";




function App() {

  const dispatch= useDispatch();
  const {error,message,user,isAuthenticated} = useSelector(state=>state.auth);

  useEffect(()=>{
    dispatch(loadUser());
  },[dispatch]);

  useEffect(()=> {
    if(error){
      toast.error(error);
      dispatch({
        type:"clearError",
      });
    }
    if(message){
      toast.success(message);
      dispatch({
        type:"clearMessage",
      });
    }
  },[dispatch,error,message]);

  return (<Router>

    <Header isAuthenticated={isAuthenticated} />

    <Routes>

    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/about" element={<Abbout/>} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/paymentsuccess" element={<PaymentSuccess />} />
    
    <Route path="/login" element={
      <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/me"><Login /></ProtectedRoute>
    } />
    
    <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
      <Route path="/me" element={<Profile />} />
      <Route path="/shipping" element={<Shpping />} />
      <Route path="/confirmorder" element={<ConfirmOrder />} />
      <Route path="/myorders" element={<MyOrders />} />
      <Route path="/order/:id" element={<OrderDtails />} />
    </Route>
    
    
    
    
    <Route element={<ProtectedRoute isAuthenticated={isAuthenticated}
      adminRoute={true}
      isAdmin={user && user.role==="admin"}
      redirectAdmin="/me"
    />}>
    <Route path="/admin/dashboard" element={<Dashboard />} />
    <Route path="/admin/users" element={<Users />} />
    <Route path="/admin/orders" element={<Orders />} />
    </Route>
    
    
   
    
    
    
    
    <Route path="*" element={<NotFound />} />
    </Routes>

    <Footer />
    <Toaster />

  </Router>)
}

export default App;
