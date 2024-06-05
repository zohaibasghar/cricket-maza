import { createStackNavigator } from "@react-navigation/stack";
import TrendingSeries from "../Screens/Home/TrendingSeries";
import AllVideos from "../Screens/Home/AllVideos";
import ArticleScreen from "../Screens/Home/ArticleScreen";
import MatchDetail from "../Screens/Home/MatchDetail";

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
      <Stack.Screen component={ArticleScreen} name="ArticleScreen" />
      <Stack.Screen component={MatchDetail} name="MatchDetail" />
    </Stack.Navigator>
  );
};

export default HomeStack;
