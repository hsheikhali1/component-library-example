import React, { ReactElement } from "react";
import { twMerge } from "tailwind-merge";
import {
  Checkmark,
  IconArrow,
  Briefcase,
  TwoFactorAuth,
  TravelMode,
  Watchtower,
  Warning,
  SSO,
  Settings,
  Reporting,
  AdvancedProtection,
  Privacy,
  PaymentCard,
  Globe,
  ActivityLog,
  Chat,
  Families,
  Devices,
  Lock,
  LockWifi,
  Action,
} from "./components";
import { DefaultProps } from "./types";

interface IconList {
  [key: string]: ({}: DefaultProps) => ReactElement;
}

const IconComponentList: IconList = {
  checkmark: (props) => <Checkmark {...props} />,
  iconarrow: (props) => <IconArrow {...props} />,
  briefcase: (props) => <Briefcase {...props} />,
  twofactorauth: (props) => <TwoFactorAuth {...props} />,
  travelmode: (props) => <TravelMode {...props} />,
  watchtower: (props) => <Watchtower {...props} />,
  warning: (props) => <Warning {...props} />,
  sso: (props) => <SSO {...props} />,
  settings: (props) => <Settings {...props} />,
  reporting: (props) => <Reporting {...props} />,
  privacy: (props) => <Privacy {...props} />,
  paymentcard: (props) => <PaymentCard {...props} />,
  globe: (props) => <Globe {...props} />,
  advancedprotection: (props) => <AdvancedProtection {...props} />,
  activitylog: (props) => <ActivityLog {...props} />,
  chat: (props) => <Chat {...props} />,
  families: (props) => <Families {...props} />,
  devices: (props) => <Devices {...props} />,
  lock: (props) => <Lock {...props} />,
  lockWifi: (props) => <LockWifi {...props} />,
  action: (props) => <Action {...props} />,
};

export interface IconProps extends DefaultProps {
  name:
    | "briefcase"
    | "iconarrow"
    | "checkmark"
    | "twofactorauth"
    | "travelmode"
    | "watchtower"
    | "warning"
    | "sso"
    | "settings"
    | "reporting"
    | "privacy"
    | "paymentcard"
    | "globe"
    | "advancedprotection"
    | "activitylog"
    | "chat"
    | "families"
    | "devices"
    | "lock"
    | "lockWifi"
    | "action";
}

const Icon: React.FC<IconProps> = ({
  name,
  width,
  height,
  className,
  iconColor,
  iconBgColor,
}) => {
  const IconComponent = IconComponentList[name as string];
  const classes = twMerge("ml-2", iconColor ?? "text-current", className);

  return (
    <div className={classes} data-testid={name}>
      <IconComponent width={width} height={height} iconBgColor={iconBgColor} />
    </div>
  );
};
export default Icon;
