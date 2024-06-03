import React, { useState } from "react";
import { View, Text, HStack } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const Header = () => {
  const [selected, setSelected] = useState("UPCOMING");
  return (
    <View w={"100%"}>
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
        <HStack justifyContent={"space-between"} mx={4} mb={4}>
          <Text fontSize="xl" color="white" fontWeight="bold">
            Logo
          </Text>
          <Text fontSize="lg" color="white" bold>
            Cricket Maza 12
          </Text>
          <Text fontSize="md" color="white">
            <AntDesign name="sharealt" size={24} color="white" />
          </Text>
        </HStack>
        <HStack justifyContent={"center"} space={8} mb={4}>
          <TouchableOpacity onPress={() => setSelected("UPCOMING")}>
            <View alignItems="center">
              <Text fontWeight={selected === "UPCOMING" ? "bold" : "normal"}>UPCOMING</Text>
              {selected === "UPCOMING" && <View width="100%" height={1} bg="white" mt={1} />}
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelected("COMPLETED")}>
            <View alignItems="center">
              <Text fontWeight={selected === "COMPLETED" ? "bold" : "normal"}>COMPLETED</Text>
              {selected === "COMPLETED" && <View width="100%" height={1} bg="white" mt={1} />}
            </View>
          </TouchableOpacity>
        </HStack>
      </SafeAreaView>
    </View>
  );
};

export default Header;
