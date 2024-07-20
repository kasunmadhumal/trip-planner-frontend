import { Image, StyleSheet, View, ViewBase } from "react-native";

export default function ImageViewer({ placeholderImageSource, selectedImage }) {
  const imageSource = selectedImage
    ? { uri: selectedImage }
    : placeholderImageSource;

  return (
    <View style={styles.imageContainer}>
      <Image source={imageSource} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
    imageContainer: {
        margin: 5,
        borderColor: "#848080",
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
        width: 115,
        height: 115,
        marginHorizontal: 5,
        marginBottom: 5,
    },
});
