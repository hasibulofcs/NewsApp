import { StyleSheet } from "react-native";

const FONTFAMILY = {
  InterBlack: { fontFamily: "InterBlack" },
  InterBold: { fontFamily: "InterBold" },
  InterExtraBold: { fontFamily: "InterExtraBold" },
  InterExtraLight: { fontFamily: "InterExtraLight" },
  InterLight: { fontFamily: "InterLight" },
  InterMedium: { fontFamily: "InterMedium" },
  InterRegular: { fontFamily: "InterRegular" },
  InterSemibold: { fontFamily: "InterSemibold" },
  InterThin: { fontFamily: "InterThin" },
  TimesSansSerif: { fontFamily: "TimesSansSerif" },
};

export const FontStyles = StyleSheet.create({
  InterRegular12: {
    ...FONTFAMILY.InterRegular,
    fontSize: 12,
  },
  InterSemiBold14: {
    ...FONTFAMILY.InterSemibold,
    fontSize: 14,
  },
  TimesSansSerifRegular20: {
    ...FONTFAMILY.TimesSansSerif,
    fontSize: 20,
  },
});
