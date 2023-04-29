import { Typography, Grid, Button } from "@mui/material";
import React, { useContext } from "react";
import { Product } from "../../components/Product";
import { WishlistContext } from "../../contexts/wishlist";
import "./wishlist-page.css";

const WishListPage = () => {
  const wishlistContext = useContext(WishlistContext);
  const {
    state: { wishlistItems },
    removeFromWishlist,
    clearAll,
  } = wishlistContext;

  return (
    <Grid className="container">
      <Grid className="subheader">
        <Typography className="title" fontSize="1.5rem" fontWeight="bold">
          My Wishlist
        </Typography>
        <Button className="clear-btn" onClick={clearAll}>
          Clear All
        </Button>
      </Grid>
      <Grid className="wishlist">
        {wishlistItems.map((item: any) => (
          <Product
            id={item.id}
            name={item.name}
            price={item.price}
            rating={item.rating}
          />
        ))}
        {/* <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product /> */}
      </Grid>
    </Grid>
  );
};

export { WishListPage };
