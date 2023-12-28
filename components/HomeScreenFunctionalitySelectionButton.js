import { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { Image, View } from "react-native";
import { Icon } from "react-native-paper";
import tw from "tailwind-react-native-classnames";
import planJourneyImage from "../assets/images/plan-journey.png";
import addNewPlaceImage from "../assets/images/add-location.png";
import searchPlace from "../assets/images/search-location.png";

export default function HomeScreenFunctionalitySelectionButton({ text , onPress, imagePath }) {


   
    return (
      <TouchableOpacity
        onPress={onPress}
        style={tw`bg-white p-1 rounded-full shadow-lg w-40 h-12 mb-5 justify-center`}
      >
        <View style={tw`flex-row justify-center items-center`}>
          {text === "Journey Plan" ? (
            <Image
              style={tw`rounded-full w-8 h-8 p-4 mr-3`}
              source={planJourneyImage}
            />
          ) : text == "Add New Place" ? (
            <Image
              style={tw`rounded-full w-8 h-8 p-4 mr-1`}
              source={addNewPlaceImage}
            />
          ) : (
            <Image
              style={tw`rounded-full w-8 h-8 p-4 mr-3`}
              source={searchPlace}
            />
          )}
          <Text style={tw`mr-5 text-sm font-semibold text-gray-900`}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    );


}