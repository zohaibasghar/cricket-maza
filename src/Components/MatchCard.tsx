import React from "react";
import { Box, VStack, HStack, Text, Progress, Image } from "native-base";
import { format, formatDistanceToNow } from "date-fns";

const MatchCard = ({ team1, team2, percentage1, percentage2, score1, score2, matchTime }: any) => {
  // const formattedTime = formatDistanceToNow(new Date(matchTime), { addSuffix: true });
  const formattedDateTime = format(new Date(matchTime), "EEE hh:mm a '•' dd MMM");
  return (
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
        <Text fontSize="lg" bold textAlign={"center"} letterSpacing={-1} color={"white"}>
          MENS T20 WORLD CUP 2024
        </Text>
        <Text fontSize="2xs" textAlign={"center"} color={"white"}>
          4th Match T20, United States • {formattedDateTime}
        </Text>
        <HStack space={2} justifyContent="space-between" alignItems="center">
          <VStack space={1} alignItems="center">
            <Image
              source={{ uri: team1.logo }}
              alt={`${team1.name} logo`}
              size="sm"
              rounded={"full"}
            />
            <Text>{team1.name}</Text>
            <Text color={"white"}>{percentage1}%</Text>
          </VStack>
          <Text fontSize="lg">vs</Text>
          <VStack space={1} alignItems="center">
            <Image
              source={{ uri: team2.logo }}
              alt={`${team2.name} logo`}
              size="sm"
              rounded={"full"}
            />
            <Text>{team2.name}</Text>
            <Text color="white">{percentage2}%</Text>
          </VStack>
        </HStack>
        <HStack space={2} justifyContent="space-between" alignItems="center">
          <Box w="47%">
            <Progress colorScheme="green" value={percentage1} />
            <Text textAlign="center">{score1}</Text>
          </Box>
          <Box w="47%">
            <Progress colorScheme="red" value={percentage2} />
            <Text textAlign="center">{score2}</Text>
          </Box>
        </HStack>
        <Text textAlign="center" color="coolGray.600" color={"#5E41E6"} s>
          STARTING IN: in about 7 hours
        </Text>
      </VStack>
    </Box>
  );
};

export default MatchCard;
