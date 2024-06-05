import { TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { HStack, ScrollView, Text, VStack, View } from "native-base";
import PlayerItem from "./PlayerItem";

const SquadsTab = () => {
  const [selected, setSelected] = useState("SRILANKA");
  return (
    <View>
      <HStack justifyContent={"center"} space={8} my={4}>
        <TouchableOpacity onPress={() => setSelected("SRILANKA")}>
          <View alignItems="center">
            <Text fontFamily={selected === "SRILANKA" ? "es_bold" : "es_regular"}>SRI LANKA</Text>
            {selected === "SRILANKA" && <View width="100%" height={1} bg="#5E41E6" mt={1} />}
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelected("SAUDI")}>
          <View alignItems="center">
            <Text fontFamily={selected === "SAUDI" ? "es_bold" : "es_regular"}>SAUDI ARABIA</Text>
            {selected === "SAUDI" && <View width="100%" height={1} bg="#5E41E6" mt={1} />}
          </View>
        </TouchableOpacity>
      </HStack>
      <ScrollView>
        <VStack space={5}>
          <PlayerItem />
          <PlayerItem />
          <PlayerItem />
          <PlayerItem />
          <PlayerItem />
          <PlayerItem />
          <PlayerItem />
          <PlayerItem />
          <PlayerItem />
        </VStack>
      </ScrollView>
    </View>
  );
};

export default SquadsTab;
