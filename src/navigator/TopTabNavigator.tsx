import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
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
      <Tab.Screen 
        name="ChatScreen"
        options={{
          title:'Chat Screen',
          tabBarIcon:()=>(<Icon name="chatbubble-ellipses" size={20} color={colores.primary} />)
          }}
        component={ ChatScreen } />

      <Tab.Screen
        name="ContactsScreen"
        options={{
          title:'Contact Screen',
          tabBarIcon:()=>(<Icon name="people" size={20} color={colores.primary} />)
          }}
        component={ ContactsScreen } />

      <Tab.Screen
        name="AlbumsScreen"
        options={{
          title:'Album Screen',
          tabBarIcon:()=>(<Icon name="book" size={20} color={colores.primary} />)
          }}
        component={ AlbumsScreen } />
    </Tab.Navigator>
  );
}