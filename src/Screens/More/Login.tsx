import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { VStack, Text, Box, FormControl, Input, Icon, Center, Button, HStack } from "native-base";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

const Login = () => {
  const nav = useNavigation();
  const [show, setShow] = useState(false);
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
          <Text fontWeight={500} color={"white"} fontSize={"lg"}>
            Login
          </Text>
          <Text fontSize={"sm"} color={"white"}>
            Please login to continue
          </Text>
        </Box>

        <FormControl isRequired>
          <VStack space={3}>
            <VStack>
              <FormControl.Label>Email</FormControl.Label>
              <Input
                InputLeftElement={
                  <Icon as={<Entypo name="email" color={"#fff"} />} size={4} ml="2" color="#fff" />
                }
                placeholder="Name"
              />
            </VStack>
            <VStack>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                placeholder="********"
                type={show ? "text" : "password"}
                InputRightElement={
                  <Pressable onPress={() => setShow(!show)}>
                    <Icon
                      as={<Ionicons name={show ? "eye-sharp" : "eye-off"} color={"#fff"} />}
                      size={5}
                      mr="2"
                      color="#fff"
                    />
                  </Pressable>
                }
              />
            </VStack>
          </VStack>
        </FormControl>
        <Center>
          <TouchableOpacity>
            <Text fontSize={"xs"}>FORGOT PASSWORD?</Text>
          </TouchableOpacity>
        </Center>
        <Button>LOGIN</Button>
        <HStack space={1} justifyContent={"center"}>
          <Text fontSize={"xs"}>Don't have an Account?</Text>
          <TouchableOpacity onPress={() => nav.navigate("Signup" as never)}>
            <Text fontSize={"xs"} fontWeight={700} fontStyle={"italic"}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Login;
