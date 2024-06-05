import { useNavigation } from "@react-navigation/native";
import { View, ScrollView, Text } from "native-base";
import React from "react";
import MatchCard from "../../Components/MatchCard";
import TrendingSeries from "../../Components/TrendingSeries";
import LatestVideos from "../../Components/LatestVideos";
import Headlines from "../../Components/Headlines";
import Header from "../../Components/Header";
import { AntDesign } from "@expo/vector-icons";

const matchData = {
  team1: {
    name: "SL",
    logo: "https://flagpedia.net/data/flags/w580/lk.png",
    percentage: 30,
  },
  team2: {
    name: "SA",
    logo: "https://flagpedia.net/data/flags/w580/sa.png",
    percentage: 70,
  },
  score1: 47,
  score2: 49,
  matchTime: "2024-06-03T19:30:00",
};

const Dashboard = () => {
  const nav = useNavigation();
  return (
    <View flex={1}>
      <ScrollView>
        <Header
          left={
            <Text fontSize="xl" color="white" fontFamily={'es_bold'}>
              Logo
            </Text>
          }
          center={"Cricket Maza 12"}
          right={<AntDesign name="sharealt" size={24} color="white" />}
          filter
        />
        <MatchCard
          team1={matchData.team1}
          team2={matchData.team2}
          percentage1={matchData.team1.percentage}
          percentage2={matchData.team2.percentage}
          score1={matchData.score1}
          score2={matchData.score2}
          matchTime={matchData.matchTime}
        />
        <TrendingSeries />
        <LatestVideos />
        <Headlines />
      </ScrollView>
    </View>
  );
};

export default Dashboard;
