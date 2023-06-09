import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/components/AppNavigator";

function App() {
  return(
    <NavigationContainer>
        <AppNavigator />
    </NavigationContainer>
  );
}

export default App;