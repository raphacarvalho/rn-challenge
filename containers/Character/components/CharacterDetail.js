import React from 'react';
import { StyleSheet, Text, SafeAreaView, FlatList, ActivityIndicator, ScrollView, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect} from 'react';
import ListItemContainer from '../../../commons/components/ListItemContainer';
import FilmItem from './FilmItem';
import { toggleFavorite, getFilm, clearFilms } from '../reducer';

export default function CharacterDetail(){

    const dispatch = useDispatch();
    const $characterSelected = useSelector(state => state.characterReducer.characterSelected);
    const $films = useSelector(state => state.characterReducer.films);
    const $isLoading = useSelector(state => state.characterReducer.isLoading);
    const $favorites = useSelector(state => state.characterReducer.favorites);
   
    useEffect(()=>{
       return () => dispatch(clearFilms())
    }, [])

    useEffect(()=>{
        //console.log('fav', $favorites);
     }, [$favorites])

    useEffect(()=>{
        if($characterSelected.films){
            $characterSelected.films.forEach(f =>  dispatch(getFilm(f)) 
        )}

    }, [$characterSelected])

    const onPressFavorite=()=>{
        dispatch(toggleFavorite($characterSelected.name))
    }

    const isFavorite=()=>{
        return $favorites.includes($characterSelected.name);
    }

    const Info = ({label, info}) => {
        return(
            <>
                {info && (
                    <View>
                        <Text style={styles.label}>{label}</Text>
                        <Text style={styles.info}>{info}</Text>
                    </View>
                )}
                
            </> 
        )}
    

    return(
        
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <ActivityIndicator hidesWhenStopped animating={$isLoading} size="small"/>
                {$characterSelected.name && (  
                    <View> 
                        
                        <Text style={styles.title}>Personagem</Text>
                        <View style={styles.main}> 
                            <View>      
                                <Info label="Nome" info={$characterSelected.name}/>
                                <Info label="Altura" info={$characterSelected.heigth}/>
                                <Info label="Peso" info={$characterSelected.mass}/>
                                <Info label="Cabelo" info={$characterSelected.hair_color}/>
                                <Info label="Pele" info={$characterSelected.skin_color}/>
                                <Info label="Cor dos olhos" info={$characterSelected.eye_color}/>

                                <Icon
                                    style={styles.favorite}
                                    onPress={onPressFavorite}
                                    name={isFavorite() ? 'star' : 'staro'} 
                                    size={40} 
                                    color={isFavorite() ? '#ffbd43' : '#888888'}
                                />
                            </View>
                        </View>

                        <Text style={styles.title}>Filmes</Text>
                        <View style={styles.noCard}> 
                            {$films.map((item) => (
                                <ListItemContainer>
                                    <FilmItem film={item}/>
                                </ListItemContainer>
                            ))}
                            
                        </View>
                    </View>
                )}  
            </ScrollView>
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    title :{
        paddingBottom: 10,
        marginLeft: 15,
        fontSize: 18
    },
    label:{
        fontSize: 12,
        color: '#888888'
    },
    info:{
        fontSize: 18,
        color: '#000',
        marginBottom: 15
    },
    favorite: {
        position: 'absolute',
        alignSelf:'flex-end',
        textAlign: 'right',
        width:'100%',
    },
    main: {
      marginHorizontal: 15,
      marginBottom: 10,
      backgroundColor: '#fff',
      borderRadius: 2,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.75,
      shadowRadius: 2,
      elevation: 1,
      paddingHorizontal: 20,
      paddingTop: 30,
      paddingBottom: 10
      
    },
    noCard: {
      paddingHorizontal: 10,
    }
  });
  