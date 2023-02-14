import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Sreen } from '../screens/Tab1Sreen';
import { Tab2Sreen } from '../screens/Tab2Sreen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    // <Tab.Navigator screenOptions={{tabBarActiveTintColor:'green',tabBarStyle:{borderTopColor:'green'}}}>
    <Tab.Navigator
        sceneContainerStyle={{backgroundColor:'white'}}
        screenOptions={{
            tabBarActiveTintColor:colores.primary,
            tabBarStyle:{
                borderTopColor:colores.primary,
                borderTopWidth:0,
                elevation:0},
            tabBarLabelStyle:{
                fontSize:15
            }
                }}>
      <Tab.Screen name="Tab1Screen" options={{title:'Tab 1', tabBarIcon:(props)=> <Text style={{color:colores.primary}}>T1</Text>}} component={Tab1Sreen} />
      <Tab.Screen name="Tab2Screen" options={{title:'Tab 2'}} component={Tab2Sreen} />
      <Tab.Screen name="StackNavigator" options={{title:'Tab 3'}} component={StackNavigator} />

    </Tab.Navigator>
  );
}