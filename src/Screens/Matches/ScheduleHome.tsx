import { View, Text, Box } from "native-base";
import React from "react";
import Header from "../../Components/Header";
import { AntDesign } from "@expo/vector-icons";

const ScheduleHome = () => {
  return (
    <View flex={1}>
      <Header
        left={<Box>    </Box>}
        center={"SCHEDULE"}
        right={<AntDesign name="sharealt" size={24} color="white" />}
      />
      <View flex={1} alignItems={"center"} justifyContent={"center"}>
        <Text>Coming soon...</Text>
      </View>
    </View>
  );
};

export default ScheduleHome;
