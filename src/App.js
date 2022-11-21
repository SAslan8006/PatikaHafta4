import React from 'react';
import { View } from 'react-native';

import { Provider } from 'react-redux';

import { Navigation } from '~/navigation';
import stles from '~/utils/styles';
import store from '~/redux';

const App = props => {
  return (
    <View style={stles.main}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </View>
  );
};

export { App };
