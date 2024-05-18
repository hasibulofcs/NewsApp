import { Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import BackgroundImage from "./BackgroundImage";
import { FontStyles } from "../../constants/FontStyles";
import { dateTimeStringToDate } from "../../hooks/DateConverter";
import { PlaceholderImage } from "../../constants/Images";
import { router } from "expo-router";
import { useNavigation } from "@react-navigation/native";

const NewsCard = ({
  cardData,
  marginT,
  marginB,
  marginS,
  marginE,
  isHorizontal,
}) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleNewsCardPress = () => {
    router.push({
      pathname: `/newsindetail/${cardData?.title}`,
      params: cardData?.title,
    });
    setIsDisabled(true);
    setTimeout(() => setIsDisabled(false), 2000);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.75}
      className={`rounded-2xl mx-4 ${
        isHorizontal ? "p-0 bg-transparent" : "p-4 bg-white"
      }`}
      style={{
        marginStart: marginS,
        marginTop: marginT,
        marginEnd: marginE,
        marginBottom: marginB,
        width: isHorizontal ? 275 : "auto",
      }}
      disabled={isDisabled}
      onPress={handleNewsCardPress}
    >
      {!cardData?.urlToImage ? (
        <View className="overflow-hidden rounded-xl" style={{ height: 146 }}>
          <BackgroundImage source={PlaceholderImage} />
        </View>
      ) : (
        <View className="overflow-hidden rounded-xl" style={{ height: 146 }}>
          <BackgroundImage remoteSrc={cardData?.urlToImage} />
        </View>
      )}

      <View
        className="flex flex-row justify-between items-center"
        style={{ marginTop: 10 }}
      >
        <Text
          style={FontStyles.InterMedium12}
          className="text-primary-blue max-w-[180px]"
        >
          {cardData?.author}
        </Text>
        <Text style={FontStyles.InterRegular12} className="text-slate-600">
          {dateTimeStringToDate(cardData?.publishedAt)}
        </Text>
      </View>

      <Text
        style={[FontStyles.InterBold14, { marginTop: 16 }]}
        className="truncate line-clamp-2"
      >
        {cardData?.title}
      </Text>
    </TouchableOpacity>
  );
};

export default NewsCard;
