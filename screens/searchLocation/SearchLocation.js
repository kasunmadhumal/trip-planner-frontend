import { StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";
import Map from "../../components/Map";
import { useSelector } from "react-redux";
import { selectJourneyStartingPlace } from "../../slices/journeySlice";
 
export default function SearchLocation() {
  const origin = useSelector(selectJourneyStartingPlace);

  return (
    <View style={tw`w-full h-full`}>
      <View style={tw`h-1/2`}>
        <Map
          latitude={origin?.latitude || 6.9754}
          longitude={origin?.longitude || 79.9156}
        />
      </View>
      <View style={[tw`h-1/2`, styles.container]}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
        >
          <View style={styles.formContainer}>
            <View style={styles.selecotrsInput}>
              <TextInputField
                placeholder="Journey Starting Time"
                inputValue={journeyStartingTime}
                setInputValue={setJourneyStartingTime}
                secureTextEntry={false}
                selectorInput={true}
              />

              <TouchableOpacity
                onPress={() => setVisibleTimePicker(true)}
                style={styles.timeDatePickerButton}
              >
                <Image
                  style={styles.timeDatePickerButtonImage}
                  source={require("../../assets/images/timePicker.png")}
                />
              </TouchableOpacity>

              <TimePickerModal
                visible={visibleTimePicker}
                onDismiss={onDismissTimePicker}
                onConfirm={onConfirmTimePicker}
                hours={12}
                minutes={14}
                use24HourClock={true}
              />
            </View>

            <View style={styles.selecotrsInput}>
              <TextInputField
                placeholder="Journey Starting Date"
                inputValue={journeyStartingDate}
                setInputValue={setJourneyStartingDate}
                secureTextEntry={false}
                selectorInput={true}
              />

              <TouchableOpacity
                onPress={() => setOpen(true)}
                style={styles.timeDatePickerButton}
              >
                <Image
                  style={styles.timeDatePickerButtonImage}
                  source={require("../../assets/images/date-picker.png")}
                />
              </TouchableOpacity>

              <DatePickerModal
                locale="en"
                mode="single"
                visible={open}
                onDismiss={onDismissSingle}
                date={journeyStartingDate}
                onConfirm={onConfirmSingle}
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
              {pageNumber < 4 && (
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
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  scrollView: {
    width: "100%",
  },
});
