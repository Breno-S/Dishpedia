import React, { useState } from "react";
import { ScrollView, StatusBar, StyleSheet, TouchableOpacity, View, Text } from "react-native";
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

            <View style={estiloHome.Footer}>
                <Text style={estiloHome.FooterText}>© 2023 Dishpedia </Text>
            </View>
        </ScrollView>
    );
}

export default HomeScreen;

const estiloHome = StyleSheet.create({
    Footer: {
        marginTop: 15,
        padding: 10,
        backgroundColor: '#8C4303',
    },

    FooterText: {
        color: '#fff',
        fontSize: 12,
        textAlign: 'center',
    },
});