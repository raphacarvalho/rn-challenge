import React from 'react';
import api from '../../../api'
import { StyleSheet, View, Text } from 'react-native';
import { useState, useEffect} from 'react';

export default function FilmItem({url}){

    const isMounted = React.useRef(true)
    const [film, setFilm] = useState({})

    useEffect(()=> {
        isMounted.current = true;
       getFilm();
       return () => (isMounted.current = false);
    }, [])

    const getFilm = async () => {
        try {
            let response = await api.create().get(url);
            if(isMounted.current)
                setFilm(response.data);  
        } catch (error) { 
        } 
      }


    return(
        <View style={styles.container}>
            {film.title && (
                <View style={styles.row}> 
                    <Text style={styles.item}>{film.title}</Text>
                    <Text style={styles.ano}>{film.release_date.split('-')[0]}</Text>
                </View>  
            )}
            {!film.title && (
               <Text style={styles.item}>Carregando...</Text> 
            )}
           
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
  