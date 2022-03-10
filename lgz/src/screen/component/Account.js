import { Pressable, StyleSheet,  View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Text,Button, Center } from 'native-base'
import { SafeAreaView } from "react-native-safe-area-context";
import http from "../../service/http";

const Account = ({navigation}) => {
    const [UserData, setUserData] = useState([]);
    const getData = async () => {
        try {
          const { status, data } = await http.get('user')
          if (status !== 200) throw "No data user found"
          console.log(data.data);
          setUserData(data.data);
        } catch (err) {
          alert(err.message)
          console.error(err.message);
        }
      }
    getData();
     
    return (
        
        <SafeAreaView >
            <View style={{backgroundColor:"fff",margin: 10,borderRadius:10, justifyContent: "center"}}>
                <Text style={{fontSize:24, marginTop:30}}>Account Manager</Text>
            </View>
            <View style={styles.container}>
            <Text style={styles.text}>
            {'\t Store Name : '}
            {'\n'}
            {`\t ${UserData.userDetail.storeName}`}
            </Text>
            <Text></Text>
            <View style={styles.line} />
            <Text></Text>

            <Text style={styles.text}>
            {'\t Name : '}
            {'\n'}
            {`\t ${UserData.userDetail.firstname} ${UserData.userDetail.lastname}`}
            </Text>
            <Text></Text>
            <View style={styles.line} />
            <Text></Text>
            <Text style={styles.text}>
            {'\t Role : '}
            {'\n'}
            {'\t Store Manager '}
            </Text>
            <View style={styles.line} />
            <Button style={{marginTop:30}} onPress={() => {
                    navigation.navigate('LoginScreen');
                }} >
                    <Text > test log out</Text>
            </Button>
            </View>
        </SafeAreaView>  
    )
}

export default Account

const styles = StyleSheet.create({
    background: {
      backgroundColor: '#6495ED',
      borderRadius: 1,
      borderRadius: 5,
      height: 370,
    },
    heading: {
      fontSize: 35,
      textAlign: 'center',
      alignItems: 'center',
      backgroundColor: '#6495ED',
      borderRadius: 1,
      fontWeight: 'bold',
      margin: 10,
      color: '#FDFEFE',
    },
    container: {
      height: 500,
      marginTop: 10,
      marginLeft: 20,
      padding: 10,
      marginRight: 20,
      backgroundColor: '#FDFEFE',
      borderRadius: 10,
    },
    text: {
      color: '#000',
      fontSize: 20,
    },
    line: {
      borderBottomColor: 'black',
      borderBottomWidth: 1,
    },
  
  });

