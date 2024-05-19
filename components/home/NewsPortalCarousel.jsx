import { Dimensions, TouchableOpacity, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { useRef, useState } from "react";
import BackgroundImage from "../shared/BackgroundImage";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PublishersData } from "../../data/Publisher";
import { router } from "expo-router";

const PAGE_WIDTH = Dimensions.get("window").width;

const CarousalItem = (index) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const item = index;

  const carouselItemPressHandler = (id) => {
    router.push({
      pathname: `/Publisher/${id}`,
      params: id,
    });

    setIsDisabled(true);
    setTimeout(() => setIsDisabled(false), 2000);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.75}
      className="flex-1 rounded-2xl overflow-hidden"
      style={{ height: 170, marginStart: 8, marginEnd: 8 }}
      onPress={() => carouselItemPressHandler(item.index)}
      disabled={isDisabled}
    >
      <BackgroundImage source={PublishersData[item.index]?.image} />
    </TouchableOpacity>
  );
};

const NewsPortalCarousel = () => {
  const [isVertical, setIsVertical] = useState(false);
  const baseOptions = isVertical
    ? {
        vertical: true,
        width: PAGE_WIDTH * 0.86,
        height: PAGE_WIDTH * 0.6,
      }
    : {
        vertical: false,
        width: PAGE_WIDTH,
        height: 200,
      };

  const ref = useRef(null);

  return (
    <View
      style={{
        alignItems: "center",
        height: 200,
      }}
    >
      <GestureHandlerRootView>
        <Carousel
          ref={ref}
          {...baseOptions}
          style={{
            width: PAGE_WIDTH,
          }}
          maxScrollDistancePerSwipe={300}
          loop
          pagingEnabled={false}
          snapEnabled={true}
          autoPlay={true}
          scrollAnimationDuration={2500}
          // onSnapToItem={(index) => console.log("current index:", index)}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 50,
          }}
          data={[...new Array(3).keys()]}
          renderItem={({ index }) => <CarousalItem index={index} />}
        />
      </GestureHandlerRootView>
    </View>
  );
};

export default NewsPortalCarousel;
