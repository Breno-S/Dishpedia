import React from "react";
import { View, ScrollView, Text, ImageBackground, Image, StyleSheet} from "react-native";

function CakeScreen( {navigation} ) {
    return(
        <ScrollView style={estiloDetail.mainView}>
            <ImageBackground
                source={require('../../assets/noise.png')}
            >
            <View style={estiloDetail.boxFoto}>
                <Image
                    source={require('../../assets/bolo.png')}
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
                <Text style={[estiloDetail.text, estiloDetail.lineHeightIng ]}>
                1/2 kg de carne moída{'\n'}
                1 pacote de sopa de cebola{'\n'}
                presunto fatiado{'\n'}
                queijo fatiado{'\n'}
                tempero verde{'\n'}
                sal a gosto
                </Text>
            </View>

            <Text style={estiloDetail.Heading}>Modo De Preparo</Text>

            <View style={estiloDetail.container}>
                <Text style={[estiloDetail.text, estiloDetail.lineHeightPrep ]}>
                1- Tempere a carne moída com a sopa de cebola, o tempero verde e o sal.{'\n\n'}
                2- Coloque a carne temperada sobre uma folha de papel laminado ou papel manteiga e abra a massa com um rolo, na espessura de 1 cm, mais ou menos.{'\n\n'}
                3- Forre a carne com o presunto e o queijo, pode-se colocar também milho verde, ervilha e requeijão.{'\n\n'}
                4- Enrole a carne, com ajuda da folha de papel laminado ou manteiga, em forma de rocambole.{'\n\n'}
                5- Leve ao forno, em temperatura alta, por mais ou menos 30 minutos, ou no microondas por 15 minutos.{'\n\n'}
                6- Bom apetite!
                </Text>
            </View>
            
            <View style={estiloDetail.Footer}>
                <Text style={estiloDetail.FooterHeading}>Categorias</Text>

                <View style={estiloDetail.categoriasBox}>
                    <Text style={estiloDetail.FooterText}>Bovina</Text>
                    <Text style={estiloDetail.FooterText}>Estrogonofe</Text>
                    <Text style={estiloDetail.FooterText}>Parmegiana</Text>
                    <Text style={estiloDetail.FooterText}>Picanha</Text>
                    <Text style={estiloDetail.FooterText}>Almôndega</Text>
                    <Text style={estiloDetail.FooterText}>Filé mignon</Text>
                    <Text style={estiloDetail.FooterText}>Tender</Text>
                    <Text style={estiloDetail.FooterText}>Filé</Text>
                    <Text style={estiloDetail.FooterText}>Panela de pressão</Text>
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
    },

    foto: {
        resizeMode: 'cover',
        // margin: 15,
        width: '100%',
        height: 165,
        borderRadius: 16,
        alignSelf: 'center',

        shadowColor: '#8C4303',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 8,
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

export default CakeScreen;