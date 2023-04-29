import React from "react";
import {
  Card,
  Grid,
  Typography,
  TextField,
  TextareaAutosize,
  Button,
} from "@mui/material";
import "./contact-page.css";

const ContactPage = () => {
  return (
    <Grid className="contact-grid">
      <Card className="contact-card">
        <Typography fontSize="2rem" fontWeight={"bold"} color="#252525">
          Contact Us
        </Typography>
        <Typography color= '#999'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          sollicitudin, tellus vitae condimentum egestas, libero dolor auctor
          tellus, eu consectetur neque elit quis nunc. Cras elementum pretium
          est.
        </Typography>
        <Grid display="flex" flexDirection={"column"} rowGap="1rem">
          <Grid display="flex" flexDirection={"row"} columnGap="1rem">
            <TextField
              id="demo-helper-text-misaligned-no-helper"
              label="First Name"
              className="textfield"
            />
            <TextField
              id="demo-helper-text-misaligned-no-helper"
              label="Last Name"
              className="textfield"
            />
          </Grid>
          <Grid display="flex" flexDirection={"row"} columnGap="1rem">
            <TextField
              id="demo-helper-text-misaligned-no-helper"
              label="Enter Email-Id"
              className="textfield"
            />
            <TextField
              id="demo-helper-text-misaligned-no-helper"
              label="First Name"
              className="textfield"
            />
          </Grid>
          <TextareaAutosize minRows={"14"} maxRows={"14"}></TextareaAutosize>
          <Button className="submit-btn">Submit</Button>
        </Grid>
      </Card>
    </Grid>
  );
};

export { ContactPage };
