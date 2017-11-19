import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { colors } from 'styles';

import Welcome from 'pages/welcome';
import Repositories from 'pages/repositories';
import Organizations from 'pages/organizations';

import Header from 'components/Header';

// add routes
const createRootNavigator = (userExists = false ) =>
  StackNavigator({
    Welcome: { screen: Welcome },
    // after login on welcome page user is redirected to User
    User: {
      screen: TabNavigator({
        Repositories: { screen: Repositories },
        Organizations: { screen: Organizations },
      }, {
        tabBarPosition: 'bottom',
        tabBarOptions: {
          showLabel: false,
          activeTinColor: colors.white,
          inactiveTintColor: colors.inactive,
          style: {
            backgroundColor: colors.primary,
          },
        },
      }),
    },
  }, {
    initialRouteName: userExists ? 'User' : 'Welcome',
    navigationOptions: {
      header: props => <Header {...props} />,
    },
  });

export default createRootNavigator;
