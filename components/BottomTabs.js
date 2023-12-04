import { Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-paper";


 export default function BottomTabs({ navigation }){
  return (
    <View style={{ backgroundColor: "#eee", padding: 20, flexDirection: "row" }}>
      <TouchableOpacity
        style={{ flex: 1, alignItems: "center" }}
      >
        <Icon name="home" size={24} />
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ flex: 1, alignItems: "center" }}
      >
        <Icon name="user" size={24} />
        <Text>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};