import {
  Card,
  Grid,
  Typography,
  TextField,
  TextareaAutosize,
  Button,
} from "@mui/material";
import React from "react";
import "./checkout-page.css";
import Img1 from "../../images/1.jpg";

const CheckoutPage = () => {
  return (
    <Grid className="checkout-container">
      <Card className="checkout">
        <Grid className="billing" display="flex" flexDirection="column">
          <Typography fontSize="1.75rem" color="#252525" fontWeight="600">
            Billing Details
          </Typography>
          <Grid display={"flex"} flexDirection="row" columnGap=".8rem">
            <TextField
              id="demo-helper-text-misaligned-no-helper"
              label="First Name"
            />
            <TextField
              id="demo-helper-text-misaligned-no-helper"
              label="Last Name"
            />
          </Grid>

          <TextareaAutosize minRows={"14"} maxRows={"14"}></TextareaAutosize>
          <TextField
            id="demo-helper-text-misaligned-no-helper"
            label="City"
            className="text"
          />
          <TextField
            id="demo-helper-text-misaligned-no-helper"
            label="State"
            className="text"
          />
          <TextField
            id="demo-helper-text-misaligned-no-helper"
            label="Country"
            className="text"
          />

          <TextField
            id="demo-helper-text-misaligned-no-helper"
            label="Postcode"
            className="text"
            type="number"
          />
          <TextField
            id="demo-helper-text-misaligned-no-helper"
            label="Phone"
            className="text"
            type="number"
          />
          <TextField
            id="demo-helper-text-misaligned-no-helper"
            label="Email address"
            className="text"
          />
        </Grid>
        <Grid className="billing" display="flex" flexDirection="column">
          <Typography fontSize="1.75rem" color="#252525" fontWeight="600">
            Your order
          </Typography>
          <Grid display="flex" flexDirection="row" columnGap='1rem'>
            <img className="img-small" src={Img1} alt="img1" />
            <Grid
              display="flex"
              flexDirection="column"
              columnGap={".1rem"}
              justifyContent="space-between"
            >
              <Typography fontWeight="bold" fontSize="1.5rem">
                Tshirt Women
              </Typography>
              <Typography>
                Qty:
                <span className="span">{" 3"} </span>
              </Typography>
              <Typography>
                Price:
                <span className="span">{" 3789"}</span>
              </Typography>
            </Grid>
          </Grid>
          <Typography fontSize='1.5rem'>
            Total: <span className="span">{" 3789"}</span>
          </Typography>
          <Button className="checkout-btn">Place Order</Button>
        </Grid>
      </Card>
    </Grid>
  );
};

export { CheckoutPage };
