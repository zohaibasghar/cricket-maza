import { View, Text, VStack, Image } from "native-base";
import React from "react";

const HeadlineCard = () => {
  return (
    <View borderColor={"#5E41E6"} borderWidth={1} rounded={"lg"} w={'195'}>
      <VStack>
        <Image
          source={{
            uri: "https://static.toiimg.com/thumb/msid-94935907,width-400,resizemode-4/94935907.jpg",
          }}
          alt="Cricket"
          w={"100%"}
          h={150}
        />
        <Text px={2} pt={2}>Brits set to make comeback on india</Text>
        <Text px={2} pb={2} fontSize={'2xs'} color={"#5E41E6"}>01 Jun 2024 • 10:30 AM, Sat</Text>
      </VStack>
    </View>
  );
};

export default HeadlineCard;
