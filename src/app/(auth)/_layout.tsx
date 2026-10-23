import { Slot } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function AuthLayout() {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Biblioteca</Text>
      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#1e3a5f',
    paddingTop: 80,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 40,
  },
});