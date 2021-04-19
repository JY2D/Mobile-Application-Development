import React from 'react';

import { View, StyleSheet, Image, Text, TouchableHighlight  } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import AppText from '../components/AppText';
import AppColors from '../config/AppColors';


function AppListItems({image, title, subtitle, IconComponent, onPress, onSwipeLeft, cost}) {
    return (
        <Swipeable renderRightActions={onSwipeLeft}>
            <TouchableHighlight onPress={onPress} underlayColor={AppColors.otherColorLite}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image source={image} style={styles.image}/>}
                    <View style={styles.textContainer}>
                        <Text style={styles.title}> {title} </Text>
                        {subtitle && <AppText style={styles.subtitle}> {subtitle} </AppText>}
                        {cost && <AppText style={styles.cost}> {cost}</AppText>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}


const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        marginLeft:30,
        marginBottom:10,

    },
    image:{
        height:50,
        width: 50,
        borderRadius:50,
        
    },
    textContainer:{
        flexDirection:"row",
        marginLeft: 20,
        marginRight:100,
        justifyContent:'center'
    },
    title:{
        fontWeight:"bold",
        fontSize:17,
        marginVertical: 5,
    },
    subtitle:{
        fontSize:15,
    }
    
})

export default AppListItems;