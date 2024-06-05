import React from "react";
import { View, Text, FlatList } from "native-base";
import { Box } from "native-base";
import { StyleSheet } from "react-native";

const data = [
  { key: "1", name: "John Doe", age: 28 },
  { key: "2", name: "Jane Smith", age: 34 },
  { key: "3", name: "Sam Green", age: 22 },
];

const MatchInfoTab = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Box style={styles.cell}>
          <Text fontFamily={"es_bold"}>Match</Text>
        </Box>
        <Box style={styles.cell}>
          <Text>9th</Text>
        </Box>
      </View>
      <View style={styles.row}>
        <Box style={styles.cell}>
          <Text fontFamily={"es_bold"}>Match Type</Text>
        </Box>
        <Box style={styles.cell}>
          <Text>T20</Text>
        </Box>
      </View>
      <View style={styles.row}>
        <Box style={styles.cell}>
          <Text fontFamily={"es_bold"}>Date</Text>
        </Box>
        <Box style={styles.cell}>
          <Text>06 Jun 2024</Text>
        </Box>
      </View>
      <View style={styles.row}>
        <Box style={styles.cell}>
          <Text fontFamily={"es_bold"}>Series</Text>
        </Box>
        <Box style={styles.cell}>
          <Text>Mens T20 World Cup 2024</Text>
        </Box>
      </View>
      <View style={styles.row}>
        <Box style={[styles.cell]}>
          <Text fontFamily={"es_bold"}>Venue</Text>
        </Box>
        <Box style={styles.cell}>
          <Text>Providence Stadium,Guyana, West Indies</Text>
        </Box>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#000",
  },
  header: {
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomColor: "#ddd",
    paddingBottom: 8,
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#555",
    paddingVertical: 8,
    alignItems: "center",
  },
  cell: {
    flex: 1,
    padding: 8,
    // justifyContent: "center",
    // alignItems: "center",
  },
  headerText: {
    fontWeight: "bold",
  },
});

export default MatchInfoTab;
