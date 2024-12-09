import React from "react";
import { View } from "react-native";
import { Meta, StoryObj } from "@storybook/react-native";

import { BottomActionsLayout, BottomActionsProps } from ".";
import { Button } from "@/components/Button";
import { Text, XStack, YStack } from "tamagui";

const BottomActionsMeta: Meta<BottomActionsProps> = {
  title: "BottomActions",
  component: BottomActionsLayout,
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default BottomActionsMeta;

type Story = StoryObj<BottomActionsProps>;

export const Basic: Story = {
  render: (args) => {
    return (
      <BottomActionsLayout
        {...args}
        actions={[
          <Button text="Iniciar sesión" fullWidth key={1} />,
          <XStack key={2} alignItems="center" justifyContent="center" gap={8}>
            <Text fontFamily="$body" color="$text_primary">
              ¿No tiene una cuenta?
            </Text>
            <Button type="text" text="Regístrese" />
          </XStack>,
        ]}
        backgroundColor="$background_sandstone"
      >
        <YStack flex={1}>
          <Text color="$text_primary">Texto de prueba</Text>
        </YStack>
      </BottomActionsLayout>
    );
  },
};
