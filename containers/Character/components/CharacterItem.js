import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function CharacterItem({character, favorite}){


    return(
        <View style={styles.container}>
            <View style={styles.row}> 
                <Icon
                    style={styles.favorite}
                    name={favorite ? 'star' : 'staro'} 
                    size={20} 
                    color={favorite ? '#ffbd43' : '#888888'}
                />
                <Text style={styles.item}>{character.name}</Text>
                <Icon
                    style={styles.arrow}
                    name="right" 
                    size={20} 
                    color="#1d73bf"
                />
            </View>  
        </View>        
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    row:{
        flexDirection: 'row'
    },
    favorito : {
        width: '10%'
    },
    item : {
        fontSize: 17,
        color: '#444444',
        marginLeft: 20,
        width: '80%'
    },
    arrow :{
        width: '10%'
    }
});
  