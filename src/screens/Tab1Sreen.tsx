import React, {useEffect} from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import Icon from 'react-native-vector-icons/Ionicons';

export const Tab1Sreen = () => {
    useEffect(() => {
        console.log('Tab-Screen Effect')
    }, [])

  return (
    <View style={ styles.globalMargin }>
        <Text style={ styles.title }>Iconos</Text>

        <Text>
          <Icon name="airplane-outline" size={40} color="#900" />;
        </Text>

    </View>
  )
}
