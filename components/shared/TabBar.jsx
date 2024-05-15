import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SvgXml } from "react-native-svg";
import { BottomNavigationContent } from "../../data/Shared";
import { FontStyles } from "../../constants/FontStyles";

const TabBar = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const { navigate } = useNavigation();

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View
      style={styles.TabContainer}
      className="px-2 h-[72px] items-center justify-center"
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigate(route.name);
          }
        };

        return (
          <Pressable
            android_ripple={{ color: "#0000003f" }}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: isFocused ? "#242828" : "#fff",
            }}
            key={route.name}
            className={`flex-1 flex-row justify-center items-center px-3 py-2 rounded-full`}
          >
            {BottomNavigationContent.map(({ activeUrl, icons }) => (
              <React.Fragment key={`Bottom_Navigation_${activeUrl}`}>
                {options.tabBarIcon === activeUrl && (
                  <SvgXml
                    xml={isFocused ? icons[0] : icons[1]}
                    style={{
                      height: 28,
                      width: 28,
                      transform: isFocused ? [{ scale: 0.85 }] : [{ scale: 1 }],
                    }}
                  />
                )}
              </React.Fragment>
            ))}

            {isFocused ? (
              <Text
                className="text-white text-xs"
                style={FontStyles.InterRegular12}
              >
                {label}
              </Text>
            ) : (
              <></>
            )}
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  TabContainer: {
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: -30,
    },
    shadowColor: "#000000",
    elevation: 20,
    flexDirection: "row",
    backgroundColor: "#fff",
  },
});

export default TabBar;
