import { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function SearchingTextInputFieldForPreferences({
  placeholder,
  inputValue,
  setInputValue,
  secureTextEntry,
  selectorInput,
  preferencesNameList,
}) {
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const filtered = preferencesNameList.filter((item) =>
      item.preference.toLowerCase().includes(searchText.toLowerCase())
    );
    if (searchText === "") {
      return setFilteredData(preferencesNameList);
    }

    setFilteredData(filtered);
  }, [searchText]);

  const Item = ({ preference }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        setInputValue(inputValue+preference);
        setSearchText("");
        setFilteredData([]);
      }}
    >
      <Text style={{ fontWeight: "bold", color: "gray", marginLeft: "4%" }}>
        {preference}
      </Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => <Item preference={item.preference} />;

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
        onChangeText={setSearchText}
        value={searchText}
        secureTextEntry={secureTextEntry}
      />
      {searchText !== "" && filteredData.length !== 0 && (
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
