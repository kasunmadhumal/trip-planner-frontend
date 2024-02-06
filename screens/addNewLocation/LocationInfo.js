import { StyleSheet, Text, View, ScrollView } from "react-native";
import FormChangeButton from "../../components/FormChangeButton";
import TextInputField from "../../components/TextInputField";


export default function LocationInfo({ pageNumber, setPageNumber }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.tittleText}>Location Information</Text>
        <View style={styles.formContainer}>
          
          <Text style={styles.inputTittleText}>Location Name</Text>
          <TextInputField
            placeholder="Location Name"
          />

          <Text style={styles.inputTittleText}>Location Coordinates</Text>
          <View style={{ flexDirection: "row", alignItems: "", justifyContent: "space-between", width: "80%" }}>
          <TextInputField 
            placeholder="Latitude and Longitude"
            style={{ flex: 1 }} 
          />
          <Text style={styles.orText}>or</Text>
          <TextInputField 
            placeholder="Current Location" 
            style={{ flex: 1 }}
          />
          </View>

          <Text style={styles.inputTittleText}>Find the Matching Events with the Location</Text>
          <TextInputField
            placeholder="Swimming Diving RockClimbing"
          />
          
          <Text style={styles.inputTittleText}>Add Matching Preferences for the Events</Text>
          <TextInputField
            placeholder="#NaturalPond #Forest #BeachHouse"
          />
          
          <Text style={styles.inputTittleText}>About the Place</Text>
          <TextInputField
            style={{height: 200}} 
            multiline={true}
            placeholder="Description about the location" 
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    justifyContent: "flex-start",
  },
  buttonsContainer: {
    width: "80%",
    marginTop: "3%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  formContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  scrollView: {
    width: "100%",
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
  orText: {
    marginHorizontal: 5,
    marginTop: 15,
    fontSize: 15,
    color: "#726E6E",
  },
});
