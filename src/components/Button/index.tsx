import blazeColors from "@/constants/Colors";
import { useToggle } from "@/hooks";
import { GetProps, Button as TamaguiButton, XStack } from "tamagui";
import { Icon, IconProps } from "../Icon";
import { StyledButton, StyledText } from "./Button.styles";

export type ButtonProps = GetProps<typeof StyledButton> & {
  text: string;
  iconLeft?: IconProps;
  iconRight?: IconProps;
};

const getColor = (
  type: GetProps<typeof StyledButton>["type"],
  disabled: boolean,
) => {
  switch (type) {
    case "primary":
      return blazeColors.background_white;
    case "primaryInverted":
      return disabled ? blazeColors.background_white : blazeColors.cta_primary;
    case "secondary":
    case "mutted":
    case "text":
      return disabled ? blazeColors.disabled : blazeColors.cta_primary;
    case "secondaryInverted":
    case "muttedInverted":
    case "textInverted":
      return disabled ? blazeColors.disabled : blazeColors.background_white;
    default:
      return blazeColors.cta_primary;
  }
};

export const Button = ({
  onPress,
  text,
  disabled = false,
  type = "primary",
  fullWidth = false,
  iconLeft,
  iconRight,
  ...props
}: ButtonProps) => {
  const { value: isPressed, setTrue, setFalse } = useToggle();

  const renderIcon = (icon: IconProps) => (
    <Icon
      name={icon.name}
      size={icon.size}
      color={icon.color || getColor(type, disabled)}
    />
  );

  if (type === "text" || type === "textInverted") {
    return (
      <TamaguiButton
        onPress={onPress}
        onPressIn={setTrue}
        onPressOut={setFalse}
        disabled={disabled}
        unstyled
      >
        <XStack space={8} alignItems="center">
          {iconLeft && renderIcon(iconLeft)}
          <StyledText
            type={type}
            disabled={disabled}
            userSelect="none"
            isPressed={isPressed}
            selectable={false}
            pointerEvents="none"
          >
            {text}
          </StyledText>
          {iconRight && renderIcon(iconRight)}
        </XStack>
      </TamaguiButton>
    );
  }

  return (
    <StyledButton
      onPress={onPress}
      onPressIn={setTrue}
      onPressOut={setFalse}
      type={type}
      disabled={disabled}
      fullWidth={fullWidth}
      noTextWrap
      {...props}
    >
      {iconLeft && renderIcon(iconLeft)}
      <StyledText
        type={type}
        disabled={disabled}
        isPressed={isPressed}
        userSelect="none"
        selectable={false}
        pointerEvents="none"
      >
        {text}
      </StyledText>
      {iconRight && renderIcon(iconRight)}
    </StyledButton>
  );
};
