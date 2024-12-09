import { Meta, StoryObj } from "@storybook/react-native";
import React from "react";
import { View } from "react-native";
import { Button, ButtonProps } from ".";
import { IconName } from "../Icon";

const ButtonMeta: Meta<ButtonProps> = {
  title: "Button",
  component: Button,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    text: "Hello world",
    type: "primary",
    disabled: false,
    fullWidth: false,
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default ButtonMeta;

type Story = StoryObj<ButtonProps>;

export const Basic: Story = {};

export const Primary: Story = {
  args: {
    type: "primary",
    text: "Regular Button",
  },
};

export const PrimaryIcon: Story = {
  args: {
    type: "primary",
    text: "Regular Button",
    iconLeft: { name: IconName.Checkmark },
  },
};

export const Secondary: Story = {
  args: {
    type: "secondary",
    text: "Regular Button",
  },
};

export const Mutted: Story = {
  args: {
    type: "mutted",
    text: "Regular Button",
  },
};

export const Text: Story = {
  args: {
    text: "Another example",
    type: "text",
  },
};
