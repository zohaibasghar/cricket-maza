import { View, Text, HStack, ScrollView, SimpleGrid } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import HeadlineCard from "./HeadlineCard";

const Headlines = () => {
  return (
    <View my={4}>
      <HStack alignItems={"center"} justifyContent={"space-between"} w={"93%"} mx={4} mb={2}>
        <Text bold>HEADLINES</Text>
        <TouchableOpacity>
          <HStack alignItems={"center"}>
            <Text fontSize={"xs"} fontStyle={"italic"}>
              VIEW ALL
            </Text>
            <AntDesign name="caretright" size={14} color="#5E41E6" />
          </HStack>
        </TouchableOpacity>
      </HStack>
      <ScrollView>
        <SimpleGrid columns={2} space={4} mx={'auto'}>
          <HeadlineCard />
          <HeadlineCard />
          <HeadlineCard />
          <HeadlineCard />
          <HeadlineCard />
        </SimpleGrid>
      </ScrollView>
    </View>
  );
};

export default Headlines;
