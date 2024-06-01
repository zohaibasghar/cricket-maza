import { Pressable, Switch } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { VStack, Text, Box, Flex, HStack, Divider } from "native-base";
import { AntDesign, Entypo, FontAwesome, FontAwesome6, Octicons } from "@expo/vector-icons";
import { useState } from "react";

const MoreHome = () => {
  const nav = useNavigation();
  const [toggleAudio, setToggleAudio] = useState(false);
  // nav.navigate("MoreStack", { screen: "Login" });
  return (
    <Box w={"100%"} h={"100%"} px={4} py={2}>
      <VStack space={3}>
        {/* login card */}
        <Pressable onPress={() => nav.navigate("MoreStack", { screen: "Login" })}>
          <Flex
            direction="row"
            justifyContent={"space-between"}
            alignItems="center"
            px={5}
            py={2}
            bg="#7e66eb"
            style={{
              borderRadius: 12,
            }}
          >
            <Box>
              <Text fontWeight={500} color={"white"} fontSize={"md"}>
                Login
              </Text>
              <Text fontSize={"xs"} color={"white"}>
                Press login to continue
              </Text>
            </Box>
            <AntDesign name="swapright" size={22} color={"#fff"} />
          </Flex>
        </Pressable>
        {/* Buy Plan card */}
        <Flex
          direction="row"
          justifyContent={"space-between"}
          alignItems="center"
          px={5}
          py={2}
          bg="#7e66eb"
          style={{
            borderRadius: 12,
          }}
        >
          <Box>
            <Text fontWeight={500} color={"white"} fontSize={"md"}>
              Buy Plan
            </Text>
            <Text fontSize={"xs"} color={"white"}>
              For no ads and all features
            </Text>
          </Box>
          <Text>
            <Entypo name="home" size={22} color={"#fff"} />{" "}
          </Text>
        </Flex>
        {/* Odds Section card */}
        <Flex
          direction="row"
          justifyContent={"space-between"}
          alignItems="center"
          px={5}
          py={2}
          bg="#7e66eb"
          style={{
            borderRadius: 12,
          }}
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
          bg="#7e66eb"
          style={{
            borderRadius: 12,
          }}
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
          bg="#7e66eb"
          style={{
            borderRadius: 12,
          }}
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
          bg="#7e66eb"
          style={{
            borderRadius: 12,
          }}
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
            {toggleAudio ? (
              <Octicons
                name="unmute"
                size={22}
                color={"#fff"}
                onPress={() => setToggleAudio(false)}
              />
            ) : (
              <Octicons name="mute" size={22} color={"#fff"} onPress={() => setToggleAudio(true)} />
            )}
            {/* <Octicons name="unmute" size={22} color={"#fff"} /> */}
          </Flex>
          <HStack alignItems={"center"} space={4}>
            <Text fontWeight={700} color={"green.500"}>
              English
            </Text>
            <Switch />
            <Text fontWeight={500}>Hindi</Text>
          </HStack>
        </Flex>
        {/* Share this app */}
        <HStack justifyContent={"center"} space={6}>
          {/* Share */}
          <VStack alignItems={"center"}>
            <Entypo name="share" size={22} color={"#fff"} />
            <Text fontWeight={700}>SHARE</Text>
          </VStack>
          <Divider orientation="vertical" />
          {/* About Us */}
          <VStack alignItems={"center"}>
            <FontAwesome6 name="circle-info" size={22} color={"#fff"} />
            <Text fontWeight={700}>About Us</Text>
          </VStack>
          <Divider orientation="vertical" />
          {/* Rate Us */}
          <VStack alignItems={"center"}>
            <FontAwesome name="star-half-o" size={22} color={"#fff"} />
            <Text fontWeight={700}>Rate Us</Text>
          </VStack>
        </HStack>
        {/* Follow Us On */}
        <HStack justifyContent={"center"} alignItems={"center"} space={6} p={2}>
          <Divider />
          <Text fontWeight={700}> FOLLOW US ON</Text>
          <Divider />
        </HStack>
        <HStack justifyContent={"center"} space={8}>
          <FontAwesome6 name="facebook" size={26} color={"#fff"} />
          <FontAwesome6 name="square-instagram" size={26} color={"#fff"} />
          <Entypo name="youtube-with-circle" size={26} color={"#fff"} />
        </HStack>
      </VStack>
    </Box>
  );
};

export default MoreHome;
