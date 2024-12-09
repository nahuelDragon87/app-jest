import { Button, styled, Text } from "tamagui";

export const StyledButton = styled(Button, {
  unstyled: true,
  px: 12,
  py: 16,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  minWidth: 190,
  pressStyle: {
    borderColor: "$colorTransparent",
  },

  variants: {
    type: {
      primary: (_type, { props: { disabled } }) => {
        return {
          backgroundColor: disabled ? "$disabled" : "$cta_primary",
          pressStyle: {
            backgroundColor: disabled ? "$disabled" : "$cta_secondary",
          },
        };
      },
      primaryInverted: (_type, { props: { disabled } }) => {
        return {
          backgroundColor: disabled ? "$disabled" : "$background_white",
          pressStyle: {
            backgroundColor: disabled ? "$disabled" : "$cta_secondary",
          },
        };
      },

      secondary: (_type, { props: { disabled } }) => {
        return {
          backgroundColor: "$colorTransparent",
          borderColor: disabled ? "$disabled" : "$cta_primary",
          borderWidth: "$1",
          pressStyle: {
            backgroundColor: "$colorTransparent",
            borderColor: disabled ? "$disabled" : "$cta_secondary",
          },
        };
      },

      secondaryInverted: (_type, { props: { disabled } }) => {
        return {
          backgroundColor: "$colorTransparent",
          borderColor: disabled ? "$disabled" : "$background_white",
          borderWidth: "$1",
          pressStyle: {
            backgroundColor: "$colorTransparent",
            borderColor: disabled ? "$disabled" : "$cta_secondary",
          },
        };
      },

      mutted: (_type, { props: { disabled } }) => {
        return {
          backgroundColor: "$colorTransparent",
          pressStyle: {
            backgroundColor: disabled ? "$colorTransparent" : "$grey_5",
            borderColor: "$colorTransparent",
          },
        };
      },
      muttedInverted: (_type, { props: { disabled } }) => {
        return {
          backgroundColor: "$colorTransparent",
          pressStyle: {
            backgroundColor: disabled ? "$colorTransparent" : "$grey_5",
            borderColor: "$colorTransparent",
          },
        };
      },
      text: {},
      textInverted: {},
    },
    fullWidth: {
      true: {
        width: "100%",
      },
    },
  } as const,
  defaultVariants: {
    type: "primary",
    fullWidth: false,
  },
});

export const StyledText = styled(Text, {
  fontFamily: "$body",
  fontSize: "$4",
  fontWeight: "$6",

  variants: {
    type: {
      primary: {
        color: "$background_white",
      },

      primaryInverted: (_type, { props: { disabled, isPressed } }) => {
        return {
          color: disabled
            ? "$background_white"
            : isPressed
            ? "$background_white"
            : "$text_primary",
        };
      },

      secondary: (_type, { props: { disabled, isPressed } }) => {
        return {
          color: disabled
            ? "$disabled"
            : isPressed
            ? "$cta_secondary"
            : "$cta_primary",
        };
      },

      secondaryInverted: (_type, { props: { disabled, isPressed } }) => {
        return {
          color: disabled
            ? "$disabled"
            : isPressed
            ? "$cta_secondary"
            : "$background_white",
        };
      },

      mutted: (_type, { props: { disabled, isPressed } }) => {
        return {
          color: disabled
            ? "$disabled"
            : isPressed
            ? "$cta_secondary"
            : "$cta_primary",
          textDecorationLine: "underline",
          fontWeight: "$4",
        };
      },

      muttedInverted: (_type, { props: { disabled, isPressed } }) => {
        return {
          color: disabled
            ? "$disabled"
            : isPressed
            ? "$cta_secondary"
            : "$background_white",
          textDecorationLine: "underline",
          fontWeight: "$4",
        };
      },

      text: (_type, { props: { disabled, isPressed } }) => {
        return {
          color: disabled
            ? "$disabled"
            : isPressed
            ? "$cta_secondary"
            : "$cta_primary",
          textDecorationLine: "underline",
          fontWeight: "$4",
        };
      },
      textInverted: (_type, { props: { disabled, isPressed } }) => {
        return {
          color: disabled
            ? "$disabled"
            : isPressed
            ? "$cta_secondary"
            : "$background_white",
          textDecorationLine: "underline",
          fontWeight: "$4",
        };
      },
    },

    // It's the only way i found to add a new prop to the StyledText ts props.
    isPressed: {
      true: {},
    },
  } as const,
  defaultVariants: {
    type: "primary",
  },
});
