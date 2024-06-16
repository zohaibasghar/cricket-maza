import { useNavigation } from "@react-navigation/native";
import {
  VStack,
  Text,
  Box,
  FormControl,
  Input,
  Icon,
  Center,
  Button,
  HStack,
  ScrollView,
  useToast,
} from "native-base";
import { Entypo, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { useAppDispatch, useAppSelector } from "../../redux/Store";
import { login } from "../../redux/actions/authActions";

const Login = () => {
  const nav = useNavigation();
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ email: "test@example.com", password: "password" });
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.auth);
  const toast = useToast();
  const handleLogin = () => {
    dispatch(login(form)).then(() => {
      if (error) return;
      toast.show({
        title: "Logged in!",
        render: () => {
          return (
            <Box bg="#5E41E6" px="4" py="2" rounded="sm" mb={5}>
              <Text fontSize={"lg"}>You are logged in!</Text>
            </Box>
          );
        },
      });
      nav.navigate("HomeTabs", { screen: "More" });
    });
  };

  return (
    <ScrollView>
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
              Login
            </Text>
            <Text fontSize={"sm"} color={"white"} fontStyle={"italic"}>
              Please login to continue
            </Text>
          </Box>

          <FormControl isRequired>
            <VStack space={3}>
              <VStack>
                <FormControl.Label>Email</FormControl.Label>
                <Input
                  leftElement={
                    <Entypo name="email" size={24} color="white" style={{ marginLeft: 12 }} />
                  }
                  placeholder="johndoe@example.com"
                  value={form.email}
                  autoCapitalize="none"
                  onChangeText={(e) => setForm({ ...form, email: e })}
                />
              </VStack>
              <VStack>
                <FormControl.Label>Password</FormControl.Label>
                <Input
                  placeholder="Password"
                  type={show ? "text" : "password"}
                  autoCapitalize="none"
                  leftElement={
                    <SimpleLineIcons
                      name="lock"
                      size={24}
                      color="white"
                      style={{ marginLeft: 12 }}
                    />
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
                  value={form.password}
                  onChangeText={(e) => setForm({ ...form, password: e })}
                />
              </VStack>
            </VStack>
          </FormControl>
          <Center>
            <TouchableOpacity onPress={() => nav.navigate("ForgetPassword" as never)}>
              <Text fontSize={"xs"}>FORGOT PASSWORD?</Text>
            </TouchableOpacity>
          </Center>
          <Button isLoading={!!loading} onPress={handleLogin}>
            LOGIN
          </Button>
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
    </ScrollView>
  );
};

export default Login;
