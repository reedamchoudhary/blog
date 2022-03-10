import { extendTheme } from "@chakra-ui/react";

const themes = {
  colors: {
    brand: {
        100: "#E9A6A6",
        200: "#864879",
        300: "#3F3351",
        400: "#1F1D36"
    },
  },
};
const theme = extendTheme(themes);

export default theme;