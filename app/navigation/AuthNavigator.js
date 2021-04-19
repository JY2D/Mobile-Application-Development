
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreens from '../Screens/WelcomeScreens';
import LoginScreen from '../Screens/LoginScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import TabNavigator from './TabNavigator';
import Details from '../Screens/Details';
import PlacesToStay from '../Screens/PlacesToStay';
import Airbnb from '../components/Airbnb';
import FoodItem from '../components/FoodItem';


const AppStack = createStackNavigator();


 const AuthNavigator = () => (

     <AppStack.Navigator>
         <AppStack.Screen name = "Welcome" component={WelcomeScreens} options= {{headerShown:false}}/>
         <AppStack.Screen name = "Login" component={LoginScreen} />
         <AppStack.Screen name = "Sign Up" component={SignUpScreen} />
         <AppStack.Screen name = "Home" component={TabNavigator} options= {{headerShown:false}} />

        <AppStack.Screen name = "PlacesToStay" component={PlacesToStay}/>

        <AppStack.Screen name = "Details" component={Details}/>
        <AppStack.Screen name = "Airbnb" component={Airbnb}/>
        <AppStack.Screen name = "FoodItem" component={FoodItem}/>


     </AppStack.Navigator>

 )



 export default AuthNavigator;

