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
import LocationInfo from "./screens/addNewLocation/LocationInfo";
import SearchLocation from "./screens/searchLocation/SearchLocation";
import ProfileEdit from "./screens/profile_mng/ProfileEdit";
import AddNewLocationScreen from "./screens/addNewLocation/AddNewLocationScreen";


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
            component={AddNewLocationScreen}
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
          <Stack.Screen
            name="profile-edit"
            component={ProfileEdit}
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


