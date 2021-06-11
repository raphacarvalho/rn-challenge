import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { StyleSheet, FlatList, SafeAreaView, Text} from 'react-native';
import { getCharactersList, getCharacter } from '../reducer';

import ListItemContainer from '../../../commons/components/ListItemContainer';
import CharacterItem from './CharacterItem';

export default function CharacterList({navigation}){
    
    const dispatch = useDispatch();
    const $characters = useSelector(state => state.characterReducer.characters);
    const $isLoading = useSelector(state => state.characterReducer.isLoading);
    const $favorites = useSelector(state => state.characterReducer.favorites);

    //EFFects ------

    useEffect(()=> {
        getData();
    }, [])
  
    //Utils ------
    const getData = (url) => {
        dispatch(getCharactersList(url));
    }

    const onRefresh = () => {
        getData();
    }

    const isFavorite=(item)=>{
        return $favorites.includes(item.name);
    }

    const onItemPress = (item) => {
        dispatch(getCharacter(item.url));
        navigation.navigate('CharacterDetail');
    }
    
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Selecione um personagem</Text>
            <FlatList
                data={$characters.results}
                refreshing={$isLoading}
                onRefresh={onRefresh}
                renderItem={({item}) => (
                    <ListItemContainer onPress={() => onItemPress(item)}>
                        <CharacterItem character={item} favorite={isFavorite(item)}/>
                    </ListItemContainer>
                    )}
                keyExtractor={item => item.name}
                onEndReached={() => getData($characters.next)}
                onEndReachedThreshold={1}
            />
        </SafeAreaView>
    )
        
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f0f0',
    },
    title :{
        padding:10,
        fontSize: 15
    }
  });
  