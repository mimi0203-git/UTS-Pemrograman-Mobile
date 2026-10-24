import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function InfoCard({ title, status, onPress }) {
  const isSelesai = status === 'selesai';

  return (
    <View style={styles.card}>
      <Text style={styles.titleText}>{title}</Text>

      <View style={[styles.statusBar, isSelesai ? styles.barSelesai : styles.barProses]}>
        <Text style={[styles.statusText, isSelesai ? styles.textSelesai : styles.textProses]}>
          {status}
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Lihat Detail</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 14,
    marginVertical: 10,
    width: '85%',     
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0f172a',
    textAlign: 'center',
    marginBottom: 12,
  },
  statusBar: {
    width: '100%',      
    paddingVertical: 10,
    paddingHorizontal:10, 
    borderRadius: 8,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginBottom: 12,
  },
  barSelesai: {
    backgroundColor: '#dcfce7',
  },
  barProses: {
    backgroundColor: '#ffedd5',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'lowercase',
  },
  textSelesai: {
    color: '#16a34a',
  },
  textProses: {
    color: '#c2410c',
  },
  button: {
    backgroundColor: '#1d4ed8',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
});