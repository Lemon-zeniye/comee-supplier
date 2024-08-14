"use client";
import { listOfOffers, offerItemList } from "@/app/mock/offer-list";
import { getStatusColor } from "@/utils/utils";
import { Badge, rem } from "@mantine/core";
import { IconPencil } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import React from "react";
import OfferItemList from "./offer-item-list";

function OfferDetailComponent() {
  const offerDetail = listOfOffers.data[0];
  const router = useRouter();

  const orderDetails = [
    {
      key: 1,
      label: "Offer Title",
      value: offerDetail.offerTitle,
    },
    {
      key: 2,
      label: "Target Sellers",
      value: offerDetail.targetSellers,
    },
    {
      key: 3,
      label: "Validity Period",
      value: offerDetail.validityPeriod,
    },
    {
      key: 4,
      label: "Offer Description",
      value: offerDetail.offerDescription,
    },
    {
      key: 5,
      label: "Original Price",
      value: offerDetail.totalPrice?.toLocaleString("en-US", {
        style: "currency",
        currency: "EUR",
      }),
    },
    {
      key: 6,
      label: "Total Discount",
      value: offerDetail.totalDiscount?.toLocaleString("en-US", {
        style: "currency",
        currency: "EUR",
      }),
    },
    {
      key: 7,
      label: "Total Price",
      value: (
        offerDetail.totalPrice - offerDetail.totalDiscount
      )?.toLocaleString("en-US", {
        style: "currency",
        currency: "EUR",
      }),
    },
    {
      key: 8,
      label: "Status",
      value: (
        <Badge color={getStatusColor("offerDetail.status")} variant="light">
          {offerDetail.status}
        </Badge>
      ),
    },
  ];
  return (
    <div>
      <div className="rounded-lg bg-white p-4 ">
        <div className="flex justify-between items-start">
          <h1 className="text-lg font-semibold pb-3">Offer Details</h1>
          <IconPencil
            className="cursor-pointer"
            style={{
              width: rem(18),
              height: rem(18),
            }}
            onClick={() => router.push(`/offers/${offerDetail.id}/edit`)}
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
      <OfferItemList />
    </div>
  );
}

export default OfferDetailComponent;
