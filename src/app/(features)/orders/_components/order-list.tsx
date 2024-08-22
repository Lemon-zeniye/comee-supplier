"use client";
import { DataTable } from "mantine-datatable";
import { useState } from "react";
import { orderLists } from "@/app/mock/order-list";
import { Badge, Divider, Flex, TextInput } from "@mantine/core";
import { IconChevronRight, IconSearch } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { getStatusColor } from "@/utils/utils";

function OrderList() {
  const router = useRouter();
  const [collection, setCollection] = useState<any>({
    page: 1,
    per_page: 10,
  });
  const PAGE_SIZES = [10, 20, 50, 100];
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
  const onPaginationChange = (page: number, perPage: number) => {
    setPage(page);
    setCollection({
      ...collection,
      page,
      per_page: perPage,
    });
  };

  return (
    <div className="rounded-xl bg-white p-4">
      <Flex my={2}>
        <TextInput
          leftSection={<IconSearch />}
          placeholder="Search"
          radius="xl"
          className="w-[20rem]"
          variant="filled"
        />
      </Flex>
      <DataTable
        withTableBorder
        highlightOnHover
        borderRadius="md"
        verticalSpacing="md"
        columns={[
          { accessor: "orderNo" },
          { accessor: "orderDate", width: 150 },
          { accessor: "finalDeliveryDate" },
          { accessor: "shippingDate" },
          { accessor: "destination" },
          { accessor: "totalPrice" },
          {
            accessor: "status",
            textAlign: "center",
            render: (value) => (
              <Badge color={getStatusColor(value.status)} variant="light">
                {value.status}
              </Badge>
            ),
          },
          {
            accessor: "",
            width: "0%",
            render: (value) => (
              <div
                onClick={() => router.push("/orders/1/detail")}
                className="cursor-pointer"
              >
                <IconChevronRight stroke={1} />
              </div>
            ),
          },
        ]}
        records={orderLists.data}
        totalRecords={orderLists?.total}
        recordsPerPage={pageSize}
        page={page}
        onPageChange={(p) => {
          setPage(p);
          onPaginationChange(p, pageSize);
        }}
        recordsPerPageOptions={PAGE_SIZES}
        onRecordsPerPageChange={(p) => {
          setPageSize(p);
          onPaginationChange(page, p);
        }}
        paginationActiveBackgroundColor="#EAF0F9"
      />
    </div>
  );
}

export default OrderList;
