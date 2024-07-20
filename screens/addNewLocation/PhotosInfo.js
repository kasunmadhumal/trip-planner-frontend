import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import ImagePickerButton from "../../components/ImagePickerButton";
import { useState } from "react";
import ImageViewer from "../../components/ImageViewer";
import FormChangeButton from "../../components/FormChangeButton";

export default function PhotosInfo({ navigation, pageNumber, setPageNumber }) {
  const [selectedImages, setSelectedImages] = useState([]);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImages((prevImages) => [...prevImages, result.assets[0].uri]);
    } else {
      alert("You did not select any image.");
    }
  };

  return (
    <GestureHandlerRootView>
      <FlatList
        data={[{ key: "content" }]}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <View style={styles.uploadImagePageBody}>
            <Text style={styles.tittleText}>Upload Photos</Text>
            <View style={styles.imageUploadingContainer}>
              <View style={styles.uploadImagesContainer}>
                {selectedImages.map((image, index) => (
                  <ImageViewer
                    key={index}
                    placeholderImageSource={"IMG"}
                    selectedImage={image}
                  />
                ))}
              </View>
              <ImagePickerButton
                theme="primary"
                label="Choose a photo"
                onPress={pickImageAsync}
              />
            </View>
            <View
              style={[
                styles.buttonsContainer,
                {
                  justifyContent:
                    pageNumber === 1
                      ? "flex-end"
                      : pageNumber === 4
                      ? "flex-start"
                      : "space-between",
                },
              ]}
            >
              {pageNumber > 1 && (
                <>
                  <FormChangeButton
                    text="Preview"
                    onPress={() => {
                      setPageNumber(pageNumber - 1);
                    }}
                  />
                </>
              )}
              {pageNumber < 3 && (
                <>
                  <FormChangeButton
                    text="Next"
                    onPress={() => {
                      // if(
                      //   journeyStartingPlace === null ||
                      //   journeyEndingPlace === null ||
                      //   startingDate === null ||
                      //   startingTime === null
                      //   ){
                      //       Alert.alert(
                      //         "Incomplete Form",
                      //         "Please complete all the required fields before proceeding to the next page.",
                      //         [
                      //           {
                      //             text: "OK",
                      //             onPress: () => console.log("OK Pressed"),
                      //           },
                      //         ]
                      //       );
                      //   return;
                      // }

                      setPageNumber(pageNumber + 1);
                    }}
                  />
                </>
              )}
            </View>

            {/* <ImageViewer
              placeholderImageSource={"This is image"}
              selectedImage={selectedImage}
            />
            <ImagePickerButton
              theme="primary"
              label="Choose a photo"
              onPress={pickImageAsync}
            /> */}
          </View>
        )}
        keyExtractor={(item) => item.key}
      />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    width: "80%",
    marginTop: "8%",
    flexDirection: "row",
  },
  uploadImagePageBody: {
    alignItems: "center",
    height: "100%",
  },

  imageUploadingContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  tittleText: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Roboto",
    color: "#2F264B",
    alignSelf: "flex-start",
    marginLeft: "10%",
    marginBottom: "3%",
  },
  uploadImagesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    borderColor: "#848080",
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    width: "95%",
    marginHorizontal: "10%",
    marginBottom: "5%",
  },
});
