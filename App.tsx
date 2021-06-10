import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore'

import CharacterList from './containers/Character/components/CharacterList';

const store = configureStore();

export default function App() {

  return (
   <Provider store={store}> 
      <CharacterList/>
    </Provider>
  );
}

