import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Search from './Search';
import Account from './Account';
import Status from './Status';
import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Nerly from './Nerly';
import Stockitems from './Stockitems';
import App from "../App"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const DashBoardRouter = ({navigate}) => {

  return(
    <Stack.Navigator>
      <Stack.Screen options={{ 
        headerShown: false,
        }} 
        name="HomeScreen" 
        component={Home}/>
      <Stack.Screen options={{title:"Nearly Expire"}} name='NearlyScreen' component={Nerly}/>
      <Stack.Screen options={{title:"Orders"}} name='OrderScreen' component={Stockitems}/>
      <Stack.Screen options={{title:"Low Stock"}} name='LowStockScreen' component={Stockitems}/>
      <Stack.Screen options={{title:"Stock"}} name='StockScreen' component={Stockitems}/>
      <Stack.Screen name="BackToLogin" component={App}/>
    </Stack.Navigator>
  )

}


export default function DashBoard ()  {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
      initialRouteName='Home'
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name == 'Home') {
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
          tabBarLabelStyle:{
            fontSize: 14 
          },
          tabBarActiveTintColor: "#0162A8"
        })}
      >
        <Tab.Screen
          name="Home"
          component={DashBoardRouter}
        />
        <Tab.Screen
          name="Seach"
          component={Search}
        />
        <Tab.Screen
          name="Status"
          component={Status}

        />
        <Tab.Screen
          name="Account"
          component={Account}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
} 

