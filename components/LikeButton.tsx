import { FC, useState } from 'react';
import { Pressable } from 'react-native';
import { Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const LikeButton: FC = () => {
  const [pressed, setPressed] = useState(false);

  return (
    <Pressable onPress={() => setPressed(!pressed)}>
      {pressed ? (
        <Text className='text-rose-500'>
          <Ionicons name='heart-sharp' size={40} />
        </Text>
      ) : (
        <Text className='text-white'>
          <Ionicons name='heart-outline' size={40} />
        </Text>
      )}
    </Pressable>
  );
};
