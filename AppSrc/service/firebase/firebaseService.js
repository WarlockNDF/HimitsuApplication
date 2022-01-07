import firebase from "./env/firebase";
import { Alert } from "react-native";

export const signInService = async function(email,password){
    try{
        await firebase.auth().signInWithEmailAndPassword(email,password);
    }catch(err){
        console.error(err.message);
        Alert.alert("Authentication Failed From FireBase Server")
    }
}

export const registerService = async function(email,password,Fname,Lname,enterpriseName){
    try{
        await firebase.auth().createUserWithEmailAndPassword(email,password);
        const currentUser = firebase.auth().currentUser;
        const db = firebase.firestore();
    }catch(err){
        console.error(err.message)
        Alert.alert("Register User Failed FireBase Server")
    }
}


export const forgetPasswordService = async function(email){
    try{
        let isExist = await firebase.auth().fetchSignInMethodsForEmail(email);
        console.log(isExist);
        if(isExist.length > 0){
            firebase.auth().sendPasswordResetEmail(email);
            Alert.alert("Reset Password has been sent to "+email);
        }else{
            Alert.alert("User Doesn't Exist");
        }
    }catch(err){
        console.error(err.message);
        Alert.alert("Reset Password FireBase Failed")
    }
}

export const onAuthStateChanged= (onAuthStateChanged) => firebase.auth().onAuthStateChanged(onAuthStateChanged);