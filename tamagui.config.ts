import blazeColors, { rawColors } from "@/constants/Colors";
import shorthands from "@/constants/shorthands";
import { createAnimations } from "@tamagui/animations-react-native";
import { createInterFont } from "@tamagui/font-inter";
import { radius, size, space, themes, zIndex } from "@tamagui/themes";
import { createFont, createTamagui, createTokens } from "tamagui";

const headingFont = createInterFont();
const bodyFont = createFont({
  family: "blazeType_Regular",
  size: { 1: 12, 2: 14, 3: 15, 4: 16, true: 16 },
  weight: { 1: 400, 4: 500, 6: 700 },
  face: {
    400: { normal: "blazeType_Regular" },
    500: { normal: "blazeType_Medium" },
    700: { normal: "blazeType_Bold" },
  },
});

const tokens = createTokens({
  size,
  space,
  zIndex,
  color: { ...rawColors, ...blazeColors } as const,
  radius,
});

export const animations = createAnimations({
  fast: {
    type: "spring",
    damping: 25,
    mass: 1.2,
    stiffness: 200,
  },
  medium: {
    type: "spring",
    damping: 15,
    mass: 0.9,
    stiffness: 100,
  },
  slow: {
    type: "spring",
    damping: 10,
    stiffness: 60,
  },
});

const config = createTamagui({
  themes,
  tokens,
  animations,
  shorthands: shorthands,
  fonts: {
    heading: headingFont,
    body: bodyFont,
  } as const,
});

export type Conf = typeof config;

declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}

export default config;
