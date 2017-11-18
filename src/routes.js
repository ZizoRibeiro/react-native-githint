import { StackNavigator, TabNavigator } from 'react-navigation';

import Welcome from 'pages/welcome';
import Repositories from 'pages/repositories';
import Organizations from 'pages/organizations';

// add routes
const createRootNavigator = (userExists = false ) =>
  StackNavigator({
    Welcome: { screen: Welcome },
    // after login on welcome page user is redirected to User
    User: {
      screen: TabNavigator({
        Repositories: { screen: Repositories },
        Organizations: { screen: Organizations },
      }),
    },
  }, {
    initialRouteName: userExists ? 'User' : 'Welcome',
  });

export default createRootNavigator;
