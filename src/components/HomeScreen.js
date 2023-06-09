import React, { useState } from "react";
import { ScrollView, StatusBar, StyleSheet, ImageBackground, TouchableOpacity, View, Text } from "react-native";
import Card from "./Card/CardReceita";
import strogonoff from '../../assets/strogonoff.png';
import bolo from '../../assets/bolo.png';
import hamburger from '../../assets/hamburger.png';

class Prato {
    constructor(nome, source, tempo) {
      this.nome = nome;
      this.source = source;
      this.tempo = tempo;
    }
}

function HomeScreen( { navigation } ) {
    const estrogonofe = new Prato('Estrogonofe de Camarão', strogonoff, '20 min');
    const torta = new Prato('Bolo da Carne Moída', bolo, '15 min');
    const sanduiche = new Prato('Hambúrguer Vegano', hamburger, '15 min');

    return(
        <ScrollView>
            
            <ImageBackground
                source={require('../../assets/noise.png')}
            >
                <StatusBar/>

                <TouchableOpacity activeOpacity={0.8} onPress={ () => navigation.navigate('Estrogonofe de Camarão')}>
                    <Card prato={estrogonofe}/>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8} onPress={ () => navigation.navigate('Bolo da Carne Moída')}>
                    <Card prato={torta}/>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8} onPress={ () => navigation.navigate('Hambúrguer Vegano')}>
                    <Card prato={sanduiche}/>
                </TouchableOpacity>

                <View style={estiloHome.Footer}>
                    <Text style={estiloHome.FooterText}>© 2023 Dishpedia </Text>
                </View>
            </ImageBackground>
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