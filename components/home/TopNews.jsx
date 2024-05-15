import { View, Text, Pressable, ScrollView } from "react-native";
import React from "react";
import { FontStyles } from "../../constants/FontStyles";
import NewsCard from "../shared/NewsCard";

const TopNews = () => {
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
      <View className="flex-1">
        <ScrollView>
          {/* {drafts.map((item, indx) => (
            <DraftsCard
              cardData={item}
              key={`Top_News_${indx}`}
              marginT={indx == drafts.length - 1 ? 16 : 0}
              marginE={indx == drafts.length - 1 ? 16 : 0}
            />
          ))} */}
          <NewsCard />
        </ScrollView>
      </View>
    </View>
  );
};

export default TopNews;
