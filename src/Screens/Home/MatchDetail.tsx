import { View, Text, Box, HStack, Image, ScrollView } from "native-base";
import React from "react";
import Header from "../../Components/Header";
import { TouchableOpacity, useWindowDimensions } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { useNavigation } from "@react-navigation/native";
import MatchInfoTab from "../../Components/MatchInfoTab";
import SquadsTab from "../../Components/SquadsTab";
import OddsTab from "../../Components/OddsTab";
import FancyOddsTab from "../../Components/FancyOddsTab";
import PointsTableTab from "../../Components/PointsTableTab";
import LiveOnTab from "../../Components/LiveOnTab";

const renderScene = SceneMap({
  info: MatchInfoTab,
  squads: SquadsTab,
  odds: OddsTab,
  fancy_odds: FancyOddsTab,
  points: PointsTableTab,
  live_channel: LiveOnTab,
});

const CustomTabBar = (props: any) => (
  <View style={{ height: 50 }} my={2}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: "#5E41E6", height: 3 }}
        style={{ backgroundColor: "rgba(256,256,256,0.1)", height: "100%" }}
        tabStyle={{ width: 90, padding: 0 }}
        renderLabel={({ route }) => (
          <View style={{ justifyContent: "center", alignItems: "center", height: "100%" }}>
            <Text style={{ color: "white", textAlign: "center" }} fontSize={"xs"}>
              {route.title}
            </Text>
          </View>
        )}
      />
    </ScrollView>
  </View>
);

const MatchDetail = () => {
  const layout = useWindowDimensions();
  const nav = useNavigation();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "info", title: "INFO" },
    { key: "squads", title: "SQUADS" },
    { key: "odds", title: "ODDS" },
    { key: "fancy_odds", title: "FANCY ODDS" },
    { key: "points", title: "POINTS TABLE" },
    { key: "live_channel", title: "LIVE ON" },
  ]);
  return (
    <View flex={1}>
      <Header
        left={
          <TouchableOpacity onPress={() => nav.goBack()}>
            <FontAwesome5 name="chevron-left" size={24} color="white" />
          </TouchableOpacity>
        }
        center={"MENS T20 WORLD CUP 2024"}
        right={<Box></Box>}
      />
      <HStack justifyContent="space-between" space={3} alignItems="center" m={4}>
        <HStack space={4} alignItems="center" justifyContent={"space-between"}>
          <Image
            source={{ uri: "https://flagpedia.net/data/flags/w580/lk.png" }}
            size="sm"
            alt="SriLanka"
            rounded={"full"}
          />
          <Text fontSize={"xl"} noOfLines={2} w={"90px"} lineHeight={24} fontFamily={"es_bold"}>
            SRI LANKA
          </Text>
        </HStack>
        <Text fontSize="lg">vs</Text>
        <HStack space={4} alignItems="center" justifyContent={"space-between"}>
          <Text
            fontSize={"xl"}
            noOfLines={2}
            w={"90px"}
            lineHeight={24}
            fontFamily={"es_bold"}
            textAlign={"right"}
          >
            SAUDI ARABIA
          </Text>
          <Image
            source={{ uri: "https://flagpedia.net/data/flags/w580/sa.png" }}
            size="sm"
            alt="Saudi Arabia"
            rounded={"full"}
          />
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

export default MatchDetail;
