import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import DashBoard from './component/DashBoard';
import Search from './component/Search';
import Status from './component/Status';
import Account from './component/Account';

const stackNav = createStackNavigator();
const bottomTabNav = createBottomTabNavigator();

const Landing = () => {
    return (
        <bottomTabNav.Navigator initialRouteName='Home'
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, size, color }) => {
                    let iconName;
                    if (route.name == 'dashboard') {
                        iconName = 'home';
                        size = focused ? 25 : 20;
                    } else if (route.name == 'Seach') {
                        iconName = 'search';
                        size = focused ? 25 : 20;
                    }
                    else if (route.name == 'Status') {
                        iconName = 'book';
                        size = focused ? 25 : 20;
                    }
                    else if (route.name == 'Account') {
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
                name='dashboard'
                component={DashBoard}

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