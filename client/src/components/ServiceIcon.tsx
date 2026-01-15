import { 
  Shield, 
  Server, 
  Wifi, 
  Video, 
  Flame, 
  Lock, 
  Cpu, 
  Globe, 
  HardDrive,
  Activity,
  Zap,
  Radio,
  Fingerprint,
  Phone,
  Megaphone,
  MonitorPlay,
  Projector,
  Printer,
  BatteryCharging,
  Cloud
} from "lucide-react";

interface ServiceIconProps {
  iconName: string;
  className?: string;
}

export function ServiceIcon({ iconName, className = "w-6 h-6" }: ServiceIconProps) {
  // Map backend strings to Lucide components
  const icons: Record<string, React.ElementType> = {
    "cctv": Video,
    "flame": Flame,
    "lock": Lock,
    "server": Server,
    "wifi": Wifi,
    "shield": Shield,
    "harddrive": HardDrive,
    "globe": Globe,
    "fingerprint": Fingerprint,
    "zap": Zap,
    "radio": Radio,
    "activity": Activity,
    "phone": Phone,
    "megaphone": Megaphone,
    "monitor-play": MonitorPlay,
    "projector": Projector,
    "printer": Printer,
    "battery-charging": BatteryCharging,
    "cloud": Cloud,
    // Fallback
    "default": Cpu
  };

  const IconComponent = icons[iconName.toLowerCase()] || icons["default"];

  return <IconComponent className={className} />;
}
