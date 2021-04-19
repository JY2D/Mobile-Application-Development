import React from 'react';

import { Text, StyleSheet, Platform } from 'react-native';

function AppTitles({style,children}) {
    return (
        <Text style={styles.text}>
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize:20,
        padding:10,
        marginLeft:10,
        fontFamily: Platform.OS === 'android' ? "Roboto" : "Cochin"

    }
})

export default AppTitles;

