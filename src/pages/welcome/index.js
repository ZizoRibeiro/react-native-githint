import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

export default class Welcome extends Component {
  static navigationOptions = {
    // delete the page header
    header: null, 
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

        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Proceed</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
