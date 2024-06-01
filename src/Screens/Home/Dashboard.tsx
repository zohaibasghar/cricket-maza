import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "native-base";
import React from "react";

const Dashboard = () => {
  const nav = useNavigation();
  return (
    <View flex={1} alignItems={"center"} justifyContent={"center"}>
      <Text>Coming soon...</Text>
      <Button onPress={() => nav.navigate("MoreStack", { screen: "Signup" })}>Signup</Button>
    </View>
  );
};

export default Dashboard;
