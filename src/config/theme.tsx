import { createTheme, MantineColorsTuple } from "@mantine/core";

const myColor: MantineColorsTuple = [
  "#ecf1fe",
  "#d4def7",
  "#a6b9f1",
  "#7592ec",
  "#4e72e9",
  "#375de8",
  "#2b53e8",
  "#2144ce",
  "#193db9",
  "#0b33a3",
];

export const theme = createTheme({
  primaryColor: "primary",
  primaryShade: 8,
  colors: {
    primary: myColor,
  },

  components: {
    Button: {
      styles: { color: "#b3c4ff" },
    },
  },
});
