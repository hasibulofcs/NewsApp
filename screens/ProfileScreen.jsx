import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontStyles } from "../constants/FontStyles";

const ProfileScreen = () => {
  return (
    <View className="flex-1">
      <SafeAreaView className="flex-1 items-center justify-center">
        <Text style={FontStyles.InterBold14}>ProfileScreen</Text>
      </SafeAreaView>
    </View>
  );
};

export default ProfileScreen;
