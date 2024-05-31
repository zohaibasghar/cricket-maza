import { Switch, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { VStack, Text, Box, Flex } from "native-base";

const MoreHome = () => {
  const nav = useNavigation();

  // nav.navigate("MoreStack", { screen: "Login" });
  return (
    <Box w={"100%"} h={"100%"}>
      <VStack space={3}>
        <VStack justifyContent={"center"} alignItems="center" bg="primary.400" h={"30%"}>
          <Text fontSize="4xl">Settings</Text>
        </VStack>
        {/* login card */}
        <Flex
          direction="row"
          justifyContent={"space-between"}
          alignItems="center"
          p={5}
          bg="primary.600"
        >
          <Box>
            <Text fontWeight={500} color={"white"} fontSize={"md"}>
              Login
            </Text>
            <Text fontSize={"xs"} color={"white"}>
              Press signin to continue
            </Text>
          </Box>
          <Text> "arrow icon" </Text>
        </Flex>
        {/* Buy Plan card */}
        <Flex
          direction="row"
          justifyContent={"space-between"}
          alignItems="center"
          p={4}
          bg="primary.600"
        >
          <Box>
            <Text fontWeight={500} color={"white"} fontSize={"md"}>
              Buy Plan
            </Text>
            <Text fontSize={"xs"} color={"white"}>
              For no ads and all features
            </Text>
          </Box>
          <Text> "arrow icon" </Text>
        </Flex>
        {/* Odds Section card */}
        <Flex
          direction="row"
          justifyContent={"space-between"}
          alignItems="center"
          p={4}
          bg="primary.600"
        >
          <Box>
            <Text fontWeight={500} color={"white"} fontSize={"md"}>
              Odds Section
            </Text>
            <Text fontSize={"xs"} color={"white"}>
              Odds will be visible during live matche
            </Text>
          </Box>
          <Switch />
        </Flex>
        {/* Session card */}
        <Flex
          direction="row"
          justifyContent={"space-between"}
          alignItems="center"
          p={4}
          bg="primary.600"
        >
          <Box>
            <Text fontWeight={500} color={"white"} fontSize={"md"}>
              Session
            </Text>
            <Text fontSize={"xs"} color={"white"}>
              Session will be visible during live matche
            </Text>
          </Box>
          <Switch />
        </Flex>
        {/* Theme card */}
        <Flex
          direction="row"
          justifyContent={"space-between"}
          alignItems="center"
          p={4}
          bg="primary.600"
        >
          <Box>
            <Text fontWeight={500} color={"white"} fontSize={"md"}>
              Theme
            </Text>
            <Text fontSize={"xs"} color={"white"}>
              Dark mode saves your eyes and battery
            </Text>
          </Box>
          <Switch />
        </Flex>
      </VStack>
    </Box>
  );
};

export default MoreHome;
