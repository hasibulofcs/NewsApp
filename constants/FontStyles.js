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
  InterMedium12: {
    ...FONTFAMILY.InterMedium,
    fontSize: 12,
  },
  InterSemiBold12: {
    ...FONTFAMILY.InterSemibold,
    fontSize: 12,
  },
  InterSemiBold14: {
    ...FONTFAMILY.InterSemibold,
    fontSize: 14,
  },
  InterSemiBold16: {
    ...FONTFAMILY.InterSemibold,
    fontSize: 16,
  },
  InterSemiBold18: {
    ...FONTFAMILY.InterSemibold,
    fontSize: 18,
  },
  InterSemiBold20: {
    ...FONTFAMILY.InterSemibold,
    fontSize: 20,
  },
  InterSemiBold24: {
    ...FONTFAMILY.InterSemibold,
    fontSize: 24,
  },
  InterBold12: {
    ...FONTFAMILY.InterBold,
    fontSize: 12,
  },
  InterBold14: {
    ...FONTFAMILY.InterBold,
    fontSize: 14,
  },
  InterBold16: {
    ...FONTFAMILY.InterBold,
    fontSize: 16,
  },
  InterBold18: {
    ...FONTFAMILY.InterBold,
    fontSize: 18,
  },
  InterBold20: {
    ...FONTFAMILY.InterBold,
    fontSize: 20,
  },
  InterBold24: {
    ...FONTFAMILY.Interbold,
    fontSize: 24,
  },
  TimesSansSerifRegular20: {
    ...FONTFAMILY.TimesSansSerif,
    fontSize: 20,
  },
});
