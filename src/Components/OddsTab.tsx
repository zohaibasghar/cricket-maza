import { View, Text } from "native-base";
import React from "react";
import { HStack, Image, VStack } from "native-base";

const OddsTab = () => {
  return (
    <View>
      <HStack
        mx={"4"}
        space={4}
        my={4}
        alignItems={"center"}
        bg={"#5E41E6"}
        p={4}
        rounded={"full"}
      >
        <Image
          source={{
            uri: "https://flagpedia.net/data/flags/w580/lk.png",
          }}
          alt="Man"
          h={"16"}
          w={"16"}
          rounded={"full"}
        />
        <VStack>
          <Text fontFamily={"es_semiBold"} fontSize={"lg"}>
            SRI LANKA
          </Text>
          <Text>37 - 39</Text>
        </VStack>
      </HStack>
      <HStack
        mx={"4"}
        space={4}
        alignItems={"center"}
        bg={"#5E41E6"}
        p={4}
        rounded={"full"}
      >
        <Image
          source={{
            uri: "https://flagpedia.net/data/flags/w580/sa.png",
          }}
          alt="Man"
          h={"16"}
          w={"16"}
          rounded={"full"}
        />
        <VStack>
          <Text fontFamily={"es_semiBold"} fontSize={"lg"}>
            SRI LANKA
          </Text>
          <Text>00 - 00</Text>
        </VStack>
      </HStack>
    </View>
  );
};

export default OddsTab;
