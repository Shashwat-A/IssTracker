import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class IssTracker extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>This is tracker screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });