import { Button, Card, Grid, Rating, Typography } from "@mui/material";
import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart";
import Img1 from "../../images/1.jpg";
import "./product.css";
import { WishlistContext } from "../../contexts/wishlist";

type ProductProps = {
  id: number;
  name: string;
  price: number;
  rating: number;
};

const Product: React.FC<ProductProps> = (props) => {
  const { id, name, price, rating } = props;
  const cartContext = useContext(CartContext);
  const {
    state: { cartItems },
    addItemToCart,
    removeItemFromCart,
  } = cartContext;
  const isProductInCart = () => cartItems.some((c: any) => c.id === id);

  const wishlistContext = useContext(WishlistContext);
  const {
    state: { wishlistItems },
    removeFromWishlist,
  } = wishlistContext;
  const isProductInWishlist = () => wishlistItems.some((c: any) => c.id === id);

  const viewProduct = () => {
    
  };

  const item = { id, name, price, rating };
  return (
    <Card className="product-card" onClick={viewProduct} id={id.toString()}>
      <Grid className="prod-img">
        <img className="img" src={Img1} alt="img1" />
        <Grid className="prod-footer" flexDirection="column">
          <Typography fontWeight={"bold"} textAlign="start">
            {name}
          </Typography>
          <Grid display="flex" justifyContent={"space-between"}>
            <Typography fontWeight={"bold"}>{`₹ ${price}`}</Typography>
            <Rating name="simple-controlled" value={rating} />
          </Grid>
          {isProductInCart() ? (
            <Button
              className="cartBtn"
              onClick={() => removeItemFromCart(item)}
            >
              Remove From Cart
            </Button>
          ) : (
            <Button
              className="cartBtn"
              onClick={() => {
                addItemToCart(item);
                isProductInWishlist() && removeFromWishlist(item);
              }}
            >
              Add to Cart
            </Button>
          )}
        </Grid>
      </Grid>
      <Grid
        display="flex"
        position="relative"
        justifyContent={"flex-end"}
        flexDirection="column"
        className="prod-actions"
      >
        <Grid className="action">
          <Card className="action-txt">
            <Typography fontSize=".9rem">Add to Wishlist</Typography>
          </Card>
          <Card className="icon-card">
            <i className="fa fa-heart icon"></i>
          </Card>
        </Grid>
        <Grid className="action">
          <Card className="action-txt">
            <Typography fontSize=".9rem">Add to Cart</Typography>
          </Card>
          <Card className="icon-card">
            <i className="fa fa-shopping-cart icon"></i>
          </Card>
        </Grid>
        <Grid className="action">
          <Card className="action-txt">
            <Typography fontSize=".9rem">View Details</Typography>
          </Card>
          <Card className="icon-card">
            <i className="fa fa-eye icon"></i>
          </Card>
        </Grid>
      </Grid>
    </Card>
  );
};

export { Product };
