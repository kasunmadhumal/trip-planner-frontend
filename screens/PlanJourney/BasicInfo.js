import { Button, ScrollView, StyleSheet, Text, View} from "react-native";
import { useState } from "react";
import TextInputField from "../../components/TextInputField";
import FormChangeButton from "../../components/FormChangeButton";


export default function BasicInfo({pageNumber, setPageNumber}) {

    const [journeyStartingLocation, setJourneyStartingLocation] = useState("");
    const [journeyStartDateAndTime, setJourneyStartDateAndTime] = useState("");
    const [journeyEndDateAndTime, setJourneyEndDateAndTime] = useState("");
    const [endingLocation, setEndingLocation] = useState("");

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
            <Text style={styles.inputTittleText}>Spent Time For Journey</Text>
            <TextInputField
              placeholder="Journey Start Date and Time"
              inputValue={journeyStartDateAndTime}
              setInputValue={setJourneyStartDateAndTime}
            />
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
});