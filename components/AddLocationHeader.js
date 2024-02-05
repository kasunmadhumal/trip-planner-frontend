import { StyleSheet, Text, View, Keyboard } from "react-native";
import PageStateComponent from "./PageStateComponent";
import { useEffect, useState } from "react";


export default function AddLocationHeader({ pageNo, keyboardIsOpen }) {
  const [backgroundColor, setBackgroundColor] = useState("#84E9BD");
  const [marginBottom, setMarginBottom] = useState("5%");

  useEffect(() => {
    setBackgroundColor(keyboardIsOpen ? "#fff" : "#84E9BD");
    setMarginBottom(keyboardIsOpen ? "5%" : "0%");
  }, [keyboardIsOpen]);

  return (
    //<View><Text>hello</Text></View>
    <View style={[styles.container, { backgroundColor }]}>
      <View style={[styles.pageMainTitle,{marginBottom}]}>
        <Text style={styles.text}>Add New Place</Text>
      </View>
      <View style={styles.pageStateComponents}>
        <PageStateComponent
          pageNo="1"
          status={
            pageNo > 1 ? "complete" : pageNo === 1 ? "current" : "notComplete"
          }
          textValue="Location Info"
        />
        <PageStateComponent
          pageNo="2"
          status={
            pageNo > 2 ? "complete" : pageNo === 2 ? "current" : "notComplete"
          }
          textValue="Photos"
        />
        <PageStateComponent
          pageNo="3"
          status={
            pageNo > 3 ? "complete" : pageNo === 3 ? "current" : "notComplete"
          }
          textValue="Locations"
        />
      </View>
    </View>
  );

  
}

  const styles = StyleSheet.create({
    container: {
      width: "100%",
      flex: 0.25,
      justifyContent: "flex-start",
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      alignItems: "center",
      marginBottom: "17%",
    },
    text: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#726E6E",
    },
    pageStateComponents: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "80%",
      marginTop: "3%",
      height: "50%",
    },
    pageMainTitle:{
      marginTop: "5%",
    }
  });



