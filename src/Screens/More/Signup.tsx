import { View, Text, Card, Input, VStack, Icon, Button, HStack, ScrollView } from "native-base";
import React, { useState } from "react";
import { AntDesign, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "../../redux/Store";
import { registerUser } from "../../redux/actions/authActions";

const Signup = () => {
  const [show, setShow] = useState(false);
  const nav = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const { loading, user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  console.log({ user });
  function handleSignUp() {
    dispatch(registerUser({ name, email, password, mobile }));
  }
  return (
    <ScrollView>
      <Card bg={"#222"} m={4} rounded={"2xl"}>
        <VStack space={4} py={4}>
          <Text fontStyle={"italic"}>Create Your Account</Text>
          <Input
            placeholder="Name"
            leftElement={
              <AntDesign style={{ marginLeft: 12 }} name="user" size={24} color="white" />
            }
            value={name}
            onChangeText={(e) => setName(e)}
          />
          <Input
            placeholder="Email"
            leftElement={
              <AntDesign name="mail" size={24} color="white" style={{ marginLeft: 12 }} />
            }
            value={email}
            onChangeText={(e) => setEmail(e)}
          />
          <Input
            placeholder="Mobile Number"
            leftElement={
              <AntDesign name="mobile1" size={24} color="white" style={{ marginLeft: 12 }} />
            }
            value={mobile}
            onChangeText={(e) => setMobile(e)}
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
            value={password}
            onChangeText={(e) => setPassword(e)}
          />
          <Button mx={6} isLoading={!!loading} onPress={handleSignUp}>
            SIGN UP
          </Button>
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
    </ScrollView>
  );
};

export default Signup;
