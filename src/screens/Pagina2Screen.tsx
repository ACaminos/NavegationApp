import React, { useEffect } from 'react'
import {useNavigation} from '@react-navigation/core'
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';

export const Pagina2Screen = () => {
  
  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      title: 'Volver',
      headerBackTitle: 'Atras'
    })
  }, [])
  

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>PaginaScreen 2</Text>

        <Button
          title='Ir a pagina 3'
          onPress={ () => navigator.navigate('Pagina3Screen') }
        />
    </View>
  )
}
