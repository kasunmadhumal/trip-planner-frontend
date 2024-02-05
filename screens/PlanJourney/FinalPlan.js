import { Button, StyleSheet, Text, View } from "react-native";
import FormChangeButton from "../../components/FormChangeButton";
import FormSubmitButton from "../../components/FormSubmitButton";


export default function FinalPlan({ pageNumber, setPageNumber }) {
  return (
    <View style={styles.container}>
      <Text>Page 4</Text>
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
                //djsjdhsjdhsjdhsjdhsjdhsdsjd
                setPageNumber(pageNumber + 1);
              }}
            />
          </>
        )}
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
  },
});
