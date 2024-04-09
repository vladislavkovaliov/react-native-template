import React, {useCallback} from 'react';

import {Pressable, StyleSheet, View} from 'react-native';
import normalize from 'react-native-normalize';
import {ArrowIcon} from './Arrow';
import Animated, {
  Extrapolation,
  interpolate,
  measure,
  runOnUI,
  useAnimatedRef,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export interface IAccordionProps {
  title: React.ReactElement;
  content: React.ReactElement;
}

export function Accordion({title, content}: IAccordionProps) {
  const isOpen = useSharedValue(false);

  const processing = useDerivedValue(() => {
    return isOpen.value ? withTiming(1) : withTiming(0);
  });

  const refContainerContent = useAnimatedRef();

  const sharedHeightValue = useSharedValue(0);

  const heightAnimationStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(
        processing.value,
        [0, 1],
        [0, sharedHeightValue.value],
        Extrapolation.CLAMP,
      ),
    };
  });

  const handleTitlePressCallback = useCallback(() => {
    if (sharedHeightValue.value === 0) {
      const runAnimation = runOnUI(() => {
        sharedHeightValue.value = measure(refContainerContent).height;
      });

      runAnimation();
    }

    isOpen.value = !isOpen.value;
  }, [sharedHeightValue, isOpen, refContainerContent]);

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.containerTitle}
        onPress={handleTitlePressCallback}>
        {title}
        <ArrowIcon processing={processing} />
      </Pressable>
      <Animated.View style={heightAnimationStyle}>
        <Animated.View
          ref={refContainerContent}
          style={styles.containerContent}>
          {content}
        </Animated.View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  textSm: {
    fontSize: normalize(12),
  },
  textMd: {
    fontSize: normalize(16),
  },
  textLg: {
    fontSize: normalize(24),
  },
  container: {
    marginHorizontal: normalize(14),
    marginVertical: normalize(14),
    // TODO: need to be set regarding design
    borderColor: 'red',
    borderWidth: 1,
    overflow: 'hidden',
  },
  containerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: normalize(14),
  },
  title: {},
  containerContent: {
    padding: normalize(14),
    position: 'absolute',
    top: 0,
  },
});
