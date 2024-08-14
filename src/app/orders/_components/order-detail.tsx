"use client";
import { orderLists } from "@/app/mock/order-list";
import { getStatusColor } from "@/utils/utils";
import { Badge, rem } from "@mantine/core";
import React, { useState } from "react";
import ItemsList from "./items-list";
import { IconPencil } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

function OrderDetailComponent() {
  const orderDetail = orderLists.data[0];
  const router = useRouter();

  const orderDetails = [
    {
      key: 1,
      label: "Order No.",
      value: orderDetail.orderNo,
    },
    {
      key: 2,
      label: "Order Date",
      value: orderDetail.orderDate,
    },
    {
      key: 3,
      label: "Final Delivery Date",
      value: orderDetail.finalDeliveryDate,
    },
    {
      key: 4,
      label: "Shipping Date",
      value: orderDetail.shippingDate,
    },
    {
      key: 5,
      label: "Final Destination",
      value: orderDetail.destination,
    },
    {
      key: 6,
      label: "Total Price",
      value: orderDetail.totalPrice?.toLocaleString("en-US", {
        style: "currency",
        currency: "EUR",
      }),
    },
    {
      key: 7,
      label: "Status",
      value: (
        <Badge color={getStatusColor("orderDetail.status")} variant="light">
          {orderDetail.status}
        </Badge>
      ),
    },
  ];
  return (
    <div>
      <div className="rounded-lg bg-white p-4 ">
        <div className="flex justify-between items-start">
          <h1 className="text-lg font-semibold pb-3">Order Details</h1>
          <IconPencil
            className="cursor-pointer"
            style={{
              width: rem(18),
              height: rem(18),
            }}
            onClick={() => router.push("/orders/new")}
          />
        </div>

        <div className="grid grid-cols-5 gap-4">
          {orderDetails.map((detailInfo) => (
            <div key={detailInfo.key}>
              <div className="text-sm text-[#AAAFB9] font-semibold ">
                {detailInfo.label}
              </div>
              <div className="font-semibold py-1 text-[0.8] ">
                {detailInfo.value}
              </div>
            </div>
          ))}
        </div>
      </div>
      <ItemsList />
    </div>
  );
}

export default OrderDetailComponent;
