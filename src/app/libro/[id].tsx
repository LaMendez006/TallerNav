import { Stack, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { LIBROS } from '@/data/libros';

export default function DetalleLibro() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const libro = LIBROS.find((l) => l.id === id);

  if (!libro) {
    return (
      <View style={styles.contenedor}>
        <Stack.Screen options={{ title: 'Detalle' }} />
        <Text style={styles.titulo}>Libro no encontrado</Text>
      </View>
    );
  }

  return (
    <View style={styles.contenedor}>
      <Stack.Screen options={{ title: libro.titulo }} />
      <Text style={styles.titulo}>{libro.titulo}</Text>
      <Text style={styles.dato}>Autor: {libro.autor}</Text>
      <Text style={styles.dato}>Año: {libro.anio}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, padding: 24, gap: 12 },
  titulo: { fontSize: 22, fontWeight: 'bold' },
  dato: { fontSize: 16 },
});