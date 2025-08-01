import {
  View,
  Text,
  Pressable,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FontStyles } from "../../constants/FontStyles";
import NewsCard from "../shared/NewsCard";
import { useGetTopNewsForAllCategoryQuery } from "../../services/NewsServices";
import Colors from "../../constants/Colors";

const initialLimit = 10;
const initialStart = 0;

const TopNews = ({ isLoading, error, allNews }) => {
  // const [start, setStart] = useState(initialStart);
  // const [allNews, setAllNews] = useState([]);
  // const { refetch, error, isLoading, isFetching, data } =
  //   useGetTopNewsForAllCategoryQuery({ limit: initialLimit, start });

  // const handleRefresh = () => {
  //   setStart(initialStart);
  // };

  // const handleEndReached = (entries) => {
  //   console.log("End reached", entries);
  //   if (allNews?.length === start + initialLimit) {
  //     setStart((prev) => prev + initialLimit);
  //   }
  // };

  // useEffect(() => {
  //   setAllNews(data?.articles.filter((item) => item.title !== "[Removed]"));
  // }, [data]);

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
      {/* {allNews &&
        allNews.map((item, indx) => (
          <NewsCard
            cardData={item}
            key={`Top_News_${indx}`}
            marginTop={indx == allNews[0] ? 0 : 16}
            marginBottom={indx == allNews?.length - 1 ? 16 : 0}
          />
        ))} */}

      {/* <FlatList
        data={allNews}
        keyExtractor={(item) => String(item.title)}
        refreshing={isFetching}
        onRefresh={handleRefresh}
        onEndReached={handleEndReached}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 16, paddingHorizontal: 0 }}
        renderItem={({ item, indx }) => (
          <NewsCard
            cardData={item}
            key={`Top_News_${indx}`}
            marginTop={indx == allNews[0] ? 0 : 16}
            marginBottom={indx == allNews?.length - 1 ? 16 : 0}
          />
        )}
        ListFooterComponent={() => (
          <View>{isFetching && <ActivityIndicator size="small" />}</View>
        )}
      /> */}
    </View>
  );
};

export default TopNews;
