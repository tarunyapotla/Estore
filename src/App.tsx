import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Products } from "./components/Products";
import { HomePage } from "./pages/HomePage/home-page";
import { AccountPage } from "./pages/AccountPage/account-page";
import { CartPage } from "./pages/CartPage/cart-page";
import { WishListPage } from "./pages/WishlistPage/wishlist-page";
import { PlaceOrder } from "./pages/PlaceOrderPage/place-order-page";
import { CheckoutPage } from "./pages/CheckoutPage/checkout-page";
import { SummaryPage } from "./pages/SummaryPage/summary-page";
import { ContactPage } from "./pages/ContactPage/contact-page";
import { Footer } from "./components/Footer/footer";

function App() {
  const currentPath = window.location.pathname;

  return (
    <div className="App">
      <Header />
      {currentPath.includes("cart") ||
      currentPath.includes("checkout") ||
      currentPath.includes("summary") ? (
        <PlaceOrder />
      ) : null}
      <Routes>
        <Route path="/estore" element={<HomePage />} />
        <Route path="/estore/products" element={<Products />} />
        <Route path="/estore/contact-us" element={<ContactPage />} />
        <Route path="/estore/my-account" element={<AccountPage />} />
        <Route path="/estore/cart" element={<CartPage />} />
        <Route path="/estore/wishlist" element={<WishListPage />} />
        <Route path="/estore/checkout" element={<CheckoutPage />} />
        <Route path="/estore/summary" element={<SummaryPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
