import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image} from "react-native";

export default function SearchLocation() {


    return (
        <View>
            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder='Enter the place you want to locate'
                    />
                </View>

                <TouchableOpacity style={styles.searchBtn}>
                    <Image
                        source={require("../../assets/images/search-location.png")}
                        resizeMode='contain'
                        style={styles.searchBtnImage}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    searchContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 35,
        height: 50,
        marginHorizontal: 10
      },
      searchWrapper: {
        flex: 1,
        backgroundColor: "white",
        marginRight: 12,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16,
        height: "100%",
      },
      searchInput: {
        fontFamily: "Roboto",
        width: "100%",
        height: "100%",
        paddingHorizontal: 16,
      },
      searchBtn: {
        width: 50,
        height: "100%",
        backgroundColor: "#84E9BD",
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
      },
      searchBtnImage: {
        width: "50%",
        height: "50%",
        tintColor: "white",
      }
})