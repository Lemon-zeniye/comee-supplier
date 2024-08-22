"use client";
import {
  AppShell,
  Avatar,
  Burger,
  Group,
  Menu,
  ScrollArea,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./navbar.module.css";

import {
  IconNotes,
  IconGauge,
  IconBox,
  IconCirclePercentage,
  IconBellRinging,
  IconLogout,
} from "@tabler/icons-react";
import { LinksGroup } from "./linkgroup";
import { usePathname } from "next/navigation";
import logo from "./comee_logo.png";

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
      <AppShell.Header className=" flex justify-between ">
        <Group h="100%" w="20%" px="md">
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
          <div
            className="w-3/5 h-1/2"
            style={{
              backgroundImage: `url(${logo.src})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
          />
        </Group>
        <div className="px-2 flex items-center space-x-4 ">
          <IconBellRinging size={24} />
          {/* <AccManager id={user?.id} opened={opened} close={close} /> */}

          <div className="flex space-x-2 items-center">
            <Menu>
              <Menu.Target>
                <Group className="mr-4 cursor-pointer">
                  <span className=" font-semibold">User Name</span>
                  <Avatar radius="xl" />
                </Group>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item
                  leftSection={<IconLogout />}
                  // onClick={() => {
                  //   deleteCookie("token");
                  //   location.reload();
                  // }}
                >
                  Log out
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </div>
        </div>
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
