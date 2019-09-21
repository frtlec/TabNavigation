/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component,Fragment} from 'react';
import {StatusBar} from 'react-native';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Router from './src/Router';


export default class App extends Component {
  render() {
    return (
      <Fragment>
        <StatusBar hidden={true} />
          <Router />
      </Fragment>
     
    );
  }
}