import React, {useEffect} from 'react'
import { Text, View } from 'react-native'

export const Tab3Sreen = () => {
  useEffect(() => {
    console.log('Tab-Screen 3 Effect')
}, [])

  return (
    <View>
        <Text>Tab3Screen</Text>
    </View>
  )
}
