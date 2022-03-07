import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    Image,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 


const Home = ({navigation}) => {
    return (
        <SafeAreaView style={styles.background}>
            <View>
                <Text style={styles.TextStyle}>DashBoard</Text>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: 'column' }}>
                    <TouchableOpacity style={styles.buttonRedStyle} activeOpacity={0.5}
                    onPress={() => navigation.navigate("NearlyScreen")}
                    > 
                        <Image
                            source={require('../assets/logo/clock.png')}
                            style={styles.buttonImageIconStyle}/>
                          
                        <Text style={styles.buttonTextStyle}>Nearly Expired</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    style={styles.buttonYelowStyle} 
                    activeOpacity={0.5}
                    onPress={() => navigation.navigate("LowStockScreen")}
                    >
                        <Image
                            source={require('../assets/logo/out-of-stock.png')}
                            style={styles.buttonImageIconStyle}/>
               
                        <Text style={styles.buttonTextStyle}>Low Stock</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'column' }}>
                    <TouchableOpacity 
                    style={styles.buttonNomalStyle} 
                    activeOpacity={0.5}
                    onPress={() => navigation.navigate("OrderScreen")}
                    >
                        <Image
                            source={require('../assets/logo/wheelbarrow.png')}
                            style={styles.buttonImageIconStyle}/>
                  
                        <Text style={styles.buttonTextStyle}>Order</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    style={styles.buttonNomalStyle} 
                    activeOpacity={0.5}
                    onPress={() => navigation.navigate("StockScreen")}
                    >
                        <Image
                            source={require('../assets/logo/packages.png')}
                            style={styles.buttonImageIconStyle}/>
                            
                        <Text style={styles.buttonTextStyle}>Stock</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: 300
    },
    buttonNomalStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#000',
        height: 100,
        width: 150,
        borderRadius: 15,
        margin: 5,
    },
    buttonRedStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#F72349',
        height: 100,
        width: 150,
        borderRadius: 15,
        margin: 5,
    },
    buttonYelowStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#FFDB3F',
        height: 100,
        width: 150,
        borderRadius: 15,
        margin: 5,
    },
    buttonTextStyle: {
        marginBottom: 4,
        marginLeft: 10,
        color: '#000',
    },
    buttonIconSeparatorStyle: {
        backgroundColor: '#fff',
        width: 1,
        height: 70,
    },
    TextStyle: {
        marginTop: 20,
        marginBottom: 20,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FDFEFE',
        textAlign: 'center',
    },
    buttonImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 45,
        width: 45,
        resizeMode: 'stretch',
    },
    background: {
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        backgroundColor: '#6495ED',
        height: 370,
    },
});