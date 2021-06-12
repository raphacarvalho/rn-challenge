import React from 'react';
import { StyleSheet, Text, SafeAreaView, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect} from 'react';
import ListItemContainer from '../../../commons/components/ListItemContainer';
import FilmItem from './FilmItem';
import { setFavorite, removeFavorite, getFilm, clearFilms } from '../reducer';

export default function CharacterDetail(){

    const dispatch = useDispatch();
    const $characterSelected = useSelector(state => state.characterReducer.characterSelected);
    const $films = useSelector(state => state.characterReducer.films);
    const $isLoading = useSelector(state => state.characterReducer.isLoading);
   
    useEffect(()=>{
       return  () => dispatch(clearFilms())
    }, [])

    useEffect(()=>{
        if($characterSelected.films){
            $characterSelected.films.forEach(f =>  dispatch(getFilm(f)) 
        )}

    }, [$characterSelected])

    return(
        
        <SafeAreaView style={styles.container}>
            <Text>{$characterSelected.name}</Text>
            <Text style={styles.title}>Filmes</Text>
            <FlatList
                data={$films}
                refreshing={$isLoading} 
                renderItem={({item}) => (
                            <ListItemContainer>
                                <FilmItem film={item}/>
                            </ListItemContainer>
                            )}
                keyExtractor={item => item.url}
            />
        </SafeAreaView>
         
    )
}

const styles = StyleSheet.create({
    container: {
      marginTop: 5,
      marginBottom: 5,
      marginHorizontal: 10,
    },
    title :{
        padding:10,
        fontSize: 15
    }
  });
  