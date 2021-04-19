import React from 'react';

import { View, StyleSheet, Image, Text, TouchableHighlight  } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import AppText from '../components/AppText';
import AppColors from '../config/AppColors';


function AppAccountProfile({image, title, subtitle, balance}) {
    return (
                <View style={styles.container}>
                    {image && <Image source={image} style={styles.image}/>}
                   
                    <View style={styles.textContainer}>
                        <AppText style={styles.title}> {title} </AppText>
                        {subtitle && <AppText style={styles.subtitle}> {subtitle}</AppText>}
                       { balance && <AppText style={styles.subtitle}>Account Balance: ${balance} </AppText>}
                    </View>
                </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flexDirection:"column",
        justifyContent:'center',
    },

    image:{
        height: 100,
        width: 100,
        borderRadius:50,
        alignSelf: 'center',
    },
    textContainer:{
        padding:15,
        flexDirection:"column",
        alignItems: 'center',
    },
    title:{
        fontWeight:"bold",
        marginVertical: 5,
    },
    subtitle:{
        fontSize:15,
    }
    
})

export default AppAccountProfile;