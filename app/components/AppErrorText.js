import React from 'react';

import { Text, StyleSheet, Platform } from 'react-native';
import AppColors from '../config/AppColors';

function AppErrorText({style,children}) {
    return (
        <Text style={styles.text}>
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize:15,
        //padding:10,
        marginLeft:10,
        fontFamily: Platform.OS === 'android' ? "Roboto" : "Cochin",
        color: "red"

    }
})

export default AppErrorText;

