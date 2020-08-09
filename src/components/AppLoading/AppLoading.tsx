/**
 * @flow
 */

import React, { memo, useEffect, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { BackHandler, View, ActivityIndicator } from 'react-native'

import selectors from './appLoading.selectors'

function AppLoading() {
  const isLoading = useSelector(selectors.getIsLoading)
  const disableBackButton = useCallback(() => true, [])

  useEffect(() => {
    if (isLoading) {
      BackHandler.addEventListener('hardwareBackPress', disableBackButton)
    } else {
      BackHandler.removeEventListener('hardwareBackPress', disableBackButton)
    }

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', disableBackButton)
    }
  }, [isLoading])

  if (!isLoading) {
    return null
  }

  return (
    <View
      style={{ flex: 1 }}
    >
      <ActivityIndicator size={100} color='white' style={{ alignItems: 'center', flex: 1, backgroundColor: '#rgba(0,0,0,0.2)' }} />
    </View>
  )
}

export default memo<{}>(AppLoading)
