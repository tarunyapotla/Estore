import React, { useState } from "react";
import { Divider, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";

const actions = [
  {
    id: "home",
    label: "Home",
  },
  {
    id: "products",
    label: "Our Store",
  },
  {
    id: "faq",
    label: "FAQ",
  },
  {
    id: "contact-us",
    label: "Contact Us",
  },
  {
    id: "my-account",
    label: "My account",
  },
];
const MiddleHeader = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleMenuClick = () => {
    let actionsContainer = document.getElementById("actions");
    if (actionsContainer) {
      if (openMenu) actionsContainer.style.cssText = "display:none";
      else {
        actionsContainer.style.cssText = "display:block";
      }
    }
    setOpenMenu(!openMenu);
  };

  return (
    <Grid className="middleheader">
      <Stack
        direction="row"
        height="5.5rem"
        divider={<Divider orientation="vertical" flexItem />}
        // spacing={4}
        className="stack"
      >
        <Grid>
          <a
            href="https://theclassictemplates.com/demo/classic-ecommerce/"
            className="custom-logo-link"
            rel="home"
            aria-current="page"
          >
            <img
              src="https://theclassictemplates.com/demo/classic-ecommerce/wp-content/uploads/2020/11/logo.png"
              className="custom-logo"
              alt="Classic Ecommerce"
              decoding="async"
            />
          </a>
        </Grid>
        <Grid
          flex-direction="row"
          flex-grow="shrink"
          columnGap={".5rem"}
          justifyContent="flex-end"
          width="100%"
          className={"actions"}
          id="actions"
        >
          {actions.map((act, idx) => (
            <Link to={`/estore/${idx !== 0 ? act.id : ""}`} className='link'>
              <Typography
                className={idx !== 0 ? "action" : "firstaction"}
                id={act.id}
              >
                {act.label}
              </Typography>
            </Link>
          ))}
        </Grid>
        <Grid
          display={"flex"}
          flex-direction="row"
          flex-grow="shrink"
          justifyContent="flex-end"
          width="100%"
          className={"toggle_btn"}
        >
          <div onClick={handleMenuClick}>
            {openMenu ? (
              <i className="fa-sharp fa-solid fa-circle-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </div>
        </Grid>
      </Stack>
    </Grid>
  );
};

export { MiddleHeader };
