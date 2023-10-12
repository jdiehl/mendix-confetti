import { ReactElement, createElement, useRef, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'

import Confetti from 'react-native-confetti'

import { ConfettiCannonProps } from '../typings/ConfettiCannonProps'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

const defaultColors = ["rgb(242.2, 102, 68.8)","rgb(255, 198.9, 91.8)","rgb(122.4, 198.9, 163.2)","rgb(76.5, 193.8, 216.7)","rgb(147.9, 99.4, 140.2)"]

export function ConfettiCannon({ active, confettiCount, timeout, untilStopped, duration, colors, size, bsize, content }: ConfettiCannonProps<{}>): ReactElement {
  const ref = useRef<any>(null)

  useEffect(() => {
    if (!ref.current || !active.value) return
    ref.current.startConfetti()
    return () => ref.current.stopConfetti()
  }, [ref.current, active])

  return <View style={styles.container}>
    <Confetti
      ref={ref} 
      confettiCount={confettiCount}
      timeout={timeout}
      untilStopped={untilStopped}
      duration={duration}
      colors={colors ? JSON.parse(colors) : defaultColors}
      size={size}
      bsize={bsize}
    />
    {content}
  </View>
}

