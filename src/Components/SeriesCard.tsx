import React from "react";
import { HStack, Image, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SeriesDTO } from "../interfaces/Matches.dto";
import { format, formatDate } from "date-fns";

const SeriesCard = ({ series }: { series: SeriesDTO }) => {
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
        <HStack alignItems={"center"} space={2} w={"60%"}>
          <Image
            source={{
              uri: "https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-preview.jpg",
            }}
            alt="Country"
            w={"10"}
            h={"10"}
            rounded={"lg"}
          />
          <VStack w={'77%'}>
            <Text fontSize={12} isTruncated>
              {series?.name}
            </Text>
            <Text fontSize={"2xs"} color={"gray.400"}>
              {format(new Date(series?.startDate), "dd MMMM yyyy")}
            </Text>
          </VStack>
        </HStack>
        <HStack space={1} alignItems={"center"}>
          <Text fontSize={"xl"}>{series?.matches}</Text>
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
          <Text fontSize={"xl"}>{series?.matches - series?.squads}</Text>
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
