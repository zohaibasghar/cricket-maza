import { HStack, ScrollView, Text, VStack, View } from "native-base";
import React, { useEffect, useState } from "react";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "../../redux/Store";
import { getAllSeries } from "../../redux/actions/matchActions";
import { SeriesDTO } from "../../interfaces/Matches.dto";
import Header from "../../Components/Header";
import SeriesCard from "../../Components/SeriesCard";
import { format, addMonths } from "date-fns";

const generateMonthList = () => {
  const monthList = ["All"];
  const currentMonth = new Date();

  // Add remaining months of the current year
  for (let i = 0; i < 12 - currentMonth.getMonth(); i++) {
    monthList.push(format(addMonths(currentMonth, i), "MMMM"));
  }

  // Add initial months of the next year to complete 8 months total (including remaining of this year)
  for (let i = 12 - currentMonth.getMonth(); i < 12; i++) {
    monthList.push(format(addMonths(currentMonth, i), "MMMM"));
  }

  return monthList;
};
const TrendingSeries = () => {
  const nav = useNavigation();
  const [selectedLabel, setSelectedLabel] = useState("All");
  const dispatch = useAppDispatch();
  const { series } = useAppSelector((state) => state.matches);

  const list = generateMonthList();

  useEffect(() => {
    dispatch(getAllSeries());
  }, []);

  // Filter series based on selected month
  const filterSeriesByMonth = (series: SeriesDTO[], month: string) => {
    if (month === "All") {
      return series;
    }
    const monthIndex = list.indexOf(month) - 1; // Adjust for "All" at index 0
    return series.filter((s) => {
      const startDate = new Date(s.startDate);
      return startDate.getMonth() === (new Date().getMonth() + monthIndex) % 12;
    });
  };

  const filteredSeries = filterSeriesByMonth(series, selectedLabel);

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
                bg={selectedLabel === item ? "#5E41E6" : "#222"}
                px={2}
                py={1}
                my={2}
                mx={1}
                fontSize={"xs"}
                color="white"
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </HStack>
      </ScrollView>
      <ScrollView>
        <VStack space={3} my={4} px={4} justifyContent={'flex-start'}>
          {filteredSeries?.length ? (
            filteredSeries?.map((series) => <SeriesCard key={series.id} series={series} />)
          ) : (
            <Text textAlign={"center"}>No matches in this month!</Text>
          )}
        </VStack>
      </ScrollView>
    </View>
  );
};

export default TrendingSeries;
