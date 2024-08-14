"use client";
import { AppShell, Burger, Group, ScrollArea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./navbar.module.css";

import {
  IconNotes,
  IconGauge,
  IconBox,
  IconCirclePercentage,
} from "@tabler/icons-react";
import { LinksGroup } from "./linkgroup";
import { usePathname } from "next/navigation";

const menus = [
  { label: "Dashboard", icon: IconGauge, link: "/dashboard" },
  {
    label: "Orders",
    icon: IconNotes,
    link: "/orders",
  },
  {
    label: "Products",
    icon: IconBox,
    link: "/products",
  },
  {
    label: "Offers",
    icon: IconCirclePercentage,
    link: "/offers",
  },
];

export function NavbarNested() {
  const pathname = usePathname();
  const links = menus.map((item) => (
    <LinksGroup
      {...item}
      active={pathname.includes(item.link)}
      key={item.label}
    />
  ));

  return (
    <nav className={classes.navbar}>
      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>
    </nav>
  );
}

export function Shell({ children }: { children: React.ReactNode }) {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger
            opened={mobileOpened}
            onClick={toggleMobile}
            hiddenFrom="sm"
            size="sm"
          />
          <Burger
            opened={desktopOpened}
            onClick={toggleDesktop}
            visibleFrom="sm"
            size="sm"
          />
          Logo
        </Group>
      </AppShell.Header>
      <AppShell.Navbar>
        <NavbarNested />
      </AppShell.Navbar>
      <AppShell.Main className="bg-[#F1F3F5]">
        <div className="p-0 md:p-3">{children}</div>
      </AppShell.Main>
    </AppShell>
  );
}
