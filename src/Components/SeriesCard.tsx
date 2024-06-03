import React from "react";
import { HStack, Image, Text, VStack } from "native-base";

const SeriesCard = () => {
  return (
    <HStack
      p={3}
      borderWidth={1}
      borderColor={"#5E41E6"}
      rounded={"lg"}
      justifyContent={"space-between"}
      space={1}
      alignItems={"center"}
    >
      <HStack alignItems={"center"} space={1}>
        <Image
          source={require("../../assets/icon.png")}
          alt="Country"
          w={"10"}
          h={"10"}
          rounded={"lg"}
        />
        <VStack>
          <Text fontSize={12}>Mens T20 World Cup 2024</Text>
          <Text fontSize={"2xs"} color={"gray.400"}>
            01 June 2024 To 29 June 2024
          </Text>
        </VStack>
      </HStack>
      <HStack space={1} alignItems={"center"}>
        <Text fontSize={"xl"}>55</Text>
        <VStack>
          <Text fontSize={6} color={'gray.300'}>Total</Text>
          <Text fontSize={6} color={'gray.300'}>Matches</Text>
        </VStack>
      </HStack>
      <HStack space={1} alignItems={"center"}>
        <Text fontSize={"xl"}>52</Text>
        <VStack>
          <Text fontSize={6} color={'gray.300'}>Matches</Text>
          <Text fontSize={6} color={'gray.300'}>Left</Text>
        </VStack>
      </HStack>
    </HStack>
  );
};

export default SeriesCard;
