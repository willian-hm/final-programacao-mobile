import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao ParcelaJá</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Simulacao')}
      >
        <Text style={styles.buttonText}>Nova Simulação</Text>
      </TouchableOpacity>
      {/* Aqui você pode listar simulações salvas futuramente */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent:'center', alignItems:'center', padding: 20},
  title: {fontSize: 28, fontWeight:'bold', marginBottom: 40},
  button: {
    backgroundColor: '#1976d2',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {color:'#fff', fontSize: 18, fontWeight: 'bold'},
});
