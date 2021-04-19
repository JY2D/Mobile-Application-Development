import React from 'react';

import { Text, StyleSheet, Platform } from 'react-native';

function AppText({style,children}) {
    return (
        <Text style={styles.text}>
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize:15,
    
        marginLeft:10,
        fontFamily: Platform.OS === 'android' ? "Roboto" : "Cochin"

    }
})

export default AppText;

