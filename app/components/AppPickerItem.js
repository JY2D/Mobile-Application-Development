import React from 'react';

import {  TouchableOpacity, StyleSheet  } from 'react-native';

import AppIcons from './AppIcons';
import AppText from './AppText';

AppIcons

function AppPickerItem({onPress, label, icon, backgroundColor}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <AppIcons name={icon} iconColor="white" backgroundColor={backgroundColor} />
            
            <AppText>{label}</AppText>

            
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    
})

export default AppPickerItem;