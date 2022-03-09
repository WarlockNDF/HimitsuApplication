import React, { useState } from 'react'
import {
    StyleSheet,
    Image,
    Keyboard,
    TouchableWithoutFeedback,
    SafeAreaView,
} from "react-native";
import { VStack, FormControl, Input, Button} from "native-base";
import AsyncStorage from '@react-native-async-storage/async-storage';
import http from "../service/http"
import { userContext } from '../context/UserProvider';

const Login = ({ navigation }) => {

    const [username, setUsername] = useState("");
    const [password, SetPassword] = useState("");
    const userStore = React.useContext(userContext);

    const handleSignIn = async () => {
        await http.post('user/auth', { username: username, password: password }).then(async (res) => {
            console.log(res.data.accessToken)
            if (res.status != 201) throw "UnAuthorize Exception"
            userStore.updateProfile(res.data)
            alert("success")
            await AsyncStorage.setItem("@Token", res.data.accessToken)
            //navigation.navigate("MainScreen");
        }).catch(err => {
            console.error(err)
            alert("fail to authen")
        })
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.container}>
                <Image
                    style={styles.logoImage}
                    source={require("../../assets/logo/himitsu_logo.png")}
                />
                <VStack space={3} mt="5">
                    <FormControl>
                        <FormControl.Label>Username</FormControl.Label>
                        <Input onChangeText={value => setUsername(value)} />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input onChangeText={value => SetPassword(value)} type="password" />
                    </FormControl>
                    <Button mt="2" onPress={() => handleSignIn()}>
                        Sign in
                    </Button>
                </VStack>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );

}

export default Login

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        justifyContent: "center"
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