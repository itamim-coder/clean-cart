"use client";
import React from "react";
import Countdown from "../ui/Countdown";
import CustomCard from "../ui/CustomCard";

const FlashSale = () => {
  const flashsale = [
    {
      id: "1",
      name: "Ultra Clean Vacuum",
      description: "High-performance vacuum cleaner with advanced filtration.",
      price: 299.99,
      flashSale: true,
      createdAt: "2024-09-01T12:00:00Z",
      imageUrl:
        "https://img.freepik.com/premium-vector/set-different-types-mowers-including-one-them_873925-1370069.jpg?w=740",
    },
    {
      id: "2",
      name: "Eco-Friendly Mops",
      description: "Sustainable and highly absorbent mops for quick clean-ups.",
      price: 49.99,
      flashSale: true,
      createdAt: "2024-09-03T15:30:00Z",
      imageUrl:
        "https://img.freepik.com/premium-photo/mops-isolated_1242828-118.jpg?w=740",
    },
    {
      id: "3",
      name: "Heavy Duty Cleaner",
      description: "Industrial-grade cleaner for tough stains and grime.",
      price: 89.99,
      flashSale: true,
      createdAt: "2024-09-05T09:00:00Z",
      imageUrl:
        "https://img.freepik.com/free-photo/retro-vacuum-cleaner_23-2150711806.jpg?t=st=1726080936~exp=1726084536~hmac=b3de3f8480ef4830f299d53c1f7b64795f7af1f14f8cc040905911b816d3c615&w=360",
    },
    {
      id: "4",
      name: "All-Purpose Sprayer",
      description: "Versatile sprayer for all your cleaning needs.",
      price: 19.99,
      flashSale: true,
      createdAt: "2024-09-07T11:45:00Z",
      imageUrl:
        "https://img.freepik.com/premium-vector/pest-control-sprayer-cartoon-vector-set-white-background-isolated_873925-2073129.jpg?w=740",
    },
    {
      id: "5",
      name: "Microfiber Cloths (10-pack)",
      description: "Highly absorbent microfiber cloths for detailed cleaning.",
      price: 29.99,
      flashSale: true,
      createdAt: "2024-09-10T14:20:00Z",
      imageUrl:
        "https://img.freepik.com/free-photo/woman-cleaning-floors-with-rag_23-2148465025.jpg?t=st=1726081283~exp=1726084883~hmac=49495f849de075c9b53384152ee273b46dbb1c6b00607bc0d0766f8ae1f614bb&w=996",
    },
    {
      id: "6",
      name: "Compact Dustpan Set",
      description: "Space-saving dustpan and brush set for quick clean-ups.",
      price: 14.99,
      flashSale: true,
      createdAt: "2024-09-12T10:00:00Z",
      imageUrl:
        "https://img.freepik.com/free-vector/surface-cleaning-equipment_23-2148523523.jpg?t=st=1726081328~exp=1726084928~hmac=00cce5029c5152fc96e373ae4fd55c9ab8e44789c3ec6b519aea9039d33f4f17&w=740",
    },
  ];

  return (
    <>
      <div className="my-9">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-5">
            <p className="text-2xl font-bold underline text-primary">
              Flash Sale
            </p>
            <Countdown />
          </div>
          <div>See More</div>
        </div>
        <div className="mt-12">
          <CustomCard props={flashsale} />
        </div>
      </div>
    </>
  );
};

export default FlashSale;
