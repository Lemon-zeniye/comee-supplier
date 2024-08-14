"use client";
import { lineItems, orderLists, products } from "@/app/mock/order-list";
import { getStatusColor } from "@/utils/utils";
import { Badge, Menu, rem, TextInput, Flex, Button } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";

import {
  IconDotsVertical,
  IconMessageCircle,
  IconPencil,
  IconTrash,
} from "@tabler/icons-react";
import { DataTable } from "mantine-datatable";
import React, { useState } from "react";
import { DateInput } from "@mantine/dates";
import { useParams, useRouter } from "next/navigation";

function ProductDetailComponent() {
  const productDetail = products.data[0];
  const [activeRow, setActiveRow] = useState(-1);
  const [expandedRecordIds, setExpandedRecordIds] = useState<number[]>([]);
  const router = useRouter();
  const params = useParams();

  const orderDetails = [
    {
      key: 1,
      label: "Code",
      value: productDetail.productCode,
    },
    {
      key: 2,
      label: "Name",
      value: productDetail.name,
    },
    {
      key: 3,
      label: "Description",
      value: productDetail.description,
    },
    {
      key: 4,
      label: "Customs Description",
      value: productDetail.customsDescription,
    },
    {
      key: 5,
      label: "HS Description",
      value: productDetail.hsDescription,
    },
    {
      key: 6,
      label: "Preferred Unit",
      value: productDetail.preferredUnits,
    },
    {
      key: 7,
      label: "Weight (kg)",
      value: productDetail.weight,
    },
    // {
    //   key: 6,
    //   label: "Total Price",
    //   value: productDetail.totalPrice?.toLocaleString("en-US", {
    //     style: "currency",
    //     currency: "EUR",
    //   }),
    // },
    // {
    //   key: 7,
    //   label: "Status",
    //   value: (
    //     <Badge color={getStatusColor("productDetail.status")} variant="light">
    //       {productDetail.status}
    //     </Badge>
    //   ),
    // },
  ];
  return (
    <div>
      <div className="rounded-lg bg-white p-4 ">
        <div className="flex justify-between items-start">
          <h1 className="text-lg font-semibold pb-3">Product Details</h1>
          <IconPencil
            className="cursor-pointer"
            onClick={() => router.push(`/products/${params.id}/edit`)}
            style={{
              width: rem(18),
              height: rem(18),
            }}
          />
        </div>

        <div className="grid grid-cols-4 gap-10">
          <div className="col-span-1">
            <Carousel withIndicators height={250}>
              {productDetail?.urls.map((url: any, index) => (
                <Carousel.Slide key={index}>
                  <Image src={url} fit="contain" height={200} />
                </Carousel.Slide>
              ))}
            </Carousel>
          </div>
          <div className="grid grid-cols-4 gap-4 col-span-3">
            {orderDetails.map((detailInfo) => (
              <div key={detailInfo.key}>
                <div className="text-sm text-[#AAAFB9] font-semibold ">
                  {detailInfo.label}
                </div>
                <div className="font-semibold py-1 text-[0.8] leading-tight ">
                  {detailInfo.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailComponent;
