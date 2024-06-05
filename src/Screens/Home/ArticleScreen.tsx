import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, VStack, HStack } from "native-base";
import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";

const ArticleScreen = () => {
  const nav = useNavigation();
  return (
    <View flex={1}>
      <Image
        source={{
          uri: "https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-preview.jpg",
        }}
        alt="Image"
        height={"30%"}
      />
      <TouchableOpacity
        onPress={() => nav.goBack()}
        style={{
          backgroundColor: "rgba(256,256,256,0.6)",
          position: "absolute",
          top: 50,
          right: 20,
          padding: 4,
          borderRadius: 100,
        }}
      >
        <AntDesign name="close" size={24} color="black" />
      </TouchableOpacity>
      <ScrollView>
        <VStack space={4} p={4}>
          <Text fontSize={"xl"} fontFamily={'es_bold'}>
            Brits set to make comeback on india
          </Text>
          <HStack alignItems={"center"} space={4}>
            <Text fontSize={"xs"} color={"#ADD8E6"}>
              01 Jun 2024 • 10:30 AM, Sat
            </Text>
            <TouchableOpacity>
              <AntDesign name="sharealt" size={24} color="white" />
            </TouchableOpacity>
          </HStack>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo esse similique quia
            dolores ducimus in ea ab? Repudiandae eos culpa illum ipsum cum, saepe dignissimos! Iste
            voluptas aliquid at nihil nulla. Eveniet voluptatibus omnis, quos placeat possimus
            consequatur. Esse recusandae quaerat enim libero voluptatum repellat excepturi
            perspiciatis et. Similique, repellat!
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo esse similique quia
            dolores ducimus in ea ab? Repudiandae eos culpa illum ipsum cum, saepe dignissimos! Iste
            voluptas aliquid at nihil nulla. Eveniet voluptatibus omnis, quos placeat possimus
            consequatur. Esse recusandae quaerat enim libero voluptatum repellat excepturi
            perspiciatis et. Similique, repellat!
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo esse similique quia
            dolores ducimus in ea ab? Repudiandae eos culpa illum ipsum cum, saepe dignissimos! Iste
            voluptas aliquid at nihil nulla. Eveniet voluptatibus omnis, quos placeat possimus
            consequatur. Esse recusandae quaerat enim libero voluptatum repellat excepturi
            perspiciatis et. Similique, repellat!
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo esse similique quia
            dolores ducimus in ea ab? Repudiandae eos culpa illum ipsum cum, saepe dignissimos! Iste
            voluptas aliquid at nihil nulla. Eveniet voluptatibus omnis, quos placeat possimus
            consequatur. Esse recusandae quaerat enim libero voluptatum repellat excepturi
            consequatur. Esse recusandae quaerat enim libero voluptatum repellat excepturi
            perspiciatis et. Similique, repellat!
          </Text>
        </VStack>
      </ScrollView>
    </View>
  );
};

export default ArticleScreen;
