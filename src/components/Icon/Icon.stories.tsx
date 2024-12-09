import blazeColors from "@/constants/Colors";
import { Meta, StoryObj } from "@storybook/react-native";
import React from "react";
import { View } from "react-native";
import { Icon, IconName, IconProps } from ".";

const IconMeta: Meta<IconProps> = {
  title: "Icon",
  component: Icon,
  args: {
    name: IconName.Add,
    size: 20,
    color: blazeColors.default_iconColor,
  },
  decorators: [
    (Story) => (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <Story />
      </View>
    ),
  ],
};

export default IconMeta;

type Story = StoryObj<IconProps>;

export const Basic: Story = {};
