import { StyleSheet } from 'react-native';
import { styled } from 'nativewind';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Text, View } from '../../components/Themed';

const StyledText = styled(Text);

export default function PostDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Post Detail</Text>
      <View>
        <Text>
          id is
          <Text className='font-bold text-pink-400'> `{id}`</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
