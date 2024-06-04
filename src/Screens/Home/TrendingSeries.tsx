import { HStack, ScrollView, Text, VStack, View } from "native-base";
import React, { useState } from "react";
import Header from "../../Components/Header";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SeriesCard from "../../Components/SeriesCard";

const list = ["All", "June", "July", "August", "September", "October", "November", "December"];
const ScrollData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const TrendingSeries = () => {
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
        center={"SERIES"}
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
        <VStack space={3} my={4} px={4}>
          {ScrollData.map((_, index) => (
            <SeriesCard key={index} />
          ))}
        </VStack>
      </ScrollView>
    </View>
  );
};

export default TrendingSeries;
