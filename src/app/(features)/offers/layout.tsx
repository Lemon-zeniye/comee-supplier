import { Divider, Flex, Title } from "@mantine/core";
import React from "react";

function Offerlayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Flex py={4}>
        <Title order={3}>Offers</Title>
      </Flex>
      <Divider size="xs" mb="lg" />
      {children}
    </div>
  );
}

export default Offerlayout;
