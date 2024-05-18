import { ImageBackground, StyleSheet } from "react-native";

const BackgroundImage = ({ source, className, styleProperty, remoteSrc }) => {
  return (
    <ImageBackground
      source={remoteSrc ? { uri: remoteSrc } : source}
      className={className}
      style={[styles.image, styleProperty]}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default BackgroundImage;
