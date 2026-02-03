import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const App = () => {
  return (
    <View>
      <Text>Lalit chaudhary </Text>
      <Image
        source={{
          uri: 'https://ik.imagekit.io/gpo2lkfh1/period.jpg?updatedAt=1767977563706',
        }}
        style={{ width: 100, height: 100 }}
      />

      <Button title="Click Me" onPress={() => alert('Button Pressed!')} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
