import {  extendTheme } from "native-base";

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
        fontFamily: "es_regular",
      },
    },
    Button: {
      defaultProps: {
        rounded: "full",
        backgroundColor: "#5E41E6",
        my: 4,
      },
    },
    Switch:{
      defaultProps:{
        onTrackColor:"#5E41E6"
      }
    }
  },
  config: {
    initialColorMode: "dark",
  },
});

export default customTheme;
