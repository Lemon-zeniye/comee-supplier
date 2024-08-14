import { TextInput, Flex, Button } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import React from "react";

function OrderForm() {
  return (
    <div>
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
          label="Unit Price"
          //   value={unitPrice}
          //   onChange={(e) => setUnitPrice(parseFloat(e.target.value))}
          type="number"
          radius="md"
          className="w-full rounded-sm shadow-slate-50"
        />
        <DateInput
          label="Delivery Date"
          radius="md"
          className="w-full rounded-sm shadow-slate-50"
        />
        <TextInput
          label="Remark"
          //   value={quantity}
          //   onChange={(e) => setQuantity(parseFloat(e.target.value))}
          radius="md"
          className="w-full rounded-sm shadow-slate-50"
        />
      </Flex>
      <Flex gap={20} my={20} className="w-full">
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

export default OrderForm;
