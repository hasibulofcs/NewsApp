import { View, Text } from "react-native";
import React from "react";
import { FontStyles } from "../constants/FontStyles";
import { SafeAreaView } from "react-native-safe-area-context";

const TrendingScreen = () => {
  return (
    <View className="flex-1">
      <SafeAreaView className="flex-1 items-center justify-center">
        <Text style={FontStyles.InterBold14}>TrendingScreen</Text>
      </SafeAreaView>
    </View>
  );
};

export default TrendingScreen;
