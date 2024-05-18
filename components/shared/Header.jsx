import { View, Text, Pressable, ToastAndroid } from "react-native";
import React, { useRef, useState } from "react";
import { SvgXml } from "react-native-svg";
import { FontStyles } from "../../constants/FontStyles";
import { GoBackSvg, OptionsSvg } from "../../assets/svgs/Shared";

const Header = ({ title }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const gobackButtonRef = useRef(null);
  const optionsButtonRef = useRef(null);

  const handlePress = () => {
    ToastAndroid.show("This feature is under development!", ToastAndroid.SHORT);
    setIsDisabled(true);
    setTimeout(() => setIsDisabled(false), 2000);
  };

  return (
    <View className="flex flex-row justify-between items-center mx-4 my-5">
      {/* GOBACK BUTTON */}
      <View className="w-6 flex-row justify-start">
        <View className="h-6 w-6 overflow-hidden rounded-full">
          <Pressable
            android_ripple={{ color: "#ffffff3f" }}
            className="flex-1"
            ref={gobackButtonRef}
            onPress={handlePress}
            disabled={isDisabled}
          >
            <SvgXml xml={GoBackSvg} style={{ height: 24, width: 24 }} />
          </Pressable>
        </View>
      </View>

      {/* TITLE */}
      <View className="flex-1 mx-6">
        <Text
          style={FontStyles.InterBold16}
          className="text-primary-dark uppercase"
          numberOfLines={1}
        >
          {title}
        </Text>
      </View>

      {/* ACTION BUTTON */}
      <View className="w-6 flex flex-row justify-end">
        <View className="overflow-hidden rounded-lg">
          <Pressable
            android_ripple={{ color: "#0000002f" }}
            style={{
              height: 24,
              width: 24,
              borderRadius: 12,
              overflow: "hidden",
            }}
            className="flex items-center justify-center"
            onPress={handlePress}
            ref={optionsButtonRef}
          >
            <SvgXml xml={OptionsSvg} style={{ height: 24, width: 24 }} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Header;
