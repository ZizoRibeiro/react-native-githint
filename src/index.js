import 'config/ReactotronConfig';

import React, { Component } from 'react';
import Routes from 'routes';
import { AsyncStorage } from 'react-native';
import createRootNavigator from 'routes';

export default class App extends Component {
  state = {
    userExists: false,
    userChecked: false,
  };

  componentWillMount() {
    this.checkUser().then((response) => {
      this.setState({ userExists: response, userChecked: true });
    });
  }

  checkUser = async () => {
    const user = await AsyncStorage.getItem('@Githint:username');

    return user !== null;
  };

  render() {
    const { userChecked, userExists } = this.state;

    if (!userChecked) return null;

    const Layout = createRootNavigator(userExists);
    return <Layout />;
  } 
}
