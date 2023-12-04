import { Button, StyleSheet } from "react-native";


export default function FormSubmitButton({ title, onPress }) {
  return (
    <Button
        style={styles.button}
        title={title}
        onPress={onPress} 
        />
  );
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#000',
      color: '#fff',
      padding: 10,
      borderRadius: 10,
      justifyContent:'flex-end'
    },
    });