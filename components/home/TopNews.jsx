import {
  View,
  Text,
  Pressable,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { FontStyles } from "../../constants/FontStyles";
import NewsCard from "../shared/NewsCard";
import { useGetTopNewsForAllCategoryQuery } from "../../services/NewsServices";
import Colors from "../../constants/Colors";

const TopNews = () => {
  const { refetch, isError, isLoading, data } =
    useGetTopNewsForAllCategoryQuery();

  return (
    <View className="flex-1">
      <View className="flex flex-row justify-between items-center mx-4 my-5 text-white">
        <Text
          className="text-base text-tertiary-dark"
          style={FontStyles.InterSemiBold20}
        >
          Top News
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

      {isError && (
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

      {/* NEWS SCROLLER */}
      {data && (
        <View className="flex-1">
          <ScrollView className="">
            {data.articles.map(
              (item, indx) =>
                item.title !== "[Removed]" && (
                  <NewsCard
                    cardData={item}
                    key={`Top_News_${indx}`}
                    marginT={16}
                    marginB={indx == data.articles.length - 1 ? 16 : 0}
                  />
                )
            )}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default TopNews;
