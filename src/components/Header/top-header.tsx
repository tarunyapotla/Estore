import React from "react";
import { Divider, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import "./header.css";
import PlaceIcon from "@mui/icons-material/Place";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const TopHeader = () => {
  return (
    <Grid className='topheader'>
      <Stack
        direction="row"
        height="3rem"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={4}
        className="stack"
      >
        <Grid width="60%" display="flex" justifyContent={"flex-start"}>
          <Typography
            className="text"
            fontWeight="bold"
            children="WELCOME TO ESTORE. HAPPY SHOPPING"
          />
        </Grid>
        <Grid display="flex" flex-direction="row" columnGap="0.2rem">
          <PlaceIcon className="svg" />
          <Typography className="text" children="Melbourn, Australia" />
        </Grid>
        <Grid display="flex" flex-direction="row" columnGap="0.2rem">
          <LocalShippingIcon className="svg" />
          <Typography className="text" children="Track your Order" />
        </Grid>
      </Stack>
    </Grid>
  );
};

export { TopHeader };
