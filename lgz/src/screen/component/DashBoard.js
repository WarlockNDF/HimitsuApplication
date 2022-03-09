import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'


const DashBoard = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>DashBoard</Text>
            <Button title ='TEST' onPress={()=>{navigation.navigate('orders')}} />
            <Button title ='TEST2' onPress={()=>{navigation.navigate('checkExpire')}} />
            <Button title ='TEST3' onPress={()=>{navigation.navigate('lowStock')}} />
            <Button title ='TEST4' onPress={()=>{navigation.navigate('checkStock')}} />

        </View>
    )
}

export default DashBoard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
})