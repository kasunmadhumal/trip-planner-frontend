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
  import AddLocationHeader from "../../components/AddLocationHeader";
  import LocationInfo from "./LocationInfo";
  import UploadPhotos from "./UploadPhotos";
  import RecentlyAdded from "./RecentlyAdded";
  
  
  
  
  export default function AddNewLocationScreen({ navigation }) {
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
            <AddLocationHeader
              pageNo={pageNumber}
              keyboardIsOpen={keyboardIsOpen}
            />
            <View style={[styles.forms]}>
              {
                {
                  1: (
                    <LocationInfo
                      navigation={navigation}
                      pageNumber={pageNumber}
                      setPageNumber={setPageNumber}
                    />
                  ),
                  2: (
                    <UploadPhotos
                      pageNumber={pageNumber}
                      setPageNumber={setPageNumber}
                    />
                  ),
                  3: (
                    <RecentlyAdded
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
  