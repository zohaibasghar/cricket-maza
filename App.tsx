import "react-native-gesture-handler";
import Main from "./src/Main";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import React from "react";
import { StyleSheet, View } from "react-native";
import StoreProvider from "./src/redux/Store";
import { StatusBar } from "expo-status-bar";
import customTheme from "./src/theme";

const navigationTheme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    background: "#000000",
  },
};
export default function App() {
  return (
    <View style={styles.container}>
      <NativeBaseProvider theme={customTheme} config={{ strictMode: "warn" }}>
        <StoreProvider>
          <NavigationContainer theme={navigationTheme}>
            <StatusBar style="light" animated />
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
