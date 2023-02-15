import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Sreen } from '../screens/Tab1Sreen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIos/> : <TabsAndroid/>
}


const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{backgroundColor:colores.primary}} >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{title:'Tab 1', tabBarIcon:(props)=> <Text style={{color:colores.primary}}>Tab 1</Text>}} component={Tab1Sreen} />
      <BottomTabAndroid.Screen name="TopTabNavigator" options={{title:'TopTabNavigator', tabBarIcon:(props)=> <Text style={{color:colores.primary}}>Tab 2</Text>}} component={TopTabNavigator} />
      <BottomTabAndroid.Screen name="StackNavigator" options={{title:'Stack', tabBarIcon:(props)=> <Text style={{color:colores.primary}}>Stack</Text>}} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}


const BottomTabIos = createBottomTabNavigator();

export const TabsIos = () => {
  return (
    // <Tab.Navigator screenOptions={{tabBarActiveTintColor:'green',tabBarStyle:{borderTopColor:'green'}}}>
    <BottomTabIos.Navigator
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
                }}

                >
      <BottomTabIos.Screen name="Tab1Screen" options={{title:'Tab 1', tabBarIcon:(props)=> <Text style={{color:colores.primary}}>Tab 1</Text>}} component={Tab1Sreen} />
      <BottomTabIos.Screen name="TopTabNavigator" options={{title:'TopTabNavigator', tabBarIcon:(props)=> <Text style={{color:colores.primary}}>Tab 2</Text>}} component={TopTabNavigator} />
      <BottomTabIos.Screen name="StackNavigator" options={{title:'Tab 1', tabBarIcon:(props)=> <Text style={{color:colores.primary}}>Stack</Text>}} component={StackNavigator} />

      {/* <BottomTabIos.Screen name="Tab1Screen" options={{title:'Tab 1', tabBarIcon:(props)=> <Text style={{color:colores.primary}}>T1</Text>}} component={Tab1Sreen} /> */}
      {/* <BottomTabIos.Screen name="Tab2Screen" options={{title:'Tab 2'}} component={Tab2Sreen} /> */}
      {/* <BottomTabIos.Screen name="StackNavigator" options={{title:'Tab 3'}} component={StackNavigator} /> */}

    </BottomTabIos.Navigator>
  );
}