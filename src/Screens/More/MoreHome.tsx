import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const MoreHome = () => {
  const nav = useNavigation();

  // nav.navigate("MoreStack", { screen: "Login" });
  return (
    <View>
      <Text>MoreHome</Text>
    </View>
  );
};

export default MoreHome;
