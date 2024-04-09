## Accordion

| PropName | Type | Description |
| ------ | ------ | ------ |
| title | React.ReactElement | Title content of accordion |
| content | React.ReactElement | Content of accordion |

`container` of <Accordion /> is responsible of styling.

```jsx

<SafeAreaView>
  <ScrollView contentInsetAdjustmentBehavior="automatic">
    <View style={styles.container}>
      <Accordion title={<FakeTitleSmall />} content={<FakeContent />} />
      <Accordion title={<FakeTitleMedium />} content={<FakeContent />} />
      <Accordion title={<FakeTitleLarge />} content={<FakeContent />} />
    </View>
  </ScrollView>
</SafeAreaView>

```
