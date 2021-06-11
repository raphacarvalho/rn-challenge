import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default function CharacterListItem({character, onPress}){

    return(
        <View style={styles.container}>
            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#c2dbf1"
                onPress={() => onPress('CharacterDetail', character)}>
                    <View style={styles.row}>
                       
                       <Text style={styles.item}>{character.name}</Text>
                    </View>
            </TouchableHighlight> 
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
      borderRadius: 2,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.75,
      shadowRadius: 2,
      elevation: 1,
      flexDirection: 'row'
    },
    container: {
      marginTop: 5,
      marginHorizontal: 5,
    },
    favorito : {
        marginRight: 10
    },
    item : {
        fontSize: 17,
        color: '#444444'    
    }
});
  