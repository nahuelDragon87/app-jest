import { Button } from "@/components/Button";
import { BlazeText } from "@/components/BlazeText";
import { StatusBar } from "expo-status-bar";
import { useTranslation } from "react-i18next";
import { ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { YStack } from "tamagui";
import { BottomActionsLayout } from "@/layouts/BottomActions";

export default function index() {
  const { t } = useTranslation("publicHome");
  return (
    <YStack flex={1}>
      <StatusBar style="light" />
      <ImageBackground
        source={require("@assets/images/PokerStarsNeymarJr.png")}
        style={{ flex: 1 }}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <BottomActionsLayout
            actions={[
                <><Button type="primaryInverted" text={t("logIn")} fullWidth /><Button type="secondaryInverted" text={t("signUp")} fullWidth /></>
            ]}
          >
            <YStack alignItems="center" flex={1} gap={32} mt={48}>
              <BlazeText
                color="$white_1"
                fontWeight="$6"
                fontSize={24}
                textAlign="center"
                mb={8}
              >
                {t("text")}
              </BlazeText>
            </YStack>
          </BottomActionsLayout>
        </SafeAreaView>
      </ImageBackground>
    </YStack>
  );
}
