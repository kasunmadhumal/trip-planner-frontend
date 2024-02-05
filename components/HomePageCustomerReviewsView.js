import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Card } from "react-native-paper";
import tw from "tailwind-react-native-classnames";

export default function HomePageCustomerReviewsView({ navigation, reviews }) {
  return (
    <FlatList
      data={reviews}
      keyExtractor={(item) => item.id.toString()}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("map-screen", { item })}
          style={[
            tw`mr-4 bg-pink-100`,
            {
              width: 270,
              height: 150,
              borderRadius: 12,
              borderColor: "white",
              borderWidth: 1,
              backgroundColor: "#fdf1fc",
              shadowColor: "#e7e4e7",
              shadowOffset: { width: 0, height: 2 },
              elevation: 2,
            },
          ]}
        >
          <View style={[tw`h-1/3 flex-row`]}>
            {/* image of review user */}
            <View
              style={[
                tw``,
                {
                  flex: 0.25,
                },
              ]}
            >
              <Image
                style={[tw`rounded-full ml-4 mt-3`, { width: 40, height: 40 }]}
                source={item.profileImage}
              />
            </View>
            {/* name and country of review user */}
            <View
              style={[
                tw`flex-col mt-3 ml-4 justify-center items-start`,
                {
                  flex: 0.5,
                },
              ]}
            >
              <View>
                <Text style={[tw``,{
                    fontSize: 18,
                    fontWeight: "bold",
                }]}>{item.name}</Text>
              </View>
              <View>
                <Text
                style={[
                    tw``,
                    {   fontSize: 12,
                        color: "gray",
                        fontWeight: "bold",
                    },
                ]}> {item.country} </Text>
              </View>
            </View>
            <View
              style={[
                tw`mt-3 flex-row mr-4`,
                {
                  flex: 0.25,
                },
              ]}
            >
              <Image
                style={[tw`rounded-full ml-4 mr-1`, { width: 20, height: 20 }]}
                source={require("../assets/images/ratePng.png")}
              />
              <Text>{item.rate}</Text>
            </View>
          </View>

          <View style={[tw`h-2/3`]}>
            <Text
              style={[
                tw`text-xs ml-4 mr-1 mt-2`,
                {
                  color: "gray",
                },
              ]}
            >
             {
                item.review.length > 220
                  ? item.review.substring(0, 220) + "..."
                  : item.review
             }
            </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
