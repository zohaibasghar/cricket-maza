import "react-native-gesture-handler";
import Main from "./src/Main";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import React from "react";
import { StyleSheet, View } from "react-native";
import StoreProvider from "./src/redux/Store";
import { StatusBar } from "expo-status-bar";
import customTheme from "./src/theme";
import { useFonts } from "expo-font";
import ErrorsContainer from "./src/Components/ErrorsContainer";

const navigationTheme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    background: "#000000",
    fontFamily: "es_regular",
  },
};
export default function App() {
  const [fontsLoaded] = useFonts({
    inter: require("./assets/fonts/inter_variable.ttf"),
    es_bold: require("./assets/fonts/ESSC-Bold.ttf"),
    es_medium: require("./assets/fonts/ESSC-Medium.ttf"),
    es_regular: require("./assets/fonts/ESSC-Regular.ttf"),
    es_semiBold: require("./assets/fonts/ESSC-SemiBold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <NativeBaseProvider theme={customTheme} config={{ strictMode: "warn" }}>
        <StoreProvider>
          <NavigationContainer theme={navigationTheme}>
            <StatusBar style="light" animated />
            <ErrorsContainer />
            <Main />
          </NavigationContainer>
        </StoreProvider>
      </NativeBaseProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
