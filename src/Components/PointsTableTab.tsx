import React from "react";
import { View, Text, Box, VStack, HStack, Divider, ScrollView } from "native-base";
import { StyleSheet } from "react-native";

const groups = [
  {
    group: "GROUP C",
    teams: [
      { name: "Afghanistan", p: 1, w: 1, l: 0, nr: 0, pts: 2, nrr: 6.25 },
      { name: "West Indies", p: 1, w: 1, l: 0, nr: 0, pts: 2, nrr: 0.41 },
      { name: "New Zealand", p: 0, w: 0, l: 0, nr: 0, pts: 0, nrr: 0.0 },
      { name: "Papua New Guinea", p: 1, w: 0, l: 1, nr: 0, pts: 0, nrr: -0.41 },
      { name: "Uganda", p: 1, w: 0, l: 1, nr: 0, pts: 0, nrr: -6.25 },
    ],
  },
  {
    group: "GROUP A",
    teams: [
      { name: "United States", p: 1, w: 1, l: 0, nr: 0, pts: 2, nrr: 1.45 },
      { name: "India", p: 0, w: 0, l: 0, nr: 0, pts: 0, nrr: 0.0 },
    ],
  },
];

const PointsTableTab = () => {
  return (
    <ScrollView>
      <VStack space={4} padding={4} backgroundColor="#000">
        <Text color="white" fontSize="lg" textAlign="center">
          Mens T20 World Cup 2024
        </Text>
        {groups.map((group, index) => (
          <Box key={index} backgroundColor="#1A1A1A" padding={2} rounded="md">
            <Text color="white" fontSize="md" fontWeight="bold" textAlign="center">
              {group.group}
            </Text>
            <Divider my={2} backgroundColor="gray.700" />
            <HStack justifyContent="space-between" paddingX={2}>
              <Text color="gray.300" fontWeight="bold" style={styles.cellTeam}>
                TEAMS
              </Text>
              <Text color="gray.300" fontWeight="bold" style={styles.cell}>
                P
              </Text>
              <Text color="gray.300" fontWeight="bold" style={styles.cell}>
                W
              </Text>
              <Text color="gray.300" fontWeight="bold" style={styles.cell}>
                L
              </Text>
              <Text color="gray.300" fontWeight="bold" style={styles.cell}>
                NR
              </Text>
              <Text color="gray.300" fontWeight="bold" style={styles.cell}>
                Pts
              </Text>
              <Text color="gray.300" fontWeight="bold" style={styles.cell}>
                NRR
              </Text>
            </HStack>
            <Divider my={2} backgroundColor="gray.700" />
            {group.teams.map((team, idx) => (
              <HStack key={idx} justifyContent="space-between" paddingX={2} paddingY={1}>
                <Text color="white" style={styles.cellTeam}>
                  {team.name}
                </Text>
                <Text color="white" style={styles.cell}>
                  {team.p}
                </Text>
                <Text color="white" style={styles.cell}>
                  {team.w}
                </Text>
                <Text color="white" style={styles.cell}>
                  {team.l}
                </Text>
                <Text color="white" style={styles.cell}>
                  {team.nr}
                </Text>
                <Text color="white" style={styles.cell}>
                  {team.pts}
                </Text>
                <Text color="white" style={styles.cell}>
                  {team.nrr}
                </Text>
              </HStack>
            ))}
          </Box>
        ))}
      </VStack>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cell: {
    width: 30,
    textAlign: "center",
  },
  cellTeam: {
    flex: 1,
    textAlign: "left",
  },
});

export default PointsTableTab;
