import React from 'react';
import { View, StyleSheet, TextInput, Image, Text, TouchableOpacity, ImageBackground, KeyboardAvoidingView, Dimensions } from 'react-native';
import AppScreen from '../components/AppScreen';
import {Formik} from 'formik';
import * as Yup from 'yup';
import * as Font from 'expo-font';


import AppTextInput from '../components/AppTextInput';
import AppColors from '../config/AppColors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppButton from '../components/AppButton';
import AppErrorText from '../components/AppErrorText';
import CategoriesScreen from './FoodScreen';
import DataManager from '../config/DataManager';





const validation = Yup.object().shape(
    {
        email:Yup.string().required().email().label("Email"),
        password:Yup.string().required().min(1).max(10).label("Password"),
    }
);


const validateUser = ({email, password}) => {
    return(
        DataManager.getInstance().users.filter((user) => user.email === email && user.password === password).length >0

        );

};

const getUser = ({email}) => {
    return DataManager.getInstance().users.find((user) => user.email === email);
}




function LoginScreen({navigation, route}) {


    return (
        
        <AppScreen>
           
            <ImageBackground
                source= {require("../assets/animated1.jpg")}
                style= {styles.background}
                blurRadius= {1}
                >

            
            <View style= {styles.WelcomeContainer}>
                <Image source={require('../assets/name.png')}
                style= {styles.images} />
            </View>
            
                <Formik 
                    initialValues={{email:'', password:'',}}    
                    onSubmit = {(values, {resetForm})=> {
                        if (validateUser(values)){
                        resetForm();
                        // createUser(values);
                        DataManager.getInstance().userID = getUser(values).id;
                            
                        navigation.navigate("Home", {
                                screen:"Explore",
                               
                            
                        });
                    }
                    else{
                        resetForm();
                        alert("Invalid");
                    }
                }}
                
                validationSchema= {validation}
                >
                
                {({values, handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
                    <>
                    
            <View style={styles.textBox}>
            <AppTextInput 
                autoCapitalize= "none"
                autoCorrect= {false}
                icon="email" 
                placeholder= "Email Address"
                keyboardType= "email-address"
                value={values.email}
                onBlur = {() => setFieldTouched("email")}
                onChangeText= { handleChange("email")}
            />
            {touched.email && <AppErrorText style={{color:"red"}}>{errors.email}</AppErrorText>}
            <AppTextInput 
                autoCapitalize= "none"
                autoCorrect= {false}
                icon="lock" 
                placeholder= "Password"
                secureTextEntry
                textContentType= "password"
                value={values.password}
                onBlur = {() => setFieldTouched("password")}
                onChangeText= { handleChange("password")}
            />
            {touched.password && <AppErrorText style={{color:"red"}}>{errors.password}</AppErrorText>}
            </View>
            <AppButton 
                title="Login" 
                color='black'
                onPress= {handleSubmit}/>
            
            <View style={styles.newAccount}>
            <Text style={styles.text1}>
            Don't have an account? {' '}
            </Text>
            <TouchableOpacity onPress= { () => navigation.navigate("Sign Up")}>
            <Text style={styles.text2}>
            Sign Up
            </Text>
            </TouchableOpacity>    
            </View>
                    </>
                )}
            </Formik>    

            </ImageBackground>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
        position: 'absolute',
        top: 0,




    },
    container:{
        flex:1,
        backgroundColor:AppColors.primaryColor,


    },
    WelcomeContainer:{
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 40,

    },
    images:{
        marginTop: 80,
        width: 200,
        height: 60,

    },

    textBox:{
        marginTop: 70,
        marginVertical:50,
        padding: 25,

    },
    newAccount:{
        justifyContent: 'center',
        fontSize: 16,
        padding: 10,
        flex:1,
        flexDirection: 'row',


    },
    text1: {
      
        fontSize: 15,
        color:AppColors.white,

      },
      text2: {
      
        fontSize: 15,
        color:AppColors.white,
     
        textDecorationLine: 'underline',
      },
})

export default LoginScreen;