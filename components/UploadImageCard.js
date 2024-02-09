import React from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet, Dimensions } from "react-native";

export default function UploadImageCard() {
  // Define the images data
  const images = [
    require("../assets/images/location.jpg"),
    require("../assets/images/location.jpg"),
    require("../assets/images/location.jpg"),
    require("../assets/images/location.jpg"),
    // Add more image sources here as needed
  ];

  // Function to render the images in rows
  const renderImages = () => {
    const itemsPerRow = 3; // Number of items per row

    if (images.length <= itemsPerRow) {
      // If there are fewer images than the items per row, render them horizontally
      return (
        <View style={styles.imageRow}>
          {images.map((image, index) => (
            <Image key={index} source={image} resizeMode="contain" style={styles.image} />
          ))}
          <TouchableOpacity onPress={handleAddImage} style={styles.addButton}>
            {/* Add button content here */}
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      // If there are more images, render them in rows with three images per row
      const numRows = Math.ceil(images.length / itemsPerRow); // Calculate the number of rows

      const imageRows = [];

      for (let i = 0; i < numRows; i++) {
        const startIndex = i * itemsPerRow;
        const endIndex = Math.min(startIndex + itemsPerRow, images.length);
        const rowImages = images.slice(startIndex, endIndex);

        // Create a row container for the images
        const row = (
          <View key={i} style={styles.imageRow}>
            {rowImages.map((image, index) => (
              <Image key={index} source={image} resizeMode="contain" style={styles.image} />
            ))}
          </View>
        );

        imageRows.push(row);
      }

      // Add the button at the end of the last row
      const lastRow = imageRows[imageRows.length - 1];
      const addButton = (
        <TouchableOpacity key="addButton" onPress={handleAddImage} style={styles.addButton}>
          {/* Add button content here */}
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      );
      lastRow.props.children.push(addButton);

      return imageRows;
    }
  };

  const handleAddImage = () => {
    // Add functionality to handle adding images here
  };

  return (
    <View style={styles.container}>
      {renderImages()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
    width: "80%",
    marginBottom: 15,
  },
  imageRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 2,
  },
  image: {
    width: Dimensions.get("window").width * 0.25, // Adjust the width as needed
    height: Dimensions.get("window").width * 0.25, // Adjust the height as needed
    margin: 2,
  },
  addButton: {
    width: Dimensions.get("window").width * 0.25, // Match image width
    height: Dimensions.get("window").width * 0.25, // Match image height
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgray",
    margin: 2,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 50, // Adjust the font size as needed
    fontWeight: "bold",
    color: "#726E6E",
  },
});
