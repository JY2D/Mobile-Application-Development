import React, {useState} from 'react';
import { StyleSheet, FlatList, View, TouchableOpacity,Text } from 'react-native';

import AppScreen from '../components/AppScreen';
import AppColors from '../config/AppColors';
import AppListItem from '../components/AppListItems';
import AppIcon from '../components/AppIcons';
import DataManager from '../config/DataManager';
import OrdersCard from '../components/OrdersCard';


   const getUserOrders = () => {
    let commonData = DataManager.getInstance(); 
    let user = commonData.getUserID();
    return commonData.getOrdersID(user);  
}

const Empty = [

]


function MyListings({props, navigation}) {
   console.log(DataManager.getInstance().userID);
   let dataarr = getUserOrders();
   console.log(dataarr);




    const[refreshing, setRefreshing] = useState(false);

    const[Orders, setOrders] =  useState(dataarr);



    const handleDelete = (Order) => {
        const newOrderList =  Orders.filter (item => item.id !== Order.id);
        setOrders(newOrderList);


        let UpdateOrdersList = DataManager.getInstance();
        UpdateOrdersList.changeData(newOrderList);
    }

    const getOrderValue =() =>{
        let dataarr = getUserOrders();
        var total = 0;
        var i = 0;
        for(i=0;i<dataarr.length;i++){
            total = total+parseInt(dataarr[i].price,10);
        }
       console.log(dataarr);
       console.log(total);
       return total;
    }

    const getNewPurchaseOrder =() =>{
        let Data = DataManager.getInstance();
  
        
        if((Data.getUserImage(DataManager.getInstance().userID)[0].accountbal-getOrderValue())>=0){
            Data.getUserImage(DataManager.getInstance().userID)[0].accountbal = Data.getUserImage(DataManager.getInstance().userID)[0].accountbal-getOrderValue();
            console.log(Data.getUserImage(DataManager.getInstance().userID)[0].accountbal-getOrderValue());
        let commonData = DataManager.getInstance();
        let dataarr = getUserOrders();
       
        var i = 0;
        for(i=0;i<dataarr.length;i++){
            var size = commonData.getPurchaseSize();
        const PurchaseOrder = {
            description: dataarr[i].description,
            id: size,
            image: dataarr[i].image,
            name: dataarr[i].name,
            price: dataarr[i].price,
            userID:commonData.userID,
          }
          commonData.addPurchase(PurchaseOrder);
          commonData.changeData(Empty);

        }
        alert("Transaction Complete");

        }else{

        alert("Insufficent Funds");
        }

        
        

        

       return total;
    }


    var total = getOrderValue();

    return (
       
        <AppScreen style={styles.container}>
            <View style={styles.listContainer}>
            <FlatList
            data = {Orders}
            keyExtractor = {Order => Order.id.toString()}
            refreshing={refreshing}
            onRefresh={() => setOrders(getUserOrders())}
            renderItem = {({item}) => 
                <OrdersCard 
                    title={item.name}
                    subtitle={item.description}
                    image={item.image}
                    cost={item.price}
                    onPress={() => console.log(item)}
                    onSwipeLeft={ () => (
                    <View style={styles.deleteView}>
                        <TouchableOpacity onPress={() => handleDelete(item)}>
                            <AppIcon name="trash-can" iconColor={AppColors.white} backgroundColor={AppColors.bgrey}/> 
                        </TouchableOpacity>


                    </View>)}/>
            
            }
        
             />

            <View style={styles.purchase}>

                <Text style={styles.HKD}>Total: {total} HKD</Text>

                 <TouchableOpacity onPress={ () => {
                  getNewPurchaseOrder();
                  let commonData = DataManager.getInstance();
                  console.log(commonData.purchase);
              


                 }}>
            <View style= {styles.button}> 
                <Text style= {styles.buy}>Buy Now</Text>
            </View>
                 </TouchableOpacity>

             </View>
 

            </View>
        </AppScreen>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:AppColors.bluegrey,
        flex:1,
        marginTop:35,
    },
    button:{
        backgroundColor: AppColors.black,
        borderRadius: 20,
        width: '100%',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buy:{
        color: AppColors.white,
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight:'bold',
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
    listContainer:{
        marginTop:70,
        marginBottom:50,

    },
    seperator:{
        width:"100%",
        height:2,
        backgroundColor: AppColors.secondaryColor,
    },
    deleteView:{
        backgroundColor:AppColors.bluegrey,
        width:75,   
        justifyContent:"center",
        alignItems:"center",
    }
})

export default MyListings;