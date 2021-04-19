import React from 'react';

import { View, Image, Text, StyleSheet,TouchableHighlight } from 'react-native';
import AppText from '../components/AppText';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import AppColors from '../config/AppColors';

function OrdersCard({image,icon,  cost,subtitle, title,onPress, IconComponent, onSwipeLeft}) {
    return (
        <Swipeable renderRightActions={onSwipeLeft}>
        <TouchableHighlight onPress={onPress} underlayColor={AppColors.DarkBrown}>
        <View style={styles.container}> 
        {IconComponent}
        {isFinite(image)? <Image source={image} style={styles.image}/> :<Image source={{uri: image}} style={styles.image}/>}
    <View style={styles.text}>
        <View style={styles.text2}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subtitle}>{subtitle}</AppText>
            
            </View>
        <View style={styles.textRow}>
            {cost && <Text style={styles.price}>{cost} HKD</Text>}
        </View>
    </View>
        </View>
        </TouchableHighlight>
        </Swipeable>


    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "white",
         borderRadius: 10,
         overflow:"scroll",
         marginTop: 10,
         marginBottom: 10,

         marginLeft:15,
         marginRight:15,
    },
    image:{
        height:130,
        width: "100%",
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        resizeMode:'cover'

    },
    text:{
        flexDirection:'row',

    },
    text2:{
        flexDirection:'column'
    },
    textRow:{
        flexDirection:'row',
        marginLeft: 'auto'
    },
    title:{
        color:"brown",
        fontWeight:"bold",
        fontSize: 20,
        marginLeft:10,
        marginTop:2,
    },
    subtitle:{
        color:"black",
        fontSize: 16,
        marginLeft:10,
        marginBottom:2,

    },
    price:{
        fontSize:30,
        color:"brown",
    }
})

export default OrdersCard;