import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';


import AppColors from '../config/AppColors';
import AppText from '../components/AppText';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import AppIcons from '../components/AppIcons';



function AppCardPage({title, subtitle, image, onPress, onSwipeLeft, navigation}) {
    return (

        <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <View style={{flex:2}}>
                <Image source={image} style={styles.image}/>
            </View>
            <View style={styles.text}>
                <Text style={styles.title}> {title} </Text>
                <Text style={styles.subtitle}> {subtitle} </Text>  
            </View>         
        </View>
        </TouchableOpacity>
    );
}



const styles = StyleSheet.create({
    container:{
        marginLeft:10, 
        marginRight: 10,
        padding:5,
        marginBottom:5,
        flexDirection:'row',
        backgroundColor:AppColors.white,
        borderRadius:15,

    }, 
    image:{
        flex:1,
        height: 195,
        width: "95%",
        resizeMode:'cover',
        borderRadius: 15,
    },
    text:{
        flex:1, 
        paddingLeft: 5, 
        paddingTop:5,
    },
    title:{
        fontWeight:'bold',
        justifyContent:'center'
    },
    subtitle:{
        fontSize:11,
        justifyContent:'flex-start'
    }

})

export default AppCardPage;