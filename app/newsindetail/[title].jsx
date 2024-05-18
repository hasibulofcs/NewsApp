import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/shared/Header";

const NewsInDetail = () => {
  const { title } = useLocalSearchParams();

  return (
    <View className="flex-1">
      <SafeAreaView className="bg-white/40 flex-1">
        <Header title={title} />
        <Text>{title}</Text>
      </SafeAreaView>
    </View>
  );
};

export default NewsInDetail;
