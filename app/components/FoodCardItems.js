import React from 'react';

import { View, Image, Text, StyleSheet,TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import DataManager from '../config/DataManager';


const getFood = () => {
    let hotelData= DataManager.getInstance();
    return hotelData;
}

const GetplacesUserID = () =>{
    let dataarr = DataManager.getInstance();
    return dataarr;
   
   }

function FoodCardItems({image, subtitle, title, cost,name, size=40, iconColor="black", backgroundColor,value}) {
    let data = value;



    return (
        <View style={styles.container}> 
        
        <Image source={image}style={styles.image} />    
       
       
        <View style={styles.coloumn}> 
        
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        
        <View style={styles.bottomhalf}>

       
          <Text style={styles.cost}>{cost}</Text>
       
          <TouchableOpacity onPress={() => {console.log(data)
          const Hotelslist = getFood();
          let dataarr = GetplacesUserID();
          const HotelArr = dataarr.getRestuarantsNum(Hotelslist.screenID);

           let commonData = DataManager.getInstance();



           const ID = commonData.getOrderSize();
           if(value==1){
          const Order = {
            id: ID,
            userID:commonData.userID,
            name: HotelArr[0].menu1,
            description: HotelArr[0].desc1,
            image: HotelArr[0].imageCard1,
            price: HotelArr[0].cost1,
        }
        commonData.addOrder(Order);

      }
    if(value==2){
        const Order = {
          id: ID,
          userID:commonData.userID,
          name: HotelArr[0].menu2,
          description: HotelArr[0].desc2,
          image: HotelArr[0].imageCard2,
          price: HotelArr[0].cost2,
      }
      commonData.addOrder(Order);

  }
  if(value==3){
    const Order = {
      id: ID,
      userID:commonData.userID,
      name: HotelArr[0].menu3,
      description: HotelArr[0].desc3,
      image: HotelArr[0].imageCard3,
      price: HotelArr[0].cost3,
  }
  commonData.addOrder(Order);

}
if(value==4){
    const Order = {
      id: ID,
      userID:commonData.userID,
      name: HotelArr[0].menu4,
      description: HotelArr[0].desc4,
      image: HotelArr[0].imageCard4,
      price: HotelArr[0].cost4,
  }
  commonData.addOrder(Order);
}


        
        let commonData2 = DataManager.getInstance();
        console.log(commonData2.getOrders());


         }





                }
          >
            <View style={styles.button}>
       
         {/* <Text style={styles.text}>Order</Text> */}
           <MaterialCommunityIcons name="cart-outline" size={25}/>
    
            </View>
            </TouchableOpacity>
        </View>
        
        </View>

        </View>
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
         
         flexDirection:"row"

    },
    image:{
        //flex: 1,
        height:110,
        width: 200,
        borderBottomLeftRadius:10,
        borderTopLeftRadius:10,
  
    },
    title:{
        flex: 0.2,
        color:"brown",
        fontWeight:"bold",
        fontSize: 20,
        marginLeft:10,
        marginTop:2,
    },
    subtitle:{
        flex: 0.2,
        color:"black",
        fontSize: 16,
        marginLeft:10,
        marginBottom:2,
        marginRight:1,
    
    },
    text:{
        fontSize: 15,
       color:'black',
    },

    cost:{
        fontSize: 25,
       color:'black',
       marginLeft: 5,
    // marginTop: 35,
    marginLeft:15,
    },
    coloumn:{

    },
    bottomhalf:{
        flexDirection:"row",
        justifyContent: 'space-between',
        marginTop:20,
    },
    button:{
        backgroundColor: "#1E88E5",   //Button Colour
        borderRadius: 100,            //Rounded Edges
        width: 39,
        height: 39,                   //Add width and height around button
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderColor: '#ffffff',
        // marginTop: 38,
        marginLeft: Platform.OS === 'android' ? 40 : 62
        },


})

export default FoodCardItems;