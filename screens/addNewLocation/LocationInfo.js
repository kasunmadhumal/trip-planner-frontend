import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import TextInputField from "../../components/TextInputField";
import { useDispatch } from "react-redux";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { FlatList } from "react-native";
import FormChangeButton from "../../components/FormChangeButton";

export default function LocationInfo({
  navigation,
  pageNumber,
  setPageNumber,
}) {
  const [locationName, setLocationName] = useState("");
  const [locationCordinates, setLocationCordinates] = useState("");
  const [matchingEvents, setMatchingEvents] = useState("");
  const [matchingPreferences, setMatchingPreferences] = useState("");
  const [aboutPlace, setAboutPlace] = useState("");
  const dispatch = useDispatch();

  return (
    <GestureHandlerRootView>
      <FlatList
        data={[{ key: "content" }]}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <View style={styles.container}>
            <Text style={styles.tittleText}>Location Informations</Text>
            <Text style={styles.inputTittleText}>Location Name</Text>

            <TextInputField
              placeholder="Location Name"
              inputValue={locationName}
              setInputValue={setLocationName}
              secureTextEntry={false}
              selectorInput={false}
            />

            <Text style={styles.inputTittleText}>
              Location Cordinates(Latitude and Longitude )
            </Text>
            <View style={styles.locationCordinatesContainer}>
              <TextInputField
                placeholder="Ex:6.92707,79.8612"
                inputValue={locationCordinates}
                setInputValue={setLocationCordinates}
                secureTextEntry={false}
                selectorInput={false}
              />
              <TouchableOpacity
                onPress={() => {
                  setLocationCordinates("6.92707,79.8612");
                }}
              >
                <Image
                  style={styles.timeDatePickerButtonImage}
                  source={require("../../assets/images/google_location.png")}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.inputTittleText}>
              Find The Events That Matches The Location
            </Text>

            <TextInputField
              placeholder="Swimming, Hiking, Camping, etc."
              inputValue={matchingEvents}
              setInputValue={setMatchingEvents}
              secureTextEntry={false}
              selectorInput={false}
            />

            <Text style={styles.inputTittleText}>
              Add Matching Preferences For The Events
            </Text>

            <TextInputField
              placeholder="#NaturalPond, #MountainTop, etc."
              inputValue={matchingPreferences}
              setInputValue={setMatchingPreferences}
              secureTextEntry={false}
              selectorInput={false}
            />

            <Text style={styles.inputTittleText}>About Place</Text>

            <TextInput
              placeholder="Description"
              multiline={true}
              onChange={(text) => setAboutPlace(text)}
              value={aboutPlace}
              style={{
                width: "80%",
                height: 100,
                borderColor: "#ccc",
                borderWidth: 1,
                borderRadius: 5,
                padding: "3%",
                marginBottom: "4%",
                backgroundColor: "#fff",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 1,
              }}
            />
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
          </View>
        )}
        keyExtractor={(item) => item.key}
      />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
  },
  formContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  scrollView: {
    width: "100%",
  },
  buttonsContainer: {
    width: "80%",
    marginTop: "8%",
    flexDirection: "row",
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
  inputTittleText: {
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Roboto",
    color: "#726E6E",
    alignSelf: "flex-start",
    marginLeft: "10%",
    marginBottom: "2%",
  },
  verticleLine: {
    backgroundColor: "#848080",
    width: 1,
    height: "10%",
    marginBottom: "2%",
  },
  selecotrsInput: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  timeDatePickerButton: {
    marginBottom: "3%",
  },

  timeDatePickerButtonImage: {
    width: 40,
    height: 40,
  },
  locationCordinatesContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    marginTop: "2%",
  },
});
