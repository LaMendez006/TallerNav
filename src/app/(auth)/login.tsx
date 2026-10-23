import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Login() {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.texto}>Inicia sesión para continuar</Text>
      <Pressable style={styles.boton} onPress={() => router.replace('/')}>
        <Text style={styles.textoBoton}>Entrar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: { alignItems: 'center', gap: 20 },
  texto: { color: '#ffffff', fontSize: 16 },
  boton: {
    backgroundColor: '#f4b942',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  textoBoton: { fontWeight: 'bold', color: '#1e3a5f' },
});