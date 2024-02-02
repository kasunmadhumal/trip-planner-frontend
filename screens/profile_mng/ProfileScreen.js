import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import ProfileEdit from "./ProfileEdit";

export default function ProfileScreen({ navigation }) {

    return (
        <View style={styles.container}>
            
            <Image
                style={{ width: 80, height: 80, marginBottom: "10%", marginTop: "0%" }}
                source={require("../../assets/images/avatar.png")}
            />
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>journeyplannerofficial@gamil.com</Text>

            <Text style={styles.label}>Username:</Text>
            <Text style={styles.value}>journeyplannerofficial</Text>

            <Text style={styles.label}>Password:</Text>
            <Text style={styles.value}>J0uRNEy227</Text>


            <View style={styles.editButtonContainer}>
                <TouchableOpacity
                    style={styles.editButton}
                >
                    <Text style={styles.editButtonTextStyle}>Edit</Text>
                </TouchableOpacity>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
    },
    
    label: {
        fontSize: 15,
        fontWeight: "bold",
        fontFamily: "Roboto",
        color: "#726E6E",
        alignSelf: "flex-center",
        marginLeft: "0%",
        marginBottom: "2%",
    },
    value: {
        ontSize: 15,
        fontWeight: "bold",
        fontFamily: "Roboto",
        color: "#726E6E",
        alignSelf: "flex-center",
        marginLeft: "0%",
        marginBottom: "7%",
    },
    editButton: {
        width: "25%",
        height: "100%",
        backgroundColor: "#009CF3",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "2%",
    },
    editButtonTextStyle: {
        fontSize: 15,
        fontWeight: "bold",
        fontFamily: "Roboto",
        color: "#fff",
    },
    editButtonContainer: {
        marginBottom: "4%",
        marginTop: "4%",
        height: 40,
        width: "80%",
        flexDirection: "row",
        justifyContent: "center",

    }
});


