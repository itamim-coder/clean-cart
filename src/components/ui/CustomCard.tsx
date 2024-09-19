import React from "react";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import Link from "next/link";

export default function CustomCard({ item }) {
  console.log(item);
  return (
    <Link href={`${item.categorySlug}/${item._id}`}>
      <Card className="py-2 border-1 rounded-md shadow-none transition duration-[0.3s] ease-in-out hover:drop-shadow-lg">
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
          <p className="text-tiny uppercase font-bold">{item.price}</p>
          <h4 className="font-bold text-large">{item.name}</h4>
        </CardHeader>
      </Card>
    </Link>
  );
}
