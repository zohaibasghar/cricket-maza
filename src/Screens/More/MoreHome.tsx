import { View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { VStack, Text, Box } from "native-base";

const MoreHome = () => {
  const nav = useNavigation();

  // nav.navigate("MoreStack", { screen: "Login" });
  return (
    <Box w={"100%"} h={"100%"}>
      <VStack space={10}>
        <VStack justifyContent={"center"} alignItems="center" bg="primary.400" h={"40%"}>
          <Text fontSize="5xl">Settings</Text>
        </VStack>
        <VStack justifyContent={"center"} alignItems="center" bg="primary.600" h={"20%"}>
          <Text>asd</Text>
        </VStack>
      </VStack>
    </Box>
  );
};

export default MoreHome;
