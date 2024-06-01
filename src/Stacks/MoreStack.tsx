import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Screens/More/Login";
import BuyPlan from "../Screens/More/BuyPlan";

const Stack = createStackNavigator();
const MoreStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "#5E41E6" },
        headerTitleStyle: { fontStyle: "italic" },
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="BuyPlan" component={BuyPlan} options={{ headerTitle: "Buy Plan" }} />
    </Stack.Navigator>
  );
};

export default MoreStack;
