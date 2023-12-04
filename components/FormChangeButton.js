import { Button, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function FormChangeButton({ text, onPress }) {

  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      {text === "Preview" ? (
        <Image
          source={require("../assets/images/formChangeleft.png")}
          style={styles.image}
        />
      ) : (
        <Image
          source={require("../assets/images/formChangeright.png")}
          style={styles.image}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#009CF3",
    padding: 3,
    borderRadius: 30,
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
});
