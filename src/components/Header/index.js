import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { colors } from 'styles';
import { NavigationActions } from 'react-navigation';

import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class Header extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  };
  logout = () => {
    // remove user from the storage
    AsyncStorage.removeItem('@Githint:username')
      .then(() => {
        const { dispatch } = this.props.navigation;

        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Welcome' }),
          ],
        });
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Githint</Text>
        <TouchableOpacity onPress={this.logout}>
          <Icon name="exchange" size={14} color={colors.primary} />
        </TouchableOpacity>
      </View>
    );
  }
}
