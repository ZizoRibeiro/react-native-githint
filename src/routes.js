import { StackNavigator, TabNavigator } from 'react-navigation';

// import pages 
import Welcome from 'pages/welcome';
import Repositories from 'pages/repositories';
import Organizations from 'pages/organizations';

// add routes
const Routes = StackNavigator({
  Welcome: { screen: Welcome },
  // after login on welcome page user is redirected to User
  User: {
    screen: TabNavigator({
      Repositories: { screen: Repositories },
      Organizations: { screen: Organizations },
    }),
  },
}, {
  initialRouteName: 'Welcome',
});

export default Routes;
