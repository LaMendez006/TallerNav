import { router } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Perfil() {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Perfil</Text>
      <Button title="Acerca de" onPress={() => router.push('/acerca')} />
      <Button title="Cerrar sesión" onPress={() => router.replace('/login')} />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  titulo: { fontSize: 24, fontWeight: 'bold' },
});