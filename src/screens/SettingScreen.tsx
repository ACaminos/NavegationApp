import React, { useContext } from 'react'
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AuthContext } from '../context/AuthContext';
import { colores, styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

export const SettingScreen = () => {
  const insets = useSafeAreaInsets();

  // const context = useContext(AuthContext)

  const {authState} = useContext(AuthContext)


  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: insets.top + 20
    }}>
        <Text style={styles.title}>Setting Screen</Text>
        <Text>{JSON.stringify(authState,null, 4)}</Text>

        {
          authState.favoriteIcon && (
            <Icon
              name={authState.favoriteIcon}
              size={150}
              color={colores.primary}
             />
          )
        }

    </View>
  )
}
