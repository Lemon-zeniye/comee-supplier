import {
  RingProgress,
  Text,
  SimpleGrid,
  Paper,
  Center,
  Group,
  rem,
} from "@mantine/core";
import { IconArrowUpRight, IconArrowDownRight } from "@tabler/icons-react";
import { BarChart } from "@mantine/charts";
const icons = {
  up: IconArrowUpRight,
  down: IconArrowDownRight,
};

const data = [
  {
    label: "Order Fulfillment Rate",
    stats: "85%",
    progress: 85,
    color: "green",
    icon: "up",
  },
  {
    label: "Product Catalog Health",
    stats: "92%",
    progress: 92,
    color: "blue",
    icon: "up",
  },
  {
    label: "Special Offer Engagement",
    stats: "48%",
    progress: 48,
    color: "orange",
    icon: "down",
  },
] as const;

export const data2 = [
  {
    month: "January",
    "Order Volume": 1200,
    "Product Catalog Health": 90,
    "Special Offers Accepted": 150,
  },
  {
    month: "February",
    "Order Volume": 1500,
    "Product Catalog Health": 88,
    "Special Offers Accepted": 200,
  },
  {
    month: "March",
    "Order Volume": 800,
    "Product Catalog Health": 85,
    "Special Offers Accepted": 180,
  },
  {
    month: "April",
    "Order Volume": 1700,
    "Product Catalog Health": 92,
    "Special Offers Accepted": 220,
  },
  {
    month: "May",
    "Order Volume": 1100,
    "Product Catalog Health": 89,
    "Special Offers Accepted": 140,
  },
  {
    month: "June",
    "Order Volume": 1300,
    "Product Catalog Health": 87,
    "Special Offers Accepted": 160,
  },
];

function Dashboard() {
  const stats = data.map((stat) => {
    const Icon = icons[stat.icon];
    return (
      <Paper withBorder radius="md" p="xs" mt-4 key={stat.label}>
        <Group>
          <RingProgress
            size={80}
            roundCaps
            thickness={8}
            sections={[{ value: stat.progress, color: stat.color }]}
            label={
              <Center>
                <Icon
                  style={{ width: rem(20), height: rem(20) }}
                  stroke={1.5}
                />
              </Center>
            }
          />

          <div>
            <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
              {stat.label}
            </Text>
            <Text fw={700} size="xl">
              {stat.stats}
            </Text>
          </div>
        </Group>
      </Paper>
    );
  });

  return <SimpleGrid cols={{ base: 1, sm: 3 }}>{stats}</SimpleGrid>;
}

export function DashboardComp() {
  return (
    <div>
      <Dashboard />
      <div className="mt-28">
        <BarChart
          h={300}
          data={data2}
          dataKey="month"
          series={[
            { name: "Order Volume", color: "violet.6" },
            { name: "Product Catalog Health", color: "blue.6" },
            { name: "Special Offers Accepted", color: "teal.6" },
          ]}
          tickLine="y"
        />
      </div>
    </div>
  );
}
