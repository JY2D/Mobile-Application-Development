import React from 'react';
import {useState} from 'react';
import {View,StyleSheet,ScrollView,TouchableOpacity,Text,FlatList, Dimensions,LogBox } from 'react-native';
import * as Haptics from 'expo-haptics';


import AppScreen from '../components/AppScreen';
import DataManager from '../config/DataManager';
import AppCardPage from '../components/AppCardPage';


    const getRest = () =>{
    let restData = DataManager.getInstance();
    return restData.getRestuarants();
    }

    const getTabs = () =>{
        let tabData = DataManager.getInstance();
        return tabData.getTab();
        }
    

function FoodScreen({navigation}){

LogBox.ignoreLogs(['Warning: ...']); 
LogBox.ignoreAllLogs();

    const Restuarantslist = getRest();
    const Tablist = getTabs();
    
    
  
    const [tags, setTags] = useState('All')
    const [Restuarant, setRestuarant] = useState(Restuarantslist)


    const setTagsFilter = tags => {
        if(tags !== 'All'){
            setRestuarant([...Restuarantslist.filter(e => e.tags === tags )])
        }  else {
            setRestuarant(Restuarantslist)
        }
        setTags(tags)
    }



    return (
      <AppScreen style={styles.container}>

            <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            
            <View style={styles.Tablist}>
                {
                    Tablist.map(e => (
                    <TouchableOpacity

                    style = {[styles.btnTab, tags === e.tags && styles.btnTabActive]}
                    onPress={() => {setTagsFilter(e.tags); Haptics.ImpactFeedbackStyle.Heavy; Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)}}>
                        <Text>
                            {e.tags}
                        </Text>
                    </TouchableOpacity>
                    ))
                }
            </View>
            </ScrollView>

            
            <FlatList
            data = {Restuarant}
            keyExtractor={(item, index) => index.toString()}
            renderItem = {({item}) => 
            <AppCardPage
            onPress = {() =>{DataManager.getInstance().screenID=item.restuarantsid;console.log(DataManager.getInstance().screenID);navigation.navigate("FoodItem")}}
            title={item.title} 
            subtitle={item.subtitle}
            image={item.image}  
            tags={item.tags}
            price={item.price}
            />}/>

        </AppScreen>
    );
}



const styles = StyleSheet.create({
    Tablist:{
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: 5,
        color: 'black'
    },
    btnTab:{
        width: Dimensions.get('window').width/3.5,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: "black",
        padding:10,
        marginTop:5,
        borderRadius:10,
        marginLeft:10,
        marginRight:10,
    },
     textTab:{
         fontSize:16,

     },
     btnTabActive:{
         backgroundColor:"grey",
     },
  
    container:{
        // backgroundColor:"#ECEFF1",

        flex:1,
        paddingHorizontal:10,
        justifyContent:'center',
        marginTop: 60,
    },
    containerbutton: {
        flexDirection:'row',
        backgroundColor: '#ecf0f1',
        padding: 8,
      },

    filterButton: {
        backgroundColor: "red",  
        borderRadius: 20,                     
        width: 150,
        height: 50,                         
        padding: 10,                         
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ffffff',
        borderWidth: 1,
      },
})

export default FoodScreen;