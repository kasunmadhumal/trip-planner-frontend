import { StyleSheet, View , Text, Image} from "react-native";


export default function PageStateComponent({ textValue, status, color }) {
  return (
    <View style={[styles.container]}>
      <View style={[styles.container1]}>
        <View style={[styles.lineContainer]}>
          <View
            style={{
              height: 2,
              backgroundColor: status === "complete" ? "#1BA0E2" : "#9E9E9E",
              width: "100%",
            }}
          ></View>
        </View>

        <View>
          {status.toString() === "complete" ? (
            <Image
              source={require("../assets/images/complete_state.png")}
              style={styles.image}
            />
          ) : status.toString() === "current" ? (
            <Image
              source={require("../assets/images/greenCircle.png")}
              style={styles.image}
            />
          ) : (
            <Image
              source={require("../assets/images/blueCirclePng.png")}
              style={styles.image}
            />
          )}
        </View>

        <View style={[styles.lineContainer]}>
          <View
            style={{
              height: 2,
              backgroundColor: status === "complete" ? "#1BA0E2" : "#9E9E9E",
              width: "100%",
            }}
          ></View>
        </View>
      </View>
      <View style={[styles.container2]}>
        <Text style={[styles.text]}>{textValue}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.25,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  container1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },

  container2: {
    alignItems: "center",
    justifyContent: "center",
  },

  lineContainer: {
    height: "100%",
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#645C5C",
  },

  image: {
    height: 30,
    width: 30,
    backgroundColor: "#fff",
    borderRadius: 15,
  },
});
