import { ImageBackground, StyleSheet } from "react-native";

const BackgroundImage = ({ source, className, styleProperty }) => {
  return (
    <ImageBackground
      source={source}
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
