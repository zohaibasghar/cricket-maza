import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "./Screens/Home/Dashboard";
import UpdatesHome from "./Screens/Updates/UpdatesHome";
import LiveHome from "./Screens/Live/LiveHome";
import ScheduleHome from "./Screens/Matches/ScheduleHome";
import MoreHome from "./Screens/More/MoreHome";
import MoreStack from "./Stacks/MoreStack";
import { Entypo, Feather, MaterialIcons, AntDesign } from "@expo/vector-icons";
import HomeStack from "./Stacks/Home";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#5E41E6",
        tabBarInactiveTintColor: "white",
        tabBarLabelPosition: "below-icon",
        tabBarStyle: { marginTop: 8 },
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          switch (route.name) {
            case "Dashboard":
              return <Entypo name="home" size={size} color={color} />;
            case "Updates":
              return <Feather name="refresh-ccw" size={size} color={color} />;
            case "Live":
              return <MaterialIcons name="live-tv" size={size} color={color} />;
            case "Matches":
              return <AntDesign name="calendar" size={size} color={color} />;
            case "More":
              return <AntDesign name="appstore1" size={size} color={color} />;
          }
        },
        tabBarLabelStyle: { marginBottom: 4, fontSize: 11 },
      })}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} options={{ tabBarLabel: "Home" }} />
      <Tab.Screen name="Updates" component={UpdatesHome} />
      <Tab.Screen name="Live" component={LiveHome} />
      <Tab.Screen name="Matches" component={ScheduleHome} />
      <Tab.Screen
        name="More"
        component={MoreHome}
        options={{
          headerStyle: { backgroundColor: "#5E41E6" },
          headerTitle: "SETTINGS",
          headerTitleAlign: "center",
          headerTitleStyle: { marginVertical: 12, fontStyle: "italic" },
        }}
      />
    </Tab.Navigator>
  );
};
export default function Main() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
      <Stack.Screen name="HomeStack" component={HomeStack} />
      <Stack.Screen name="MoreStack" component={MoreStack} />
    </Stack.Navigator>
  );
}
