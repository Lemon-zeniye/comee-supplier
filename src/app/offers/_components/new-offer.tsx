import { Button, Flex, Select, Textarea, TextInput } from "@mantine/core";
import { DateInput, DatePickerInput } from "@mantine/dates";
import React from "react";
import ItemsForm from "./items-form";
import ItemsList from "./offer-item-list";

//  offerTitle: "Winter Clearance Sale",
//       validityPeriod: "2024-12-01 to 2024-12-31",
//       targetSellers: "LMN Home Goods",
//       offerDescription:
//         "Clearance sale on winter items. Don’t miss out on these great deals!",
//       minTotalQuantity: 75,
//       totalPrice: 3500,
//       totalDiscount: 800,
//       status: "declined",

function NewOfferComponent() {
  return (
    <div>
      <div className="rounded-xl bg-white p-4">
        <Flex gap={20} my={20} className="w-full">
          <TextInput
            label="Offer Title"
            //   value={quantity}
            //   onChange={(e) => setQuantity(parseFloat(e.target.value))}
            radius="md"
            className="w-full rounded-sm shadow-slate-50"
          />
          <Select
            label="Target Sellers"
            placeholder="Target Sellers"
            radius="md"
            className="w-full rounded-sm shadow-slate-50"
          />
          <DatePickerInput
            label="Validity Period"
            type="range"
            //   value={unitPrice}
            //   onChange={(e) => setUnitPrice(parseFloat(e.target.value))}
            radius="md"
            className="w-full rounded-sm shadow-slate-50"
          />
        </Flex>
        <Flex gap={20} my={20} className="w-full">
          <TextInput
            label="Discount Percentage"
            //   value={quantity}
            //   onChange={(e) => setQuantity(parseFloat(e.target.value))}
            type="number"
            rightSection="%"
            radius="md"
            className="w-full rounded-sm shadow-slate-50"
          />
          <Textarea
            label="Offer Description"
            //   value={quantity}
            //   onChange={(e) => setQuantity(parseFloat(e.target.value))}
            radius="md"
            className="w-full rounded-sm shadow-slate-50"
          />
        </Flex>
        <Flex gap={20} my={20} justify="flex-end" className="w-full">
          <Button color="teal" variant="outline" radius="md" size="sm">
            Save
          </Button>
          <Button variant="outline" color="gray" radius="md" size="sm">
            Cancel
          </Button>
        </Flex>
      </div>
      <div className="rounded-xl bg-white p-4 mt-5">
        <ItemsForm />
        <ItemsList />
      </div>
    </div>
  );
}

export default NewOfferComponent;
