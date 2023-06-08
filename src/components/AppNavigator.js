import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, StyleSheet, Dimensions, Image, View } from "react-native";
import HomeScreen from "./HomeScreen";
import DetailScreen from "./DetailScreen";
import { useFonts, Lobster_400Regular } from '@expo-google-fonts/lobster';

const Stack = createStackNavigator();

function CustomHeaderTitle({title}) {
    const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);

    useEffect(() => {
        const updateDimensions = () => {
        setScreenWidth(Dimensions.get('window').width);
        };

        Dimensions.addEventListener('change', updateDimensions);

        return () => {
        Dimensions.removeEventListener('change', updateDimensions);
        };
    }, []);

    const getFontSize = () => {
        const fontSizePercentage = 0.07; // Adjust this value as per your desired percentage
        return Math.round(screenWidth * fontSizePercentage);
    };

    const estiloNavegador = StyleSheet.create({
        Container: {
            display: 'flex',
            flexDirection: 'row',
            paddingTop: 5,
        },

        Image: {
            width: 34,
            height: 34,
            marginRight: 18,
        },
        
        Text: {
            color: '#D9A05B',
            fontFamily: 'Lobster', // Set the font family here
            fontSize: getFontSize(),
        }
    })

    return (
      <View style={ estiloNavegador.Container }>
        <Image
          source={require('../../assets/logo.png')}
          style={ estiloNavegador.Image }
        />
        <Text style={ estiloNavegador.Text }>{title}</Text>
      </View>
    );
}

function AppNavigator() {
    const [fontsLoaded] = useFonts({
        Lobster: Lobster_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }

    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Dishpedia" 
                component={ HomeScreen } 
                options={{ 
                headerStyle: {
                    backgroundColor: '#8C4303',
                },
                headerTitle: () => <CustomHeaderTitle title="Dishpedia"/> }}/>
            <Stack.Screen 
                name="Detail" component={ DetailScreen }
                options={{ 
                headerStyle: {
                    backgroundColor: '#8C4303',
                },
                headerTitle: () => <CustomHeaderTitle title="Estrogonofe de Camarão"/> }}/>
        </Stack.Navigator>
    );
}

export default AppNavigator;
