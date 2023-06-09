import React from "react";
import { View, ScrollView, Text, ImageBackground, Image, StyleSheet} from "react-native";

function BurgerScreen( {navigation} ) {
    return(
        <ScrollView style={estiloDetail.mainView}>
            <ImageBackground
                source={require('../../assets/noise.png')}
            >
            <View style={estiloDetail.boxFoto}>
                <Image
                    source={require('../../assets/hamburger.png')}
                    style={estiloDetail.foto}
                />
            </View>

            <View style={estiloDetail.tempoDiv}>
                <Image
                    source={require('../../assets/icon_timer_detail.png')}
                    style={estiloDetail.iconTimer}
                />
                <Text style={estiloDetail.tempoTexto}>15 min</Text>
            </View>

            <Text style={estiloDetail.Heading}>Ingredientes</Text>

            <View style={estiloDetail.container}>
                <Text style={[estiloDetail.text, estiloDetail.lineHeightPrep ]}>
                1 colher (sobremesa) de azeite (para o refogado){'\n\n'}
                3 colheres (sopa) de azeite (para o molho){'\n\n'}
                2 berinjelas cortadas em cubos pequenos{'\n\n'}
                2 xícaras (chá) de cogumelos shimeji picados{'\n\n'}
                2 xícaras (chá) de cogumelos champignon picados{'\n\n'}
                1 colher (café) de sal{'\n\n'}
                Pimenta-do-reino preta moída a gosto{'\n\n'}
                8 colheres (sopa) de aveia em flocos finos{'\n\n'}
                2 colheres (sopa) de ervas frescas picadas{'\n\n'}
                6 fatias de Pão Viva Integralmente Wickbold{'\n\n'}
                ½ maço de folhas de rúcula
                </Text>
            </View>

            <Text style={estiloDetail.Heading}>Modo De Preparo</Text>

            <View style={estiloDetail.container}>
                <Text style={[estiloDetail.text, estiloDetail.lineHeightPrep ]}>
                1- Em uma frigideira, coloque 1 colher de sobremesa de azeite e refogue as berinjelas e os cogumelos.{'\n\n'}
                2- Retire do fogo, aguarde até que esfrie e, com a ajuda de uma peneira ou espremedor de batatas, retire o excesso de líquido do refogado.{'\n\n'}
                3- Tempere a mistura com sal e pimenta e adicione a aveia, para dar o ponto.{'\n\n'}
                4- Molde 6 hambúrgueres (formato de discos) com o refogado e grelhe-os em uma frigideira untada com azeite. Reserve.{'\n\n'}
                5- Em um recipiente, misture as 3 colheres de sopa de azeite com as ervas.{'\n\n'}
                6- Sobre cada uma das fatias de pão, coloque 1 punhado de folhas de rúcula; por cima, posicione os hambúrgueres e finalize regando com o azeite de ervas. Sirva.
                </Text>
            </View>
            
            <View style={estiloDetail.Footer}>
                <Text style={estiloDetail.FooterHeading}>Categorias</Text>

                <View style={estiloDetail.categoriasBox}>
                    <Text style={estiloDetail.FooterText}>Lanches</Text>
                    <Text style={estiloDetail.FooterText}>Salgadinhos</Text>
                    <Text style={estiloDetail.FooterText}>Coxinha</Text>
                    <Text style={estiloDetail.FooterText}>Torta Salgada</Text>
                    <Text style={estiloDetail.FooterText}>Empadão</Text>
                    <Text style={estiloDetail.FooterText}>Torta Salgada de liquidificador</Text>
                    <Text style={estiloDetail.FooterText}>Bolinho de chuva</Text>
                </View>

                <Text style={estiloDetail.copyright}>© 2023 Dishpedia </Text>
            </View>
            </ImageBackground>
        </ScrollView>
    );
}

const estiloDetail = StyleSheet.create({
    mainView: {

    },

    boxFoto: {
        padding: 15,
        shadowColor: '#8C4303',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 8,
    },

    foto: {
        resizeMode: 'cover',
        // margin: 15,
        width: '100%',
        height: 165,
        borderRadius: 16,
        alignSelf: 'center',
    },

    tempoDiv: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center'
    },
    
    iconTimer: {
        resizeMode: 'contain',
        width: 20,
        height: 26,
        marginRight: 8,
    },

    tempoTexto: {
        fontSize: 16,
        fontWeight: 700,
        color: "#A65D03",
        textAlign: 'center'
    },

    Heading: {
        alignSelf: 'center',
        marginTop: 10,
        fontFamily: 'Lobster',
        fontSize: 32,
        color: '#A65D03',
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 20 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
    },

    container: {
        shadowColor: '#8C4303',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 8,

        paddingLeft: 30,
        paddingTop: 20,
        paddingBottom: 20,
        margin: 20,
        backgroundColor: '#EFEDED',
        borderRadius: 10,
    },

    text: {
        fontFamily: 'Lobster',
        fontSize: 18,
    },
    
    lineHeightPrep: {
        lineHeight: 30,
    },

    Footer: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: 15,
        paddingTop: 20,
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 10,
        backgroundColor: '#8C4303',
    },

    FooterHeading: {
        alignSelf: 'flex-start',
        fontFamily: 'Lobster',
        fontSize: 32,
        marginBottom: 10,
        color: '#D9A05B',
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 20 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
    },

    categoriasBox: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 10,
    },

    FooterText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        marginRight: 12,
        marginBottom: 12,
        fontFamily: 'Poppins',
    },

    copyright: {
        width: '100%',
        textAlign: 'center',
        fontSize: 12,
        color: '#fff',
    }
});

export default BurgerScreen;