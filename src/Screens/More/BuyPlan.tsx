import { AntDesign, Entypo } from "@expo/vector-icons";
import { View, Text, HStack, VStack, Box, Button } from "native-base";
import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";

const BuyPlan = () => {
  const premimumPlan = [
    {
      name: "One Day Plan",
      subtitle: "Cricket MAZZA 11 LIVE LINE 1 DAY",
      range: "1 Day",
      price: 100,
      benifits: [
        "Free Score Updates",
        "Free Ball by Ball Feed",
        "ADs Free Screen",
        "Fancy",
        "No Auto Renewal",
      ],
    },
    {
      name: "Fifteen Day Plan",
      subtitle: "Cricket MAZZA 11 LIVE LINE 15 DAY",
      range: "15 Days",
      price: 300,
      benifits: [
        "Free Score Updates",
        "Free Ball by Ball Feed",
        "ADs Free Screen",
        "Fancy",
        "No Auto Renewal",
      ],
    },
    {
      name: "Thirty Day Plan",
      subtitle: "Cricket MAZZA 11 LIVE LINE 30 DAY",
      range: "30 Days",
      price: 500,
      benifits: [
        "Free Score Updates",
        "Free Ball by Ball Feed",
        "ADs Free Screen",
        "Fancy",
        "No Auto Renewal",
      ],
    },
  ];
  return (
    <ScrollView>
      <View flex={1}>
        <VStack mt={10} justifyContent={"space-around"} alignItems={"center"} space={10}>
          <Text fontFamily={"es_bold"} fontSize={"3xl"} color={"white"} mt={1}>
            Choose Plan
          </Text>
          <ScrollView
            contentContainerStyle={{ padding: 4 }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {premimumPlan.map((plan, i) => (
              <View borderWidth={1} mx={2} rounded={"lg"} bg={"#222"} p={6} key={i}>
                <VStack space={10}>
                  <VStack justifyContent={"center"} alignItems={"center"}>
                    <Text fontSize={"lg"} fontFamily={"es_semiBold"}>
                      {plan?.name}
                    </Text>
                    <Text fontSize={"sm"} fontFamily={"es_medium"}>
                      ( {plan?.subtitle} )
                    </Text>
                    <Text fontFamily={'es_bold'} fontSize={'xl'}>{plan.range}</Text>
                  </VStack>
                  {/* Buy Plan Benifits */}
                  <VStack space={2}>
                    {plan?.benifits.map((benifit, i) => (
                      <HStack alignItems={"center"} space={3} key={i}>
                        <Entypo name="check" size={20} color="#fff" />
                        <Text fontSize={"md"}>{benifit}</Text>
                      </HStack>
                    ))}
                  </VStack>
                  {/* END ---------- BUY PLAN BENFITS*/}
                  {/* pricing */}
                  <HStack justifyContent={"space-between"} alignItems={"center"}>
                    <Text fontWeight={500} fontSize={"lg"}>
                      Price:
                    </Text>
                    <HStack space={1}>
                      <Text fontSize={"2xl"} fontWeight={700}>
                        $
                      </Text>
                      <Text fontWeight={700} fontSize={"5xl"}>
                        {plan?.price}
                      </Text>
                    </HStack>
                  </HStack>
                </VStack>
                <Button>BUY</Button>
              </View>
            ))}
          </ScrollView>
        </VStack>
      </View>
    </ScrollView>
  );
};

export default BuyPlan;
