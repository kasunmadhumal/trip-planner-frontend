import { Button } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

export default function MapScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>Map Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("Bottom-tabs")}
        />
      </View>
    );
    }

    const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    });
