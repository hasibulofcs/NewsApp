import { SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import TrendingScreen from "../screens/TrendingScreen";
import BookmarksScreen from "../screens/BookmarksScreen";
import { Provider } from "react-redux";
import { store } from "../store/Store";
import TabBarButton from "../components/shared/TabBarButton";
import {
  BookmarksIconBlack,
  BookmarksIconWhite,
  HomeIconBlack,
  HomeIconWhite,
  ProfileIconBlack,
  ProfileIconWhite,
  TrendingIconBlack,
  TrendingIconWhite,
} from "../assets/svgs/shared/Tabs";

SplashScreen.preventAutoHideAsync();

const _layout = () => {
  const [loaded, error] = useFonts({
    InterBlack: require("../assets/fonts/Inter-Black.ttf"),
    InterBold: require("../assets/fonts/Inter-Bold.ttf"),
    InterExtraBold: require("../assets/fonts/Inter-ExtraBold.ttf"),
    InterExtraLight: require("../assets/fonts/Inter-ExtraLight.ttf"),
    InterLight: require("../assets/fonts/Inter-Light.ttf"),
    InterMedium: require("../assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("../assets/fonts/Inter-Regular.ttf"),
    InterSemibold: require("../assets/fonts/Inter-SemiBold.ttf"),
    InterThin: require("../assets/fonts/Inter-Thin.ttf"),
    TimesSansSerif: require("../assets/fonts/TIMESS.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded || error) {
    return null;
  }

  const Tab = createBottomTabNavigator();

  const TabArr = [
    {
      route: "Home",
      label: "Home",
      icons: [HomeIconWhite, HomeIconBlack],
      component: HomeScreen,
    },
    {
      route: "Trending",
      label: "Trending",
      icons: [TrendingIconWhite, TrendingIconBlack],
      component: TrendingScreen,
    },
    {
      route: "Bookmarks",
      label: "Bookmarks",
      icons: [BookmarksIconWhite, BookmarksIconBlack],
      component: BookmarksScreen,
    },
    {
      route: "Profile",
      label: "Profile",
      icons: [ProfileIconWhite, ProfileIconBlack],
      component: ProfileScreen,
    },
  ];

  return (
    <Provider store={store}>
      <NavigationContainer independent>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              height: 70,
            },
          }}
        >
          {TabArr.map((item, index) => {
            return (
              <Tab.Screen
                key={index}
                name={item.route}
                component={item.component}
                options={{
                  tabBarShowLabel: false,
                  tabBarButton: (props) => (
                    <TabBarButton {...props} item={item} />
                  ),
                }}
              />
            );
          })}
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default _layout;
