import React, { useState } from 'react';
import { StyleSheet, View, Text, Alert, SafeAreaView, TextInput, FlatList } from 'react-native';
import InfoCard from './src/components/InfoCard';


export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const tasks = [
    {
      id: '1',
      title: 'Membuat Komponen Reusable InfoCard - pemrograman mobile',
      status: 'selesai',
      detail: 'Detail: Tugas Soal 1 telah selesai dikerjakan.',
    },
    {
      id: '2',
      title: 'Membuat Real-Time Search FlatList & Static Data - pemrograman mobile',
      status: 'proses',
      detail: 'Detail: Tugas Soal 2 sedang dikerjakan.',
    },
    {
      id: '3',
      title: 'Tugas kelompok Startup',
      status: 'proses',
      detail: 'Detail: Tugas tambahan navigasi aplikasi.',
    },
    {
      id: '4',
      title: 'UTS Lab Jaringan terapan',
      status: 'selesai',
      detail: 'Detail: Penyesuaian topology jaringan.',
    },
    {
      id: '5',
      title: 'Hapalan Bahasa Jepang',
      status: 'proses',
      detail: 'Detail: Baru menghapal hiragana.',
    },
  ];

  const filteredTasks = tasks.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Daftar Tugas UTS</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Cari tugas..."
        placeholderTextColor="#94a3b8"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />

      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <InfoCard 
            title={item.title} 
            status={item.status} 
            onPress={() => Alert.alert("Informasi", item.detail)} 
          />
          )}
          showsVerticalScrollIndicator={false}
          // TAMBAHKAN INI UNTUK MEMENUHI SYARAT LIST EMPTY COMPONENT:
          ListEmptyComponent={
            <Text style={styles.emptyText}>Data tidak ditemukan!</Text>
          }
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
    paddingTop: 50,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#0f172a',
  },
  searchInput: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: '#0f172a',
    marginBottom: 16,
  },
  emptyText: {
    textAlign: 'center',
    color: '#94a3b8',
    marginTop: 24,
    fontSize: 14,
  }
});