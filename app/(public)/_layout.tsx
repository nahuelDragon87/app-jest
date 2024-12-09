import { BlazeText } from "@/components/BlazeText";
import Colors from "@/constants/Colors";
import { Stack } from "expo-router";
import React from "react";

export default function publicLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.text_secondary,
        },
        headerTintColor: "#fff",
        headerTitle: (props) => (
          <BlazeText
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
