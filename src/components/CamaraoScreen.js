import React from "react";
import { View, ScrollView, Text, ImageBackground, Image, StyleSheet} from "react-native";

function CamaraoScreen( {navigation} ) {
    return(
        <ScrollView style={estiloDetail.mainView}>
            <ImageBackground
                source={require('../../assets/noise.png')}
            >
            
            <View style={estiloDetail.boxFoto}>
                <Image
                    source={require('../../assets/strogonoff.png')}
                    style={estiloDetail.foto}
                />
            </View>

            <View style={estiloDetail.tempoDiv}>
                <Image
                    source={require('../../assets/icon_timer_detail.png')}
                    style={estiloDetail.iconTimer}
                />
                <Text style={estiloDetail.tempoTexto}>20 min</Text>
            </View>

            <Text style={estiloDetail.Heading}>Ingredientes</Text>

            <View style={estiloDetail.container}>
                <Text style={[estiloDetail.text, estiloDetail.lineHeightIng ]}>
                300 g de camarão pequeno{'\n'}
                Cebola picada{'\n'}
                1 xícara de molho de tomate{'\n'}
                1 colher de maizena{'\n'}
                Cheiro verde{'\n'}
                Tomate picado{'\n'}
                2 colheres de sopa de óleo{'\n'}
                1 lata de creme de leite com soro{'\n'}
                1/2 copo de leite
                </Text>
            </View>

            <Text style={estiloDetail.Heading}>Modo De Preparo</Text>

            <View style={estiloDetail.container}>
                <Text style={[estiloDetail.text, estiloDetail.lineHeightPrep ]}>
                1- Refogue a cebola e o tomate no óleo.{'\n\n'}
                2- Junte o camarão e refogue um pouco.{'\n\n'}
                3- Junte em seguida o molho de tomate deixe levantar fervura.{'\n\n'}
                4- Dissolva a maizena no leite e junte na panela, assim que engrossar desligue o fogo e acrescente o creme de leite.{'\n\n'}
                5- Enfeite com cheiro verde e sirva com arroz e batata palha.
                </Text>
            </View>
            
            <View style={estiloDetail.Footer}>
                <Text style={estiloDetail.FooterHeading}>Categorias</Text>

                <View style={estiloDetail.categoriasBox}>
                    <Text style={estiloDetail.FooterText}>Prato Único</Text>
                    <Text style={estiloDetail.FooterText}>Risoto</Text>
                    <Text style={estiloDetail.FooterText}>Panqueca</Text>
                    <Text style={estiloDetail.FooterText}>Yakisoba</Text>
                    <Text style={estiloDetail.FooterText}>Escondidinho</Text>
                    <Text style={estiloDetail.FooterText}>Galinhada</Text>
                    <Text style={estiloDetail.FooterText}>Feijoada</Text>
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
        margin: 15,
        height: 165,
        borderRadius: 16,
        backgroundColor: '#000',
        
        shadowColor: '#8C4303',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 10,
        overflow: 'visible',
    },

    foto: {
        resizeMode: 'cover',
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
        paddingRight: 20,
        
        margin: 20,
        backgroundColor: '#EFEDED',
        borderRadius: 10,
    },

    text: {
        fontFamily: 'Lobster',
        fontSize: 18,
    },
    
    lineHeightIng: {
        lineHeight: 50,
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

export default CamaraoScreen;