import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Screens/More/Login";
import BuyPlan from "../Screens/More/BuyPlan";
import Signup from "../Screens/More/Signup";
import ForgetPassword from "../Screens/More/ForgetPassword";
import MyAccount from "../Screens/More/MyAccount";
import Transactions from "../Screens/More/Transactions";
import ChangePassword from "../Screens/More/ChangePassword";

const Stack = createStackNavigator();
const MoreStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "#5E41E6" },
        headerTitleStyle: { fontStyle: "italic", fontWeight: 700 },
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="BuyPlan" component={BuyPlan} options={{ headerTitle: "BUY PLAN" }} />
      <Stack.Screen name="Signup" component={Signup} options={{ headerTitle: "SIGN UP" }} />
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{ headerTitle: "FORGET PASSWORD" }}
      />
      <Stack.Screen name="MyAccount" component={MyAccount} options={{ headerTitle: "PROFILE" }} />
      <Stack.Screen
        name="Transactions"
        component={Transactions}
        options={{ headerTitle: "TRANSACTION HISTORY" }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{ headerTitle: "CHANGE PASSWORD" }}
      />
    </Stack.Navigator>
  );
};

export default MoreStack;
