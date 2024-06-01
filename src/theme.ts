import { extendTheme } from "native-base";

const customTheme = extendTheme({
  components: {
    Input: {
      defaultProps: {
        rounded: "md",
        p: 4,
        borderWidth: 1,
        borderColor: "#dadada",
        placeholderTextColor: "#d3d3d3",
      },
    },
    Text: {
      defaultProps: {
        color: "#fff",
      },
    },
    Button: {
      defaultProps: {
        rounded: "full",
        backgroundColor: "#5E41E6",
        my: 4,
      },
    },
  },
  colors: {
    // primary: {
    //   50: "#E3F2F9",
    //   100: "#C5E4F3",
    //   200: "#A2D4EC",
    //   300: "#7AC1E4",
    //   400: "#47A9DA",
    //   500: "#0088CC",
    //   600: "#007AB8",
    //   700: "#006BA1",
    //   800: "#005885",
    //   900: "#003F5E",
    // },
    // Define your dark theme colors here
    dark: {
      50: "#E2E2E2",
      100: "#C5C5C5",
      200: "#A8A8A8",
      300: "#8B8B8B",
      400: "#6E6E6E",
      500: "#515151",
      600: "#3A3A3A",
      700: "#242424",
      800: "#121212",
      900: "#000000",
    },
  },
  config: {
    initialColorMode: "dark",
  },
});

export default customTheme;
