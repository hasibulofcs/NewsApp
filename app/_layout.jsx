import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "../store/Store";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
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

  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
            animation: "slide_from_right",
            animationDuration: 500,
            animationTypeForReplace: "push",
          }}
        />
        <Stack.Screen
          name="newsindetail"
          options={{
            headerShown: false,
            animation: "slide_from_bottom",
            animationDuration: 500,
            animationTypeForReplace: "push",
            presentation: "modal",
          }}
        />
      </Stack>
    </Provider>
  );
};

export default RootLayout;
