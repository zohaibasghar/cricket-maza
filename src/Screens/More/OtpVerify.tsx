import React, { useState } from "react";
import { View } from "react-native";
import { Box, Center, Input, Button, VStack, Text, HStack } from "native-base";
import { useNavigation, useRoute } from "@react-navigation/native";

const OtpVerify = () => {
  const [otp, setOtp] = useState("");
  const route = useRoute();
  const { email } = route.params as any;
  const nav = useNavigation();
  const handleOtpChange = (value: string) => {
    setOtp(value);
  };

  const handleVerify = () => {
    // Add your OTP verification logic here
    nav.navigate("ResetPassword", { email });
  };

  return (
    <Center flex={1}>
      <Box safeArea px="6" py="8" w="90%" bg={"#222"} rounded={"lg"}>
        <VStack space={3}>
          <Text fontSize="lg" fontWeight="bold" textAlign="center">
            OTP Verification
          </Text>
          <VStack my={4}>
            <Text fontSize="sm" textAlign="center" color="gray.500">
              Enter the OTP sent to your email.
            </Text>
            <Text fontSize="sm" textAlign="center" color="gray.500">
              {email}
            </Text>
          </VStack>
          <HStack space={2} justifyContent="center">
            <Input
              fontSize={"lg"}
              w="80%"
              maxLength={6}
              keyboardType="numeric"
              placeholder="Enter OTP"
              value={otp}
              onChangeText={handleOtpChange}
              autoCapitalize="none"
              textAlign="center"
            />
          </HStack>
          <Button mt="5" onPress={handleVerify}>
            Verify OTP
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default OtpVerify;
