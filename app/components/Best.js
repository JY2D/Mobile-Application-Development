import React from 'react';
import { Text, ImageBackground,StyleSheet} from 'react-native';

function Best(props) {

        return(
           <ImageBackground
           source={require('../assets/places/lkf.jpg')}
           style={styles.container}
           >
               <Text style={styles.headings}>Zara Furniture World</Text>
               <Text style={styles.priceDrop}>Get 25% OFF</Text>
           </ImageBackground>
        )
    }
    const styles = StyleSheet.create({
        container:{
            height:130,
            width:230,
            marginRight:20,
            borderRadius:10,
            marginBottom:40,
            opacity:0.7,
            backgroundColor:"#000",
            marginLeft:3,
            padding:12,
            marginTop:20
        },
        headings:{
            fontWeight:"bold",
            color:"#FFF",
            fontSize:15
        },
        priceDrop:{
            fontWeight:"bold",
            color:"#FFF",
            fontSize:12
        }

    })
    export default Best