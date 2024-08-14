import { Button, Flex, Select, Textarea, TextInput } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import React from "react";

//  "productName": "Wireless Mouse",
//     "originalPrice": 29.99,
//     "discountedPrice": 19.99,
//     "discountPercentage": 33.34,
//     "quantity": 100,
//     "productCode": "WM1234"

function ItemsForm() {
  return (
    <div className="rounded-xl bg-white p-4">
      <Flex gap={20} my={20} className="w-full">
        <TextInput
          label="Pos"
          //   value={quantity}
          //   onChange={(e) => setQuantity(parseFloat(e.target.value))}
          type="number"
          radius="md"
          className="w-full rounded-sm shadow-slate-50"
        />
        <TextInput
          label="Product Name"
          //   value={quantity}
          //   onChange={(e) => setQuantity(parseFloat(e.target.value))}
          radius="md"
          className="w-full rounded-sm shadow-slate-50"
        />
        <TextInput
          label="Product Code"
          //   value={quantity}
          //   onChange={(e) => setQuantity(parseFloat(e.target.value))}
          radius="md"
          className="w-full rounded-sm shadow-slate-50"
        />
      </Flex>
      <Flex gap={20} my={20} className="w-full">
        <TextInput
          label="Quantity"
          //   value={quantity}
          //   onChange={(e) => setQuantity(parseFloat(e.target.value))}
          type="number"
          radius="md"
          className="w-full rounded-sm shadow-slate-50"
        />
        <TextInput
          label="Original Price"
          //   value={quantity}
          //   onChange={(e) => setQuantity(parseFloat(e.target.value))}
          type="number"
          radius="md"
          className="w-full rounded-sm shadow-slate-50"
        />
        <TextInput
          label="Total Price"
          //   value={quantity}
          //   onChange={(e) => setQuantity(parseFloat(e.target.value))}
          type="number"
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
  );
}

export default ItemsForm;
