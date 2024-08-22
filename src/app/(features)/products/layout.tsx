import { Divider, Flex, Title } from "@mantine/core";

function Productlayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Flex py={4}>
        <Title order={3}>Products</Title>
      </Flex>
      <Divider size="xs" mb="lg" />
      {children}
    </div>
  );
}

export default Productlayout;
