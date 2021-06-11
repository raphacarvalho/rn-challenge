import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect} from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { getCharacters } from '../reducer';

import CharacterListItem from './CharacterListItem'

export default function CharacterList({navigation}){
    
    const dispatch = useDispatch();
    const $characters = useSelector(state => state.characterReducer.characters);
    const $isLoading = useSelector(state => state.characterReducer.isLoading);

    useEffect(()=> {
        getData();
    }, [])

    useEffect(()=> {
       // console.log($characters.results);
    }, [$characters])

    const getData = () => {
        dispatch(getCharacters());
    }
    
    return(
        <SafeAreaView style={styles.container}>
            <FlatList
                data={$characters.results}
                refreshing={$isLoading}
                onRefresh={getData}
                renderItem={({item}) => 
                            <CharacterListItem 
                                character={item} 
                                onPress={navigation.navigate}
                            />}
                keyExtractor={item => item.name}
            />
        </SafeAreaView>
    )
        
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f0f0',
    }
  });
  