import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';

import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';


export default class Welcome extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  };

  static navigationOptions = {
    // delete the page header
    header: null,
  };

  navigateToUser = () => {
    const { dispatch } = this.props.navigation;

    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'User' }),
      ],
    });

    dispatch(resetAction);
  };


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeTitle}>Welcome</Text>
        <Text style={styles.welcomeDescription}>
          You need to Login In to proceed.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="insert you User name"
        />

        <TouchableOpacity style={styles.button} onPress={this.navigateToUser}>
          <Text style={styles.buttonText}>Proceed</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
