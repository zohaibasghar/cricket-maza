import { ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import { Text, VStack, View, Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const VideoComp = ({ width, height }: { width?: string; height?: string }) => {
  return (
    <View
      borderWidth={1}
      borderColor={"#5E41E6"}
      w={width ?? "96%"}
      mx={2}
      rounded={"lg"}
      h={height ?? "200"}
      position={"relative"}
    >
      <ImageBackground
        source={{
          uri: "https://static.toiimg.com/thumb/msid-94935907,width-400,resizemode-4/94935907.jpg",
        }}
        style={{ height: "100%", width: "100%" }}
        imageStyle={{ objectFit: "cover", borderRadius: 8 }}
      >
        <TouchableOpacity
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: [{ translateX: -25 }, { translateY: -25 }],
            zIndex: 1,
          }}
          onPress={() => {
            // Handle play button press
            console.log("Play button pressed");
          }}
        >
          <Icon
            as={Ionicons}
            bgColor={"#000"}
            rounded={"full"}
            name="play-circle"
            size={12}
            color="white"
          />
        </TouchableOpacity>
        <VStack position={"absolute"} bottom={0} bg={"rgba(0,0,0,0.6)"} w={"100%"} p={2}>
          <Text fontSize={"xs"} fontFamily={"es_semiBold"} color={"white"}>
            Predict & Win. England vs Pakistan 4th T20i Match Prediction. Know key Players,
            breakdown & more
          </Text>
          <Text fontSize={"2xs"} color={"#ADD8E6"}>
            30 May 2024 • 12:29 PM, Thu
          </Text>
        </VStack>
      </ImageBackground>
    </View>
  );
};

export default VideoComp;
