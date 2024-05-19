import { View, Text, Pressable, ToastAndroid } from "react-native";
import React, { useRef, useState } from "react";
import { SvgXml } from "react-native-svg";
import { FontStyles } from "../../constants/FontStyles";
import { GoBackSvg, OptionsSvg } from "../../assets/svgs/Shared";
import { useNavigation } from "expo-router";

const Header = ({ title }) => {
  const [isGoBackDisabled, setIsGoBackDisabled] = useState(false);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const gobackButtonRef = useRef(null);
  const optionsButtonRef = useRef(null);
  const navigation = useNavigation();

  const handleGoBackPress = () => {
    setIsGoBackDisabled(true);
    setTimeout(() => setIsGoBackDisabled(false), 2000);
    navigation.goBack();
  };

  const handlePress = () => {
    ToastAndroid.show("This feature is under development!", ToastAndroid.SHORT);
    setIsOptionsDisabled(true);
    setTimeout(() => setIsOptionsDisabled(false), 2000);
  };

  return (
    <View className="flex flex-row justify-between items-center mx-4 my-5">
      {/* GOBACK BUTTON */}
      <View className="w-6 flex-row justify-start">
        <View className="h-8 w-8 overflow-hidden rounded-md">
          <Pressable
            android_ripple={{ color: "#0000002f" }}
            className="flex h-8 w-8 items-center justify-center"
            ref={gobackButtonRef}
            onPress={handleGoBackPress}
            disabled={isGoBackDisabled}
          >
            <SvgXml xml={GoBackSvg} style={{ height: 24, width: 24 }} />
          </Pressable>
        </View>
      </View>

      {/* TITLE */}
      <View className="flex-1 mx-6">
        <Text
          style={FontStyles.InterBold16}
          className="text-primary-dark uppercase text-center"
          numberOfLines={1}
        >
          {title}
        </Text>
      </View>

      {/* ACTION BUTTON */}
      <View className="w-6 flex flex-row justify-end">
        <View className="h-8 w-8 overflow-hidden rounded-md">
          <Pressable
            android_ripple={{ color: "#0000002f" }}
            style={{
              borderRadius: 12,
              overflow: "hidden",
            }}
            className="flex h-8 w-8 items-center justify-center"
            onPress={handlePress}
            ref={optionsButtonRef}
            disabled={isOptionsDisabled}
          >
            <SvgXml xml={OptionsSvg} style={{ height: 24, width: 24 }} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Header;
