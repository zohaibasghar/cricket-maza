import React from "react";
import { HStack, Image, Text, VStack } from "native-base";

const PlayerItem = () => {
  return (
    <HStack mx={"4"} space={4} alignItems={"center"}>
      <Image
        source={{
          uri: "https://designimages.appypie.com/aitools/ai-avatar/cricket/avatarCricket12.jpg",
        }}
        alt="Man"
        h={"16"}
        w={"16"}
        rounded={"full"}
      />
      <VStack>
        <Text fontFamily={"es_semiBold"}>Jack Gardner</Text>
        <Text color={"#999"}>Batsman</Text>
      </VStack>
    </HStack>
  );
};

export default PlayerItem;
