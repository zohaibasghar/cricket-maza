import { View, Text, Card, Input, VStack, Icon, Button, HStack } from "native-base";
import React, { useState } from "react";
import { AntDesign, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Signup = () => {
  const [show, setShow] = useState(false);
  const nav = useNavigation();
  return (
    <Card bg={"#222"} m={4} rounded={"2xl"}>
      <VStack space={4} py={4}>
        <Text fontStyle={"italic"}>Create Your Account</Text>
        <Input
          placeholder="Name"
          leftElement={<AntDesign style={{ marginLeft: 12 }} name="user" size={24} color="white" />}
        />
        <Input
          placeholder="Email"
          leftElement={<AntDesign name="mail" size={24} color="white" style={{ marginLeft: 12 }} />}
        />
        <Input
          placeholder="Mobile Number"
          leftElement={
            <AntDesign name="mobile1" size={24} color="white" style={{ marginLeft: 12 }} />
          }
        />
        <Input
          placeholder="Password"
          type={show ? "text" : "password"}
          leftElement={
            <SimpleLineIcons name="lock" size={24} color="white" style={{ marginLeft: 12 }} />
          }
          InputRightElement={
            <TouchableOpacity onPress={() => setShow(!show)}>
              <Icon
                as={<Ionicons name={show ? "eye-sharp" : "eye-off"} color={"#fff"} />}
                size={5}
                mr="2"
                color="#fff"
              />
            </TouchableOpacity>
          }
        />
        <Button mx={6}>SIGN UP</Button>
        <HStack justifyContent={"center"}>
          <Text color={"#dadada"}>Already have an account? </Text>
          <TouchableOpacity onPress={() => nav.navigate("Login" as never)}>
            <Text color={"white"} fontWeight={700} fontStyle={"italic"}>
              Login
            </Text>
          </TouchableOpacity>
        </HStack>
      </VStack>
    </Card>
  );
};

export default Signup;
