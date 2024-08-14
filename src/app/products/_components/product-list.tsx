"use client";
import { DataTable } from "mantine-datatable";
import { useState } from "react";
import { products } from "@/app/mock/order-list";
import { Badge, Divider, Flex, TextInput, Image, Button } from "@mantine/core";
import { IconChevronRight, IconPlus, IconSearch } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { Carousel } from "@mantine/carousel";

function ProductList() {
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
          onClick={() => router.push("/products/new")}
          leftSection={<IconPlus />}
        >
          New Product
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
          {
            accessor: "",
            render: (value) => (
              <Image w="auto" fit="contain" height={50} src={value.urls[0]} />
              // <Carousel height={80}>
              //   {value.urls.map((url: any) => (
              //     <Carousel.Slide>
              //       <Image w="auto" fit="contain" height={80} src={url} />
              //     </Carousel.Slide>
              //   ))}
              // </Carousel>
              // <div
              //   onClick={() => router.push("/products/detail/1")}
              //   className="cursor-pointer"
              // >

              //   <img src={value.url} />
              // </div>
            ),
          },
          { accessor: "productCode" },
          { accessor: "name" },
          { accessor: "description" },
          { accessor: "customsDescription" },
          { accessor: "weight", title: "Weight (kg)" },
          // {
          //   accessor: "status",
          //   textAlign: "center",
          //   render: (value) => (
          //     <Badge color={getStatusColor(value.status)} variant="light">
          //       {value.status}
          //     </Badge>
          //   ),
          // },
          {
            accessor: "",
            width: "0%",
            render: (value) => (
              <div
                onClick={() => router.push("/products/1/detail")}
                className="cursor-pointer"
              >
                <IconChevronRight stroke={1} />
              </div>
            ),
          },
        ]}
        records={products.data}
        totalRecords={products?.total}
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

export default ProductList;
