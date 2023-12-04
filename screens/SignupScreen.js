import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Link, Stack, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Checkbox } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import TextInputField from "../components/TextInputField";
import FormSubmitButton from "../components/FormSubmitButton";

export default function SignupScreen({ navigation }) {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  const handleSubmit = () => {
    navigation.navigate("login");
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
            <Text style={styles.imageText}>Sign up</Text>
          </View>
          <ScrollView style={styles.scrollView}>
            <View style={styles.formContainer}>
              <TextInputField
                placeholder="First Name"
                inputValue={firstName}
                setInputValue={setFirstName}
              />
              <TextInputField
                placeholder="Last Name"
                inputValue={lastName}
                setInputValue={setLastName}
              />
              <TextInputField
                placeholder="Email Address"
                inputValue={email}
                setInputValue={setEmail}
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
                <Text style={styles.checkBoxText}>
                  I want to receive inspiration, marketing promotions and
                  updates via email.
                </Text>
              </View>
              <View style={styles.buttonsContainer}>
                <FormSubmitButton title="SIGN UP" onPress={handleSubmit} />
              </View>
              <View style={styles.textLinkContainer}>
                <TouchableOpacity>
                  <Text style={styles.textLinkContainerText}>
                    Already have an account? Sign in
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
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
  scrollView: {
    width: "100%",
  },
  checkBoxContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "80%",
  },

  checkBoxText: {
    fontSize: 13,
    width: "90%",
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
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  textLinkContainerText: {
    fontSize: 13,
    fontFamily: "Roboto",
    color: "#009CF3",
    textDecorationLine: "underline",
  },
});
