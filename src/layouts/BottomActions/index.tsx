import { GetProps, Stack, YStack } from "tamagui";

export type BottomActionsProps = GetProps<typeof YStack> & {
  children: React.ReactNode;
  actions: Array<React.ReactNode>;
};

export const BottomActionsLayout = ({
  children,
  actions = [],
  ...props
}: BottomActionsProps) => {
  return (
    <YStack p={16} flex={1} width="100%" {...props}>
      <Stack flex={1}>{children}</Stack>
      <YStack mt="auto" gap={16} p={12}>
        {actions?.map((a) => a)}
      </YStack>
    </YStack>
  );
};
