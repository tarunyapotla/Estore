import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import "./image-slider.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

const ImageSlider = () => {
  return (
    <Grid position="relative">
      <Grid width="100%">
        <img
          alt="banner1"
          className="banner"
          src="https://buywptemplates.com/demo/bwt-ecommerce-solution-pro/wp-content/themes/bwt-ecommerce-solution-pro/assets/images/slides/slide1.jpg"
        />
      </Grid>
      <ArrowBackIosNewIcon className="leftBtn" />
      <ArrowForwardIosIcon className="rightBtn" />
      <Link to={"/estore/products"} className="link">
        <Button>Get Started</Button>
      </Link>
      {/* <div className="column">
        <Typography>Up to 70% Off</Typography>
        <Typography>WOW COLLECTION</Typography>
        <Typography>Classic Headphones</Typography>
        <Typography>Up to 70% Off</Typography>
      </div> */}
      {/* <Button ></Button>
      <Button >{'>'}</Button> */}
    </Grid>
  );
};

export { ImageSlider };
