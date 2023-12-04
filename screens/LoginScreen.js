import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Checkbox } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import TextInputField from "../components/TextInputField";
import FormSubmitButton from "../components/FormSubmitButton";
import BottomTabs from "../components/BottomTabs";


export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  const handleSubmit = () => {
    navigation.navigate("signup");
    console.log("Username: " + username + " Password: " + password);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/images/lock-icon1.png")}
              style={styles.image}
            />
            <Text style={styles.imageText}>Sign in</Text>
          </View>
          <View style={styles.formContainer}>
            <TextInputField
              placeholder="Username"
              inputValue={username}
              setInputValue={setUsername}
            />
            <TextInputField
              placeholder="Password"
              inputValue={password}
              setInputValue={setPassword}
              secureTextEntry={true}
            />

            <View style={styles.checkBoxContainer}>
              <Checkbox
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text style={styles.checkBoxText}>Remember me</Text>
            </View>
            <View style={styles.buttonsContainer}>
              <FormSubmitButton title="SIGN IN" onPress={handleSubmit} />
            </View>
            <View style={styles.textLinkContainer}>
              <TouchableOpacity>
                <Text style={styles.textLinkContainerText}>Forgot Password?</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.textLinkContainerText}>Don't have an account? Singup</Text>
              </TouchableOpacity>
            </View>
          </View>
          <StatusBar style="light" />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    justifyContent: "flex-start",
  },
  formContainer: {
    alignItems: "center",
    width: "100%",
  },
  imageContainer: {
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  checkBoxContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginRight: "50%",
  },
  checkBoxText: {
    fontSize: 13,
    fontWeight: "semibold",
    paddingTop: "3%",
  },
  buttonsContainer: {
    width: "80%",
    marginTop: "3%",
    flexDirection: "column",
    justifyContent: "center",
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: "2%",
  },
  imageText: {
    fontSize: 20,
    fontWeight: "bold",
  },

  textLinkContainer: {
    marginTop: "5%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  textLinkContainerText: {
    fontSize: 13,
    fontFamily: "Roboto",
    color: "#009CF3",
    textDecorationLine: "underline",
  },
});
