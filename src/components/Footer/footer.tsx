import { Grid } from "@mui/material";
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <Grid className='footer-container'>
      <Grid className="footer">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-google"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-github"></i>
      </Grid>
    </Grid>
  );
};

export { Footer };
