import React from 'react';


import {Animated, StyleSheet, ImageBackground, Platform, View, Image, Text, TouchableOpacity } from 'react-native';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppColors from '../config/AppColors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppButton from '../components/AppButton';
import {useNavigation} from '@react-navigation/native';
import { TouchableHighlight } from 'react-native-gesture-handler';




function WelcomeScreens({navigation}) {
    return (

        <AppScreen>
            <ImageBackground
                source= {require("../assets/animated1.jpg")}
                style= {styles.background}
                >

        
            <View style= {styles.welcomeContainer}>
                <Image source={require('../assets/name.png')}
                style= {styles.images} />
            </View>

            <Text style={styles.quote}>Up & Go</Text>

            <View style={styles.buttonContainer}>

                <AppButton title= "Login" onPress= { () => navigation.navigate("Login")}/>
                <AppButton title= "Sign Up" color="secondaryColor" onPress= { () => navigation.navigate("Sign Up")}/>
            </View>

            
            </ImageBackground>
            

        </AppScreen>
      
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
    },
    images:{
        marginTop: 90,
        width: 200,
        height: 60,
    },

    welcomeContainer:{
        //backgroundColor: 'red',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 40,
    },
    quote:{
        color:AppColors.white,
        fontSize:13,
        textAlign:'center',
        marginTop: 7,
    },

    buttonContainer:{
 
        flexDirection:'column',
        marginTop: 300,
        height: 150,
        justifyContent: 'space-between',
        alignSelf: 'center',
        width: '50%',
        padding: 10,
    },



    
})

export default WelcomeScreens;