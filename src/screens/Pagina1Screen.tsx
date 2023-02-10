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

        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <TouchableOpacity 
            style={{...styles.botonGrande, //los 3 puntos, es desestructurar el objeto y agregarle en la linea de abajo un background-color
            backgroundColor: '#5856D6' }} 
            onPress={() => navigation.navigate('PersonaScreen',{
              id:1,
              nombre:'Pedro'
              })
            }>
            <Text style={styles.botonGrandeTexto}>Pedro</Text>
          </TouchableOpacity>


          <TouchableOpacity 
            style={{...styles.botonGrande, //los 3 puntos, es desestructurar el objeto y agregarle en la linea de abajo un background-color
            backgroundColor: '#FF9427' }} 
            onPress={() => navigation.navigate('PersonaScreen',{
              id:2,
              nombre:'Maria'
              })
            }>
            <Text style={styles.botonGrandeTexto}>Maria</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}
