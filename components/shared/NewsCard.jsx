import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { TemporaryImage } from "../../constants/Images";
import BackgroundImage from "./BackgroundImage";
import { FontStyles } from "../../constants/FontStyles";

const NewsCard = ({}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      className="rounded-2xl mx-4 p-4 bg-white"
    >
      <View className="overflow-hidden rounded-xl" style={{ height: 146 }}>
        <BackgroundImage source={TemporaryImage} />
      </View>

      <View
        className="flex flex-row justify-between items-center"
        style={{ marginTop: 10 }}
      >
        <Text style={FontStyles.InterMedium12} className="text-primary-blue">
          The New york Times
        </Text>
        <Text style={FontStyles.InterRegular12} className="text-slate-600">
          19.02.2023
        </Text>
      </View>

      <Text
        style={[FontStyles.InterBold14, { marginTop: 16 }]}
        className="truncate line-clamp-2"
      >
        US to send F-16 fighter jets to Gulf amid Iran shipping tensions Lorem
        ipsum dolor sit amet consectetur adipisicing elit.
      </Text>
    </TouchableOpacity>
  );
};

export default NewsCard;
