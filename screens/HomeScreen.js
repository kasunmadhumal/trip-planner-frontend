import { Button, Text, View } from "react-native";
import BottomTabs from "../components/BottomTabs";


export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to login"
        onPress={() => navigation.navigate("login")}
      />
      <Button
        style={{ marginTop: 10 }}
        title="plan journey"
        onPress={() => navigation.navigate("plan-journey")}
      />
      <BottomTabs />
    </View>
  );
}
