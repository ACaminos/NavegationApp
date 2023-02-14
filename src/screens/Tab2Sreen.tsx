import React, {useEffect} from 'react'
import { Text, View } from 'react-native'

export const Tab2Sreen = () => {
  useEffect(() => {
    console.log('Tab-Screen 2 Effect')
}, [])

  return (
    <View>
        <Text>Tab2Screen</Text>
    </View>
  )
}
