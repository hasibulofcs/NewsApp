import {
  View,
  Text,
  Pressable,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FontStyles } from "../../constants/FontStyles";
import NewsCard from "../shared/NewsCard";
import { useGetBreakingNewsForAllCategoryQuery } from "../../services/NewsServices";
import Colors from "../../constants/Colors";

const BreakingNews = () => {
  const [allNews, setAllNews] = useState([]);
  const { refetch, error, isLoading, data } =
    useGetBreakingNewsForAllCategoryQuery({ limit: 10, start: 1 });

  useEffect(() => {
    setAllNews(
      data?.articles.filter(
        (item) => item.title !== "[Removed]" && item.urlToImage !== null
      )
    );
  }, [data]);

  return (
    <View className="flex">
      <View className="flex flex-row justify-between items-center mx-4 my-5 text-white">
        <Text
          className="text-base text-tertiary-dark"
          style={FontStyles.InterSemiBold20}
        >
          Breaking News
        </Text>
        <View style={{ overflow: "hidden", borderRadius: 8 }}>
          <Pressable android_ripple={{ color: "#0000002f" }} className="p-1">
            <Text
              className="text-xs text-tertiary-dark"
              style={FontStyles.InterRegular12}
            >
              View All
            </Text>
          </Pressable>
        </View>
      </View>
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

      {allNews?.length == 0 && (
        <View className="flex-1 items-center justify-center">
          <Text style={FontStyles.InterBold14}>Not enough data to show!</Text>
        </View>
      )}

      {/* NEWS SCROLLER */}
      {allNews && (
        <View className="flex">
          <ScrollView
            horizontal
            className=""
            alwaysBounceHorizontal={true}
            bounces={true}
            showsHorizontalScrollIndicator={false}
          >
            {allNews.map((item, indx) => (
              <NewsCard
                cardData={item}
                key={`Breaking_News_${indx}`}
                marginStart={indx == allNews[0] ? 16 : 12}
                marginEnd={indx == allNews?.length - 1 ? 16 : 12}
                isHorizontal={true}
              />
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default BreakingNews;
