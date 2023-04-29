import {
  Card,
  Grid,
  Typography,
  Rating,
  Button,
  ButtonGroup,
} from "@mui/material";
import React from "react";
import "./view-product.css";

const ViewProduct = () => {
  return (
    <Card className="view-product">
      <Grid>Hi</Grid>
      <Grid className="grid-2">
        <Typography
          white-space="nowrap"
          fontWeight="bold"
          color="#FFFFFF"
          className="title"
        >
          Modern Yellow Chair
        </Typography>
        <Grid
          display="flex"
          justifyContent={"space-between"}
          flex-wrap="wrap"
          alignItems={"baseline"}
        >
          <Typography white-space="nowrap" color="#FFFFFF" className="price">
            Rs 420
          </Typography>
          <Rating value={4}></Rating>
        </Grid>
        <Typography>frfr ubfc bbyrf rfybbrf rfyfrfrf rfrfrfr</Typography>
        <Typography>frfr ubfc bbyrf rfybbrf rfyfrfrf rfrfrfr</Typography>
        <Grid
          display="flex"
          flexDirection="row"
          flex-wrap="wrap"
          columnGap="1.5rem"
        >
          <Grid>
            <Typography white-space="nowrap" color="#FFFFFF">
              QUANTITY
            </Typography>
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
          <Grid>
            <Typography white-space="nowrap" color="#FFFFFF">
              TOTAL PRICE
            </Typography>
            <Typography
              color="#FFFFFF"
              display="inline-flex"
              paddingTop=".4rem"
              white-space="nowrap"
            >
              Rs 8.40
            </Typography>
          </Grid>
        </Grid>
        <Grid display={"flex"} flexDirection="column" rowGap="1rem">
          <Button className="wishlist">ADD TO MY WISHLIST</Button>
          <Button className="cart">ADD TO CART</Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export { ViewProduct };
