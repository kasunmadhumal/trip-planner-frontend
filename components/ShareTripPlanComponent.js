import { AntDesign } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-paper";
import tw from "tailwind-react-native-classnames";
import { comment } from "../assets/images/comment.png";

export default function ShareTripPlanComponent({ tripPlan }) {
  return (
    <View style={[styles.container]}>
      <View style={styles.shareTextView}>
        <View style={{flexDirection : "row"}}>
          <Text style={styles.tittleText}>Share</Text>
          <AntDesign
            name="sharealt"
            size={24}
            color="black"
            style={{ marginLeft: "10%" }}
          />
        </View>
        <Button style={{width:"20%"}}>
          <Text>Cancel</Text>
        </Button>
      </View>
      <View style={styles.shareMediaView}>
        <TouchableOpacity>
          <Image
            source={require("../assets/images/comment.png")}
            style={{ width: 60, height: 60 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/images/gmail.png")}
            style={{ width: 60, height: 60 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/images/messenger.png")}
            style={{ width: 60, height: 60 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/images/whatapp.png")}
            style={{ width: 60, height: 60 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderWidth: 2,
    borderColor: "#c7c9cb",

  },

  shareTextView: {
    width: "90%",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  shareMediaView: {
    width: "90%",
    height: 100,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tittleText: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Roboto",
    color: "#2F264B",
    alignSelf: "flex-start",
    marginBottom: "3%",
  },
});
