import React from 'react';

import {Text, View, Image, StyleSheet } from 'react-native';

function FoodCard({image, subtitle, title, address, openning}) {
    return (
        <View style={styles.container}> 
        <Image source={image}style={styles.image} />    
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
    backgroundColor: "white",
    marginBottom: 5,
    paddingBottom:10,


    },
    image:{
        height:230,
        width: "100%",
     

    },
    title:{
        color:"brown",
        fontWeight:"bold",
        fontFamily: Platform.OS === 'android' ? "Roboto" : "Arial",
        fontSize:15,
        marginLeft:15,
        marginTop:10,
    },
    details:{
        flexDirection: 'row',
    },
    coloumn:{
        flex:1,
        flexDirection: 'column',
    },
    options:{
        color:"black",
        fontSize: 13,
        marginTop: 5,
        marginLeft:13,
        marginBottom:10,
    },
    optionssubtitle:{
        color:"#BDBDBD",
        fontSize: 13,
        marginTop: 5,
        marginLeft:15,
    },

    subtitle:{
        color:"#BDBDBD",
        fontSize:15,
        marginTop: 5,
        marginLeft:15,
        marginRight: 15,
        marginBottom:10,
       
        
    },
})

export default FoodCard;