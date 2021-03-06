import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import FontAwesomeIcon from '../components/FontAwesomeIcon';
import FeedHomeScreen from '../screens/FeedHomeScreen';
import PostEditorScreen from '../screens/PostEditorScreen';

const FeedTabNavigator = createStackNavigator({
  Feed: FeedHomeScreen
});

FeedTabNavigator.navigationOptions = {
  tabBarLabel: 'Feed',
  tabBarIcon: ({ focused }) => (
    <FontAwesomeIcon focused={focused} name={'newspaper-o'} />
  )
};

export default FeedTabNavigator;
