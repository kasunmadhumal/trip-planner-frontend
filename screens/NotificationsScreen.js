import { Text, View } from "react-native";


export default function NotificationScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Notification Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});