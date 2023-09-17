import { styled } from 'nativewind';
import { Text, View, Button, Pressable } from 'react-native';

const StyledButton = styled(Button);

export default function SettingScreen() {
  return (
    <View className='flex items-center justify-center h-full gap-y-8'>
      <Text className='text-xl font-bold dark:text-white'>Setting Page</Text>
      <StyledButton
        title='Button'
        className='bg-slate-200 rounded block mt-8'
        onPress={() => console.log('Pressed Button')}
      />
      <Pressable
        className='bg-teal-200 py-3 px-4 rounded-lg'
        onPress={() => console.log('Pressed Pressable')}
      >
        <Text className='text-red-500 font-bold'>Pressable</Text>
      </Pressable>
    </View>
  );
}
