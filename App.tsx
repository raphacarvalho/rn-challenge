import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CharacterList from './containers/Character/components/CharacterList';
import CharacterDetail from './containers/Character/components/CharacterDetail';

const store = configureStore();
const Stack = createStackNavigator();

export default function App() {

  return (
   <Provider store={store}> 
      <NavigationContainer>
        <Stack.Navigator initialRouteName="CharacterList">
          <Stack.Screen 
             name="CharacterList" 
             component={CharacterList} 
             options={{ title: 'Personagens' }}
          />
          <Stack.Screen 
             name="CharacterDetail" 
             component={CharacterDetail} 
             options={{ title: 'Detalhes' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

