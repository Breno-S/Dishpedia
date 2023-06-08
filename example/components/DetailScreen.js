import React from "react";
import { View, Text, Button } from "react-native";

function DetailScreen( {navigation} ) {
    return(
        <View>
            <Text>Tela de Detalhes</Text>
            <Button
                title="Ir para Home"
                onPress={() => navigation.navigate('Dishpedia')}
            />
        </View>
    );
}

export default DetailScreen;