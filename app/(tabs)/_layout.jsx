import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  BookmarksIconBlack,
  BookmarksIconWhite,
  HomeIconBlack,
  HomeIconWhite,
  ProfileIconBlack,
  ProfileIconWhite,
  TrendingIconBlack,
  TrendingIconWhite,
} from "../../assets/svgs/shared/Tabs";
import TabBarButton from "../../components/shared/TabBarButton";
import HomeScreen from "../../screens/HomeScreen";
import TrendingScreen from "../../screens/TrendingScreen";
import BookmarksScreen from "../../screens/BookmarksScreen";
import ProfileScreen from "../../screens/ProfileScreen";

const TabsLayout = () => {
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
  );
};

export default TabsLayout;
