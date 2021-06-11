import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function CharacterItem({character, favorite}){

    return(
        <View style={styles.row}> 
            <Text style={styles.item}>{character.name}</Text>
        </View>          
    )
}

const styles = StyleSheet.create({
    favorito : {
        marginRight: 10
    },
    item : {
        fontSize: 17,
        color: '#444444'    
    },
    container:{
      flexDirection: 'row'
    }
});
  