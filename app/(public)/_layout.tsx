import Colors from "@/constants/Colors";
import { Stack } from "expo-router";
import React from "react";
import { Text } from "tamagui";

export default function publicLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.text_primary,
        },
        
        headerTintColor: "black",
        headerShown: false ,
        headerTitle: (props) => (
          <Text
            {...props}
            color={props.tintColor}
            fontSize={18}
            fontWeight="$6"
          />
        ),
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
