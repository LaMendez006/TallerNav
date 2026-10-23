import { router } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Acerca() {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Biblioteca</Text>
      <Text>Versión 1.0 · Taller de navegación con Expo Router</Text>
      <Button title="Cerrar" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    padding: 24,
  },
  titulo: { fontSize: 24, fontWeight: 'bold' },
});