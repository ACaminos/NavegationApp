import React, {useContext} from 'react'
import {View, Text, Button} from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { styles } from '../theme/appTheme'

export const ContactsScreen = () => {
  const {signIn, authState} = useContext(AuthContext)

 const {isLoggedIn} = authState


  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>ContactsScreen</Text>

        {
          !isLoggedIn ? <Button title='SignIn' onPress={signIn} /> : null
        }

    </View>
  )
}
