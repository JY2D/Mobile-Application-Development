import React from 'react'
import {View,Text,Image,ImageBackground,TouchableOpacity, StyleSheet} from 'react-native'
import {TextInput,ScrollView} from 'react-native-gesture-handler'
import Icon from '@expo/vector-icons/Ionicons'

import New from '../components/New.js'
import Best from '../components/Best.js'
import AppScreen from '../components/AppScreen'
import Hotels from '../components/Hotels'
import SwiperComponent from '../components/SwiperComponent.js'
import Details from '../Screens/Details.js'
import DataManager from '../config/DataManager';
import AppColors from '../config/AppColors.js'



function PlacesToStay({props, navigation}) {
        return(
            <AppScreen>
                <View style={styles.background}>
                <View style={styles.container}>
                    <View style={styles.container3}>
                    <Text style={styles.Headings}>
                        Hotels
                    </Text>
                </View>


                    <ScrollView
                     horizontal
                     showsHorizontalScrollIndicator={false}
                    >
                       <Hotels
                         
                            value={"1"}
                            onPress= { () => {DataManager.getInstance().screenID="1";DataManager.getInstance().screenColoumn="1";navigation.navigate("Details")}}
                       
                       />
                         <Hotels
                     
                            value={"2"}
                            onPress= { () => {DataManager.getInstance().screenID="2";DataManager.getInstance().screenColoumn="1";navigation.navigate("Details")}}
                       
                       />
                         <Hotels
                    
                            value={"3"}
                            onPress= { () => {DataManager.getInstance().screenID="3";DataManager.getInstance().screenColoumn="1";navigation.navigate("Details")}}
                       
                       />
                       <Hotels
                            
                            value={"4"}
                            onPress= { () => {DataManager.getInstance().screenID="4";DataManager.getInstance().screenColoumn="1";navigation.navigate("Details")}}
                       
                       />
                       <Hotels
                          
                            value={"5"}
                            onPress= { () => {DataManager.getInstance().screenID="5";DataManager.getInstance().screenColoumn="1";navigation.navigate("Details")}}
                       
                       />
                       <Hotels
                           
                            value={"6"}
                            onPress= { () => {DataManager.getInstance().screenID="6";DataManager.getInstance().screenColoumn="1";navigation.navigate("Details")}}
                       
                       />
                       <Hotels
                          
                            value={"7"}
                            onPress= { () => {DataManager.getInstance().screenID="7";DataManager.getInstance().screenColoumn="1";navigation.navigate("Details")}}
                       
                       />
                       <Hotels
                      
                            value={"8"}
                            onPress= { () => {DataManager.getInstance().screenID="8";DataManager.getInstance().screenColoumn="1";navigation.navigate("Details")}}
                       
                       />
                       <Hotels
                           
                            value={"9"}
                            onPress= { () => {DataManager.getInstance().screenID="9";DataManager.getInstance().screenColoumn="1";navigation.navigate("Details")}}
                       
                       />
                      

                    </ScrollView>


                    <View style={styles.bottomCon}>
                        <Text style={styles.Headings2}>
                            AirBnb
                        </Text>
                        <View style={styles.bottom}>
                        </View>
                        <Text style={styles.Headings2}>
                            SuperHost
                        </Text>
                    </View>

                    <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    >

                        <New
                        onPress= { () => {DataManager.getInstance().screenID="1";DataManager.getInstance().screenColoumn="2";navigation.navigate("Airbnb")}}
                      
                        />
                        <New
                        onPress= { () => {DataManager.getInstance().screenID="2";DataManager.getInstance().screenColoumn="2";navigation.navigate("Airbnb")}}
                  
                        />
                        <New
                        onPress= { () => {DataManager.getInstance().screenID="3";DataManager.getInstance().screenColoumn="2";navigation.navigate("Airbnb")}}
                       
                        />
                    </ScrollView>

                    <Text style={styles.Headings3}>
                        Best Sellers
                    </Text>
            
            
            <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal>

                    <Best/>
                    <Best/>
                    <Best/>
            </ScrollView>
            </View>
            </View>
            </AppScreen>
        );
}
const styles = StyleSheet.create({
    container:{
    marginLeft:10,
    },
    background:{
        backgroundColor:AppColors.grey
    },
    Headings: {
        fontWeight:"bold",
        fontSize:18,
        color:"#4f4a4a",
        marginTop:10

    },
    container2:{
        flexDirection:"row",
        alignItems:"center",
        width:"100%",
        marginVertical:30
    },
    con:{
        flexDirection:"row",
        alignItems:"center",
        elevation:2,
        width:"85%",
        backgroundColor:"#FFF",
        paddingHorizontal:20,
        height:35,
        borderRadius:10,
        marginLeft:1
    },
    text:{
        fontWeight:'normal',
        paddingHorizontal:10,
        fontSize:12
    },
    con2:{
        alignItems:"center",
        elevation:2,
        width:"15%",
        backgroundColor:"#FFF",
        marginLeft:5,
        height:35,
        borderRadius:10,
        marginLeft:1,
        justifyContent:"center"
    },
    container3:{
        flexDirection:"row",
        width:"100%",
        alignItems:"center"
    },
    image :{
        width:5,
        height:5,
        borderRadius:5,
        marginHorizontal:5,
        backgroundColor:"#4f4a4a"
    },
    bottomCon :{
        flexDirection:"row",
        marginTop:20,
        marginBottom:10,
        alignItems:"center"
    },
    bottom:{
        height:5,
        width:5,
        borderRadius:5,
        backgroundColor:"#4f4a4a",
        marginHorizontal:4,
    },
    Headings2: {
        fontWeight:"bold",
        fontSize:18,
        color:"#4f4a4a"


    },
    Headings3:{
        fontWeight:"bold",
        fontSize:18,
        color:"#4f4a4a",
        marginTop:10,
    }
    
})

export default PlacesToStay