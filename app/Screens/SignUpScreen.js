import React, {useState} from 'react';
import { View, StyleSheet, TextInput, Image, Text, TouchableOpacity, ImageBackground, Dimensions, KeyboardAvoidingView } from 'react-native';

import AppScreen from '../components/AppScreen';
import {Formik} from 'formik';
import * as Yup from 'yup';


import AppTextInput from '../components/AppTextInput';
import AppColors from '../config/AppColors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import DataManager from '../config/DataManager';
import AppErrorText from '../components/AppErrorText';


const validation = Yup.object().shape(
    {
        fullName:Yup.string().required().min(2, 'Too Short!').max(50, 'Too Long!').label("Full Name"),
        userEmail:Yup.string().required().email().label("Email"),
        userPassword:Yup.string().required().min(6).max(10).label("Password"),
        
    }
);


function SignUpScreen({props, navigation}) {

    return (
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
                initialValues={{fullName: '', userEmail:'', userPassword:'', 
                //userPasswordConfirm:'',
            }}
                onSubmit = {(values, {resetForm})=> {
                
                    console.log(values);
                    let dataHolder = DataManager.getInstance();
                    var num = dataHolder.getSizeUser();
                    let user = "user"+(num.toString());
                    var val = 10000;
                    const userID = dataHolder.getSizeUser();

                    const newUser = {
                                idNo: userID,
                                userid: user,
                                name: values.fullName,
                                email: values.userEmail,
                                password: values.userPassword,
                                accountbal:val,
                                image: require('../assets/users/Laccount2.jpg'),
                            };
                            dataHolder.addUser(newUser);
                            navigation.navigate("Login");
                            resetForm();
                    
                }}
                
                validationSchema={validation}
                > 
                {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
                    <>
            <View style={styles.textBox}>
            <AppTextInput 
                autoCapitalize= "none"
                autoCorrect= {false}
                icon="human" 
                placeholder= "Full Name"
                keyboardType= "default"
                onBlur = {() => setFieldTouched("fullName")}
                onChangeText= {handleChange("fullName")}
            />
            {touched.fullName  && <AppErrorText>{errors.fullName}</AppErrorText>}

            <AppTextInput 
                autoCapitalize= "none"
                autoCorrect= {false}
                icon="email" 
                placeholder= "Email Address"
                keyboardType= "email-address"
                onBlur = {() => setFieldTouched("userEmail")}
                onChangeText= { handleChange("userEmail")}
            />
            {touched.userEmail  && <AppErrorText>{errors.userEmail}</AppErrorText>}            

            <AppTextInput 
                autoCapitalize= "none"
                autoCorrect= {false}
                icon="lock" 
                placeholder= "Password"
                secureTextEntry
                textContentType= "password"
                onBlur = {() => setFieldTouched("userPassword")}
                onChangeText= { handleChange("userPassword")}
            />
            {touched.userPassword  && <AppErrorText>{errors.userPassword}</AppErrorText>}


         

            
            </View>

            <AppButton 
                title="Sign Up" 
                color='black'
                onPress= {handleSubmit}/>

                        </>
                )}
                
        </Formik>

            <View style={styles.userAccount}>
            <Text style={styles.text1}>
            Have an account? {' '}
            </Text>
            <TouchableOpacity onPress= { () => navigation.navigate("Login")}>
            <Text style={styles.text2}>
                Log In 
            </Text>
            </TouchableOpacity>    
            </View>    
        </ImageBackground>

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
        marginTop: 30,
        width: 200,
        height: 60,


    },

    textBox:{
        marginTop: 70,
        marginVertical:50,
        padding: 25,
        marginBottom: 15,

    },

    userAccount:{
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

export default SignUpScreen;