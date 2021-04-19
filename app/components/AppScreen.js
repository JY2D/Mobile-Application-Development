import React from 'react';

import { View, StyleSheet, SafeAreaView, StatusBar, Platform } from 'react-native';
import Constants from 'expo-constants';


function AppScreen({children, style}) {
    return (
        <>
                    {/* ios status bar  */}
            <SafeAreaView style={{backgroundColor: '#424242'}} />
                <SafeAreaView forceInset={{top: 'always'}} style={{flex: 1}}>

                    {/* android status bar */}
                <StatusBar animated={true} backgroundColor="#424242" /> 
                {children}
            </SafeAreaView>
        </>

        
    );
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        marginTop: 0,
    }
    
})

export default AppScreen;
