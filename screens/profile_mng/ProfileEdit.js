import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default function ProfileEdit({ navigation }) {
  const [editedEmail, setEditedEmail] = useState('');
  const [editedUsername, setEditedUsername] = useState('');
  const [editedPassword, setEditedPassword] = useState('');
  const [editedProfileImage, setEditedProfileImage] = useState(null);

  const handleImagePicker = () => {
    const options = {
      title: 'Select Profile Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setEditedProfileImage(response.uri);
      }
    });
  };

  const handleSaveEdits = () => {
    console.log('Edited Email:', editedEmail);
    console.log('Edited Username:', editedUsername);
    console.log('Edited Password:', editedPassword);
    console.log('Edited Profile Image:', editedProfileImage);

    // Perform actions to save edits (e.g., send to server)

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleImagePicker}>
        {editedProfileImage ? (
          <Image source={{ uri: editedProfileImage }} style={styles.profileImage} />
        ) : (
          <Image
            style={styles.profileImagePlaceholder}
            source={require('../../assets/images/avatar.png')}
          />
        )}
      </TouchableOpacity>

      <Text style={styles.label}>Edit Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter new email"
        value={editedEmail}
        onChangeText={(text) => setEditedEmail(text)}
      />

      <Text style={styles.label}>Edit Username:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter new username"
        value={editedUsername}
        onChangeText={(text) => setEditedUsername(text)}
      />

      <Text style={styles.label}>Edit Password:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter new password"
        secureTextEntry
        value={editedPassword}
        onChangeText={(text) => setEditedPassword(text)}
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSaveEdits}>
        <Text style={styles.saveButtonText}>Save Edits</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    padding: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 20,
  },
  profileImagePlaceholder: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: '#726E6E',
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#009CF3',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  saveButton: {
    width: '50%',
    height: 40,
    backgroundColor: '#009CF3',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: '#fff',
  },
});
