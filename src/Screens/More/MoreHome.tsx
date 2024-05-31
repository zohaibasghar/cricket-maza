import { Switch, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { VStack, Text, Box, Flex, HStack, Divider } from "native-base";

const MoreHome = () => {
  const nav = useNavigation();

  // nav.navigate("MoreStack", { screen: "Login" });
  return (
    <Box w={"100%"} h={"100%"}>
      <VStack space={3}>
        <VStack justifyContent={"flex-end"} alignItems="center" bg="primary.400" h={"12%"}>
          <Text mb={1} fontSize="3xl">
            Settings
          </Text>
        </VStack>
        {/* login card */}
        <Flex
          direction="row"
          justifyContent={"space-between"}
          alignItems="center"
          px={5}
          py={2}
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
          px={5}
          py={2}
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
          px={5}
          py={2}
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
          px={5}
          py={2}
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
          px={5}
          py={2}
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
        {/* Audio Commentary card */}
        <Flex
          direction="column"
          justifyContent={"space-between"}
          alignItems="center"
          px={5}
          py={2}
          bg="primary.600"
        >
          <Flex direction="row" justifyContent={"space-between"} alignItems={"center"} w={"100%"}>
            <VStack>
              <Text fontWeight={500} color={"white"} fontSize={"md"}>
                Audio Commentary
              </Text>
              <Text fontSize={"xs"} color={"white"}>
                Speech Language
              </Text>
            </VStack>
            <Text>Icon mute</Text>
          </Flex>

          <HStack alignItems={"center"} space={4}>
            <Text fontWeight={700} color={"red.400"}>
              English
            </Text>
            <Switch />
            <Text fontWeight={700}>Hindi</Text>
          </HStack>
        </Flex>
        {/* Share this app */}
        <HStack justifyContent={"center"} space={6}>
          {/* Share */}
          <VStack alignItems={"center"}>
            <Text>Share Icon</Text>
            <Text fontWeight={700}>SHARE</Text>
          </VStack>
          <Divider orientation="vertical" />
          {/* About Us */}
          <VStack alignItems={"center"}>
            <Text>Aboutus Icon</Text>
            <Text fontWeight={700}>About Us</Text>
          </VStack>
          <Divider orientation="vertical" />
          {/* Rate Us */}
          <VStack alignItems={"center"}>
            <Text>RateUs Icon</Text>
            <Text fontWeight={700}>Rate Us</Text>
          </VStack>
        </HStack>
        {/* Follow Us On */}
        <HStack justifyContent={"center"} alignItems={"center"} space={6} p={2}>
          <Divider />
          <Text fontWeight={700}> FOLLOW US ON</Text>
          <Divider />
        </HStack>
        <HStack justifyContent={"center"} space={3}>
          <Text fontWeight={700}> FB ICON</Text>
          <Text fontWeight={700}> INSTA ICON</Text>
          <Text fontWeight={700}> YT ICON</Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default MoreHome;
