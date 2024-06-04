import { View, Text, HStack, FlatList, Box } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import HeadlineCard from "./HeadlineCard";
import { useNavigation } from "@react-navigation/native";

const Headlines = () => {
  const nav = useNavigation();
  return (
    <View my={4}>
      <HStack alignItems={"center"} justifyContent={"space-between"} w={"93%"} mx={4} mb={2}>
        <Text bold>HEADLINES</Text>
        <TouchableOpacity onPress={() => nav.navigate("Updates" as never)}>
          <HStack alignItems={"center"}>
            <Text fontSize={"xs"} fontStyle={"italic"}>
              VIEW ALL
            </Text>
            <AntDesign name="caretright" size={14} color="#5E41E6" />
          </HStack>
        </TouchableOpacity>
      </HStack>
      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        renderItem={() => <HeadlineCard />}
        numColumns={2}
        keyExtractor={(item) => item.toString()} // Example keyExtractor
      />
    </View>
  );
};

export default Headlines;
