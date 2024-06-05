import { View, Text, Box, HStack, ScrollView } from "native-base";
import React, { useState } from "react";
import Header from "../../Components/Header";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity, useWindowDimensions } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import MatchesList from "../../Components/MatchesList";

const renderScene = SceneMap({
  all: MatchesList,
  odi: MatchesList,
  t20: MatchesList,
  test: MatchesList,
  hundred: MatchesList,
});

const CustomTabBar = (props: any) => (
  <View style={{ height: 50 }} my={2}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: "#5E41E6", height: 3 }}
        style={{ backgroundColor: "#000", height: "100%" }}
        tabStyle={{ width: 90, padding: 0 }}
        renderLabel={({ route, focused }) => (
          <View style={{ justifyContent: "center", alignItems: "center", height: "100%" }}>
            <Text style={{ color: focused ? "white" : "gray", textAlign: "center" }}>
              {route.title}
            </Text>
          </View>
        )}
      />
    </ScrollView>
  </View>
);

const ScheduleHome = () => {
  const [matchType, setMatchType] = useState("upcoming");
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "all", title: "All" },
    { key: "odi", title: "ODI" },
    { key: "t20", title: "T20" },
    { key: "test", title: "TEST" },
    { key: "hundred", title: "100 BALLS" },
  ]);

  return (
    <View flex={1}>
      <Header
        left={<Box> </Box>}
        center={"SCHEDULE"}
        right={<AntDesign name="sharealt" size={24} color="white" />}
      />
      <HStack justifyContent={"center"} w={"100%"}>
        <HStack
          alignItems={"center"}
          w={"40%"}
          bg={matchType === "upcoming" ? "#5E41E6" : "#222"}
          justifyContent={"center"}
          px={2}
          py={1}
        >
          <TouchableOpacity onPress={() => setMatchType("upcoming")}>
            <Text color={matchType === "recent" ? "gray.400" : "white"}>UPCOMING MATCHES</Text>
          </TouchableOpacity>
        </HStack>
        <HStack
          alignItems={"center"}
          w={"40%"}
          bg={matchType === "recent" ? "#5E41E6" : "#222"}
          justifyContent={"center"}
          px={2}
          py={1}
        >
          <TouchableOpacity onPress={() => setMatchType("recent")}>
            <Text color={matchType === "upcoming" ? "gray.400" : "white"}>RECENT MATCHES</Text>
          </TouchableOpacity>
        </HStack>
      </HStack>

      <TabView
        navigationState={{ index, routes }}
        sceneContainerStyle={{ flex: 1 }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={CustomTabBar}
      />
    </View>
  );
};

export default ScheduleHome;
