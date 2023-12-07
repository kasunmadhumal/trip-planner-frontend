import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Dimensions } from "react-native";
import PreferencesView from "./PreferencesView";

export default function Event({ item, getIndex, drag, isActive }) {

  const index = getIndex(item);
  
  return (
    <TouchableOpacity onLongPress={drag}>
      <View style={styles.eventContainer}>
        <View style={styles.eventNumberContainer}>
          <View style={styles.number}>
            <Text style={styles.buttonText}>{index}</Text>
          </View>
        </View>
        <View style={styles.eventBodyContainer}>
          <View style={styles.tittleRow}>
            <Text style={styles.tittleText}>{item.eventName}</Text>
            <Text style={styles.timeText}>
              Time : {item.alocatedTimeForEvent}
            </Text>
          </View>
          <View style={styles.preferencesRow}>
            {item.preferences.map((preference, index) => {
              return <PreferencesView key={index} text={preference} />;
            })}
          </View>
        </View>
        <View style={styles.eventButtonContainer}>
          <TouchableOpacity style={styles.side_bar_up}>
            <Image
              source={require("../assets/images/wrong_mark.png")}
              style={styles.image_sidebar}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.side_bar_down}>
            <Text style={styles.button_text_sidebar}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  eventContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "5%",
    borderColor: "#9E9E9E",  
    borderWidth: 1,
    borderRadius: 10,
    padding: "2%",
  },
  eventNumberContainer: {
    width: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    width: "60%",
    height: screenWidth * 0.8 * 0.15 * 0.6,
    backgroundColor: "#009CF3",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  buttonText: {
    fontSize: 13,
    fontWeight: "bold",
    fontFamily: "Roboto",
    color: "#fff",
  },
  eventBodyContainer: {
    width: "75%",
  },
  tittleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tittleText: {
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Roboto",
    color: "#726E6E",
  },
  timeText: {
    fontSize: 13,
    fontFamily: "Roboto",
    color: "#726E6E",
  },
  preferencesRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: "5%",
  },

  eventButtonContainer: {
    width: "10%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: "1%",
  },

  image_sidebar: {
    width: screenWidth * 0.5 * 0.1,
    height: screenWidth * 0.5 * 0.1,
    resizeMode: "contain",
  },

  button_text_sidebar: {
    fontSize: 13,
    fontFamily: "Roboto",
    color: "#009CF3",
  },
  side_bar_up: {
    width: "100%",
    marginBottom: "30%",
    alignItems: "center",
  },

  side_bar_down: {
    width: "100%",
    marginTop: "30%",
    alignItems: "center",
  },

});
