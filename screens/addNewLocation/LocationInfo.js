import { Button, StyleSheet, Text, View } from "react-native";
import FormChangeButton from "../../components/FormChangeButton";


export default function LocationInfo({ pageNumber, setPageNumber }) {
  return (
    <View style={styles.container}>
      <Text>Page 1</Text>
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
});
