import React from 'react';
import {View,Image,Text, StyleSheet,TouchableOpacity} from 'react-native';
import DataManager from '../config/DataManager';
const getHotels = () => {
    let hotelData= DataManager.getInstance();
    return hotelData;
}

const GetplacesUserID = () =>{
    let dataarr = DataManager.getInstance();
    return dataarr;
   
   }

function New({props, onPress, value}) {

    let dataarr = GetplacesUserID();
    const HotelArr = dataarr.getAirbnbID(value);

        return(
           <TouchableOpacity  onPress={onPress}>
            
           

           <View style={styles.container}>
           <View>
               <Image
                source={require('../assets/places/lkf.jpg')}
                style={styles.image}
               />
           </View>

           <View style={styles.container2}>
               <Text style={styles.text}>
                   Slakal sleeves short dress with three attractive colors
               </Text>
               <Text style={styles.price}>
                   454.69
               </Text>

           </View>
           <View style={styles.image2}>
               <Image
            //add button
                source={require('../assets/places/lkf.jpg')}
                style={{height:17,width:17}}
               />
           </View>

           </View>
           </TouchableOpacity>
        )
    }
    const styles = StyleSheet.create({
        container:{
            flexDirection:"row",
            height:60,
            width:240,
            backgroundColor:"#fff",
            elevation:2,
            padding:6,
            marginVertical:5,
            marginRight:20,
            marginLeft:2,
            borderRadius:10
        },
        image:{
            height:50,
            width:60,
            borderRadius:10,
            
            
        },
        container2:{
            width:"65%",
            justifyContent:"flex-end",
            paddingHorizontal:10,
            height:"100%",
        },
        text:{
            fontSize:8,
            fontWeight:'normal',
            
        },
        price:{
            fontSize:11,
            fontWeight:"bold",
        },
        image2:{
            width:"5%",
            justifyContent:"flex-end",
            height:"100%",
        }
        
    })
    export default New;