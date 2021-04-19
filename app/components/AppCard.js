import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';


import AppColors from '../config/AppColors';
import AppText from '../components/AppText';
import { TouchableOpacity,} from 'react-native-gesture-handler';
import AppSubtitles from './AppSubtitles';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import AppIcons from './AppIcons';


function AppCard({title, subtitle, image, onPress, onSwipeLeft}) {
    return (

        <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <View style={{flex:2}}>
                <Image source={image} style={styles.image}/>
            </View>
            <View style={styles.text}>
                <AppText> {title} </AppText>
                <AppSubtitles> {subtitle} </AppSubtitles>  
            </View>         
        </View>
        </TouchableOpacity>


/* <View style={{height:130, width:130, marginLeft:20, borderWidth:0.5,borderColor:'#dddddd'}}>
<View style= {{flex:2}}>
    <Image source={this.props.imageUri}
    style={{flex:1, width:null, height:null, resizeMode:'cover'}}/>
</View>
<View style= {{flex:1, paddingLeft:10, paddingTop:10}}>
    <Text>
        {this.props.name}
    </Text>
</View>
</View> */
    );
}



const styles = StyleSheet.create({
    container:{
        height:200, 
        width:200, 
        marginLeft:10, 
        backgroundColor:AppColors.white,
        borderRadius:10,

    }, 
    image:{
        flex:1,
        height: null,
        width: null,
        resizeMode:'cover',

        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    text:{
        flex:1, 
        paddingLeft: 10, 
        paddingTop:10,


    },
    // title:{
    //     fontWeight:"bold",
    //     padding: 10,
    //     fontSize: 15,
    // },
    // subtitle:{
    //     fontSize:50,
    // }
})

export default AppCard;