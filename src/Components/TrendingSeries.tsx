import { View, Text, HStack, VStack } from "native-base";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import SeriesCard from "./SeriesCard";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const TrendingSeries = () => {
  const nav = useNavigation();
  return (
    <View m={4}>
      <HStack alignItems={"center"} justifyContent={"space-between"} w={"100%"}>
        <Text fontFamily={'es_bold'}>TRENDING SERIES</Text>
        <TouchableOpacity onPress={() => nav.navigate("HomeStack", { screen: "TrendingSeries" })}>
          <HStack alignItems={"center"}>
            <Text fontSize={"xs"} fontStyle={"italic"}>
              VIEW ALL
            </Text>
            <AntDesign name="caretright" size={14} color="#5E41E6" />
          </HStack>
        </TouchableOpacity>
      </HStack>
      <VStack space={4} my={2}>
        <SeriesCard />
        <SeriesCard />
      </VStack>
    </View>
  );
};

export default TrendingSeries;
