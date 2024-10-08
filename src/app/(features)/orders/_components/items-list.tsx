import { DataTable } from "mantine-datatable";
import React, { useState } from "react";
import { lineItems } from "@/app/mock/order-list";
import { Badge, Menu, rem, TextInput, Flex, Button } from "@mantine/core";
import {
  IconDotsVertical,
  IconMessageCircle,
  IconPencil,
  IconTrash,
} from "@tabler/icons-react";
import { DateInput } from "@mantine/dates";
import Chat from "@/app/_components/chat";

function ItemsList() {
  const [activeRow, setActiveRow] = useState(-1);
  const [expandedRecordIds, setExpandedRecordIds] = useState<number[]>([]);
  return (
    <div className="rounded-lg bg-white p-4 mt-6 ">
      <h1 className="text-lg font-semibold pb-3 ">Items</h1>
      <div>
        <DataTable
          withTableBorder
          highlightOnHover
          borderRadius="md"
          verticalSpacing="md"
          records={lineItems.data}
          styles={{
            header: {
              color: "#AAAFB9",
              fontSize: "105%",
            },
            table: {
              color: "#665",
            },
          }}
          columns={[
            { accessor: "pos" },
            { accessor: "itemNumber", width: 150 },
            { accessor: "description" },
            { accessor: "quantity" },
            { accessor: "unit" },
            { accessor: "price" },
            { accessor: "deliverydate" },
            {
              accessor: "",
              width: "0%",
              render: (recored) => (
                <Menu
                  shadow="md"
                  width={44}
                  position="left-start"
                  withArrow={true}
                >
                  <Menu.Target>
                    <IconDotsVertical className="cursor-pointer" />
                  </Menu.Target>

                  <Menu.Dropdown>
                    <Menu.Item
                      onClick={() => setExpandedRecordIds([recored.id])}
                    >
                      <IconPencil
                        style={{
                          width: rem(16),
                          height: rem(16),
                        }}
                      />
                    </Menu.Item>
                    <Menu.Item>
                      <IconMessageCircle
                        style={{
                          width: rem(16),
                          height: rem(16),
                          color: "blue",
                        }}
                      />
                      <Chat />
                    </Menu.Item>
                    <Menu.Item>
                      <IconTrash
                        style={{
                          width: rem(16),
                          height: rem(16),
                          color: "red",
                        }}
                      />
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              ),
            },
          ]}
          rowExpansion={{
            trigger: "never",
            expanded: {
              recordIds: expandedRecordIds,
              onRecordIdsChange: setExpandedRecordIds,
            },
            collapseProps: {
              transitionDuration: 100,
              animateOpacity: true,
              transitionTimingFunction: "ease-out",
            },
            content: ({ record }) => (
              <Flex gap={20} align="flex-end" className="w-full">
                <TextInput
                  label="Quantity"
                  //   value={quantity}
                  //   onChange={(e) => setQuantity(parseFloat(e.target.value))}
                  type="number"
                  radius="md"
                  className="rounded-sm shadow-slate-50"
                  variant="filled"
                />
                <TextInput
                  label="Unit Price"
                  //   value={unitPrice}
                  //   onChange={(e) => setUnitPrice(parseFloat(e.target.value))}
                  type="number"
                  variant="filled"
                  radius="md"
                  className="rounded-sm shadow-slate-50"
                />
                <DateInput
                  label="Delivery Date"
                  radius="md"
                  variant="filled"
                  className="rounded-sm shadow-slate-50"
                />
                <TextInput
                  label="Remark"
                  //   value={quantity}
                  //   onChange={(e) => setQuantity(parseFloat(e.target.value))}
                  radius="md"
                  variant="filled"
                  className="rounded-sm shadow-slate-50 w-[16rem]"
                />
                <Button color="teal" variant="outline" radius="md" size="sm">
                  Save
                </Button>
                <Button
                  variant="outline"
                  color="gray"
                  radius="md"
                  size="sm"
                  onClick={() => setExpandedRecordIds([])}
                >
                  Cancel
                </Button>
              </Flex>
            ),
          }}
        />
      </div>
    </div>
  );
}

export default ItemsList;
