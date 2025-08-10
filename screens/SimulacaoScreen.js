import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Switch, Alert, ScrollView } from 'react-native';

export default function SimulacaoScreen({ navigation }) {
  const [valor, setValor] = useState('');
  const [parcelas, setParcelas] = useState('');
  const [taxa, setTaxa] = useState('');
  const [comJuros, setComJuros] = useState(false);

  const validarECalcular = () => {
    const v = parseFloat(valor.replace(',', '.'));
    const p = parseInt(parcelas);
    const t = parseFloat(taxa.replace(',', '.'));

    if (isNaN(v) || v <= 0) return Alert.alert('Erro', 'Informe um valor válido');
    if (isNaN(p) || p < 1 || p > 24) return Alert.alert('Erro', 'Número de parcelas deve ser entre 1 e 24');
    if (isNaN(t) || t < 0) return Alert.alert('Erro', 'Informe uma taxa válida');

    navigation.navigate('Resultado', { valor: v, parcelas: p, taxa: t, comJuros });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Valor da compra (R$):</Text>
      <TextInput
        style={styles.input}
        keyboardType="decimal-pad"
        placeholder="Ex: 2500"
        value={valor}
        onChangeText={setValor}
      />

      <Text style={styles.label}>Número de parcelas (1 a 24):</Text>
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        placeholder="Ex: 12"
        value={parcelas}
        onChangeText={setParcelas}
      />

      <Text style={styles.label}>Taxa de juros mensal (%):</Text>
      <TextInput
        style={styles.input}
        keyboardType="decimal-pad"
        placeholder="Ex: 3"
        value={taxa}
        onChangeText={setTaxa}
      />

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Com juros?</Text>
        <Switch value={comJuros} onValueChange={setComJuros} />
      </View>

      <TouchableOpacity style={styles.button} onPress={validarECalcular}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {padding: 20},
  label: {fontSize: 16, marginVertical: 8},
  input: {
    borderWidth: 1,
    borderColor: '#1976d2',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#1976d2',
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {color: '#fff', fontWeight: 'bold', textAlign: 'center', fontSize: 18},
});
