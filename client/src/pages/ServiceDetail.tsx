import { useRoute, Link } from "wouter";
import { useService } from "@/hooks/use-services";
import { motion } from "framer-motion";
import { ServiceIcon } from "@/components/ServiceIcon";
import { ArrowLeft, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

// Import generated images
import cctvImg from '@assets/generated_images/modern_cctv_security_cameras_setup.png';
import thermalImg from '@assets/generated_images/thermal_and_fire_detection_system.png';
import networkingImg from '@assets/generated_images/modern_server_room_networking_equipment.png';
import wifiImg from '@assets/generated_images/wireless_access_point_networking_device.png';
import defaultImg from '@assets/stock_images/it_infrastructure_an_c2bc155e.jpg';

const serviceImages: Record<number, string> = {
  1: cctvImg,
  2: thermalImg,
  3: networkingImg, // Intercom & IPBX
  4: defaultImg,    // Biometrics
  5: networkingImg, // PA
  6: defaultImg,    // AV
  7: defaultImg,    // Projector
  8: defaultImg,    // Printers
  9: defaultImg,    // UPS
  10: networkingImg, // IoT
  11: wifiImg,       // Network Booster
};

export default function ServiceDetail() {
  const [, params] = useRoute("/services/:id");
  const id = params ? parseInt(params.id) : 0;
  const { data: service, isLoading, error } = useService(id);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f172a]">
        <Loader2 className="w-10 h-10 text-primary animate-spin" />
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f172a] gap-4">
        <AlertCircle className="w-12 h-12 text-destructive" />
        <h2 className="text-xl font-bold text-white">Service Not Found</h2>
        <Link href="/services" className="text-primary hover:underline">Return to Catalogue</Link>
      </div>
    );
  }

  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = "/services";
    }
  };

  const displayImage = serviceImages[service.id] || defaultImg;

  return (
    <div className="min-h-screen bg-[#0f172a] text-foreground">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Panel - Visual/Hero */}
        <div className="lg:w-1/2 relative min-h-[50vh] lg:min-h-screen bg-[#1e293b] overflow-hidden flex items-center justify-center">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url(${displayImage})` }}
          />
        </div>

        {/* Right Panel - Content */}
        <div className="lg:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center bg-[#0f172a]">
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              VIP Solution
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-8">
              {service.title}
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed mb-12 border-l-2 border-primary/30 pl-6">
              {service.description}
            </p>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-6">Key Features & Benefits</h3>
              
              <ul className="space-y-4">
                {service.bullets.map((bullet, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (index * 0.1) }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className="mt-1 bg-primary/20 p-1 rounded-full">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-gray-300 font-medium">{bullet}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <Link href="/contact">
                <button className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl shadow-lg hover:brightness-110 active:scale-[0.99] transition-all">
                  Inquire About This Service
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
