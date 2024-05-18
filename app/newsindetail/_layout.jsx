import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const NewsInDetailLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="[title]"
        options={{
          headerShown: false,
          animation: "slide_from_right",
          animationDuration: 500,
          animationTypeForReplace: "push",
        }}
      />
    </Stack>
  );
};

export default NewsInDetailLayout;
