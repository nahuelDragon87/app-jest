import React, { useState } from 'react';
import { FlatList, SafeAreaView, RefreshControl, ActivityIndicator } from 'react-native';
import PostItem from '../../components/PostItem';
import { View, Text, YStack } from 'tamagui';
import { useGetData } from '@/services/example/hooks';

const BlogScreen = () => {
  const [page, setPage] = useState(1);

  const { data: posts, isLoading, isFetching} = useGetData(page);

  const handleLoadMore = () => {
    if (!isFetching) {
      setPage((prevPage) => prevPage + 1);
    }
  };


  const renderFooter = () => {
    return isFetching ? (
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
          Explor our news post
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
            refreshing={isLoading}
            onRefresh={() => {
              setPage(1);
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



