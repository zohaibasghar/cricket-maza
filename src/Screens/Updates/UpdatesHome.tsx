import { useNavigation } from "@react-navigation/native";
import { View, Text, ScrollView, HStack, VStack, FlatList } from "native-base";
import React, { useState } from "react";
import Header from "../../Components/Header";
import { TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import HeadlineCard from "../../Components/HeadlineCard";

const list = [
  "All",
  "Mens T20 World Cup 2024",
  "Mens T20 World Cup warm-up Matches 2024",
  "Pakistan Super League 8",
  "Indian Premier League",
];

const UpdatesHome = () => {
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
        center={"UPDATES"}
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
      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        renderItem={() => <HeadlineCard />}
        numColumns={2}
        keyExtractor={(item) => item.toString()}
      />
    </View>
  );
};

export default UpdatesHome;
