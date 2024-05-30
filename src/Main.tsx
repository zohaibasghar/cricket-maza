import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "./Screens/Home/Dashboard";
import UpdatesHome from "./Screens/Updates/UpdatesHome";
import LiveHome from "./Screens/Live/LiveHome";
import ScheduleHome from "./Screens/Matches/ScheduleHome";
import MoreHome from "./Screens/More/MoreHome";
import MoreStack from "./Stacks/MoreStack";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "gray",
        tabBarLabelPosition: "below-icon",
        tabBarLabelStyle: { marginBottom: 4, fontSize: 11 },
      })}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Updates" component={UpdatesHome} />
      <Tab.Screen name="Live" component={LiveHome} />
      <Tab.Screen name="Matches" component={ScheduleHome} />
      <Tab.Screen name="More" component={MoreHome} />
    </Tab.Navigator>
  );
};
export default function Main() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
      <Stack.Screen name="MoreStack" component={MoreStack} />
    </Stack.Navigator>
  );
}
