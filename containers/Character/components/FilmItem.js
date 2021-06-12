import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function FilmItem({film}){

    return(
        <View style={styles.container}>
            <View style={styles.row}> 
                <Text style={styles.item}>{film.title}</Text>
                <Text style={styles.ano}>{film.release_date.split('-')[0]}</Text>
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
    item : {
        fontSize: 17,
        color: '#444444',
        width: '80%'
    },
    ano :{
        width: '20%'
    }
});
  