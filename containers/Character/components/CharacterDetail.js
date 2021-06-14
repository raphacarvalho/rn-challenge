import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Text, SafeAreaView, ActivityIndicator, ScrollView, View } from 'react-native';
import ListItemContainer from '../../../commons/components/ListItemContainer';
import Icon from 'react-native-vector-icons/AntDesign';
import FilmItem from './FilmItem';
import { toggleFavorite } from '../reducer';

export default function CharacterDetail(){

    const dispatch = useDispatch();
    const $characterSelected = useSelector(state => state.characterReducer.characterSelected);
    const $isLoading = useSelector(state => state.characterReducer.isLoading);
    const $favorites = useSelector(state => state.characterReducer.favorites);

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
                        <View style={styles.divider}/>
                    </View>
                )}
            </> 
        )}

    return(
        
        <SafeAreaView style={styles.container}>
            {!$characterSelected.name && ( 
                <View style={styles.loading}>
                    <Text>Carregando...</Text>
                </View>
            )} 
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
                                <Info label="Ano de Nascimento" info={$characterSelected.birth_year}/>
                                <Info label="Gênero" info={$characterSelected.gender}/>
                                <Icon
                                    style={styles.favorite}
                                    onPress={onPressFavorite}
                                    name={isFavorite() ? 'star' : 'staro'} 
                                    color={isFavorite() ? '#ffbd43' : '#888888'}
                                    size={40} 
                                />
                            </View>
                        </View>

                        <Text style={styles.title}>Filmes</Text>
                        <View style={styles.noCard}> 
                            {$characterSelected.films.map((url) => (
                                <ListItemContainer key={url}>
                                    <FilmItem url={url}/>
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
      paddingBottom: 10,
      marginBottom: 10,
    },
    title :{
        paddingBottom: 10,
        marginLeft: 15,
        fontSize: 17,
        color: '#888888'
    },
    label:{
        fontSize: 12,
        color: '#888888'
    },
    info:{
        fontSize: 18,
        color: '#444444'
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
      borderRadius: 6,
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
    },
    divider: {
        width: '100%',
        borderBottomColor: '#ebedf0',
        borderTopColor: '#fff',
        borderBottomWidth: 1,
        marginVertical: 10
    },
    loading: {
        alignItems: 'center',
        justifyContent: 'center',
        height:'100%'
    }
  });
  