import { View, Text, HStack, ScrollView } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import VideoComp from "./VideoComp";
import { useNavigation } from "@react-navigation/native";

const LatestVideos = () => {
  const nav = useNavigation();
  return (
    <View>
      <HStack alignItems={"center"} justifyContent={"space-between"} w={"93%"} mx={4} mb={2}>
        <Text bold>LATEST VIDEOS</Text>
        <TouchableOpacity onPress={() => nav.navigate("HomeStack", { screen: "AllVideos" })}>
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
        <VideoComp width={"300"} height={"150"} />
        <VideoComp width={"300"} height={"150"} />
        <VideoComp width={"300"} height={"150"} />
      </ScrollView>
    </View>
  );
};

export default LatestVideos;
