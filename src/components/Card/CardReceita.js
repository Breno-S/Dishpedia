import React from "react";
import { View, Text, StyleSheet, Image} from "react-native";

export default function Card() {
    return(
        <View style={estiloCard.card}>
            
            <Text style={estiloCard.nome}>Estrogonofe de Camarão</Text>
            
            <Image 
                source={require('../../../assets/strogonoff.png')}
                style={estiloCard.foto}
            />

            <View style={estiloCard.tempoDiv}>
                <Image
                    source={require('../../../assets/icon_timer.png')}
                    style={estiloCard.iconTimer}
                />
                <Text style={estiloCard.tempoTexto}>20 min</Text>
            </View>
            
         </View>

    );
}

const estiloCard = StyleSheet.create({
    card: {
        height: 220,
        backgroundColor: "#453C38",
        margin: 15,
        elevation: 2,
        borderRadius: 16
    },

    nome: {
        textAlign: 'center',
        color: '#F2F2F2',
        padding: 15,
        fontSize: 24,
        fontFamily: 'Lobster'
    },

    foto: {
        resizeMode : 'cover',
        height: 155,
        width: '100%',
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        zIndex: 2
    },

    tempoDiv: {
        display: 'flex',
        width: 100,
        backgroundColor: "#D9D9D988",
        opacity: 10,
        padding: 10,
        borderBottomRightRadius: 16,
        borderTopLeftRadius: 16,
        alignSelf: 'flex-end',
        marginTop: -39,
        zIndex: 9,
        backgroundColor: "#ffffff88"
    },
    
    iconTimer: {
        width: 30,
        height: 40
    },

    tempoTexto: {
        color: "#453C38",
        textAlign: 'center'
    },

})