import React, {useContext} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {AuthContext} from '../contexts/auth';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

function Routes() {
  const {signed, loading} = useContext(AuthContext);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={50} color="#121212" />
      </View>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;
