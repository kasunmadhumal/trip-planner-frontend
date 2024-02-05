import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function SearchingTextInputFieldForEvent({
  placeholder,
  inputValue,
  setInputValue,
  secureTextEntry,
  selectorInput,
  eventNameList,
}) {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filtered = eventNameList.filter((item) =>
      item.eventName.toLowerCase().includes(inputValue.toLowerCase())
    );
    if (inputValue === "") {
      return setFilteredData(eventNameList);
    }

    setFilteredData(filtered);
  }, [inputValue]);

  const Item = ({ eventName }) => (
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          setInputValue(eventName);
          setFilteredData([]);
        }}
      >
        <Text style={{ fontWeight: "bold", color: "gray", marginLeft: "4%" }}>
          {eventName}
        </Text>
      </TouchableOpacity>
  );

  const renderItem = ({ item }) => <Item eventName={item.eventName} />;

  return (
    <View
      style={{
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "4%",
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#ccc",
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 1,
      }}
    >
      <TextInput
        style={styles.input}
        width="100%"
        placeholder={placeholder}
        onChangeText={setInputValue}
        value={inputValue}
        secureTextEntry={secureTextEntry}
      />
      {(inputValue !== "" && filteredData.length !== 0) &&(
        <FlatList
          style={{
            width: "100%",
          }}
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.id}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 45,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: "3%",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
  },
  item: {
    borderColor: "#ccc",
    borderWidth: 0.5,
    padding: "1%",
    backgroundColor: "#f6f4f6",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
  },
});
