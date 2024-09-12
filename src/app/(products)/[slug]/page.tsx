import React from "react";

const Products = async ({ params }) => {
  console.log(params);
  const res = await fetch(
    `http://localhost:5000/products/by-category/?categorySlug=${params.slug}`,
    {
      cache: "no-store",
    }
  );
  const products = await res.json();
  console.log(products);
  return <div>Products {products[0].name}</div>;
};

export default Products;
