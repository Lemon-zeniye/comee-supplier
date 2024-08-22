import { Divider, Flex, Title } from "@mantine/core";
import React from "react";

function Orderslayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Flex py={4}>
        <Title order={3}>Orders</Title>
      </Flex>
      <Divider size="xs" mb="lg" />
      {children}
    </div>
  );
}

export default Orderslayout;
