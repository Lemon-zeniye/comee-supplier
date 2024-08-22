"use client";
import { DataTable } from "mantine-datatable";
import { useState } from "react";
import { Badge, Divider, Flex, TextInput, Button } from "@mantine/core";
import { IconChevronRight, IconPlus, IconSearch } from "@tabler/icons-react";
import { useParams, useRouter } from "next/navigation";
import { getStatusColor } from "@/utils/utils";
import { offers, listOfOffers } from "@/app/mock/offer-list";

function OfferList() {
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
      <Flex my={2} justify="space-between">
        <Button
          variant="outline"
          radius="lg"
          onClick={() => router.push("/offers/new")}
          leftSection={<IconPlus />}
        >
          New Offer
        </Button>
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
          { accessor: "offerTitle", title: "Offer Title" },
          { accessor: "validityPeriod", title: "Validity Period", width: 150 },
          { accessor: "targetSellers", title: "Target Sellers" },
          {
            accessor: "totalPrice",
            title: "Original Price",
            render: (value) => (
              <>
                {value.totalPrice.toLocaleString("en-US", {
                  style: "currency",
                  currency: "EUR",
                })}
              </>
            ),
          },
          {
            accessor: "totalDiscount",
            title: "Total Discount",
            render: (value) => (
              <>
                {value.totalDiscount.toLocaleString("en-US", {
                  style: "currency",
                  currency: "EUR",
                })}
              </>
            ),
          },
          {
            accessor: "",
            title: "Total Price",
            render: (value) => (
              <>
                {(value.totalPrice - value.totalDiscount).toLocaleString(
                  "en-US",
                  {
                    style: "currency",
                    currency: "EUR",
                  }
                )}
              </>
            ),
          },
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
                onClick={() => router.push(`/offers/${value.id}/detail`)}
                className="cursor-pointer"
              >
                <IconChevronRight stroke={1} />
              </div>
            ),
          },
        ]}
        records={listOfOffers.data}
        totalRecords={listOfOffers?.total}
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

export default OfferList;
