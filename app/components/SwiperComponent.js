import React from 'react'
import {Image,StyleSheet,Text,View} from 'react-native';


import Swiper from 'react-native-swiper';
import DataManager from '../config/DataManager';

const getHotels = () => {
    let hotelData= DataManager.getInstance();
    return hotelData;
}



const GetplacesUserID = () =>{
    let dataarr = DataManager.getInstance();
    return dataarr;
   
   }

function SwiperComponent(props) {
   
    const Hotelslist = getHotels();
    let datArr = GetplacesUserID();
    let Hotel = datArr.getPlacesID(Hotelslist.screenID);
    console.log(Hotelslist.screenColoumn);
    if(Hotelslist.screenColoumn==1){
     Hotel = datArr.getPlacesID(Hotelslist.screenID);
    }
    if(Hotelslist.screenColoumn==2){
     Hotel = datArr.getAirbnbID(Hotelslist.screenID);
    }
    if(Hotelslist.screenColoumn==3){

    }
        return(
            <Swiper
            dotStyle={styles.dot}
            activeDotColor="#FFF"
            activeDotStyle={styles.activeDot}>
            
                
               <View style={styles.slide}>
                   <Image
                     source={Hotel[0].image1}
                     style={styles.image}
                    />
               </View>
               
               <View style={styles.slide}>
                   <Image
                     source={Hotel[0].image2}
                     style={styles.image}
                    />
               </View>
               
               <View style={styles.slide}>
                   <Image
                     source={Hotel[0].image3}
                     style={styles.image}
                    />
               </View>

            
            </Swiper>
        );
    }

    const styles = StyleSheet.create({
    
        slide:{
            flex:1,
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"#FFF"
        },
        dot:{
            backgroundColor:"#000",
            borderColor:"#000",
            borderWidth:1,
            width:10,
            height:10,
            borderRadius:10
        },
        activeDot:{
            borderColor:"#000",
            borderWidth:1,
            width:10,
            height:10,
            borderRadius:10
        },
        image:{
            height:300,
            width:350
        }
    
    })
    export default SwiperComponent