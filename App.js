import React from 'react';
import { StyleSheet, View, Text, Alert, SafeAreaView } from 'react-native';
import InfoCard from './src/components/InfoCard';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Daftar Tugas UTS</Text>

      <InfoCard 
        title="Membuat Komponen Reusable InfoCard" 
        status="selesai" 
        onPress={() => Alert.alert("Informasi", "Detail: Tugas Soal 1 telah selesai dikerjakan.")} 
      />

      <InfoCard 
        title="Membuat Real-Time Search FlatList  & Static Data" 
        status="proses" 
        onPress={() => Alert.alert("Informasi", "Detail: Tugas Soal 2 sedang dikerjakan.")} 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 16,
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#0f172a',
  },
});