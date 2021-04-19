import React,{useState} from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AppIcons from '../components/AppIcons';
import AppListItems from '../components/AppListItems';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppColors from '../config/AppColors';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import MyListings from './MyListings';
import MyHistory from './MyHistory';
import DataManager from '../config/DataManager';
import AppAccountProfile from '../components/AppAccountProfile';
import AppButton from '../components/AppButton';

import * as ImagePicker from 'expo-image-picker';
import OrdersCard from '../components/OrdersCard';





function AccountScreen({navigation, route}) {
    const { name, email, image, accountbal } = DataManager.getInstance().users.find(user => user.id === DataManager.getInstance().userID);
    const[imageProfile, setImage] = useState(image);
    

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
        alert("Permission to access camera roll is required!");
        return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();


        if (pickerResult.cancelled === true) {
            return;
        }
      

       const ArrayID = getArr();
       let dataarr = GetUserID();
       const UserArr = dataarr.getUserImage(ArrayID.userID);
       UserArr[0].image = {uri: pickerResult.uri};
       setImage({uri: pickerResult.uri});
   
    }
    
    const GetUserID = () =>{
        let dataarr = DataManager.getInstance();
        return dataarr;
       
       }

       const getArr = () => {
        let hotelData= DataManager.getInstance();
        return hotelData;
    }
    
    

    


    return (
        <AppScreen style={styles.container}>

            <View style= {styles.WelcomeContainer}>
                <Image source={require('../assets/name.png')}
                style= {styles.images} />
            </View>
            
               
                 
         
            <TouchableOpacity style={styles.imageButton} onPress={openImagePickerAsync}>
            <View style={styles.accountContainer}>

                <AppAccountProfile image={imageProfile} title={name} subtitle={email} balance={accountbal}/>  

            </View>
            </TouchableOpacity>


                <View style={styles.myContainer}> 
                    <AppListItems title="My Orders" IconComponent={<AppIcons name="cart-outline" size={50} iconColor={AppColors.white} backgroundColor={AppColors.bgrey}/>} onPress={() => navigation.navigate("MyListings")} />
                    <AppListItems title="My Purchase History" IconComponent={<AppIcons name="history" size={50} iconColor={AppColors.white} backgroundColor={AppColors.bgrey}/>} onPress={() => navigation.navigate("MyHistory")} />
                    <AppListItems title="My New Listings" IconComponent={<AppIcons name="folder-plus-outline" size={50} iconColor={AppColors.white} backgroundColor={AppColors.bgrey}/>} onPress={() => navigation.navigate("NewListings")} />
                    <AppListItems title="Wish List" IconComponent={<AppIcons name="folder-plus-outline" size={50} iconColor={AppColors.white} backgroundColor={AppColors.bgrey}/>} onPress={() => navigation.navigate("WishList")} />
                </View>
                <View style={styles.logOut}>
                <AppListItems title="Log Out" IconComponent={<AppIcons name="logout" size={50} iconColor={AppColors.white} backgroundColor={AppColors.bgrey}/>} onPress={()=> navigation.navigate("Welcome")} />
                </View>
        </AppScreen>
    );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 25,
    },
    WelcomeContainer:{
   
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 40,
    },
    images:{
        marginTop: 20,
        width: 200,
        height: 60,



    },
    accountContainer:{
        marginTop: 60,
        height: 100,
        
        justifyContent:"center",
        
        
    },
    myContainer:{
        marginTop: 93,
        height: 100,
        
        justifyContent:"center",
        marginLeft:30,
    },
    logOut:{
        marginTop: 100,
        fontSize:40,
        marginLeft:30,
    },
    
})

export default AccountScreen;
