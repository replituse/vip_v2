import { users, type User, type InsertUser, type Service } from "@shared/schema";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Services (Brochure Content)
  getServices(): Promise<Service[]>;
  getService(id: number): Promise<Service | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private services: Service[];

  constructor() {
    this.users = new Map();
    this.services = [
      {
        id: 1,
        title: "CCTV Surveillance & Networking",
        category: "Security",
        description: "Deployment of HD/IP surveillance systems with NVR/DVR integration, multi-site central monitoring, and ONVIF-compliant camera configurations. Includes AI analytics, VLAN-based network segmentation, enterprise Wi-Fi, and secure routing.",
        bullets: [
          "HD / IP surveillance cameras with central monitoring",
          "AI-enabled analytics: face recognition, intrusion alerts",
          "Enterprise-grade Wi-Fi & LAN/WAN deployment",
          "Network security, server & rack solutions",
          "Wireless & Long-Range Connectivity",
          "Secure Network Architecture for CCTV",
          "Smart Video Management Systems"
        ],
        icon: "cctv"
      },
      {
        id: 2,
        title: "Thermal & Fire Detection Systems",
        category: "Safety",
        description: "Advanced heat-sensing technology combined with intelligent early-warning systems to protect people, infrastructure, and critical assets. AI-enabled thermal cameras and high-precision sensors detect smoke, heat, or flame at the earliest stage.",
        bullets: [
          "AI-Powered Fire & Smoke Detection",
          "Thermal Imaging Cameras (24/7 Heat Monitoring)",
          "Aspirating Smoke Detection (ASD – Early Warning Tech)",
          "Addressable Fire Alarm Systems",
          "Smart Fire Suppression Integration",
          "Wireless Fire Alarm Mesh Network",
          "Evacuation & Safety AI"
        ],
        icon: "flame"
      },
      {
        id: 3,
        title: "Intercom & IPBX Communication",
        category: "Communication",
        description: "IP-based Intercom & IPBX systems enabling centralized multi-extension communication. SIP voice routing ensures secure and seamless calling across the facility with PoE endpoints and IPBX servers.",
        bullets: [
          "SIP-based Intercom & IPBX communication architecture",
          "Multi-extension calling with centralized call management",
          "Video door phones with secure access communication",
          "Cloud telephony integration for remote call handling",
          "PoE-enabled indoor/outdoor intercom stations",
          "Automated IVR, call routing & call logs",
          "High-availability IPBX servers with failover support"
        ],
        icon: "phone"
      },
      {
        id: 4,
        title: "Biometrics & Smart Access Locks",
        category: "Security",
        description: "Deployment of biometric access systems with fingerprint, RFID, and facial recognition for secure, role-based access. Supports centralized user management, time–attendance integration, and real-time event monitoring.",
        bullets: [
          "AI-driven Facial, Fingerprint & RFID Access Control",
          "Centralized Multi-Door Management with Role-Based Permissions",
          "Secure Mobile-App & QR Code Entry with Encrypted Credentials",
          "Integrated Attendance & Visitor Management with Real-Time Logs",
          "IoT-Enabled Smart Locks with Remote Lock/Unlock Capability",
          "PoE Access Controllers with Fail-Safe / Fail-Secure Mechanisms",
          "Instant Access Alerts & Comprehensive Audit Trails"
        ],
        icon: "lock"
      },
      {
        id: 5,
        title: "Public Addressable (PA)",
        category: "Communication",
        description: "IP-based PA systems with multi-zone paging and centralized announcement control. SIP-enabled speakers, digital amplifiers, and PoE audio devices for seamless facility-wide communication.",
        bullets: [
          "IP/SIP-based multi-zone paging for building-wide communication",
          "Centralized announcement control with priority override",
          "PoE-powered speakers and digital amplifiers",
          "Automated emergency alerts and evacuation messaging",
          "Real-time broadcast capability over secure LAN/WAN networks",
          "Redundant controllers for uninterrupted PA operations",
          "Integration with fire systems, access control, and CCTV platforms"
        ],
        icon: "megaphone"
      },
      {
        id: 6,
        title: "Audio Visual & Room Automation",
        category: "Automation",
        description: "Cutting-edge Audio-Visual integration and smart room automation systems designed to enhance collaboration, communication, and user experience for meeting rooms, classrooms, and auditoriums.",
        bullets: [
          "Smart Meeting Room Integration",
          "LED Displays, Projectors & Interactive Panels",
          "Digital Signage & Video Walls",
          "Boardroom & Training Room AV Design",
          "Smart Lighting Control & Dimming Systems",
          "Motorized Curtains & Blinds Automation",
          "Occupancy Sensors & Auto-Energy Management"
        ],
        icon: "monitor-play"
      },
      {
        id: 7,
        title: "Projector & Display Solutions",
        category: "AV",
        description: "Advanced projector and display solutions for corporate boardrooms, classrooms, retail showrooms, and large-scale events. Integration of LED walls, interactive displays, and laser projectors.",
        bullets: [
          "LED / LCD / Smart TV Display Integration",
          "Commercial Display & Video Wall Solutions",
          "AI-Based Smart Classroom Displays",
          "Interactive & Touch Display Boards",
          "Retail Digital Signage & Kiosk Displays",
          "Edge Blending & Projection Mapping",
          "Cloud & IoT-Based Remote Monitoring"
        ],
        icon: "projector"
      },
      {
        id: 8,
        title: "Printers / Desktop / Laptop",
        category: "IT Hardware",
        description: "Complete IT hardware solutions including Printers, Desktops, Laptops, and Accessories. Sales, AMC support, repair, maintenance, and software installation.",
        bullets: [
          "Printer Cartridge / Toner Supply Management",
          "Annual Maintenance Contracts (AMC)",
          "Asset Management & Device Inventory Tracking",
          "Green IT Solutions (Energy Efficiency & E-Waste Guidance)",
          "High-end Workstation Setup for Power Users",
          "Integrated Peripheral Support (Scanners, Plotters, POS Devices)"
        ],
        icon: "printer"
      },
      {
        id: 9,
        title: "UPS & Battery Solutions",
        category: "Power",
        description: "Reliable power backup solutions to ensure uninterrupted operations for critical infrastructure. Comprehensive UPS and battery management systems.",
        bullets: [
          "Online & Line-Interactive UPS Systems",
          "Battery Health Monitoring & Management",
          "Enterprise Power Backup Solutions",
          "Surge Protection & Voltage Stabilization",
          "Scalable Battery Banks for Extended Runtime",
          "Remote Monitoring & Alerts",
          "Eco-friendly & Energy Efficient Power Systems"
        ],
        icon: "battery-charging"
      },
      {
        id: 10,
        title: "IoT / Cloud / Software Solutions",
        category: "Software",
        description: "Smart device integration with real-time data monitoring and automation. Secure cloud infrastructure for scalable storage and remote management.",
        bullets: [
          "Serverless Computing",
          "Hybrid & Multi-Cloud Architecture",
          "Scalable storage & computing",
          "Real-time data dashboards",
          "Secure cloud backups",
          "Cloud migration"
        ],
        icon: "cloud"
      },
      {
        id: 11,
        title: "Network Booster",
        category: "Networking",
        description: "Enhances existing network performance by improving speed, stability, and coverage. Optimizes bandwidth distribution and eliminates dead zones.",
        bullets: [
          "AI-Optimized Traffic Routing",
          "Edge-Based Signal Amplification",
          "Adaptive Mesh Networking",
          "Network Security Boost (Zero Trust + Threat Detection)",
          "Wi-Fi 6E / Wi-Fi 7 Performance Upgrade",
          "Wireless Mesh Network Optimization"
        ],
        icon: "wifi"
      }
    ];
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = (this.users.size + 1).toString();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getServices(): Promise<Service[]> {
    return this.services;
  }

  async getService(id: number): Promise<Service | undefined> {
    return this.services.find(s => s.id === id);
  }
}

export const storage = new MemStorage();
