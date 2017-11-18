import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import api from 'services/api';

import { 
  View,
  Text,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native';
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

  state = {
    username: '',
    error: false,
    loading: false,
  };

  checkAndSaveUser = async () => {
    // check if user exist
    const response = await api.get(`/users/${this.state.username}`);

    // if not , throw an error
    if (!response.ok) throw Error();

    // if yes, storage username in the key
    await AsyncStorage.setItem('@Githint:username', this.state.username);
  };

  navigateToUser = () => {
    // cant login if password is blank
    if (this.state.username.length === 0) return;

    this.setState({ loading: true, error: false });

    // checkAndSaveUser
    this.checkAndSaveUser()

      // if user exists
      .then(() => {
        const { dispatch } = this.props.navigation;

        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'User' }),
          ],
        });

        dispatch(resetAction);
      })

      // throw an error if user does not exist
      .catch(() => {
        this.setState({ error: true, loading: false });
      });
  };


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeTitle}>Welcome</Text>
        <Text style={styles.welcomeDescription}>
          You need to Login In to proceed.
        </Text>

        {/*  show error message if user does not exist */}
        { this.state.error && <Text style={styles.error}> User does not exist!</Text> }

        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          placeholder="insert you User name"
          onChangeText={(username) => {this.setState({ username }); }}
        />

        <TouchableOpacity style={styles.button} onPress={this.navigateToUser}>
          { this.state.loading
            ? <ActivityIndicator size="small" color="#FFF" />
            : <Text style={styles.buttonText}>Proceed</Text>
          }
        </TouchableOpacity>
      </View>
    );
  }
}
