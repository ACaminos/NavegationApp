import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { color, processColor } from 'react-native-reanimated';
import { colores } from '../theme/appTheme';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const {top} = useSafeAreaInsets()
  return (
    <Tab.Navigator 
      style={{paddingTop: top}}
      sceneContainerStyle={{backgroundColor:'white'}}
      screenOptions={{
        tabBarPressColor:colores.primary,
        tabBarShowIcon:true,
        tabBarIndicatorStyle:{
          backgroundColor:colores.primary
          },
        tabBarStyle:{shadowColor:'transparent', elevation:0,},
        }
        }>
      <Tab.Screen name="ChatScreen" options={{title:'Chat Screen'}} component={ ChatScreen } />
      <Tab.Screen name="ContactsScreen" options={{title:'Contact Screen'}} component={ ContactsScreen } />
      <Tab.Screen name="AlbumsScreen" options={{title:'Album Screen'}} component={ AlbumsScreen } />
    </Tab.Navigator>
  );
}