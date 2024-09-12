"use client";
import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function CustomCard({ props }) {
  console.log(props);

  return (
    <div className="gap-6 grid grid-cols-2 sm:grid-cols-4">
      {props.slice(0, 4).map((item, index) => (
        <Card
          // shadow="sm"
          key={index}
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible p-0 ">
            <Image
              isZoomed
              // shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              height={340}
              className="w-full object-cover h-100"
              src={item.imageUrl}
            />
          </CardBody>
          <CardFooter className="text-small justify-between shadow-none">
            <b>{item.name}</b>
            <p className="text-default-500">${item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
