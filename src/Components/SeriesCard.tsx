import React from "react";
import { HStack, Image, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SeriesCard = () => {
  const nav = useNavigation();
  return (
    <TouchableOpacity onPress={() => nav.navigate("HomeStack", { screen: "SeriesDetail" })}>
      <HStack
        p={3}
        borderWidth={1}
        borderColor={"#5E41E6"}
        rounded={"lg"}
        justifyContent={"space-between"}
        space={1}
        alignItems={"center"}
      >
        <HStack alignItems={"center"} space={2}>
          <Image
            source={{
              uri: "https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-preview.jpg",
            }}
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
            <Text fontSize={8} color={"gray.300"}>
              Total
            </Text>
            <Text fontSize={8} color={"gray.300"}>
              Matches
            </Text>
          </VStack>
        </HStack>
        <HStack space={1} alignItems={"center"}>
          <Text fontSize={"xl"}>52</Text>
          <VStack>
            <Text fontSize={8} color={"gray.300"}>
              Matches
            </Text>
            <Text fontSize={8} color={"gray.300"}>
              Left
            </Text>
          </VStack>
        </HStack>
      </HStack>
    </TouchableOpacity>
  );
};

export default SeriesCard;
