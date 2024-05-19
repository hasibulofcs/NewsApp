import { View, Text, ScrollView, ToastAndroid, Pressable } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/shared/Header";
import { PlaceholderImage, TemporaryImage } from "../../constants/Images";
import BackgroundImage from "../../components/shared/BackgroundImage";
import { useGetTopNewsForAllCategoryQuery } from "../../services/NewsServices";
import { FontStyles } from "../../constants/FontStyles";
import { dateTimeStringToDate } from "../../hooks/DateConverter";
import { Bookmark, Share } from "../../assets/svgs/Shared";
import { SvgXml } from "react-native-svg";

const NewsInDetail = () => {
  const { title } = useLocalSearchParams(); //Provides the url params
  const [bookamrkIsDisabled, setBookamrkIsDisabled] = useState(false);
  const [shareIsDisabled, setShareIsDisabled] = useState(false);
  const bookmarkButtonRef = useRef(null);
  const shareButtonRef = useRef(null);
  const [appData, setAppData] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  {
    /** TODO: The RTK use-Query will be different based upon the route parameter when from breaking news it'll neewd to fetch data for breaking news. Only for top news is implemented here **/
  }
  const { refetch, error, isLoading, data } = useGetTopNewsForAllCategoryQuery(
    { limit: itemsPerPage, start: page },
    {
      selectFromResult: ({ refetch, error, isLoading, data }) => ({
        refetch,
        error,
        isLoading,
        data: data,
      }),
    }
  );

  useEffect(() => {
    setAppData(
      data?.articles
        ?.filter((item) => item.title !== "[Removed]")
        .find((item) => item.title === title)
    );
  }, []);

  const handleBookmarkPress = () => {
    ToastAndroid.show("This feature is under development!", ToastAndroid.SHORT);
    setBookamrkIsDisabled(true);
    setTimeout(() => setBookamrkIsDisabled(false), 2000);
  };
  const handleSharePress = () => {
    ToastAndroid.show("This feature is under development!", ToastAndroid.SHORT);
    setShareIsDisabled(true);
    setTimeout(() => setShareIsDisabled(false), 2000);
  };

  return (
    <View className="flex-1">
      <SafeAreaView className="bg-white/40 flex-1">
        <Header title={title} />

        <View className="flex-1 mx-4 my-[46px]">
          <ScrollView>
            {/* CONTEXT IMAGE */}
            {appData?.urlToImage ? (
              <View
                className="overflow-hidden rounded-xl"
                style={{ height: 184 }}
              >
                <BackgroundImage remoteSrc={appData?.urlToImage} />
              </View>
            ) : (
              <View
                className="overflow-hidden rounded-xl"
                style={{ height: 184 }}
              >
                <BackgroundImage source={PlaceholderImage} />
              </View>
            )}

            {/* DATE AND AUTHOR */}
            <View
              className="flex flex-row justify-between items-center"
              style={{ marginTop: 10 }}
            >
              <Text
                style={FontStyles.InterRegular12}
                className="text-slate-600"
              >
                {dateTimeStringToDate(appData?.publishedAt)}
              </Text>
              <View className="flex flex-row items-center gap-x-6">
                {/* BOOKMARK */}
                <View className="h-4 w-4 overflow-hidden rounded-sm">
                  <Pressable
                    android_ripple={{ color: "#0000002f" }}
                    className="flex items-center justify-center"
                    ref={bookmarkButtonRef}
                    onPress={handleBookmarkPress}
                    disabled={bookamrkIsDisabled}
                  >
                    <SvgXml xml={Bookmark} style={{ height: 16, width: 16 }} />
                  </Pressable>
                </View>
                {/* SHARE */}
                <View className="h-4 w-4 overflow-hidden rounded-sm">
                  <Pressable
                    android_ripple={{ color: "#0000002f" }}
                    className="flex items-center justify-center"
                    ref={shareButtonRef}
                    onPress={handleSharePress}
                    disabled={shareIsDisabled}
                  >
                    <SvgXml xml={Share} style={{ height: 16, width: 16 }} />
                  </Pressable>
                </View>
              </View>
            </View>

            {/* AUTHOR */}
            <Text
              style={FontStyles.InterMedium12}
              className="text-primary-blue mt-3"
            >
              {appData?.author}
            </Text>

            {/* TITLE */}
            <Text
              style={FontStyles.InterBold16}
              className="text-primary-dark uppercase mt-6"
            >
              {title}
            </Text>

            {/* DETAILS */}
            <Text
              style={FontStyles.InterRegular12}
              className="text-slate-500 uppercase mt-6"
            >
              {appData?.content}
            </Text>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default NewsInDetail;
