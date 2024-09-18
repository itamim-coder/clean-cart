
import React from "react";
import Countdown from "../ui/Countdown";
import CustomCard from "../ui/CustomCard";

const FlashSale = async () => {
  const res = await fetch(`http://localhost:5000/flashsale-products`, {
    cache: "no-store",
  });
  const flashsale = await res.json();

  return (
    <>
      <div className="my-9">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-5">
            <p className="text-2xl font-bold underline text-primary">Flash Sale</p>
            <Countdown />
          </div>
          <div>See More</div>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {flashsale.map((item) => (
            <CustomCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FlashSale;
