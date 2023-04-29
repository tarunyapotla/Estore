import { Grid } from "@mui/material";
import React from "react";
import { Product } from "../Product";
import "./products.css";

const productsData = [
  {
    id: 121,
    name: "Rayon a-line Dress",
    price: 453,
    rating: 4,
  },
];
const Products = () => {
  return (
    <Grid>
      <Grid className="products-list">
        {productsData.map((product) => (
          <Product
            id={product.id}
            name={product.name}
            price={product.price}
            rating={product.rating}
          />
        ))}
        {/* <Product />
        <Product />
        <Product />
        <Product />
        <Product /> */}
      </Grid>
    </Grid>
  );
};

export { Products };
