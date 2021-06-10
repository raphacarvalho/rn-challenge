import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
 

export default function CharacterListItem({character}){
    return(
        
        <View style={styles.container}>
            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#c2dbf1"
                onPress={() => {}}>
                    <View style={styles.item}>
                       <Text style={styles.favorito}>...</Text>
                       <Text>{character.name}</Text>
                    </View>
            </TouchableHighlight> 
        </View>
         
    )
}

const styles = StyleSheet.create({
    item: {
      flex: 1,
      padding: 16,
      color: '#fff',
      fontSize: 16,
      backgroundColor: '#fff',
      borderRadius: 2,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.75,
      shadowRadius: 5,
      elevation: 2,
      flexDirection: 'row'
    },
    container: {
      marginTop: 5,
      marginBottom: 5,
      marginHorizontal: 10,
    },
    favorito : {
        marginRight: 10
    }
  });
  