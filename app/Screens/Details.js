import React from 'react'
import {View,Text,Image,TouchableOpacity,StyleSheet, ImageBackground} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import SwiperComponent from '../components/SwiperComponent'
import Stars from 'react-native-stars';
import { ScrollView } from 'react-native-gesture-handler';
import DataManager from '../config/DataManager';

const getHotels = () => {
    let hotelData= DataManager.getInstance();
    return hotelData;
}

const GetplacesUserID = () =>{
    let dataarr = DataManager.getInstance();
    return dataarr;
   
   }


function Details(props) {
    const Hotelslist = getHotels();
    let dataarr = GetplacesUserID();
    const HotelArr = dataarr.getPlacesID(Hotelslist.screenID);

        return(
            <View style={styles.container}>
                <ScrollView
                showsVerticalScrollIndicator={false}>
                    <View style={styles.row2}>
                    
                        <SwiperComponent/>
                    </View>

                   
                    <View style={styles.rowCon}>
                        <View style={{width:"65%"}}>
                            <Text style={styles.headings}>{HotelArr[0].name}</Text>
                        </View>
                        <View style={{width:"35%"}}>
                            <Text style={styles.text}>Customers Rating</Text>
                            <View style={styles.textSty}>
                                <Stars
                                 default={4}
                                 count={5}
                                 half={true}
                                 starSize={20}
                                 fullStar={<Icon name={'star'} style={[styles.myStarStyle]}/>}
                                 emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle,styles.myEmptyStarStyle]}/>}
                                 halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]}/>}
                                
                                />
                                <Text style={styles.review}>
                                    84 Reviews
                                </Text>
                              </View>
                        </View>
                    </View>
                    <Text style={styles.price}>{HotelArr[0].price}</Text>
                    <Text style={styles.subtitle}>
                    {HotelArr[0].details}
                    </Text>


                    <ScrollView 
                    style={{marginTop:40}}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    
                    >
                        <View style={styles.imageSty}>

                            <Image
                                source={HotelArr[0].image4}
                                style={styles.imageBox}
                            />

                        </View>

                        <View style={styles.imageSty}>

                            <Image
                                source={HotelArr[0].image5}
                                style={styles.imageBox}
                            />

                        </View>

                        <View style={styles.imageSty}>

                            <Image
                                source={HotelArr[0].image6}
                                style={styles.imageBox}
                            />

                        </View>
                        
                        <View style={styles.imageSty}>

                            <Image
                                source={HotelArr[0].image7}
                                style={styles.imageBox}
                            />
                        </View>
                    </ScrollView>
                        
                    <TouchableOpacity onPress={() => {
                        const Hotelslist = getHotels();
                        let dataarr = GetplacesUserID();
                        const HotelArr = dataarr.getPlacesID(Hotelslist.screenID);

                         let commonData = DataManager.getInstance();



                         const ID = commonData.getOrderSize();


                        const Order = {
                            id: ID,
                            userID:commonData.userID,
                            name: HotelArr[0].name,
                            description: HotelArr[0].blurb,
                            image: HotelArr[0].image1,
                            price: HotelArr[0].price,
                        }

                        commonData.addOrder(Order);
                        let commonData2 = DataManager.getInstance();
                        console.log(commonData2.getOrders());

                    }


                                  }>
                        <View style={styles.bottom}>

                                <Text style={styles.bottomCart}>
                                    Add to Cart
                                </Text>

                        </View>
                        </TouchableOpacity>

                        </ScrollView>
            </View>

        );


}

    const styles = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:"#FFF",
            paddingHorizontal:20
        },
        row:{
            flexDirection:"row",
            width:"100%",
            marginTop:40
        },
        image:{
            width:15,
            height:15
        },
        continue:{
            width:"50%",
            alignItems:"flex-end"
        },
        image2:{
            width:16,
            height:20
        },
        row2:{
            flexDirection:"row",
            height:340,
            width:"100%"
        },
        container2:{
            backgroundColor:"#3f3a42",
            height:25,
            width:25,
            borderRadius:5,
            borderWidth:2,
            borderColor:"#FFF",
            elevation:5
        },
        side:{
            backgroundColor:"#707070",
            height:25,
            width:25,
            borderRadius:5,
            borderWidth:2,
            borderColor:"#FFF",
            elevation:5,
            marginVertical:10
        },
        side2:{
            backgroundColor:"#b3b4b9",
            height:25,
            width:25,
            borderRadius:5,
            borderWidth:2,
            borderColor:"#FFF",
            elevation:5
        },
        con2:{
            width:"100%", 
            alignItems:"flex-end"
        },
        images:{
            marginTop:-45,
            width:15,
            height:20
        },
        rowCon:{
            flexDirection:"row",
            alignItems:"center",
            width:15,marginTop:20,
            width:"100%"
        },
        headings:{
            fontWeight:"bold",
            fontSize:18,
            color:"#4f4a4a"
        },
        text:{
            fontWeight:"bold",
            fontSize:9,
            color:"#4f4a4a"
        },
        textSty:{
            alignItems:"center",
            flexDirection:"row"
        },
        review:{
            fontSize:8,
            fontWeight:"bold",
            marginHorizontal:5,
            paddingTop:4,
            color:"#b3aeae"
        },
        price:{
            fontWeight:'bold',
            fontSize:16,
            color:"#b3aeae"
        },
        subtitle:{
            fontWeight:'normal',
            fontSize:14,
            lineHeight:20,
            color:"#b3aeae",
            marginTop:20
        },
        imageSty:{
            alignItems:"center",
            justifyContent:"center",
            backgroundColor:"#f5f6fb",
            height:80,
            width:80,
            borderRadius:25,
            marginRight:20
        },
        imageBox:{
            height:90,
            width:90,
        },
        bottom:{
            backgroundColor:"#000",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"center",
            borderRadius:10,
            padding:12,
            marginBottom:15,
            marginTop: 10, 
        },
        bottomCart:{
            fontSize:20,
            color:"#FFF",
            fontWeight:"bold",
            marginHorizontal:15
        },
        myStarStyle:{
            color:"#000",
            backgroundColor:'transparent',
            textShadowColor:"black",
            textShadowOffset:{width:1,height:1},
            textShadowRadius:2   
         },
         myEmptyStarStyle:{
             color:"white"
         }
    });
export default Details;