import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Image,View } from 'react-native';

import AppScreen from '../components/AppScreen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';

import DataManager from '../config/DataManager';

import * as ImagePicker from 'expo-image-picker';
import AppIcons from '../components/AppIcons';
import AppColors from '../config/AppColors';







function NewListings({navigation}) {


    const[title, setTitle] = useState("");
    const[subTitle, setSubTitle]=useState("");
    const[image, setImage] = useState(null);

    const[titleError, setTitleError]=useState("");
    const[subTitleError, setSubTitleError]=useState("");
    const[imageError, setImageError]=useState("");

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
        setImage({path: pickerResult.uri});
        console.log(pickerResult);
    }

    const doErrorCheck = () => {
        setTitleError( title.length>0 ? "": "Please set a valid Location Title");
        setSubTitleError(subTitle.length>0 ? "": "Please set a valid subtitle");
        setImageError(image? "": "Please pick an image");
        return ((title.length>0) && (subTitle.length>0) && (image)? true: false)
    }

    const addListing = () => {
        let commonData = DataManager.getInstance();
        let user = commonData.getUserID();

        const card = commonData.getCards(user);
        const cards = card.length+1;
        const cardNew = {
            title: title,
            subtitle: subTitle,
            listingid: cards,
            userid: user,
            image: image.path,
         
        };
        console.log(cardNew);
        commonData.addCard(cardNew);
    }

    
    return (
        <AppScreen>
            <View style={styles.container}>
            <AppTextInput
                icon="map-search-outline"
                placeholder="Location Name"
                value={title}
                onChangeText={(inputText) => setTitle(inputText)}
                />
            
            {titleError.length>0 ? <AppText style={{margin:5, color:"red", fontSize:16}}>{titleError}</AppText>: <></>}

            <AppTextInput
                icon="calendar-month"
                placeholder="When would you like to go"
                value={subTitle}
                onChangeText={(inputText) => setSubTitle(inputText)}
                />
            
            {subTitleError.length>0 ? <AppText style={{margin:5, color:"red", fontSize:16}}>{subTitleError}</AppText>: <></>}


            <TouchableOpacity style={styles.imageButton} onPress={openImagePickerAsync}>
                 <AppIcons name="camera" size={80} backgroundColor={"grey"}/>
                 {image && <Image source={{uri: image.path}} style={{height:80, width:80, marginLeft: 20,}}/>}
            </TouchableOpacity>

            {imageError.length>0 ? <AppText style={{margin:5, color:"red", fontSize:16}}>{imageError}</AppText>: <></>}
            <View style={styles.button}>
            <AppButton title="Add New Listing" onPress={() => { 
                        if(doErrorCheck()){
                            addListing();
                           navigation.navigate("WishList");
                        }
                     }}/>
            </View>
         </View>
        </AppScreen>
    );
}
const styles = StyleSheet.create({
    imageButton:{
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        marginBottom: 30,
    },
    container:{
        backgroundColor:"grey",
        height:"100%"
    },

    button:{
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        marginBottom: 30,
    },
})

export default NewListings;