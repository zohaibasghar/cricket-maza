import { View, Text } from "native-base";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Screens/More/Login";

const Stack = createStackNavigator();
const MoreStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default MoreStack;
