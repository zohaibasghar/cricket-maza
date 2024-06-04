import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { HStack, ScrollView, Text, VStack, View } from "native-base";
import Header from "../../Components/Header";
import { TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import VideoComp from "../../Components/VideoComp";

const list = [
  "All",
  "Mens T20 World Cup 2024",
  "Mens T20 World Cup warm-up Matches 2024",
  "Pakistan Super League 8",
  "Indian Premier League",
];
const ScrollData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const AllVideos = () => {
  const nav = useNavigation();
  const [SelectedLabel, setSelectedLabel] = useState(list[0]);
  return (
    <View flex={1}>
      <Header
        left={
          <TouchableOpacity onPress={() => nav.goBack()}>
            <FontAwesome5 name="chevron-left" size={24} color="white" />
          </TouchableOpacity>
        }
        center={"ALL VIDEOS"}
        right={<AntDesign name="sharealt" size={24} color="white" />}
      />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <HStack h={16}>
          {list?.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedLabel(item)}
              style={{ transform: [{ scaleY: 0.98 }] }}
            >
              <Text
                bg={SelectedLabel === item ? "#5E41E6" : "#222"}
                px={2}
                py={1}
                my={2}
                mx={1}
                fontSize={"xs"}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </HStack>
      </ScrollView>
      <ScrollView>
        <VStack space={3} my={4}>
          {ScrollData.map((_, index) => (
            <VideoComp key={index}/>
          ))}
        </VStack>
      </ScrollView>
    </View>
  );
};

export default AllVideos;
