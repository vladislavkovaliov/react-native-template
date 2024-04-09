/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View, Text} from 'react-native';

import {Accordion} from './src/components';

function FakeTitleSmall() {
  return (
    <View>
      <Text>Small</Text>
    </View>
  );
}

function FakeTitleMedium() {
  return (
    <View>
      <Text>Medium</Text>
      <Text>Medium</Text>
    </View>
  );
}

function FakeTitleLarge() {
  return (
    <View>
      <Text>Large</Text>
      <Text>Large</Text>
      <Text>Large</Text>
    </View>
  );
}

function FakeContent() {
  return (
    <View>
      <Text>qweqweqwe</Text>
      <Text>qweqweqwe</Text>
      <Text>qweqweqwe</Text>
      <Text>qweqweqwe</Text>
      <Text>qweqweqwe</Text>
      <Text>qweqweqwe</Text>
      <Text>qweqweqwe</Text>
      <Text>qweqweqwe</Text>
      <Text>qweqweqwe</Text>
      <Text>qweqweqwe</Text>
      <Text>qweqweqwe</Text>
      <Text>qweqweqwe</Text>
      <Text>qweqweqwe</Text>
      <Text>qweqweqwe</Text>
    </View>
  );
}

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Accordion title={<FakeTitleSmall />} content={<FakeContent />} />
          <Accordion title={<FakeTitleMedium />} content={<FakeContent />} />
          <Accordion title={<FakeTitleLarge />} content={<FakeContent />} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
