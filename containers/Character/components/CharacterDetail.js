import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CharacterDetail({route: { params: character }}){

    console.log(character);

    return(
        
        <View style={styles.container}>
            <Text>{character.name}</Text>
        </View>
         
    )
}

const styles = StyleSheet.create({
    container: {
      marginTop: 5,
      marginBottom: 5,
      marginHorizontal: 10,
    } 
  });
  