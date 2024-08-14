"use client";
import { useState } from "react";
import {
  Group,
  Box,
  Collapse,
  ThemeIcon,
  Text,
  UnstyledButton,
  rem,
} from "@mantine/core";
import { IconCalendarStats, IconChevronRight } from "@tabler/icons-react";
import classes from "./navbar.module.css";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

interface LinksGroupProps {
  icon: React.FC<any>;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
  link: string;
  active: boolean;
  // onClick(): void;
}

export function LinksGroup({
  icon: Icon,
  label,
  initiallyOpened,
  links,
  link,
  active,
}: // onClick,
LinksGroupProps) {
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const [subMenuActive, setSubMenuActive] = useState(0);

  const items = (hasLinks ? links : []).map((link, index) => (
    <Link href={link.link} key={link.label}>
      <Text
        className={classes.link}
        // onClick={() => setSubMenuActive(index)}
        data-active={(subMenuActive === index && active) || undefined}
      >
        {link.label}
      </Text>
    </Link>
  ));

  return (
    <>
      <Link href={link}>
        <UnstyledButton
          onClick={() => {
            setOpened((o) => !o);
          }}
          className={classes.control}
          data-active={active || undefined}
        >
          <Group justify="space-between" gap={0}>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <ThemeIcon variant="light" size={30}>
                <Icon style={{ width: rem(18), height: rem(18) }} />
              </ThemeIcon>
              <Box ml="md">
                {link ? <Link href={link}>{label}</Link> : label}
              </Box>
            </Box>
            {hasLinks && (
              <IconChevronRight
                className={classes.chevron}
                stroke={1.5}
                style={{
                  width: rem(16),
                  height: rem(16),
                  transform: opened ? "rotate(-90deg)" : "none",
                }}
              />
            )}
          </Group>
        </UnstyledButton>
        {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
      </Link>
    </>
  );
}

// const mockdata = {
//   label: "Releases",
//   icon: IconCalendarStats,
//   links: [
//     { label: "Upcoming releases", link: "/" },
//     { label: "Previous releases", link: "/" },
//     { label: "Releases schedule", link: "/" },
//   ],
// };

// export function NavbarLinksGroup() {
//   return (
//     <Box mih={220} p="md">
//       <LinksGroup {...mockdata} />
//     </Box>
//   );
// }
