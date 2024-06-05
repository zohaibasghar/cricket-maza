import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, HStack, Image, VStack, ScrollView, Box, FlatList } from "native-base";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MatchCard from "../../Components/MatchCard";

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

const SeriesDetail = () => {
  const nav = useNavigation();
  const [matchType, setMatchType] = useState("upcoming");
  const [selectedSeries, setSelectedSeries] = useState(1);
  return (
    <View flex={1}>
      <LinearGradient
        colors={["#5E41E6", "transparent"]}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 260,
          zIndex: -1,
        }}
      />
      <SafeAreaView>
        <HStack
          p={3}
          rounded={"lg"}
          justifyContent={"space-between"}
          space={1}
          alignItems={"center"}
          mx={4}
        >
          <TouchableOpacity onPress={() => nav.goBack()}>
            <FontAwesome5 name="chevron-left" size={24} color="white" />
          </TouchableOpacity>
          <HStack alignItems={"center"} space={2}>
            <VStack>
              <Text fontSize={12}>Mens T20 World Cup 2024</Text>
              <Text fontSize={"2xs"} color={"gray.400"}>
                01 June 2024 To 29 June 2024
              </Text>
            </VStack>
          </HStack>
          <HStack space={1} alignItems={"center"}>
            <Text fontSize={"xl"}>55</Text>
            <VStack>
              <Text fontSize={8} color={"gray.300"}>
                Total
              </Text>
              <Text fontSize={8} color={"gray.300"}>
                Matches
              </Text>
            </VStack>
          </HStack>
          <HStack space={1} alignItems={"center"}>
            <Text fontSize={"xl"}>52</Text>
            <VStack>
              <Text fontSize={8} color={"gray.300"}>
                Matches
              </Text>
              <Text fontSize={8} color={"gray.300"}>
                Left
              </Text>
            </VStack>
          </HStack>
        </HStack>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} my={4}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <TouchableOpacity key={item} onPress={() => setSelectedSeries(item)}>
              <Box
                borderWidth={selectedSeries === item ? 1 : 0}
                borderColor={selectedSeries === item ? "#ddd" : null}
                borderRadius={"md"}
                ml={4}
              >
                <Image
                  m={1}
                  source={{ uri: "https://picsum.photos/200" }}
                  alt="Random image"
                  h={"12"}
                  w={"12"}
                  rounded={"md"}
                />
              </Box>
            </TouchableOpacity>
          ))}
        </ScrollView>
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
      </SafeAreaView>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        my={4}
        renderItem={() => (
          <MatchCard
            team1={matchData.team1}
            team2={matchData.team2}
            percentage1={matchData.team1.percentage}
            percentage2={matchData.team2.percentage}
            score1={matchData.score1}
            score2={matchData.score2}
            matchTime={matchData.matchTime}
          />
        )}
        keyExtractor={(item) => item.toString()}
      />
    </View>
  );
};

export default SeriesDetail;
