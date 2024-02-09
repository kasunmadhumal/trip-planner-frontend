import { TouchableOpacity, StyleSheet, Text, View, ScrollView } from "react-native";
import FormChangeButton from "../../components/FormChangeButton";
import FormSubmitButton from "../../components/FormSubmitButton";
import LocationCard from "../../components/LocationCard";

export default function RecentlyAdded({ pageNumber, setPageNumber }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.tittleText}>Recently Added</Text>
        <LocationCard/>
        <LocationCard/>
        <View style={styles.formContainer}></View>
        <Text style={styles.tittleText}>Added Places</Text>
        <LocationCard/>
        <View style={styles.formContainer}>

          <View style={styles.doneButtonContainer}>
            <TouchableOpacity
              style={styles.doneButton}
            >
              <Text style={styles.doneButtonTextStyle}>Done</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonsContainer}>
            <FormChangeButton
              text="Preview"
              onPress={() => {
                setPageNumber(pageNumber - 1);
              }}
            />
            <FormSubmitButton
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
  tittleText: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Roboto",
    color: "#2F264B",
    alignSelf: "flex-start",
    marginLeft: "10%",
    marginBottom: "3%",
  },
  scrollView: {
    width: "100%",
  },
  formContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  doneButton: {
    width: "25%",
    height: "100%",
    backgroundColor: "#009CF3",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "2%",
  },
  doneButtonTextStyle: {
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Roboto",
    color: "#fff",
  },
  doneButtonContainer: {
    marginBottom: "4%",
    height: 40,
    width: "80%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
