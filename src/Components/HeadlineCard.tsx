import { useNavigation } from "@react-navigation/native";
import { View, Text, VStack, Image } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";

const HeadlineCard = () => {
  const nav = useNavigation();
  return (
    <View
      borderColor={"#5E41E6"}
      borderWidth={1}
      rounded={"lg"}
      w={"46%"}
      m={2}
      overflow={"hidden"}
    >
      <TouchableOpacity onPress={() => nav.navigate("HomeStack", { screen: "ArticleScreen" })}>
        <VStack>
          <Image
            source={{
              uri: "https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-preview.jpg",
            }}
            alt="Cricket"
            style={{ objectFit: "cover", width: "100%", height: 150 }}
          />
          <Text px={2} pt={2}>
            Brits set to make comeback on india
          </Text>
          <Text px={2} pb={2} fontSize={"2xs"} color={"#5E41E6"}>
            01 Jun 2024 • 10:30 AM, Sat
          </Text>
        </VStack>
      </TouchableOpacity>
    </View>
  );
};

export default HeadlineCard;
