import BlazeColors from "@/constants/Colors";
import React, { FC, useMemo } from "react";
import { IconProps } from "./Icon.types";
import { Icons } from "./icons";

export const Icon: FC<IconProps> = ({
  name,
  color,
  size = 24,
  height,
  ...props
}) => {
  const Component = useMemo(() => Icons[name], [name]);

  if (!Component) return null;

  return (
    <Component
      color={color || BlazeColors.default_iconColor}
      width={size}
      height={height || size}
      {...props}
    />
  );
};

export * from "./icons";
