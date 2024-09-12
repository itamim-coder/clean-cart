"use client";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const TopeRated = () => {
  const TopProducts = [
    {
      id: "1",
      name: "Vim Dishwashing Bar",
      category: "Dishwashing Items",
      slug: "ultra-clean-dish-soap",
      description:
        "Highly effective dish soap that removes tough grease and food stains.",
      price: 5.99,
      rating: 4.8,
      imageUrl:
        "https://chaldn.com/_mpimage/vim-dishwashing-liquid-1-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D136339&q=best&v=1&m=400&webp=1",
      categorySlug: "dishwashing-items",
      flashSale: true,
    },
    {
      id: "2",
      name: "Surf Excel Washing Powder",
      category: "Laundry Products",
      slug: "stain-buster-laundry-detergent",
      description:
        "Powerful laundry detergent designed to eliminate stubborn stains.",
      price: 12.99,
      rating: 4.7,
      imageUrl:
        "https://chaldn.com/_mpimage/surf-excel-washing-powder-free-tiffin-box-2-pcs-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D160621&q=best&v=1&m=400&webp=1",
      categorySlug: "laundry-products",
      flashSale: true,
    },
    {
      id: "3",
      name: "Harpic Liquid Toilet Cleaners",
      category: "Toilet Cleaners",
      slug: "fresh-scent-toilet-cleaner",
      description:
        "Keep your toilet fresh and clean with this powerful toilet cleaner.",
      price: 6.99,
      rating: 4.6,
      imageUrl:
        "https://chaldn.com/_mpimage/harpic-liquid-toilet-cleaner-original-1-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D158613&q=best&v=1&m=400&webp=1",
      categorySlug: "toilet-cleaners",
      flashSale: true,
    },
    {
      id: "4",
      name: "Lizol Floors Cleaner",
      category: "Floor Cleaners",
      slug: "shiny-floors-cleaner",
      description:
        "Achieve spotless floors with this all-purpose floor cleaner.",
      price: 8.99,
      rating: 4.9,
      imageUrl:
        "https://chaldn.com/_mpimage/lizol-floor-cleaner-citrus-disinfectant-surface-1-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D127902&q=best&v=1&m=400&webp=1",
      categorySlug: "floor-cleaners",
      flashSale: true,
    },
    {
      id: "5",
      name: "Fresh Hand Towels",
      category: "Napkins & Paper Products",
      slug: "ultra-absorbent-paper-towels",
      description:
        "Strong, absorbent paper towels for all your cleaning needs.",
      price: 3.99,
      rating: 4.5,
      imageUrl:
        "https://chaldn.com/_mpimage/fresh-hand-towel-250x1-ply-1-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D113119&q=best&v=1&m=400&webp=1",
      categorySlug: "paper-products",
    },
    {
      id: "6",
      name: "Hit Cockroach Spray",
      category: "Pest Control",
      slug: "pest-be-gone-spray",
      description: "Effective pest control spray for your home.",
      price: 9.99,
      rating: 4.7,
      imageUrl:
        "https://chaldn.com/_mpimage/godrej-new-hit-cockroaches-spray-400-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D152402&q=best&v=1&m=400&webp=1",
      categorySlug: "pest-control",
    },
    {
      id: "7",
      name: "Fay Air Freshner",
      category: "Air Fresheners",
      slug: "fresh-breeze-air-freshener",
      description: "Fay Air Freshner",
      price: 4.99,
      rating: 4.6,
      imageUrl:
        "https://chaldn.com/_mpimage/fay-air-freshener-rose-3-in-1-300-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D109262&q=best&v=1&m=400&webp=1",
      categorySlug: "air-fresheners",
    },
  ];

  return (
    <div className="my-9 ">
      {" "}
      <p className="text-2xl font-bold underline text-primary mb-9">
        Top Products
      </p>
      <div className="grid grid-cols-12 gap-2 ">
        <div className="col-span-4 border rounded-lg">
          <p className="text-center font-bold mt-4 text-xl">
            Today Top Rated Products!
          </p>
          <div className="flex justify-center items-center">
            <Image
              alt="Card background"
              className="object-cover rounded-md"
              src={TopProducts[0].imageUrl}
              width={300}
              height={370}
            />
          </div>
          <div className="space-y-4">
            <p className="text-center text-xl font-bold">
              {TopProducts[0].name}
            </p>
            <p className="text-center text-md font-bold">
              {TopProducts[0].rating}
            </p>
            <p className="text-center text-md font-bold">
              ${TopProducts[0].price}
            </p>
          </div>
        </div>

        <div className="col-span-8 grid grid-cols-3">
          {" "}
          {TopProducts.slice(1, 7).map((item, index) => (
            <Card className="py-2  border-1 rounded-md  shadow-none transition-duration-[0.3s] ease-in-out hover:drop-shadow-lg">
              <CardBody className="py-0 px-2">
                <Image
                  alt="Card background"
                  className="object-cover h-full rounded-md"
                  src={item.imageUrl}
                  width={270}
                  height={270}
                />
              </CardBody>
              <CardHeader className="pb-0 pt-2 px-2 flex-col items-start">
                <p className="text-tiny uppercase font-bold">Daily Mix</p>
                <small className="text-default-500">12 Tracks</small>
                <h4 className="font-bold text-large">{item.name}</h4>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopeRated;
