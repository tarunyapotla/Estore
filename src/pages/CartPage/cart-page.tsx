import {
  ButtonGroup,
  Button,
  Card,
  Grid,
  Box,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart";
import Img1 from "../../images/1.jpg";
import "./cart-page.css";
import { Link } from "react-router-dom";
import { WishlistContext } from "../../contexts/wishlist";

const CartPage = () => {
  const cartContext = useContext(CartContext);
  const {
    state: { cartItems },
    removeItemFromCart,
    changeQty,
    cartTotal,
  } = cartContext;
  const wishlistContext = useContext(WishlistContext);
  const { addToWishlist } = wishlistContext;

  console.log("cc", cartItems);
  return (
    <Grid>
      <Grid className="subheader">
        <Typography className="title" fontSize="1.5rem" fontWeight="bold">
          Cart
        </Typography>
        <Button className="clear-btn">Remove All</Button>
      </Grid>
      <Grid className="cart-container">
        <Box className="cart-product">
          {cartItems.map((item) => (
            <Card className="cart-grid1">
              <Grid className="prod">
                <img className="img" src={Img1} alt="img1" />
                <ButtonGroup
                  disableElevation
                  variant="contained"
                  aria-label="Disabled elevation buttons"
                  className="btn-grp"
                >
                  <Button
                    className="inc-btn"
                    onClick={() => {
                      changeQty(item, item.qty - 1);
                    }}
                  >
                    -
                  </Button>
                  <Typography white-space="nowrap">{item.qty}</Typography>
                  <Button
                    className="inc-btn"
                    onClick={() => {
                      changeQty(item, item.qty + 1);
                    }}
                  >
                    +
                  </Button>
                </ButtonGroup>
              </Grid>
              <Grid className="prod-info">
                <Typography fontSize="1.2rem">{item.name}</Typography>
                <Typography fontSize="1.4rem">{`₹ ${item.price}`}</Typography>
                <Typography color="green">In stock</Typography>
                <Typography>
                  <span className="span">Color: </span>Off White
                </Typography>
                <Typography>
                  <span className="span">Size: </span>XS
                </Typography>
                <Typography>
                  <span className="span">Total: </span>
                  {`₹ ${item.price * item.qty}`}
                </Typography>
                <Grid display={"flex"} columnGap="1rem" className="btn-grid">
                  <Button
                    className="remove-btn"
                    onClick={() => {
                      removeItemFromCart(item);
                    }}
                  >
                    Remove
                  </Button>
                  <Button
                    className="remove-btn"
                    onClick={() => {
                      removeItemFromCart(item);
                      addToWishlist(item);
                    }}
                  >
                    Move to wishlist
                  </Button>
                </Grid>
              </Grid>
            </Card>
          ))}

          {/* <Card className="cart-grid1">
            <Grid className="prod">
              <img className="img" src={Img1} alt="img1" />
              <ButtonGroup
                disableElevation
                variant="contained"
                aria-label="Disabled elevation buttons"
                className="btn-grp"
              >
                <Button className="inc-btn">-</Button>
                <Typography white-space="nowrap" color="#FFFFFF">
                  2
                </Typography>
                <Button className="inc-btn">+</Button>
              </ButtonGroup>
            </Grid>
            <Grid className="prod-info"></Grid>
          </Card>
          <Card className="cart-grid1">
            <Grid className="prod">
              <img className="img" src={Img1} alt="img1" />
              <ButtonGroup
                disableElevation
                variant="contained"
                aria-label="Disabled elevation buttons"
                className="btn-grp"
              >
                <Button className="inc-btn">-</Button>
                <Typography white-space="nowrap" color="#FFFFFF">
                  2
                </Typography>
                <Button className="inc-btn">+</Button>
              </ButtonGroup>
            </Grid>
            <Grid className="prod-info"></Grid>
          </Card> */}
        </Box>
        <Card className="summary-container">
          <Typography className="ord-title" fontWeight="bold">
            Order Summary
          </Typography>
          <Grid className="middle-grid">
            <Grid display="flex" justifyContent={"space-between"}>
              <Typography>Subtotal</Typography>
              <Typography fontWeight="bold">{`₹ ${cartTotal()}`}</Typography>
            </Grid>
            <Grid display="flex" justifyContent={"space-between"}>
              <Typography>Shipping</Typography>
              <Typography fontWeight="bold">Free</Typography>
            </Grid>
          </Grid>
          <Grid
            display="flex"
            justifyContent={"space-between"}
            className="bottom-grid"
          >
            <Typography fontWeight="bold">Total</Typography>
            <Typography fontWeight="bold">{`₹ ${cartTotal()}`}</Typography>
          </Grid>
          <Link to={"/estore/checkout"} className="link">
            <Button className="checkout-btn">Checkout</Button>
          </Link>
        </Card>
      </Grid>
    </Grid>
  );
};

export { CartPage };
