import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import PlanJourneyScreen from "./screens/PlanJourney/PlanJourneyScreen";
import BottomTabs from "./screens/BottomTabs";
import MapScreen from "./screens/MapScreen";
import { Provider } from "react-redux";
import { store } from "./store";
import AddNewLocation from "./screens/addNewLocation/AddNewLocation";
import SearchLocation from "./screens/searchLocation/SearchLocation";
import 'react-native-gesture-handler';
import { en, registerTranslation } from "react-native-paper-dates";


registerTranslation("en", en);

registerTranslation("pl", {
  save: "Save",
  selectSingle: "Select date",
  selectMultiple: "Select dates",
  selectRange: "Select period",
  notAccordingToDateFormat: (inputFormat) =>
    `Date format must be ${inputFormat}`,
  mustBeHigherThan: (date) => `Must be later then ${date}`,
  mustBeLowerThan: (date) => `Must be earlier then ${date}`,
  mustBeBetween: (startDate, endDate) =>
    `Must be between ${startDate} - ${endDate}`,
  dateIsDisabled: "Day is not allowed",
  previous: "Previous",
  next: "Next",
  typeInDate: "Type in date",
  pickDateFromCalendar: "Pick date from calendar",
  close: "Close",
});


const Stack = createNativeStackNavigator();
const isLogin = false;

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Bottom-tabs">
          <Stack.Screen
            name="Bottom-tabs"
            component={BottomTabs}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="signup"
            component={SignupScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="plan-journey"
            component={PlanJourneyScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="add-new-location"
            component={AddNewLocation}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="search-location"
            component={SearchLocation}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="map-screen"
            component={MapScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
  );
}


