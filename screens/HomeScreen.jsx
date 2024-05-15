import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Header from "../components/home/Header";

const HomeScreen = () => {
  return (
    <View className="flex-1">
      <SafeAreaView className="bg-white flex-1">
        <Header />
      </SafeAreaView>

      <StatusBar style="dark" />
    </View>
  );
};

export default HomeScreen;
