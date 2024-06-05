import React from "react";
import { ScrollView } from "native-base";
import MatchCard from "./MatchCard";

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

const MatchesList = () => {
  return (
    <ScrollView>
      <MatchCard
        team1={matchData.team1}
        team2={matchData.team2}
        percentage1={matchData.team1.percentage}
        percentage2={matchData.team2.percentage}
        score1={matchData.score1}
        score2={matchData.score2}
        matchTime={matchData.matchTime}
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
      <MatchCard
        team1={matchData.team1}
        team2={matchData.team2}
        percentage1={matchData.team1.percentage}
        percentage2={matchData.team2.percentage}
        score1={matchData.score1}
        score2={matchData.score2}
        matchTime={matchData.matchTime}
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
      <MatchCard
        team1={matchData.team1}
        team2={matchData.team2}
        percentage1={matchData.team1.percentage}
        percentage2={matchData.team2.percentage}
        score1={matchData.score1}
        score2={matchData.score2}
        matchTime={matchData.matchTime}
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
    </ScrollView>
  );
};

export default MatchesList;
