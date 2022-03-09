import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import DashBoard from './component/DashBoard';
import Search from './component/Search';
import Status from './component/Status';
import Account from './component/Account';
import NearlyExpire from './component/NearlyExpire';
import Order from './component/Order';
import LowStockItems from './component/LowStockItems';
import StockItems from './component/StockItems';

const stackNav = createStackNavigator();
const bottomTabNav = createBottomTabNavigator();

const DashboardRouter = ({ navigation }) => {
    return (
        <stackNav.Navigator
            initialRouteName='dashboard'
        >
            <stackNav.Screen options={{
                headerShown: false
            }}
                name="dashboard"
                component={DashBoard}
            />
            <stackNav.Screen
                options={{ title: "ของใกล้หมดอายุ" }}
                name="checkExpire"
                component={NearlyExpire}
            />
            <stackNav.Screen
                options={{ title: "สั่งซื้อ" }}
                name="orders"
                component={Order}
            />
            <stackNav.Screen
                options={{ title: "ตรวจสอบ Stock เหลือน้อย" }}
                name="lowStock"
                component={LowStockItems}
            />
            <stackNav.Screen
                options={{ title: "ตรวจสอบ Stock" }}
                name="checkStock"
                component={StockItems}
            />
        </stackNav.Navigator>
    )
}

const Landing = () => {
    return (
        <bottomTabNav.Navigator initialRouteName='home'
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, size, color }) => {
                    let iconName;
                    if (route.name == 'home') {
                        iconName = 'home';
                        size = focused ? 25 : 20;
                    } else if (route.name == 'search') {
                        iconName = 'search';
                        size = focused ? 25 : 20;
                    }
                    else if (route.name == 'status') {
                        iconName = 'book';
                        size = focused ? 25 : 20;
                    }
                    else if (route.name == 'account') {
                        iconName = 'user';
                        size = focused ? 25 : 20;
                    }
                    return (
                        <FontAwesome5
                            name={iconName}
                            size={size}
                            color={color}
                        />
                    )
                },
                tabBarLabelStyle: {
                    fontSize: 14
                },
                tabBarActiveTintColor: "#0162A8"
            })}
        >
            <bottomTabNav.Screen
                name='home'
                component={DashboardRouter}
            />
            <bottomTabNav.Screen
                name='search'
                component={Search}
            />
            <bottomTabNav.Screen
                name='status'
                component={Status}
            />
            <bottomTabNav.Screen
                name='account'
                component={Account}
            />
        </bottomTabNav.Navigator>
    )
}

export default Landing

const styles = StyleSheet.create({})