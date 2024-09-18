"use client";
import Container from "@/components/ui/Container";
import CustomCard from "@/components/ui/CustomCard";
import { Checkbox, CheckboxGroup } from "@nextui-org/react";
import React, { useState, useEffect } from "react";

const Products = ({ params }) => {
  // Define price and rating ranges
  const priceRanges = {
    "Under $10": [0, 10],
    "$10 - $50": [10, 50],
    "Above $50": [50, Infinity],
  };

  const ratingRanges = {
    "1 Star & Up": 1,
    "2 Stars & Up": 2,
    "3 Stars & Up": 3,
    "4 Stars & Up": 4,
    "5 Stars": 5,
  };

  // State for products, selected price & ratings, and filtered products
  const [products, setProducts] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch products based on category slug
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(
        `http://localhost:5000/products/by-category/?categorySlug=${params.slug}`,
        {
          cache: "no-store",
        }
      );
      const data = await res.json();
      setProducts(data); // Save fetched products
      setFilteredProducts(data); // Set initial filtered products
    };

    fetchProducts();
  }, [params.slug]);

  // Handle filtering based on selected price range and ratings
  useEffect(() => {
    let filtered = products;

    // Apply price filter if selected
    if (selectedPrices.length > 0) {
      filtered = filtered.filter((product) => {
        return selectedPrices.some((range) => {
          const [min, max] = priceRanges[range];
          return product.price >= min && product.price < max;
        });
      });
    }

    // Apply rating filter if selected
    if (selectedRatings.length > 0) {
      filtered = filtered.filter((product) => {
        return selectedRatings.some(
          (rating) => product.rating >= ratingRanges[rating]
        );
      });
    }

    setFilteredProducts(filtered);
  }, [selectedPrices, selectedRatings, products]);

  return (
    <div>
      <Container>
        <div className="flex gap-6 my-12">
          {/* Sidebar with fixed width */}
          <div className="w-64 border-r-2">
            <p className="font-bold">Filter by Price</p>
            <div className="flex flex-col gap-3">
              <CheckboxGroup
                label="Select Price Range"
                color="warning"
                value={selectedPrices}
                onValueChange={setSelectedPrices}
              >
                {Object.keys(priceRanges).map((range) => (
                  <Checkbox key={range} value={range}>
                    {range}
                  </Checkbox>
                ))}
              </CheckboxGroup>
            </div>
            <div className="mt-9">
              <p className="font-bold">Filter by Rating</p>
              <div className="flex flex-col gap-3">
                <CheckboxGroup
                  label="Select Rating"
                  color="warning"
                  value={selectedRatings}
                  onValueChange={setSelectedRatings}
                >
                  {Object.keys(ratingRanges).map((range) => (
                    <Checkbox key={range} value={range}>
                      {range}
                    </Checkbox>
                  ))}
                </CheckboxGroup>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-grow">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredProducts?.map((item) => (
                <CustomCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Products;
