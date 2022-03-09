import React, { useState, useRef } from 'react'
import {
    StyleSheet,
    Image,
    Keyboard,
    TouchableWithoutFeedback,
    SafeAreaView,
    KeyboardAvoidingView
} from "react-native";
import { VStack, FormControl, Input, Button } from "native-base";
import AsyncStorage from '@react-native-async-storage/async-storage';
import http from "../service/http"
import { userContext } from '../context/UserProvider';

const Login = ({ navigation }) => {

    const [username, setUsername] = useState("");
    const [password, SetPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const userStore = React.useContext(userContext);

    const usernameInputRef = useRef()
    const passwordInputRef = useRef()

    const handleSignIn = async () => {
        if(!username || !password) {
            alert("กรุณากรอกข้อมูลให้ครบด้วยครับ")
            return
        }
        setLoading(!loading);
        await http.post('user/auth', { username: username, password: password }).then(async (res) => {
            console.log(res.data.accessToken)
            if (res.status != 201) throw "UnAuthorize Exception"
            userStore.updateProfile(res.data)
            await AsyncStorage.setItem("@Token", res.data.accessToken)
            navigation.navigate("Landing");
            setLoading(false);
        }).catch(err => {
            console.error(err)
            setLoading(false);
            alert("fail to authen")
        })
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView style={styles.container}>
                    <Image
                        style={styles.logoImage}
                        source={require("../../assets/logo/himitsu_logo.png")}
                    />
                    <VStack space={3} mt="5" p={15}>
                        <FormControl>
                            <FormControl.Label>Username</FormControl.Label>
                            <Input ref={usernameInputRef} onSubmitEditing={() => { passwordInputRef.current.focus() }} onChangeText={value => setUsername(value)} />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Password</FormControl.Label>
                            <Input ref={passwordInputRef} onSubmitEditing={() => handleSignIn()} onChangeText={value => SetPassword(value)} type="password" />
                        </FormControl>
                        <Button isLoading={loading} _loading={{
                            bg: "primary.300",
                            _text: {
                                color: "black"
                            }
                        }} isLoadingText='กำลังเข้าสู่ระบบ' mt="2" onPress={() => handleSignIn()}>
                            Sign in
                        </Button>
                    </VStack>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );

}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        textAlign: "left",
        marginBottom: 5,
        color: "black",
    },
    pressableText: {
        fontSize: 20,
        textAlign: "center",
        marginBottom: 5,
        color: "#FFFF",
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 7,
        paddingRight: 7,
        marginTop: 10
    },
    inputStyle: {
        borderColor: "#4B84F1",
        borderWidth: 1,
        borderRadius: 8,
        padding: 15,
        marginBottom: 10,
        marginTop: 10
    },
    logoImage: {
        resizeMode: "center",
        width: 380,
        height: 200,
        marginLeft: 10,
    },
    wrapperCustom: {
        borderRadius: 8,
        marginTop: 10,
    },
    container: {
        flex: 1,
        justifyContent: "center",
    },
});