import {Image, StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import Animated, {SharedValue, useAnimatedStyle} from 'react-native-reanimated';
import React from 'react';
import { RotateTransform, TransformsStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

export interface IArrowIconProps {
  processing: SharedValue<number>;
}

export function ArrowIcon({processing}: IArrowIconProps) {
  const iconStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${processing.value * 180}deg`,
        },
      ],
    } as any;
  });

  return (
    <Animated.View style={[styles.containerIcon, iconStyle]}>
      <Image source={require('../../assets/arrow.png')} style={styles.arrow} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  containerIcon: {},
  arrow: {
    height: normalize(24),
    width: normalize(24),
  },
});
