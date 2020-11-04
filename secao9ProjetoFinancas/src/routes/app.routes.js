import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import New from '../pages/New';

const AppDrawer = createDrawerNavigator();

const AppRoutes = () => {
  return (
    <AppDrawer.Navigator
      drawerStyle={{
        backgroundColor: '#171717',
      }}
      drawerContentOptions={{
        labelStyle: {
          fontWeight: 'bold',
        },
        activeTintColor: '#ffffff',
        activeBackgroundColor: '#00b94a',
        inactiveBackgroundColor: '#000000',
        inactiveTintColor: '#dddddd',
        itemStyle: {
          marginVertical: 5,
        },
      }}>
      <AppDrawer.Screen name="Home" component={Home} />
      <AppDrawer.Screen name="Profile" component={Profile} />
      <AppDrawer.Screen name="New" component={New} />
    </AppDrawer.Navigator>
  );
};

export default AppRoutes;
