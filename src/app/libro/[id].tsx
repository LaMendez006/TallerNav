import { Stack, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text } from 'react-native';

import { LIBROS } from '@/data/libros';

export default function DetalleLibro() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const libro = LIBROS.find((l) => l.id === id);

  if (!libro) {
    return (
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.contenido}
      >
        <Stack.Screen options={{ title: 'Detalle' }} />
        <Text style={styles.titulo}>Libro no encontrado</Text>
      </ScrollView>
    );
  }

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.contenido}
    >
      <Stack.Screen options={{ title: libro.titulo }} />
      <Text style={styles.titulo}>{libro.titulo}</Text>
      <Text style={styles.dato}>Autor: {libro.autor}</Text>
      <Text style={styles.dato}>Año: {libro.anio}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenido: { padding: 24, gap: 12 },
  titulo: { fontSize: 22, fontWeight: 'bold' },
  dato: { fontSize: 16 },
});