import { StyleSheet, TextInput } from "react-native";


export default function TextInputField({
  placeholder,
  inputValue,
  setInputValue,
  secureTextEntry,
  selectorInput,
  style,
  multiline,
}) {
  return (
    <TextInput
      style={[styles.input, style]}
      width={selectorInput ? "85%" : "80%"}
      placeholder={placeholder}
      onChangeText={setInputValue}
      value={inputValue}
      secureTextEntry={secureTextEntry}
      multiline={multiline}
    />
  );
}

        const styles = StyleSheet.create({
        input: {
            width: '80%',
            height: 45,
            borderColor: '#ccc',
            borderWidth: 1,
            borderRadius: 5,
            padding: '3%',
            marginBottom: '4%',
            backgroundColor: '#fff',
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