import React from 'react';
import {Text,View,Image,StyleSheet} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import DataManager from '../config/DataManager';


const GetplacesUserID = () =>{
    let dataarr = DataManager.getInstance();
    return dataarr;
   
   }
function Hotels({props, onPress, value}) {
    let dataarr = GetplacesUserID();
    const HotelArr = dataarr.getPlacesID(value);


        return(
            <TouchableOpacity 
             onPress={onPress}
             style={styles.container}
            >
                <Image
                source={HotelArr[0].image1}
                style={styles.images}/>
                <View style={styles.row}>
                    <Text style={styles.heading}>
                    {HotelArr[0].name}
                 </Text>
                 <View style={styles.textBox}>

                 </View>
                 <Text style={styles.text}>
                     Featured
                 </Text>
               
                </View>
                <Text style={styles.subtitle}>
                {HotelArr[0].blurb}
                 </Text>

                 <View style={styles.box}>
                     <View style={{width:"80%"}}>
                         <Text style={styles.prices}>{HotelArr[0].price}</Text>
                     </View>

                 </View>
                
            </TouchableOpacity>
        );
    }

  

    
    

const styles = StyleSheet.create({
    container:{
        marginTop:15,
        backgroundColor:"#FFF",
        height:250,
        width:200,
        elevation:2,
        borderRadius:10,
        padding:15,
        marginRight:30,
        marginLeft:2,
        marginBottom:5,

    },
    images:{
        width:170,
        height:110,
        borderRadius:10
    },
    row:{
        flexDirection:"row",
        alignItems:"center",
        marginVertical:10
    },
    heading:{
        fontWeight:"bold",
        color:"#4f4a4a",
        fontSize:12
    },
    textBox:{
        height:4,
        width:4,
        borderRadius:4,
        backgroundColor:"red",
        marginHorizontal:4
    },
    text:{
        color:"red",
        fontSize:9,
        fontWeight:"bold"
    },
    subtitle:{
        fontSize:9,
        color:"#4f4a4a",
        fontWeight:'normal'
    },
    box:{
        flexDirection:"row",
        marginTop:5,
        alignItems:"center",
        width:"100%"
    },
    prices:{
        fontSize:15,
        fontWeight:"bold"
    },
    image2:{
        alignSelf:"flex-end",
        width:25,
        height:25
    }

})
export default Hotels