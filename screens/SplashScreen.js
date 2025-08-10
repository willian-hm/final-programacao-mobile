import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ParcelaJá</Text>
      <Text style={styles.subtitle}>Simulador Inteligente de Parcelamentos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent:'center', alignItems:'center', backgroundColor: '#1976d2'},
  title: {fontSize: 40, fontWeight: 'bold', color: '#fff'},
  subtitle: {fontSize: 16, color: '#bbdefb', marginTop: 10},
});
