import React from 'react';

import { Text, StyleSheet, Platform, View, Image, TouchableOpacity } from 'react-native';
import AppColors from '../config/AppColors';


function AppTags({name, image}) {
    return (
        <TouchableOpacity>
        <View style={styles.tags}>
            <Image source={image} style={styles.image}/>
            <Text>{name}</Text>

        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    tags:{
        minHeight:20,
        minWidth:40,
        padding: 5,
        backgroundColor:AppColors.white,
        borderColor:AppColors.navy,
        borderWidth:0.2,
        borderRadius:2,
        //marginRight:5,
        marginLeft:10,
        
    },
    image:{
        resizeMode:'contain',
        height:50,
        width: 60,
        marginBottom: 10,
    }
})

export default AppTags;

