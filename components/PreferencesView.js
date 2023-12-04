import { StyleSheet, Text, View } from "react-native";

export default function PreferencesView({text}) {

    return (

        <View style={styles.container}>
            <Text style={styles.preferencesText}>#{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#A6AEC3",
    borderRadius: 13,
    padding: "1.5%",
    marginRight: "2%",
    marginBottom: "2%",
  
  },
  preferencesText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#FFFAFA",
    padding: "1%",
  },
});
