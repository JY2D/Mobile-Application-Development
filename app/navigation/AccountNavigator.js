import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';


import AccountScreen from '../Screens/AccountScreen'
import MyListings from '../Screens/MyListings';
import MyHistory from '../Screens/MyHistory';
import NewListings from '../Screens/NewListings';
import NewListing from '../Screens/NewListing';





const AppStacks = createStackNavigator();

const AccountNavigator = () => (
    <AppStacks.Navigator>
        <AppStacks.Screen name = "Account" component={AccountScreen} options= {{headerShown:false}}/>
        <AppStacks.Screen name = "MyListings" component={MyListings} options= {{headerTransparent:true}}/>
        <AppStacks.Screen name = "MyHistory" component={MyHistory} />
        <AppStacks.Screen name = "NewListings" component={NewListings} />
        <AppStacks.Screen name = "WishList" component={NewListing} />
        


    </AppStacks.Navigator>
)



export default AccountNavigator