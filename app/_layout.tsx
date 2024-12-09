import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import config from "../tamagui.config";
import { useFonts } from "expo-font";
import { Slot, SplashScreen } from "expo-router";
import { useEffect } from "react";
import { TamaguiProvider, View } from "tamagui";
import { StatusBar } from "expo-status-bar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-native-reanimated";
import "react-native-gesture-handler";

import "@localization/i18n";
import Colors from "@/constants/Colors";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "index",
};

const storybookEnabled = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true";

const queryClient = new QueryClient();

const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.background_grey,
  },
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  // Default root layout
  const Index = (
    <ThemeProvider value={customTheme}>
      <TamaguiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <StatusBar style="light" />
          <Slot />
        </QueryClientProvider>
      </TamaguiProvider>
    </ThemeProvider>
  );

  let EntryPoint = Index;

  if (storybookEnabled) {
    // if storybook is enabled, load it and replace the default root layout with the storybook UI
    const StorybookUI = require("../.storybook").default;
    EntryPoint = (
      <TamaguiProvider config={config}>
        <View flex={1}>
          <StorybookUI />
        </View>
      </TamaguiProvider>
    );
  }

  return EntryPoint;
}
