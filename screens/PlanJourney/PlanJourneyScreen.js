import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import JourneyPlanHeader from "../../components/JourneyPlanHeader";
import BasicInfo from "./BasicInfo";
import Events from "./Events";
import Location from "./Location";
import FinalPlan from "./FinalPlan";


export default function PlanJourneyScreen() {
  const [pageNumber, setPageNumber] = useState(1);
  const [keyboardIsOpen, setKeyboardIsOpen] = useState(false);

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardIsOpen(true);
    });

    Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardIsOpen(false);
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <JourneyPlanHeader
            pageNo={pageNumber}
            keyboardIsOpen={keyboardIsOpen}
          />
          <View style={[styles.forms]}>
            {
              {
                1: (
                  <BasicInfo
                    pageNumber={pageNumber}
                    setPageNumber={setPageNumber}
                  />
                ),
                2: (
                  <Events
                    pageNumber={pageNumber}
                    setPageNumber={setPageNumber}
                  />
                ),
                3: (
                  <Location
                    pageNumber={pageNumber}
                    setPageNumber={setPageNumber}
                  />
                ),
                4: (
                  <FinalPlan
                    pageNumber={pageNumber}
                    setPageNumber={setPageNumber}
                  />
                ),
              }[pageNumber]
            }
          </View>
          <StatusBar style="light" />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    justifyContent: "flex-start",
  },

  forms: {
    width: "100%",
    flex: 0.75,
  },
});
