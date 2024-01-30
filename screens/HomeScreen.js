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

export default function HomeScreen({ navigation }) {
  const [data, setData] = useState(TestingObjects());

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
                {/* i want to create two images 1. profile image 2.crown */}
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
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// Compare this snippet from screens/ProfileScreen.js:
