import { Button, StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
import { useRouter } from 'expo-router';

export default function PostsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Post List</Text>
      <View>
        <Button title='Go to Post' onPress={() => router.push('/posts/123')} />
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
