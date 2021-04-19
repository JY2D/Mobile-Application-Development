import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

import {AnimatedTabBarNavigator } from 'react-native-animated-nav-tab-bar'

import ExploreTravelScreen from '../Screens/ExploreTravelScreen'
import PlacesToStay from '../Screens/PlacesToStay'
import CategoriesScreen from '../Screens/FoodScreen'
import AccountScreen from '../Screens/AccountScreen';
import AppNavIcon from '../components/AppNavIcon';
import AppColors from '../config/AppColors';

import AccountNavigator from '../navigation/AccountNavigator';
import NewListing from '../Screens/NewListing';

const AppTab = AnimatedTabBarNavigator();

const TabNavigator = () => (
    <AppTab.Navigator tabBarOptions={{
        activeTintColor:"black", 
        activeBackgroundColor:AppColors.bluegrey
        }}>
        <AppTab.Screen name = "Explore" component={ExploreTravelScreen} options={{ 
                tabBarIcon: ({ focused, color, size }) => (
                    <AppNavIcon
                        name="map-marker-circle"
                        size={35}
                         />)}}/>
        <AppTab.Screen name = "Eat" component={CategoriesScreen} options={{
                tabBarIcon: ({ focused, color, size, }) => (
                    <AppNavIcon
                        name="noodles"
                        size={35}
                    />)}}/>

        <AppTab.Screen name = "Stays" component={PlacesToStay} options={{ 
                tabBarIcon: ({ focused, color, size }) => (
                    <AppNavIcon
                        name="home-city-outline"
                        size={35} 
                    />)}}/>
        <AppTab.Screen name = "Account" component={AccountNavigator} options={{ 
                tabBarIcon: ({ focused, color, size }) => (
                    <AppNavIcon
                        name="account"
                        size={35} />)}}/>
    </AppTab.Navigator>
)

export default TabNavigator;