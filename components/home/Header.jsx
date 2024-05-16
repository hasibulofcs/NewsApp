import { View, Pressable, Image, ToastAndroid, Text } from "react-native";
import { ProfileImage } from "../../constants/Images";
import BackgroundImage from "../shared/BackgroundImage";
import { useRef, useState } from "react";
import { FontStyles } from "../../constants/FontStyles";
import { Notifications, Search } from "../../assets/svgs/Home";
import { SvgXml } from "react-native-svg";

const Header = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const profileButtonRef = useRef(null);

  const handlePress = () => {
    ToastAndroid.show("This feature is under development!", ToastAndroid.SHORT);
    setIsDisabled(true);
    setTimeout(() => setIsDisabled(false), 2000);
  };

  return (
    <View className="flex flex-row justify-between items-center mx-4 my-5">
      {/* PROFILE */}
      <View className="flex-1 flex-row justify-start">
        <View className="h-8 w-8 overflow-hidden rounded-full">
          <BackgroundImage source={ProfileImage} className="h-8 w-8" />
          <Pressable
            android_ripple={{ color: "#ffffff3f" }}
            className="flex-1"
            ref={profileButtonRef}
            onPress={handlePress}
            disabled={isDisabled}
          />
        </View>
      </View>

      {/* TITLE */}
      <View className="bg-secondary-dark rounded-tl-lg rounded-br-lg py-[6px] px-2">
        <Text
          style={FontStyles.TimesSansSerifRegular20}
          className="text-white uppercase"
        >
          the news
        </Text>
      </View>

      {/* ACTION BUTTONS */}
      <View className="flex-1 flex-row justify-end">
        <View className="overflow-hidden rounded-lg">
          <Pressable
            android_ripple={{ color: "#0000002f" }}
            style={{
              height: 28,
              width: 28,
              borderRadius: 12,
              overflow: "hidden",
            }}
            className="flex items-center justify-center"
            onPress={handlePress}
          >
            <SvgXml xml={Search} style={{ height: 20, width: 20 }} />
          </Pressable>
        </View>

        <View
          className="overflow-hidden rounded-lg"
          style={{ marginStart: 10 }}
        >
          <Pressable
            android_ripple={{ color: "#0000002f" }}
            style={{
              height: 28,
              width: 28,
              borderRadius: 12,
              overflow: "hidden",
            }}
            className="flex items-center justify-center relative"
            onPress={handlePress}
          >
            <SvgXml xml={Notifications} style={{ height: 20, width: 20 }} />

            {/* NEW NOTIFICATION INDICATOR */}
            <View className="bg-primary-red h-2 w-2 absolute top-[3px] right-[3px] rounded-full" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Header;
