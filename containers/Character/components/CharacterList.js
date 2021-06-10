import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { getCharacters } from '../reducer';

export default function CharacterList(){
    
    const dispatch = useDispatch();
    const $characters = useSelector(state => state.characterReducer.characters);

    useEffect(()=> {
        getData();
    }, [])

    useEffect(()=> {
        console.log($characters.results);
    }, [$characters])

    const getData = () => {
        dispatch(getCharacters());
    }

    return(
        <View style={styles.container}>
            <Text onPress={getData}>Teste</Text>
            <StatusBar style="auto" />
        </View>
    )
        
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  