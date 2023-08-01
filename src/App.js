import "./App.css";
import HomePage from "./customer/Pages/HomePage/HomePage";
import Cart from "./customer/components/Cart/Cart";
import Checkout from "./customer/components/Checkout/Checkout";
import Footer from "./customer/components/Footer/Footer";
import Navigation from "./customer/components/Navigation/Navigation";
import Order from "./customer/components/Order/Order";
import Product from "./customer/components/Product/Product";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails";

function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        {/* <HomePage /> */}
        {/* <Product /> */}
        {/* <ProductDetails /> */}
        {/* <Cart /> */}
        {/* <Checkout /> */}
        <Order />
      </div>
      <Footer />
    </div>
  );
}

export default App;
