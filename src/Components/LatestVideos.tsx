import { View, Text, HStack, ScrollView } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import VideoComp from "./VideoComp";

const LatestVideos = () => {
  return (
    <View>
      <HStack alignItems={"center"} justifyContent={"space-between"} w={"93%"} mx={4} mb={2}>
        <Text bold>LATEST VIDEOS</Text>
        <TouchableOpacity>
          <HStack alignItems={"center"}>
            <Text fontSize={"xs"} fontStyle={"italic"}>
              VIEW ALL
            </Text>
            <AntDesign name="caretright" size={14} color="#5E41E6" />
          </HStack>
        </TouchableOpacity>
      </HStack>
      <ScrollView
        contentContainerStyle={{ padding: 4 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <VideoComp />
        <VideoComp />
        <VideoComp />
      </ScrollView>
    </View>
  );
};

export default LatestVideos;
