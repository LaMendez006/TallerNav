import { Link } from 'expo-router';
import { FlatList, Pressable, StyleSheet, Text } from 'react-native';

import { LIBROS } from '@/data/libros';

export default function Inicio() {
  return (
    <FlatList
      data={LIBROS}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.lista}
      renderItem={({ item }) => (
        <Link href={`/libro/${item.id}`} asChild>
          <Pressable style={styles.fila}>
            <Text style={styles.titulo}>{item.titulo}</Text>
            <Text style={styles.autor}>{item.autor}</Text>
          </Pressable>
        </Link>
      )}
    />
  );
}

const styles = StyleSheet.create({
  lista: { padding: 16, gap: 12 },
  fila: {
    backgroundColor: '#f2f2f2',
    padding: 16,
    borderRadius: 8,
  },
  titulo: { fontSize: 16, fontWeight: 'bold' },
  autor: { fontSize: 14, color: '#555' },
});