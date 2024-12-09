import { FC } from "react";
import { SvgProps } from "react-native-svg";

import Add from "@assets/icons/add.svg";


export enum IconName {
  Add = "Add",
}

export const Icons: Record<IconName, FC<SvgProps>> = {
  [IconName.Add]: Add,
};
