import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types';
import React from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any,any>{}

export const Pagina1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>PaginaScreen 1</Text>
        <Button
          title="Ir pagina 2"
          onPress={ () =>navigation.navigate('Pagina2Screen')}
        />

        <Text style={styles.title}>Navegar con Argumentos</Text>

        {/* <Button
          title='Ir a Persona'
          onPress={ () =>navigation.navigate('PersonaScreen')}
         /> */}

        <TouchableOpacity onPress={() => navigation.navigate('PersonaScreen',{
          id:1,
          nombre:'Pedro'
        })}>
          <Text style={styles.title}>Click --> Pedro</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => navigation.navigate('PersonaScreen',{
          id:2,
          nombre:'Maria'
        })}>
          <Text style={styles.title}>Click --> Maria</Text>
        </TouchableOpacity>
    </View>
  )
}
