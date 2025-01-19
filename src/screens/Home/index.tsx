import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, RefreshControl, ActivityIndicator } from 'react-native';
import axios from 'axios';
import PostItem from '../../components/PostItem';
import { View, Text, YStack } from 'tamagui';

const BlogScreen = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchPosts(page);
  }, [page]);

  const fetchPosts = async (page: number) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
      );
      setPosts((prevPosts) => (page === 1 ? response.data : [...prevPosts, ...response.data]));
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
    setLoading(false);
  };

  const handleLoadMore = () => {
    if (!loading) {
      setPage(page + 1);
    }
  };

  const renderFooter = () => {
    return loading ? (
      <ActivityIndicator size="large" color="#0000ff" style={{ marginVertical: 20 }} />
    ) : null;
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <YStack padding="$4" space="$4" alignItems="center" backgroundColor="$backgroundDark">
        {/* Header */}
        <Text fontSize="$8" fontWeight="bold" color="$white">
          Blog
        </Text>
        <Text fontSize="$5" color="$gray10">
          Explora nuestras últimas publicaciones
        </Text>
      </YStack>

      {/* Post List */}
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 10, alignItems: 'center' }}>
            <PostItem post={item} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={() => {
              setPage(1);
              setPosts([]);
            }}
          />
        }
        ListFooterComponent={renderFooter}
        contentContainerStyle={{ paddingBottom: 20, paddingHorizontal: 16 }}
      />
    </SafeAreaView>
  );
};

export default BlogScreen;


