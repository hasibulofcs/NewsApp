import { ScrollView, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Header from "../components/home/Header";
import TopNews from "../components/home/TopNews";
import NewsPortalCarousel from "../components/home/NewsPortalCarousel";

const HomeScreen = () => {
  return (
    <View className="flex-1">
      <SafeAreaView className="bg-white/40 flex-1">
        <Header />

        <View className="flex-1">
          <ScrollView className="">
            <NewsPortalCarousel />
            <TopNews />
          </ScrollView>
        </View>
      </SafeAreaView>
      <StatusBar style="dark" />
    </View>
  );
};

export default HomeScreen;
