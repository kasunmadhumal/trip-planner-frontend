import { Text, View, StyleSheet, FlatList, TextInput, TouchableOpacity, Image } from "react-native";
import { useRouter } from 'expo-router';
import { useState } from 'react'

const searchTypes = ["What we suggest", "What google suggest"]

export default function SearchLocation() {

    const router = useRouter();
    const [selectedLocationType, setSelectedLocationType] = useState('What we suggest')

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

            <View style={styles.tabsContainer}>
                <FlatList
                    data={searchTypes}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.tab(selectedLocationType, item)}
                        >
                            <Text style = { styles.tabText }>{item}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item}
                    contentContainerStyle={{ columnGap: 12 }}
                    horizontal
                />
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
    },
    tabsContainer: {
        width: "100%",
        marginTop: 16,
        alignItems: "center",
    },
    tab: (selectedLocationType, item) => ({
        paddingVertical: 6,
        paddingHorizontal: 20,
        borderRadius: 16,
        borderWidth: 0,
        backgroundColor : selectedLocationType === item ? "#bcbcbc" : "#eeeeee",
    }),
    tabText: ({
        color: "#444444"
    }),

    
})