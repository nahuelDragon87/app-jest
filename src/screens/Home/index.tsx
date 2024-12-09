
import React, { useState, useMemo } from "react";
import { SafeAreaView, TextInput, Text, ActivityIndicator, FlatList, View, TouchableOpacity, Button } from "react-native";
import { useGetData } from "../../services/example/hooks"; // Hook personalizado
import { Repository } from "../../interfaces"; // Interfaces definidas
import * as Linking from "expo-linking";

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedItems, setSelectedItems] = useState<Repository[]>([]);
  
  // Hook para buscar repositorios
  const { data, isLoading, isError } = useGetData(searchQuery);

  // Total de estrellas acumuladas
  const totalStars = useMemo(() => {
    return (data || []).reduce((sum, repo) => sum + repo.stargazers_count, 0);
  }, [data]);

  // Maneja la selección/deselección de elementos
  const toggleSelectItem = (repo: Repository) => {
    if (selectedItems.some((item) => item.id === repo.id)) {
      setSelectedItems((prev) => prev.filter((item) => item.id !== repo.id));
    } else {
      setSelectedItems((prev) => [...prev, repo]);
    }
  };

  // Elimina los elementos seleccionados
  const clearSelectedItems = () => {
    setSelectedItems([]);
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      {/* Input de búsqueda */}
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: searchQuery.length < 3 ? "red" : "gray",
          padding: 8,
          borderRadius: 4,
          marginBottom: 16,
        }}
        placeholder="Buscar repositorios..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      {searchQuery.length < 3 && <Text style={{ color: "red" }}>Debe ingresar al menos 3 caracteres</Text>}

      {/* Resultados de búsqueda */}
      {isLoading && <ActivityIndicator size="large" />}
      {isError && <Text>Error al cargar los datos</Text>}

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => toggleSelectItem(item)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 8,
              borderBottomWidth: 1,
              borderColor: "#ddd",
              backgroundColor: selectedItems.some((selected) => selected.id === item.id) ? "#e0f7fa" : "#fff",
            }}
          >
            <View style={{ marginRight: 8 }}>
              <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
              <Text>{item.owner.login}</Text>
              <Text>{item.stargazers_count} ⭐</Text>
              <Text
                style={{ color: "blue" }}
                onPress={() => Linking.openURL(item.html_url)}
              >
                Abrir en GitHub
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* Total de estrellas */}
      {data && data.length > 0 && (
        <Text style={{ fontWeight: "bold", marginVertical: 16 }}>
          Total de estrellas: {totalStars}
        </Text>
      )}

      {/* Botones */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 16 }}>
        <Button title="Eliminar seleccionados" onPress={clearSelectedItems} disabled={selectedItems.length === 0} />
        <Button
          title="Ver seleccionados"
          onPress={() => navigation.navigate("SelectedItemsScreen", { selectedItems })}
          disabled={selectedItems.length === 0}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;