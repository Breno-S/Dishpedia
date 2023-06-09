import React from "react";
import { View, Text, StyleSheet, Image} from "react-native";

export default function Card( { prato } ) {
    return(
        <View style={estiloCard.card}>
            
            
            <Text style={estiloCard.nome}>{ prato.nome }</Text>
            
            <Image 
                source={ prato.source }
                style={estiloCard.foto}
            />

            <View style={estiloCard.tempoDiv}>
                <Image
                    source={require('../../../assets/icon_timer.png')}
                    style={estiloCard.iconTimer}
                />
                <Text style={estiloCard.tempoTexto}>{ prato.tempo }</Text>
            </View>
            
         </View>

    );
}

const estiloCard = StyleSheet.create({
    card: {
        height: 230,
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
        resizeMode: 'cover',
        height: 165,
        width: '100%',
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        zIndex: 2
    },

    tempoDiv: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: 100,
        backgroundColor: "#D9D9D988",
        opacity: 10,
        padding: 8,
        borderBottomRightRadius: 16,
        borderTopLeftRadius: 16,
        alignSelf: 'flex-end',
        marginTop: -39,
        zIndex: 9,
        backgroundColor: "#ffffff88"
    },
    
    iconTimer: {
        resizeMode: 'contain',
        width: 20,
        height: 27,
        marginRight: 8,
    },

    tempoTexto: {
        fontSize: 16,
        fontWeight: 700,
        color: "#453C38",
        textAlign: 'center'
    },

})