import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

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
  