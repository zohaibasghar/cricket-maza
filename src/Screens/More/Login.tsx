import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
    const nav = useNavigation();
  return (
    <View>
      <Text>Login</Text>
    </View>
  );
};

export default Login;
