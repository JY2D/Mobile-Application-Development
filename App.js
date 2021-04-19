// import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// import { StyleSheet, View } from 'react-native';


// import MainNavigator from './app/navigation/TabNavigator';
// import AuthNavigator from './app/navigation/AuthNavigator';
// import AccountScreen from './app/Screens/AccountScreen';
// import AppColors from './app/config/AppColors';
// import AppText from './app/components/AppText';
// import CategoriesScreen from './app/Screens/FoodScreen';
// import PlacesToStay from './app/Screens/PlacesToStay';
// import LoginScreen from './app/Screens/LoginScreen';
// import AppListItems from './app/components/AppListItems';
// import NewBookScreen from './app/Screens/MyHistory';
// import Scroll from './app/testing/Scroll';
// import ExploreTravelScreen from './app/Screens/ExploreTravelScreen';
// import Hello from './app/testing/Hello';
// import AppCardPage from './app/components/AppCardPage';
// import FoodScreen from './app/Screens/FoodScreen';






// export default function App() {
//   return (
//     // <NewBookScreen/>
//   //  <LoginScreen/>
//      <NavigationContainer>
//       <AuthNavigator/>


//     </NavigationContainer>
//     // <AppCardPage/>

     
// //    <AccountScreen/>
// //  <ExploreTravelScreen/> 
// //<Scroll/>
// //<PlacesToStay/>
//   // <FoodScreen/>
// // {/* <CategoriesScreen/> */}

//   );
// }

// // const styles = StyleSheet.create({

// // })



// // import React from 'react';
// // import { View } from 'react-native';
// // import styled from 'styled-components/native';

// // import BackgroundAnimation from './app/testing/BackgroundAnimation';

// // export default function App() {
// //   return (
// //     <Container>
// //       {/* <Title>This project was used to study how to lead with Animated.</Title>
// //       <SubTitle>By - MateuVieira</SubTitle> */}
// //       <BackgroundAnimation />
// //     </Container>
// //   );
// // }

// // const Container = styled.View`
// //   flex: 1;
// //   justify-content: center;
// //   align-items: center;

// // `;

// // const Title = styled.Text`
// //   font-size: 22px;
// //   line-height: 26px;
// //   text-align: center;
// //   color: #FFF;
// // `;

// // const SubTitle = styled.Text`
// //   font-size: 16px;
// //   line-height: 20px;
// //   color: #FFF;
// // `;


  
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
import AppNavigator from './app/navigation/AuthNavigator'
import {AppLoading} from 'expo'
import AuthNavigator from './app/navigation/AuthNavigator';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import FoodItem from './app/components/FoodItem';
import FoodScreen from './app/Screens/FoodScreen';


// export default class App extends React.Component {
//   state={
//     isFontLoaded:false
//   }
//   async componentDidMount(){
//     await Font.loadAsync({
//       'Bold' : require('./src/fonts/Montserrat-ExtraBold.otf'),
//       'Medium' : require('./src/fonts/Montserrat-Medium.otf'),
//       'Regular' : require('./src/fonts/Montserrat-Regular.otf'),
//     });
//     this.setState({isFontLoaded:true})
//   }
//   render(){
//     return (
//    (this.state.isFontLoaded === true )? (<AppNavigator/>):(<AppLoading/>)
//       );
//   }

// }
 export default function App() {
   return (
    //  <FoodItem/>

     <NavigationContainer>
     <AuthNavigator/>
     </NavigationContainer>

   )
 }