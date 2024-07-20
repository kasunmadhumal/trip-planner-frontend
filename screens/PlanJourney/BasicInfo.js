import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useCallback, useState } from "react";
import TextInputField from "../../components/TextInputField";
import FormChangeButton from "../../components/FormChangeButton";
import { DatePickerModal, TimePickerModal } from "react-native-paper-dates";
import GooglePlacesInput from "../../components/GooglePlacesInput";
import { useDispatch, useSelector } from "react-redux";
import { setStartingDate, setStartingTime } from "../../slices/journeySlice";
import EndPoints from "../../data/api/EndPoints";

export default function BasicInfo({ navigation, pageNumber, setPageNumber }) {
  const [journeyStartingDate, setJourneyStartingDate] = useState(undefined);
  const [journeyStartingTime, setJourneyStartingTime] = useState("");
  const [open, setOpen] = useState(false);
  const [visibleTimePicker, setVisibleTimePicker] = useState(false);
  const dispatch = useDispatch();

  const onDismissSingle = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = useCallback(
    (params) => {
      const selectedDate = params?.date;
      setJourneyStartingDate(selectedDate.toString());
      dispatch(setStartingDate(selectedDate.toString()));
      setOpen(false);
    },
    [setOpen, setJourneyStartingDate]
  );

  const onDismissTimePicker = useCallback(() => {
    setVisibleTimePicker(false);
  }, [setVisibleTimePicker]);

  const onConfirmTimePicker = useCallback(
    ({ hours, minutes }) => {
      setJourneyStartingTime(`${hours}:${minutes}`);
      dispatch(setStartingTime(`${hours}:${minutes}`));
      setVisibleTimePicker(false);
    },
    [setVisibleTimePicker]
  );

  return (
    <View style={styles.container}>
      <Text style={styles.tittleText}>Basic Informations</Text>
      <Text style={styles.inputTittleText}>Journey Starting Place</Text>

      <GooglePlacesInput typeOfLocation={"startingLocation"} />

      <Text style={styles.inputTittleText}>Journey Ending Place</Text>

      <GooglePlacesInput typeOfLocation={"endingLocation"} />

      <Text style={styles.inputTittleText}>Journey Starting Date & Time</Text>

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
    width: 30,
    height: 30,
  },
});
