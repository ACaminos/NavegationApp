import Icon from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingScreen } from '../screens/SettingScreen';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from './Tabs';
import {colores} from '../theme/appTheme'

const Drawer = createDrawerNavigator();

const {width} = useWindowDimensions();

export const MenuLateral = () => {

  return (
    <Drawer.Navigator drawerContent={ (props) => <MenuInterno {...props}/>}>
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingScreen" component={SettingScreen} />
    </Drawer.Navigator>
  )
}

const MenuInterno = ({navigation} : DrawerContentComponentProps ) => {
  return(
    <DrawerContentScrollView>
      {/* Parte del avatar */}
      <View style={styles.avatarContainer}>
        <Image source={{
          uri:'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'
        }}
        style={styles.avatar}
        />
      </View>

      {/* Opciones de menu */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={{...styles.menuBoton, flexDirection:'row'}}
          onPress={ () => navigation.navigate('Tabs')}>
          <Icon name="apps-outline" size={20} color={colores.primary}></Icon>
          <Text style={styles.menuTexto}> Navegación</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={{...styles.menuBoton, flexDirection:'row'}}>
        <Icon name="settings-outline" size={20} color={colores.primary}></Icon>
          <Text
            style={styles.menuTexto}
            onPress={ () => navigation.navigate('SettingScreen')
            }
            > Ajustes</Text>
        </TouchableOpacity>

      </View>

    </DrawerContentScrollView>
  )
}