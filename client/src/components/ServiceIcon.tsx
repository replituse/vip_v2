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
  Fingerprint
} from "lucide-react";

interface ServiceIconProps {
  iconName: string;
  className?: string;
}

export function ServiceIcon({ iconName, className = "w-6 h-6" }: ServiceIconProps) {
  // Map backend strings to Lucide components
  const icons: Record<string, React.ElementType> = {
    "cctv": Video,
    "fire": Flame,
    "access": Lock,
    "network": Server,
    "wifi": Wifi,
    "security": Shield,
    "infrastructure": HardDrive,
    "internet": Globe,
    "biometric": Fingerprint,
    "power": Zap,
    "wireless": Radio,
    "monitoring": Activity,
    // Fallback
    "default": Cpu
  };

  const IconComponent = icons[iconName.toLowerCase()] || icons["default"];

  return <IconComponent className={className} />;
}
