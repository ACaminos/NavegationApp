import React, {useContext} from 'react'
import {View, Button} from 'react-native'
import { Text } from 'react-native-paper'
import { AuthContext } from '../context/AuthContext'
import { styles } from '../theme/appTheme'

export const AlbumsScreen = () => {

  const {logOut, authState: {isLoggedIn} } = useContext(AuthContext)    //Es otra alternativa para desestructurar.

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>AlbumScreen</Text>

        {   isLoggedIn ? <Button title='Log Out' onPress={logOut} /> : null   }

        {/* { isLoggedIn && (<Button title='Log Out' onPress={logOut} />) } -------> Esta es otra alternativa a la linea de arriba */}

    </View>
  )
}
