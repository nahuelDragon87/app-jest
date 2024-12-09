import { ViewProps } from "react-native";
import { IconName } from "./icons";

export interface IconProps extends ViewProps {
  name: IconName;
  color?: string;
  size?: number | string;
  height?: number | string;
}
