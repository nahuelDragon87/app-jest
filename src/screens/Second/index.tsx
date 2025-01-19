import React, { useState, useCallback } from 'react';
import { FlatList, Button, StyleSheet, View, Text, ActivityIndicator } from 'react-native';

const PerformanceChallengeScreen = () => {
  const [data, setData] = useState<number[]>(Array.from({ length: 500 }, (_, i) => i + 1));
  const [loading, setLoading] = useState(false);

  const addMoreItems = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setData((prevData) => [
        ...prevData,
        ...Array.from({ length: 500 }, (_, i) => prevData.length + i + 1),
      ]);
      setLoading(false);
    }, 1000); // Simula una carga de datos
  }, []);

  const shuffleItems = useCallback(() => {
    setData((prevData) => {
      const shuffled = [...prevData].sort(() => Math.random() - 0.5);
      return shuffled;
    });
  }, []);

  const renderItem = ({ item }: { item: number }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>Item {item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Challenge de Performance</Text>
      <Text style={styles.subtitle}>Maneja una lista infinita con miles de elementos</Text>
      
      <View style={styles.buttons}>
        <Button title="Agregar más ítems" onPress={addMoreItems} />
        <Button title="Mezclar ítems" onPress={shuffleItems} color="#FF5733" />
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.toString()}
        onEndReached={addMoreItems} // Carga más datos al llegar al final
        onEndReachedThreshold={0.5}
        initialNumToRender={20}
        maxToRenderPerBatch={50}
        windowSize={5}
        ListFooterComponent={loading && <ActivityIndicator size="large" color="#0000ff" />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 16,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  item: {
    padding: 16,
    backgroundColor: '#1e1e1e',
    marginBottom: 8,
    borderRadius: 8,
  },
  itemText: {
    color: 'white',
    fontSize: 16,
  },
});

export default PerformanceChallengeScreen;
