import React from 'react';

import { Text, StyleSheet, Platform,View } from 'react-native';

function AppFood({style,title,subtitle}) {
    return (
        <View>
        <Text style={styles.title}>
            {title}
        </Text>
        <Text style={styles.subtitle}>
            {subtitle}
                
        </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title:{
        fontSize:20,
        padding:10,
        marginLeft:10,
        fontFamily: Platform.OS === 'android' ? "Roboto" : "Cochin"

    },
    subtitle:{
        fontSize:8,
        //padding:10,
        marginLeft:0,
        fontFamily: Platform.OS === 'android' ? "Roboto" : "Cochin"

    }
})

export default AppFood;


