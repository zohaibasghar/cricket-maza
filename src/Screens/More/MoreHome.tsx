import { useNavigation } from "@react-navigation/native";
import { VStack, Text, Box, Flex, HStack, Divider, Switch, ScrollView } from "native-base";
import { MaterialIcons, Entypo, FontAwesome, FontAwesome6, Octicons } from "@expo/vector-icons";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

const MoreHome = () => {
  const nav = useNavigation();
  const [toggleAudio, setToggleAudio] = useState(false);
  // nav.navigate("MoreStack", { screen: "Login" });
  return (
    <Box flex={1} px={4} py={2}>
      <ScrollView>
        <VStack space={3}>
          {/* login card */}
          <TouchableOpacity onPress={() => nav.navigate("MoreStack", { screen: "Login" })}>
            <Flex
              direction="row"
              justifyContent={"space-between"}
              alignItems="center"
              px={5}
              py={2}
              bg="#222"
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
              <MaterialIcons name="keyboard-arrow-right" size={28} color="white" />
            </Flex>
          </TouchableOpacity>
          {/* Buy Plan card */}
          <TouchableOpacity onPress={() => nav.navigate("MoreStack", { screen: "BuyPlan" })}>
            <Flex
              direction="row"
              justifyContent={"space-between"}
              alignItems="center"
              px={5}
              py={2}
              bg="#222"
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
              <MaterialIcons name="keyboard-arrow-right" size={28} color="white" />
            </Flex>
          </TouchableOpacity>
          {/* Odds Section card */}
          <Flex
            direction="row"
            justifyContent={"space-between"}
            alignItems="center"
            px={5}
            py={2}
            bg="#222"
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
            bg="#222"
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
            bg="#222"
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
            mb={4}
            bg="#222"
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
                <TouchableOpacity onPress={() => setToggleAudio(false)}>
                  <Octicons name="unmute" size={22} color={"#fff"} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => setToggleAudio(true)}>
                  <Octicons name="mute" size={22} color={"#fff"} />
                </TouchableOpacity>
              )}
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
          <HStack justifyContent={"space-between"} mx={16}>
            <FontAwesome6 name="facebook" size={32} color={"#fff"} />
            <FontAwesome6 name="square-instagram" size={32} color={"#fff"} />
            <Entypo name="youtube-with-circle" size={32} color={"#fff"} />
          </HStack>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default MoreHome;
