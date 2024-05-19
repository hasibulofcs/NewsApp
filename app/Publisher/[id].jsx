import {
  View,
  Text,
  ScrollView,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import Header from "../../components/shared/Header";
import { PublishersData } from "../../data/Publisher";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGetPublisherWiseNewsQuery } from "../../services/NewsServices";
import NewsCard from "../../components/shared/NewsCard";
import { FontStyles } from "../../constants/FontStyles";

const Publisher = () => {
  const { id } = useLocalSearchParams(); //Provides the url params
  const [allPublisherNews, setAllPublisherNews] = useState([]);
  const name = PublishersData[id].searchParam;

  const { refetch, error, isLoading, isFetching, data } =
    useGetPublisherWiseNewsQuery(name);

  useEffect(() => {
    setAllPublisherNews(
      data?.articles.filter((item) => item.title !== "[Removed]")
    );
  }, [data]);

  return (
    <View className="flex-1">
      <SafeAreaView className="bg-white/40 flex-1">
        <Header title={PublishersData[id]?.title} />

        {isLoading && (
          <View className="flex-1 items-center justify-center">
            <ActivityIndicator size="large" color={Colors.secondaryDark} />
          </View>
        )}

        {error && (
          <View className="flex-1 items-center justify-center">
            <Text>Something looks wrong!</Text>
            <View className="rounded-md bg-secondary-dark mt-2">
              <Pressable
                android_ripple={{ color: "#ffffff2f" }}
                className="px-2 py-1"
                onPress={() => refetch()}
              >
                <Text className="text-white">Try Reloading</Text>
              </Pressable>
            </View>
          </View>
        )}

        {allPublisherNews?.length == 0 && (
          <View className="flex-1 items-center justify-center">
            <Text style={FontStyles.InterBold14}>Not enough data to show!</Text>
          </View>
        )}

        {allPublisherNews && (
          <ScrollView>
            {allPublisherNews?.map((item, indx) => (
              <NewsCard
                cardData={item}
                key={`Top_News_${indx}`}
                marginTop={indx == allPublisherNews[0] ? 0 : 16}
                marginBottom={indx == allPublisherNews?.length - 1 ? 16 : 0}
              />
            ))}
          </ScrollView>
        )}
      </SafeAreaView>

      <StatusBar style="dark" />
    </View>
  );
};

export default Publisher;
