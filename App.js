import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import AppScreen from './Scrrens/AppScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <AppScreen />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
