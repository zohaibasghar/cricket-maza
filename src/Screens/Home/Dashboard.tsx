import { View, ScrollView, Text } from "native-base";
import React, { useEffect } from "react";
import MatchCard from "../../Components/MatchCard";
import TrendingSeries from "../../Components/TrendingSeries";
import LatestVideos from "../../Components/LatestVideos";
import Headlines from "../../Components/Headlines";
import Header from "../../Components/Header";
import { AntDesign } from "@expo/vector-icons";
import { useAppDispatch, useAppSelector } from "../../redux/Store";
import { getAllMatches } from "../../redux/actions/matchActions";
import PagerView from "react-native-pager-view";
import { ActivityIndicator } from "react-native";

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
  const { matches, leagueLoading } = useAppSelector((state) => state.matches);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllMatches());
  }, []);

  return (
    <View flex={1}>
      {/* {leagueLoading && (
        <ActivityIndicator
          size={"large"}
          style={{
            position: "absolute",
            zIndex: 99,
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "#0008",
          }}
        />
      )} */}
      <ScrollView>
        <Header
          left={
            <Text fontSize="xl" color="white" fontFamily={"es_bold"}>
              Logo
            </Text>
          }
          center={"Cricket Maza 12"}
          right={<AntDesign name="sharealt" size={24} color="white" />}
          filter
        />
        <PagerView style={{ flex: 1, height: 270 }} initialPage={0}>
          {matches?.map((match) => (
            <View key={match.id} w={"100%"}>
              <MatchCard
                team1={matchData.team1}
                match={match}
                team2={matchData.team2}
                percentage1={matchData.team1.percentage}
                percentage2={matchData.team2.percentage}
                score1={matchData.score1}
                score2={matchData.score2}
                matchTime={matchData.matchTime}
              />
            </View>
          ))}
        </PagerView>
        <TrendingSeries />
        <LatestVideos />
        <Headlines />
      </ScrollView>
    </View>
  );
};

export default Dashboard;
