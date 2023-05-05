import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import "@fontsource/fira-code";
import "@fontsource/m-plus-rounded-1c";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#f0e7db", "#0A192F")(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: mode("whiteAlpha.300", "whiteAlpha.100"),
        textDecorationThickness: 2,
        marginTop: 3,
        marginBottom: 4,
        borderRadius: 10,
      },
    },
  },
  Link: {
    baseStyle: (props) => ({
      color: mode("#3d7aed", "orange")(props),
      textUnderlineOffset: 3,
    }),
  },
};

const fonts = {
  heading: "'M PLUS Rounded 1c'",
};

const colors = {
  grassTeal: "#88ccca",
  borderRadius: "80%",
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({ config, styles, components, fonts, colors });
export default theme;
