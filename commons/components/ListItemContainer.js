import React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';

export default function ListItemContainer({onPress, children}){

    return(
        <View style={styles.container}>
            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#c2dbf1"
                onPress={onPress}>
                    <View style={styles.body}> 
                       {children}
                    </View>
            </TouchableHighlight> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 2,
        marginHorizontal: 5,
        marginBottom: 2
    }, 
    body: {
      flex: 1,
      padding: 25,
      backgroundColor: '#fff',
      borderRadius: 6,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.75,
      shadowRadius: 2,
      elevation: 1
    },
    
});
  