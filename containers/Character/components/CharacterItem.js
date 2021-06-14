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
                    color={favorite ? '#ffbd43' : '#888888'}
                    size={20} 
                />
                <Text style={styles.item}>{character.name}</Text>
                <Icon
                    style={styles.arrow}
                    color="#1d73bf"
                    name="right" 
                    size={20} 
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
        marginLeft: 20,
        color: '#444444',
        width: '80%'
    },
    arrow :{
        width: '10%'
    }
});
  