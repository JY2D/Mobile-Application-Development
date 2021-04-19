import React, {useState} from 'react';
import {Text,  StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';

import AppCard from '../components/AppCard';
import AppIcons from '../components/AppIcons';
import AppListItems from '../components/AppListItems';
import AppScreen from '../components/AppScreen';
import AppColors from '../config/AppColors';
import DataManager from '../config/DataManager';
import OrdersCard from '../components/OrdersCard';

const getUserPurchase = () => {
    let commonData = DataManager.getInstance(); 
    let user = commonData.getUserID();
    return commonData.getPurchaseID(user);  
}

function MyHistory(props) {
    const PurchaseOrder = getUserPurchase();    
    const[refreshing, setRefreshing] = useState(false);
    const[hL, setHistory] =  useState(PurchaseOrder);


    const getOrderValue =() =>{
        let dataarr = getUserPurchase();
        var total = 0;
        var i = 0;
        for(i=0;i<dataarr.length;i++){
            total = total+parseInt(dataarr[i].price,10);
        }
       console.log(dataarr);
       console.log(total);
       return total;
    }

    var total = getOrderValue();
    return (
     <AppScreen style={styles.container}>
            <View style={styles.listContainer}>
            <FlatList
            data = {hL}
            keyExtractor = {purchase => purchase.id.toString()}
            refreshing={refreshing}
            onRefresh={() => setHistory(getUserPurchase())}
            renderItem = {({item}) => 
                <OrdersCard 
                    title={item.name}
                    subtitle={item.description}
                    image={item.image}
                    cost={item.price}
                    onPress={() => console.log(item)}
                  />
            
            }/>
 <View style={styles.purchase}>

<Text style={styles.HKD}>Total: {total} HKD</Text>

</View>

            </View>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:AppColors.natural,
        flex:1,
    },
    purchase:{
        backgroundColor:"red",
        width:"100%",
        height:70,
        marginTop:500,
        position:"absolute",
        flexDirection:"row",
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    HKD:{
        fontSize:25,
    },
    seperator:{
        width:"100%",
        height:2,
        backgroundColor: AppColors.secondaryColor,
    },
    deleteView:{
        backgroundColor:AppColors.secondaryColor,
        width:75,   
        justifyContent:"center",
        alignItems:"center",
    }
})

export default MyHistory;