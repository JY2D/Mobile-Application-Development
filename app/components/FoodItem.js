import React from 'react';

import { Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


import AppScreen from './AppScreen';
import FoodCard from './FoodCard';
import FoodCardItems from './FoodCardItems';
import DataManager from '../config/DataManager';
const getFoood = () => {
    let hotelData= DataManager.getInstance();
    return hotelData;
}

const GetplacesUserID = () =>{
    let dataarr = DataManager.getInstance();
    return dataarr;
   
   }


function FoodItem(props) {

    const Hotelslist = getFoood();
    let dataarr = GetplacesUserID();
    const HotelArr = dataarr.getRestuarantsNum(Hotelslist.screenID);
    
    return (
        <AppScreen>
        <FoodCard
            // image={require("../assets/food/CHAAT/CHAAT.jpg")}
            // title="Duddell’s"
            // subtitle="A mix of fine art exhibitions and fine dining, this expansive venue"/>
            image={HotelArr[0].image}
            title={HotelArr[0].title}
            subtitle={HotelArr[0].subtitle}/>
            

<ScrollView>

        <Text style={styles.heading}>MENU</Text>

        <FoodCardItems
        // image={require("../assets/food/CHAAT/CHAAT.jpg")}
        // title="Hello"
        // cost="$670"
        image={HotelArr[0].imageCard1}
        title={HotelArr[0].menu1}
        cost={HotelArr[0].cost1}
        value={1}

        >

        </FoodCardItems>
        <FoodCardItems
        // image={require("../assets/food/CHAAT/CHAAT.jpg")}
        //     title="Hello"
        //     cost="$280"
        image={HotelArr[0].imageCard2}
        title={HotelArr[0].menu2}
        cost={HotelArr[0].cost2}
        value={2}
            >

        </FoodCardItems>
        <FoodCardItems
        // image={require("../assets/food/CHAAT/CHAAT.jpg")}
        // title="Hello"
        // cost="$280"
        image={HotelArr[0].imageCard3}
        title={HotelArr[0].menu3}
        cost={HotelArr[0].cost3}
        value={3}
        >

        </FoodCardItems>
        <FoodCardItems
        // image={require("../assets/food/CHAAT/CHAAT.jpg")}
        // title="Hello"
        // cost="$590"
        image={HotelArr[0].imageCard4}
        title={HotelArr[0].menu4}
        cost={HotelArr[0].cost4}
        value={4}
        >

        </FoodCardItems>
     
        </ScrollView>

        </AppScreen>
    );
}

const styles = StyleSheet.create({

    heading:{
        fontSize:20,
        marginLeft: 15,
        marginTop:5,
        fontFamily: Platform.OS === 'android' ? "Roboto" : "Arial",
    },
  
})

export default FoodItem;