import react from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WellcomeScreen";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="welcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="ViewImageScreen" component={ViewImageScreen} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator };
