import React from "react";
import { Box, VStack, HStack, Text, Progress, Image } from "native-base";
import { format, formatDistanceToNow } from "date-fns";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MatchCard = ({ percentage1, percentage2, score1, score2, match }: any) => {
  const formattedTime = formatDistanceToNow(new Date(match.dateTimeGMT), { addSuffix: true });
  const formattedDateTime = format(new Date(match.dateTimeGMT), "EEE hh:mm a '•' dd MMM yy");
  const nav = useNavigation();

  return (
    <TouchableOpacity onPress={() => nav.navigate("HomeStack", { screen: "MatchDetail" })}>
      <Box
        borderRadius="lg"
        overflow="hidden"
        borderColor="#5E41E6"
        borderWidth="1"
        m="2"
        p="4"
        mx={4}
      >
        <VStack space={1}>
          <Text
            fontSize="lg"
            fontFamily={"es_bold"}
            textAlign={"center"}
            color={"white"}
            isTruncated
          >
            {match.name}
          </Text>
          <Text fontSize="2xs" textAlign={"center"} color={"white"}>
            {match.matchType} • {match.venue} • {formattedDateTime}
          </Text>
          <HStack justifyContent="space-between" alignItems="center" my={2}>
            <HStack space={4} alignItems="center" justifyContent={"space-between"}>
              <Image
                source={{ uri: match.teamInfo[0].img }}
                alt={`${match.teamInfo[0].img} logo`}
                size="sm"
                rounded={"full"}
              />
              <VStack>
                <Text>{match.teamInfo[0].name}</Text>
                <Text textAlign="center">{score1}</Text>
              </VStack>
            </HStack>
            <Text fontSize="lg">vs</Text>
            <HStack space={4} alignItems="center" justifyContent={"space-between"}>
              <VStack>
                <Text>{match.teamInfo[1].name}</Text>
                <Text textAlign="center">{score2}</Text>
              </VStack>
              <Image
                source={{ uri: match.teamInfo[1].img }}
                alt={`${match.teamInfo[1].name} logo`}
                size="sm"
                rounded={"full"}
              />
            </HStack>
          </HStack>
          <HStack space={2} justifyContent="space-between" alignItems="center">
            <Box w="47%">
              <Progress colorScheme="green" value={percentage1} my={2} />
              <Text color={"white"} textAlign={"center"}>
                {percentage1}%
              </Text>
            </Box>
            <Box w="47%">
              <Progress colorScheme="red" value={percentage2} my={2} />
              <Text color="white" textAlign={"center"}>
                {percentage2}%
              </Text>
            </Box>
          </HStack>
          <Text textAlign="center" color={"#ADD8E6"} fontSize={"xs"}>
            STARTING IN: {formattedTime}
          </Text>
        </VStack>
      </Box>
    </TouchableOpacity>
  );
};

export default MatchCard;
