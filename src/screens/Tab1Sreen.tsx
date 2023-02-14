import React, {useEffect} from 'react'
import { Text, View } from 'react-native'

export const Tab1Sreen = () => {
    useEffect(() => {
        console.log('Tab-Screen Effect')
    }, [])

  return (
    <View>
        <Text>Tab1Screen</Text>
    </View>
  )
}
