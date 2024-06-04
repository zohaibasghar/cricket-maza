import { createStackNavigator } from "@react-navigation/stack";
import TrendingSeries from "../Screens/Home/TrendingSeries";
import AllVideos from "../Screens/Home/AllVideos";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen component={TrendingSeries} name="TrendingSeries" />
      <Stack.Screen component={AllVideos} name="AllVideos" />
    </Stack.Navigator>
  );
};

export default HomeStack;
