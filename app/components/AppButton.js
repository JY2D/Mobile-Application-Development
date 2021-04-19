import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

import AppColors from '../config/AppColors';



function AppButton({title, color, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style= {[styles.button, {backgroundColor:AppColors[color]}]}> 
                <Text style= {styles.text}>
                    {title}
                </Text>

            </View>

        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: AppColors.black,
        borderRadius: 20,
        width: '100%',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    text:{
        color: AppColors.white,
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight:'bold',
    }
    
})

export default AppButton;