import {
  Button,
  Grid,
  Popover,
  Stack,
  Box,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const BottomHeader = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const btn = {
    "& .MuiInputBase-root": {
      "& > fieldset": {
        border: "none",
      },
    },
    height: "4vw",
  };
  return (
    <Grid className="bottomheader">
      <Stack direction="row" height="5.5rem" className="stack" flexWrap="wrap">
        <Button
          aria-describedby={id}
          startIcon={
            open ? (
              <i className="fa-sharp fa-solid fa-circle-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )
          }
          variant="contained"
          onClick={handleClick}
          sx={{
            backgroundColor: "#f6e264",
            color: "#252525",
            fontWeight: "bold",
            fontSize: "1rem",
            ":hover": {
              backgroundColor: "#f6e264",
              color: "#252525",
              fontWeight: "500",
              fontSize: "1rem",
            },
          }}
          className="category-btn"
        >
          Categories
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          className='popover'
        >
          <Grid className='categories'>
            <Typography className='category'>Bracelets</Typography>
            <Typography className='category'>Camera</Typography>
            <Typography className='category'>Earrings</Typography>
            <Typography className='category'>Electronics</Typography>
            <Typography className='category'>Fashion</Typography>
            <Typography className='category'>Handbag</Typography>
            <Typography className='category'>Laptop</Typography>
            <Typography className='category'>Mobiles</Typography>
            <Typography className='category'>Watches</Typography>
            <Typography className='category'>Sunglasses</Typography>
          </Grid>
        </Popover>
        <Grid display="flex" flexDirection="row" className="search">
          <Box component="form" noValidate autoComplete="off" width="60%">
            <TextField
              placeholder="Search Your Product"
              sx={btn}
              variant="outlined"
              className="input"
            />
          </Box>
          <Button
            sx={{
              backgroundColor: "#f6e264",
              color: "#252525",
              fontWeight: "bold",
              fontSize: "1rem",
              borderRadius: 0,
              width: "40%",
              ":hover": {
                backgroundColor: "#f6e264",
                color: "#252525",
                fontWeight: "500",
                fontSize: "1rem",
                borderRadius: 0,
              },
            }}
            className="search-btn"
          >
            Search
          </Button>
        </Grid>
        <Grid
          display="flex"
          flexDirection={"row"}
          flexWrap="wrap"
          justifyContent={"space-around"}
          className="cart-wish"
        >
          <Link to={"/estore/cart"}>
            <span className="fa-stack fa-2x has-badge" data-count="5">
              <i className="fa fa-circle fa-stack-2x fa-inverse"></i>
              <i className="fa fa-shopping-cart fa-stack-2x red-cart"></i>
            </span>
          </Link>
          <Link to={"/estore/wishlist"}>
            <span className="fa-stack fa-2x has-badge" data-count="1">
              <i className="fa fa-circle fa-stack-2x fa-inverse"></i>
              <i className="fa fa-heart fa-stack-2x red-cart"></i>
            </span>
          </Link>
        </Grid>
      </Stack>
    </Grid>
  );
};

export { BottomHeader };
