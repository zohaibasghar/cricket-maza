import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Text, Box, FormControl, VStack, Button, Input } from "native-base";
import React, { useState } from "react";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const nav = useNavigation();
  function handleForgetPassword() {
    nav.navigate("OtpVerification", { email });
  }
  return (
    <Box flex={1} px={4} py={2}>
      <VStack
        space={5}
        justifyContent={"start"}
        alignItems="start"
        px={5}
        py={4}
        my={4}
        bg="#222"
        style={{
          borderRadius: 12,
        }}
      >
        <Box>
          <Text fontWeight={500} color={"white"} fontSize={"lg"} fontStyle={"italic"}>
            Forgot Password?
          </Text>
          <Text fontSize={"sm"} color={"white"} fontStyle={"italic"}>
            Enter your registered email, we will send you a password reset link.
          </Text>
        </Box>

        <FormControl isRequired>
          <VStack space={3}>
            <VStack>
              <FormControl.Label>Email</FormControl.Label>
              <Input
                autoCapitalize="none"
                value={email}
                onChangeText={(e) => setEmail(e)}
                leftElement={
                  <Entypo name="email" size={24} color="white" style={{ marginLeft: 12 }} />
                }
                placeholder="johndoe@example.com"
              />
            </VStack>
          </VStack>
        </FormControl>
        <Button disabled={!email} onPress={handleForgetPassword}>
          SEND
        </Button>
      </VStack>
    </Box>
  );
};

export default ForgetPassword;
