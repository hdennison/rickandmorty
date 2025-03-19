import { CircleIcon, IconProps } from "../icon/icon";

const statusColors = {
  Alive: "green",
  Dead: "red",
  unknown: "grey",
};

type Props = IconProps & {
  status: keyof typeof statusColors;
};
export const StatusIndicator = ({ status, ...props }: Props) => (
  <CircleIcon
    color={statusColors[status]}
    fill={statusColors[status]}
    {...props}
  />
);
