import { Image, StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";

export default function Footer({ navigation }) {
  return (
    <View style={[styles.footer, tw`flex-col w-full`]}>
      <View style={[tw`flex-row w-3/4 mt-4`, styles.iconRow]}>
        <Image
          style={styles.logo}
          source={require("../assets/images/facebook.png")}
        />
        <Image
          style={styles.logo}
          source={require("../assets/images/instagram.png")}
        />
        <Image
          style={styles.logo}
          source={require("../assets/images/twitter.png")}
        />
        <Image
          style={styles.logo}
          source={require("../assets/images/youtube.png")}
        />
      </View>
      <View style={[tw`flex-col justify-center items-center w-3/4 mt-4`]}>
        <Text style={[styles.footerTextHeader, tw`font-bold`]}>
          Imprint/Privacy | Terms and Conditions | facebook
        </Text>
        <Text style={styles.footerText}>© 2021 Journey</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  iconRow: {
    marginBottom: 10,
    justifyContent: "space-around",
  },

  footer: {
    backgroundColor: "#84E9BD",
    height: 180,
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    color: "gray",
    fontSize: 12,
    marginTop: 10,
  },
  footerTextHeader: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
  },
  logo: {
    width: 50,
    height: 50,
  },
});
