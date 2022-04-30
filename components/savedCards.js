import React from 'react';
import { VStack, Box, Divider } from 'native-base';
import { Text } from 'react-native';

export default function SavedCards (information) {
  return (
    <Box border="1" borderRadius="md" bg="light.50">
      <VStack space="4" divider={<Divider />}>
        <Box px="4" pt="4">
          <Text>{information.About}</Text>
        </Box>
        <Box px="4">
          NativeBase is a free and open source framework that enable developers
          to build high-quality mobile apps using React Native iOS and Android
          apps with a fusion of ES6.
        </Box>
        <Box px="4" pb="4">
          GeekyAnts
        </Box>
      </VStack>
    </Box>
  );
}