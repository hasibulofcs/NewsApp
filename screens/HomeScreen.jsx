import { ActivityIndicator, FlatList, ScrollView, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Header from "../components/home/Header";
import TopNews from "../components/home/TopNews";
import NewsPortalCarousel from "../components/home/NewsPortalCarousel";
import BreakingNews from "../components/home/BreakingNews";
import { useGetTopNewsForAllCategoryQuery } from "../services/NewsServices";
import NewsCard from "../components/shared/NewsCard";
import { useDispatch, useSelector } from "react-redux";
import { save } from "../services/NewsSlice";

const HomeScreen = () => {
  const [allNews, setAllNews] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  // const allNews = useSelector((state) => state.topNewses.value);
  // const dispatch = useDispatch();

  const { refetch, error, isLoading, isFetching, data } =
    useGetTopNewsForAllCategoryQuery({ limit: itemsPerPage, start: page });

  // TEMP

  // const loadMore = () => {
  //   if (!isFetching) {
  //     setPage((prevPage) => prevPage + 1);
  //   }
  // };

  useEffect(() => {
    setAllNews(
      data?.articles.filter(
        (item) => item.title !== "[Removed]" && item.urlToImage !== null
      )
    );
    // dispatch(save(data?.articles.filter((item) => item.title !== "[Removed]")));
  }, [data]);
  // TEMP

  return (
    <View className="flex-1">
      <SafeAreaView className="bg-white/40 flex-1">
        <Header />

        <View className="flex-1">
          {/* <ScrollView className="">
            <NewsPortalCarousel />
            <BreakingNews />
            <TopNews />
          </ScrollView> */}

          <FlatList
            data={allNews}
            keyExtractor={(item) => String(item.title)}
            refreshing={isFetching}
            // onEndReached={loadMore}
            onEndReachedThreshold={1}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, indx }) => (
              <NewsCard
                cardData={item}
                key={`Top_News_${indx}`}
                marginTop={indx == allNews[0] ? 0 : 8}
                marginBottom={indx == allNews?.length - 1 ? 16 : 8}
              />
            )}
            ListHeaderComponent={() => (
              <>
                <NewsPortalCarousel />
                <BreakingNews />
                <TopNews
                  isLoading={isLoading}
                  allNews={allNews}
                  error={error}
                />
              </>
            )}
            ListFooterComponent={() => (
              <View>{isFetching && <ActivityIndicator size="small" />}</View>
            )}
          />
        </View>
      </SafeAreaView>
      <StatusBar style="dark" />
    </View>
  );
};

export default HomeScreen;
