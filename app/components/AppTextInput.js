import React from 'react';

import { View, StyleSheet, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import AppColors from '../config/AppColors';


function AppTextInput({icon, ...otherProps}) {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name={icon} size={22}/>
            <TextInput style={styles.TextStyle} {...otherProps}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        flexDirection:'row',
        borderRadius:25,
        padding: 10,
        marginVertical: 5,
        width:'100%'
        

    },
    TextStyle:{
        flex:1,
        fontSize:20,
        fontFamily: Platform.OS === 'android' ? "Roboto" : "Cochin",
        marginLeft: 10,

    }


    
})

export default AppTextInput;