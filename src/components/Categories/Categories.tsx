"use client";
import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import Link from "next/link";

export default function Categories() {
  const categories = [
    {
      id: "1",
      name: "Dishwashing Items",
      slug: "dishwashing-items",
      description:
        "Find everything you need for spotless dishes, including soaps, sponges, and dishcloths.",
      imageUrl:
        "https://chaldn.com/_mpimage/dishwashing-supplies?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D83456&q=best&v=1&m=400&webp=1g",
    },
    {
      id: "2",
      name: "Laundry Products",
      slug: "laundry-products",
      description:
        "High-quality laundry detergents, fabric softeners, and stain removers.",
      imageUrl:
        "https://chaldn.com/_mpimage/laundry?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D163519&q=best&v=1&m=400&webp=1",
    },
    {
      id: "3",
      name: "Toilet Cleaners",
      slug: "toilet-cleaners",
      description:
        "Strong and effective toilet cleaners to keep your bathroom fresh and sanitized.",
      imageUrl:
        "https://chaldn.com/_mpimage/toilet-cleaners?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D160180&q=best&v=1&m=400&webp=1",
    },
    {
      id: "4",
      name: "Floor Cleaners",
      slug: "floor-cleaners",
      description:
        "Powerful cleaners for all types of floors, ensuring a deep clean and shine.",
      imageUrl:
        "https://chaldn.com/_mpimage/floor-glass-cleaners?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D163517&q=best&v=1&m=400&webp=1",
    },
    {
      id: "5",
      name: "Napkins & Paper Product",
      slug: "paper-products",
      description:
        "Clear and streak-free solutions for windows and glass surfaces.",
      imageUrl:
        "https://chaldn.com/_mpimage/napkins-paper-products?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D35249&q=low&v=1&m=400&webp=1",
    },
    {
      id: "6",
      name: "Pest Control",
      slug: "pest-control",
      description:
        "Versatile cleaning solutions for various surfaces around your home.",
      imageUrl:
        "https://chaldn.com/_mpimage/pest-control?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D163526&q=best&v=1&m=400&webp=1",
    },
    {
      id: "7",
      name: "Air Fresheners",
      slug: "air-fresheners",
      description:
        "Products designed specifically to tackle grease and grime in the kitchen.",
      imageUrl:
        "https://chaldn.com/_mpimage/air-fresheners?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D35234&q=best&v=1&m=400&webp=1",
    },
  ];

  return (
    <div className="my-9">
      <p className="text-2xl font-bold underline text-primary mb-9">Categories</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((item) => (
          <Card
            key={item.id}
            isFooterBlurred
            radius="lg"
            className="border-none"
          >
            <Image
              isZoomed
              alt="Woman listening to music"
              className="object-cover"
              height={300}
              src={item.imageUrl}
              width={300}
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny font-bold text-black/80">{item.name}</p>
              <Button
                as={Link}
                href={`/${item.slug}`}
                className="text-tiny text-white bg-black/20"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                Notify me
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
