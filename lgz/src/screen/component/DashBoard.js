import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DashBoard = () => {
    return (
        <View style={styles.container}>
            <Text>DashBoard</Text>
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
    }
})