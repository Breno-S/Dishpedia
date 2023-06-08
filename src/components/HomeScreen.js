import React, { useState } from "react";
import { ScrollView, StatusBar, StyleSheet, TouchableOpacity } from "react-native";
import Card from "./Card/CardReceita";

function HomeScreen( { navigation } ) {
    return(
        <ScrollView>

            <StatusBar/>

            <TouchableOpacity activeOpacity={0.8} onPress={ () => navigation.navigate('Detail')}>
                <Card />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8} onPress={ () => navigation.navigate('Detail')}>
                <Card />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8} onPress={ () => navigation.navigate('Detail')}>
                <Card />
            </TouchableOpacity>

        </ScrollView>
    );
}

export default HomeScreen;
