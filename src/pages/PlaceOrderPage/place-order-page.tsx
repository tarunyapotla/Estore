import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import { CheckoutPage } from "../CheckoutPage/checkout-page";
import { SummaryPage } from "../SummaryPage/summary-page";
import { Route, Routes } from "react-router-dom";
import { WishListPage } from "../WishlistPage/wishlist-page";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "./place-order-page.css";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const PlaceOrder = () => {
  return (
    <div role="presentation" onClick={handleClick} style={{    background: '#f9f9f9'}}>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNextIcon />}
      >
        <Link to={"/estore/cart"} className="breadcrumb">
          Cart
        </Link>
        <Link to={"/estore/checkout"} className="breadcrumb">
          Checkout
        </Link>
        <Link to={"/estore/summary"} className="breadcrumb">
          Summary
        </Link>
      </Breadcrumbs>
      <Routes>
        <Route path="/estore/order/checkout" element={<CheckoutPage />} />
        <Route path="/estore/order/summary" element={<SummaryPage />} />
      </Routes>
    </div>
  );
};

export { PlaceOrder };
