import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import HomeScreenTabs from "./screens/BottomTabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignupScreen from "./screens/SignupScreen";
import PlanJourneyScreen from "./screens/PlanJourney/PlanJourneyScreen";
import BottomTabs from "./screens/BottomTabs";


const Stack = createNativeStackNavigator();
const isLogin = false;

export default function App() {
  return (
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
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
