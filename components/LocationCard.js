import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function LocationCard() {
  return (
    <TouchableOpacity style={styles.container} >
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={require("../assets/images/location.jpg")}
          resizeMode='contain'
          style={styles.logImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.loactionName} numberOfLines={1}>
          Temple of the Tooth
        </Text>

        <View style={styles.ratingContainer}>
          <View style={styles.ratingStars}>
            {[...Array(5)].map((_, index) => (
              <Image
                key={index}
                source={require("../assets/images/greenCircle.png")}
                style={styles.starImage}
              />
            ))}
          </View>
          <Text style={styles.ratingText}>24 reviews</Text>
        </View>

        <Text style={styles.distanceText}>227km away</Text>
      </View>
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
    width: "80%",
    marginStart: "10%",
    marginBottom: 15
  },
  logoContainer: {
    width: 100,
    height: 100,
    backgroundColor: "#F3F4F8",
    borderRadius: 0,
    justifyContent: "center",
    alignItems: "center",

  },
  logImage: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
  loactionName: {
    fontSize: 16,
    fontFamily: "Roboto",
    color: "#726E6E",
    marginBottom: 15,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 7,
  },
  ratingStars: {
    flexDirection: "row",
    marginRight: 7,
  },
  starImage: {
    width: 15,
    height: 15,
    marginRight: 3,
  },
  ratingText: {
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#83829A",
  },
  distanceText: {
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#83829A",
    marginBottom: 5,
    textTransform: "capitalize",
  },
})
