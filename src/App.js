import React from 'react';
import { View } from 'react-native';

import { Provider } from 'react-redux';
import FlashMessage from 'react-native-flash-message';
import { Navigation } from '~/navigation';
import stles from '~/themes/main.app.styles';
import store from '~/redux';

const App = props => {
  return (
    <View style={stles.main}>
      <Provider store={store}>
        <Navigation />
        <FlashMessage position="top" />
      </Provider>
    </View>
  );
};

export { App };
