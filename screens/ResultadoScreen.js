import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { calcularParcela, calcularTotalJuros, calcularTotalPago } from '../utils/calculos';

export default function ResultadoScreen({ route, navigation }) {
  const { valor, parcelas, taxa, comJuros } = route.params;

  const parcela = calcularParcela(valor, parcelas, taxa, comJuros);
  const totalJuros = calcularTotalJuros(valor, parcelas, taxa, comJuros);
  const totalPago = calcularTotalPago(valor, parcelas, taxa, comJuros);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Resultado da Simulação</Text>

      <View style={styles.resultBox}>
        <Text style={styles.label}>Valor da compra:</Text>
        <Text style={styles.value}>R$ {valor.toFixed(2)}</Text>

        <Text style={styles.label}>Número de parcelas:</Text>
        <Text style={styles.value}>{parcelas}</Text>

        <Text style={styles.label}>Taxa mensal (%):</Text>
        <Text style={styles.value}>{taxa}%</Text>

        <Text style={styles.label}>Com juros:</Text>
        <Text style={styles.value}>{comJuros ? 'Sim' : 'Não'}</Text>

        <Text style={styles.label}>Valor de cada parcela:</Text>
        <Text style={styles.value}>R$ {parcela.toFixed(2)}</Text>

        <Text style={styles.label}>Total pago:</Text>
        <Text style={styles.value}>R$ {totalPago.toFixed(2)}</Text>

        <Text style={styles.label}>Total de juros pagos:</Text>
        <Text style={[styles.value, totalJuros > 0 ? styles.juros : null]}>
          R$ {totalJuros.toFixed(2)}
        </Text>

        {totalJuros > valor * 0.2 && (
          <Text style={styles.alert}>⚠️ Cuidado! Juros ultrapassam 20% do valor da compra.</Text>
        )}
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.popToTop()}>
        <Text style={styles.buttonText}>Voltar ao Início</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {padding: 20, alignItems: 'center'},
  title: {fontSize: 24, fontWeight: 'bold', marginBottom: 20},
  resultBox: {width: '100%', backgroundColor: '#e3f2fd', padding: 20, borderRadius: 10},
  label: {fontWeight: 'bold', marginTop: 10},
  value: {fontSize: 18},
  juros: {color: '#d32f2f', fontWeight: 'bold'},
  alert: {marginTop: 20, color: '#d32f2f', fontWeight: 'bold', fontSize: 16},
  button: {
    marginTop: 30,
    backgroundColor: '#1976d2',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  buttonText: {color: '#fff', fontWeight: 'bold', fontSize: 18},
});
