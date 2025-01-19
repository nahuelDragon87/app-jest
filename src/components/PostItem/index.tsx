import React from 'react';
import { YStack, XStack, Text, Button, Image, H4, Paragraph } from 'tamagui';

interface PostItemProps {
  post: {
    id: number;
    title: string;
    body: string;
    buttonText: string;
    imageUrl: string;
    tag: string;
  };
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <YStack
      padding="$4"
      backgroundColor="$background"
      borderRadius="$4"
      shadowColor="$shadowColor"
      shadowOffset={{ width: 0, height: 3 }}
      shadowOpacity={0.1}
      shadowRadius={4}
      space
      maxWidth={350}
      marginBottom={40}
    >
      {/* Tag */}
      <XStack justifyContent="flex-start">
        <Text
          paddingHorizontal="$3"
          paddingVertical="$1"
          borderRadius="$2"
          backgroundColor="$blue8"
          color="$white"
          fontSize="$3"
          fontWeight="bold"
        >
          {post.tag || "Community"}
        </Text>
      </XStack>

      {/* Title */}
      <H4 color="$color" marginVertical="$4" fontWeight={"600"}>
        {post.title}
      </H4>

      {/* Body */}
      <Paragraph size="$2" color="$gray9" marginBottom="$4">
        {post.body}
      </Paragraph>

      {/* Button */}
      <XStack justifyContent="flex-start" alignItems="center" space="$2">
        <Button
          size="$3"
          theme="blue"
          iconAfter={() => (
            <Text fontSize="$3" fontWeight="bold">
              Read more →
            </Text>
          )}
        >
          {post.buttonText}
        </Button>
      </XStack>

      {/* Image */}
      <Image
        source={{
          uri: post.imageUrl
            ? post.imageUrl
            : 'https://www.lifewire.com/thmb/NCdh9sGh14-WKgs1HkUVYcmrAnE=/3000x0/filters:no_upscale():max_bytes(200000):strip_icc():format(webp)/Google-IO-2024-e6ef4c6c40a04a63853f7e216abd32fe.jpg', // Imagen azul de Google I/O por defecto
        }}
        width="100%"
        height={120}
        borderRadius="$4"
      />
    </YStack>
  );
};

export default PostItem;


