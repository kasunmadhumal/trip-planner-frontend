import {
  Button,
  FlatList,
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import HomeScreenFunctionalitySelectionButton from "../components/HomeScreenFunctionalitySelectionButton";
import TestingObjects from "./TestingObjects";
import HomePageLocationCardView from "../components/HomePageLocationCardView";
import { useState } from "react";
import HomePageCustomerReviewsView from "../components/HomePageCustomerReviewsView";
import Footer from "../components/Footer";

export default function HomeScreen({ navigation }) {
  const [data, setData] = useState(TestingObjects());
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "John Doe",
      country: "USA",
      rate: 3.7,
      profileImage: require("../assets/images/avatar.png"),
      review:
        "I had a great experience with this app. I was able to find a ride easily and the driver was very friendly. I would recommend this app to anyone who needs a ride.I had a great experience with this app. I was able to find a ride easily and the driver was very friendly. I would recommend this app to anyone who needs a ride.",
    },
    {
      id: 2,
      name: "Rahul meheta",
      country: "India",
      rate: 4.5,
      profileImage: require("../assets/images/avatar.png"),
      review:
        "I was able to find a ride to my destination quickly and easily. The driver was very friendly and I felt safe the entire time. I would definitely use this app again.",
    },
  ]);

  return (
    <SafeAreaView style={tw`flex-1`}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={tw`flex-1`}
      >
        <View
          style={[
            tw`android:pt-2 bg-white flex flex-col justify-start items-center h-full w-full`,
          ]}
        >
          <ScrollView style={tw`w-full`}>
            <View
              style={[
                tw`w-full justify-start`,
                {
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
                  backgroundColor: "#84E9BD",
                },
              ]}
            >
              <View style={tw`flex-row justify-end`}>
                <Image
                  style={[
                    tw`rounded-full ml-4 mt-4`,
                    { width: 50, height: 50 },
                  ]}
                  source={require("../assets/images/avatar.png")}
                />
                <Image
                  style={[
                    tw`rounded-full mr-4 ml-4 mt-4`,
                    { width: 50, height: 50 },
                  ]}
                  alt="premium"
                  source={require("../assets/images/crown1.png")}
                />
              </View>
              <View>
                <Text
                  style={tw`ml-4 mb-4 text-4xl font-extrabold tracking-tight text-gray-900`}
                >
                  Explore
                </Text>
              </View>
              <View
                style={[
                  tw`justify-between ml-4 mr-4 mt-4`,
                  { flexDirection: "row", flexWrap: "wrap" },
                ]}
              >
                <HomeScreenFunctionalitySelectionButton
                  text={"Journey Plan"}
                  onPress={() => navigation.navigate("plan-journey")}
                />
                <HomeScreenFunctionalitySelectionButton
                  text={"Add New Place"}
                  onPress={() => navigation.navigate("add-new-location")}
                />
                <HomeScreenFunctionalitySelectionButton
                  text={"Search Place"}
                  onPress={() => navigation.navigate("search-location")}
                />
              </View>
            </View>

            <View style={tw`ml-4 mr-4 justify-center flex-col mt-4`}>
              <Text style={tw`text-3xl font-medium text-gray-900 mb-2`}>
                Plan your next vacation
              </Text>
              <Text style={tw`text-gray-600 text-sm`}>
                Check out this week’s selection of popular places that might
                catch you eye.
              </Text>
            </View>
            <View style={tw`w-full mt-5 ml-4`}>
              <HomePageLocationCardView
                data={data}
                navigation={navigation}
                style={tw`w-full`}
              />
            </View>
            <View style={tw`ml-4 mr-4 justify-center flex-col mt-4`}>
              <Text style={tw`text-3xl font-medium text-gray-900 mb-2`}>
                Satisfied Customers Are Our Best Ads
              </Text>
            </View>
            <View style={tw`w-full mt-5 ml-4`}>
              <HomePageCustomerReviewsView
                navigation={navigation}
                reviews={reviews}
                style={tw`w-full`}
              />
            </View>
            <View style={tw`w-full mt-10`}>
              <Footer
                navigation={navigation}
                style={tw`w-full`}
              />
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// Compare this snippet from screens/ProfileScreen.js:
