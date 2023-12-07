import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { useCallback, useState } from "react";
import TextInputField from "../../components/TextInputField";
import FormChangeButton from "../../components/FormChangeButton";
import { TimePickerModal } from "react-native-paper-dates";


export default function BasicInfo({pageNumber, setPageNumber}) {
  const [journeyStartingLocation, setJourneyStartingLocation] = useState("");
  const [journeyStartDateAndTime, setJourneyStartDateAndTime] = useState("");
  const [journeyStartingDate, setJourneyStartingDate] = useState("");
  const [journeyStartingTime, setJourneyStartingTime] = useState("");
  const [journeyEndDateAndTime, setJourneyEndDateAndTime] = useState("");
  const [endingLocation, setEndingLocation] = useState("");
  const [visibleTimePicker, setVisibleTimePicker] = useState(false);

  //time picker codes
  const onDismissTimePicker = useCallback(() => {
    setVisibleTimePicker(false);
  }, [setVisibleTimePicker]);

  const onConfirmTimePicker = useCallback(
    ({ hours, minutes }) => {
      setVisibleTimePicker(false);
    },
    [setVisibleTimePicker]
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.tittleText}>Basic Informations</Text>
        <View style={styles.formContainer}>
          <Text style={styles.inputTittleText}>Journey Starting Place</Text>
          <TextInputField
            placeholder="Search Starting Location"
            inputValue={journeyStartingLocation}
            setInputValue={setJourneyStartingLocation}
          />
          <Text style={styles.inputTittleText}>
            Journey Starting Date & Time
          </Text>

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
              style={styles.timePickerButton}
            >
              <Image
                style={styles.timePickerButtonImage}
                source={require("../../assets/images/timePicker.png")}
              />
            </TouchableOpacity>

            <TimePickerModal
              visible={visibleTimePicker}
              onDismiss={onDismissTimePicker}
              onConfirm={onConfirmTimePicker}
              hours={12}
              minutes={14}
            />
          </View>

          {/* <View
              style={styles.verticleLine}
            /> */}
          <TextInputField
            placeholder="Joourney End Date and Time"
            inputValue={journeyEndDateAndTime}
            setInputValue={setJourneyEndDateAndTime}
          />
          <Text style={styles.inputTittleText}>Journey Ending Place</Text>
          <TextInputField
            placeholder="Search Ending Location"
            inputValue={endingLocation}
            setInputValue={setEndingLocation}
          />
          <View style={styles.buttonsContainer}>
            <FormChangeButton
              text="Preview"
              onPress={() => {
                setPageNumber(pageNumber - 1);
              }}
            />
            <FormChangeButton
              text="Next"
              onPress={() => {
                setPageNumber(pageNumber + 1);
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
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
    marginTop: "3%",
    flexDirection: "row",
    justifyContent: "space-between",
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

  timePickerButton: {
    marginBottom: "3%",
  },

  timePickerButtonImage: {
    width: 30,
    height: 30,
  },
});