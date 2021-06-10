import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect} from 'react';
import { StyleSheet, Text, FlatList, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { getCharacters } from '../reducer';

import CharacterListItem from './CharacterListItem'

export default function CharacterList(){
    
    const dispatch = useDispatch();
    const $characters = useSelector(state => state.characterReducer.characters);
    const $isLoading = useSelector(state => state.characterReducer.isLoading);

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
        <SafeAreaView style={styles.container}>
            {$isLoading  && (
                <Text>Loading..</Text>
            )}
            <Text style={styles.title}>Star Wars - Personagens</Text>
            <FlatList
                data={$characters.results}
                renderItem={({item}) => <CharacterListItem character={item}/>}
                keyExtractor={item => item.name}
            />
        </SafeAreaView>
    )
        
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 22,
      backgroundColor: '#fff',
    },
    title : {
        backgroundColor: '#4479a9',
        padding:20,
        fontSize: 20,
        color: '#fff',
        marginBottom: 5
    }

  });
  