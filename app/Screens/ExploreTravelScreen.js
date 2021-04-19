
import React, {Component} from 'react';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Dimensions } from 'react-native';


import { StyleSheet, View, TouchableOpacity, TouchableWithoutFeedback, Text, Animated } from 'react-native';
import { ScrollView, TextInput, TouchableHighlight,  } from 'react-native-gesture-handler';
import { block } from 'react-native-reanimated';
import AppCard from '../components/AppCard';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppColors from '../config/AppColors';
import PlacesToStay from './PlacesToStay';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppIcons from '../components/AppIcons';
import AppTitles from '../components/AppTitles';
import AppTags from '../components/AppTags';
import AppListItems from '../components/AppListItems';



const screenWidth = Dimensions.get('window').width;



function ExploreTravelScreen({props, navigation, route}) {
    return (

        <AppScreen style={styles.container}>
            <View style={styles.back}>
        <ScrollView 
        showsVerticalScrollIndicator={false}
        
        
         >
          

            <AppTitles>Hotspots</AppTitles>
                     
           
           <ScrollView 
           horizontal={true}
           showsHorizontalScrollIndicator={false}

           >

            <AppCard 
                image={require("../assets/places/tiantian.jpg")}
                title="TianTian"  
                
                subtitle="One of the most iconic landmarks"
                
                />

               
            
            <AppCard 
                title="Walk of Fame" 
                subtitle="Avenue of the Stars"
                image={require("../assets/places/bruceLee.jpg")}/>

            <AppCard 
                title="Victoria Peak" 
           
                subtitle="Look over Hong Kong"
                image={require("../assets/places/victoria.jpg")}/>
            </ScrollView>


            <AppTitles>Shopping</AppTitles>
            <ScrollView 
           horizontal={true}
           showsHorizontalScrollIndicator={false}>
            <AppCard  
                title="Lady's Market"  
                
                subtitle="Extremely popular market for tourists"
                image={require("../assets/places/ladiesMarket.jpg")}
                />
            
            <AppCard 
                title="K 11 Musea" 
                subtitle="1.2 million square feet of retail space"
                image={require("../assets/places/musea.jpg")}/>

            <AppCard 
                title="Harbour City" 
           
                subtitle="Beautiful Views"
                image={require("../assets/places/harbourCity.jpg")}/>
            </ScrollView>

            <AppTitles>Nightlife</AppTitles> 
            <ScrollView 
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <AppCard  
                title="LKF"  
              
                subtitle="Also known as Lan Kwai Fong, party area"
                image={require("../assets/places/lkf.jpg")}
                />
            
            <AppCard 
                title="Temple Street Night Market" 
            
                image={require("../assets/places/market.jpg")}/>

            <AppCard 
                title="Ce-La-Vi" 
               
                subtitle="Beautiful Rooftop Bar"
                image={require("../assets/places/celavi.jpg")}/>
            </ScrollView>            
            </ScrollView>
            </View>
        </AppScreen> 


    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'red',
},
back:{
    backgroundColor:AppColors.grey,
},
heading:{
    marginTop: 50,
    fontSize: 25,
    fontWeight:'bold',
    marginBottom: 20,
    borderBottomWidth:1,
    borderBottomColor:AppColors.navy

},

})

export default ExploreTravelScreen;