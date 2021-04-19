import React, {useState} from 'react';
import {  FlatList, StyleSheet, View, TouchableOpacity, Text} from 'react-native';


import AppScreen from '../components/AppScreen';
import DataManager from '../config/DataManager';
import OrdersCard from '../components/OrdersCard';
import AppIcons from '../components/AppIcons';


const getCards = () => {
    let commonData = DataManager.getInstance(); 
    let user = commonData.getUserID();
    return commonData.getCards(user);  
}

function NewListing(props) {
    const FullCardList = getCards();
    console.log(FullCardList);




const[refreshing, setRefreshing] = useState(false);

const[cards,setCard] = useState(FullCardList);


const onDelete = (card) => {   
   const newCardList = cards.filter (item => item.listingid !== card.listingid); 
   setCard(newCardList); 

   let newArr = DataManager.getInstance(); 
   newArr.changeCards(newCardList);  
}


    return (
        <AppScreen style={styles.container}>

            <View style={styles.tab}>
            <Text style={styles.text1}>Pull down to refresh</Text>
            </View>
            
            <FlatList 
                data={cards}
                keyExtractor = {card => card.listingid}

                refreshing ={refreshing} 
                onRefresh={() => setCard(getCards())}

                renderItem = {({item}) => 
                        <OrdersCard
                            title={item.title}
                            subtitle={item.subtitle}
                            image={item.image}

                    onSwipeLeft={() => (<View style={styles.deleteView}>
                    <TouchableOpacity onPress={() => onDelete(item)}>  
                    <AppIcons name="trash-can" iconColor={"black"} backgroundColor={"grey"}/>
                    </TouchableOpacity>
                   </View>

               
                   
                   )}
                        />}
                />
        </AppScreen>
        
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"brown",
        flex:1,
        marginTop:0,

    },
    text1:{
        marginTop: 10,
        marginBottom:5,
        fontSize: 15,
        marginLeft:40,
        justifyContent:"center",
        textDecorationLine:'underline',
    },
    tab:{
        justifyContent:"center",
    },
    deleteView:{
        backgroundColor:"lightblue",
        width:50,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
    }
})

export default NewListing;