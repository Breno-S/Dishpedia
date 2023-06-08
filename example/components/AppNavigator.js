import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import DetailScreen from "./DetailScreen";

const Stack = createStackNavigator();

function AppNavigator() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Dishpedia" component={ HomeScreen }></Stack.Screen>
            <Stack.Screen name="Detail" component={ DetailScreen }></Stack.Screen>
        </Stack.Navigator>
    );
}

export default AppNavigator;