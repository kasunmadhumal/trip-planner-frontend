import { Button, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen({ navigation }) {

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button
              title="Go to login"
              onPress={() => navigation.navigate("login")}
            />
            <Button
              title="Go to signup"
              onPress={() => navigation.navigate("signup")}
            />
            <Button
              title="Go to plan journey"
              onPress={() => navigation.navigate("plan-journey")}

            />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

// Compare this snippet from screens/ProfileScreen.js:
