import { AntDesign } from "@expo/vector-icons";
import { View, Text, Image, VStack, HStack } from "native-base";
import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";

const ArticleScreen = () => {
  return (
    <View flex={1}>
      <Image
        source={{
          uri: "https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-preview.jpg",
        }}
        alt="Image"
        height={"1/3"}
      />
      <ScrollView>
        <VStack space={4} p={4}>
          <Text fontSize={"xl"} bold>
            Brits set to make comeback on india
          </Text>
          <HStack alignItems={"center"} space={12}>
            <Text fontSize={"xs"} color={"#E0E0E0"}>
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
