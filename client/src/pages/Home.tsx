import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Star, MapPin, Phone, Mail } from "lucide-react";
import { SiInstagram, SiWhatsapp, SiLinkedin } from "react-icons/si";
import networkingVideo from '@assets/generated_videos/networking_technology_background_video.mp4';
import logoImg from '@assets/image_1768470734906.png';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center bg-black">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
      >
        <source src={networkingVideo} type="video/mp4" />
      </video>

      {/* Rotating Stars Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-yellow-500/40"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{ 
              rotate: 360,
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ 
              duration: 5 + Math.random() * 10, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            <Star size={16 + Math.random() * 24} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Logo/Title */}
          <div className="mb-0 flex flex-col items-center">
            <motion.img 
              src={logoImg} 
              alt="VIP Networks Logo" 
              className="w-24 h-24 mb-6 drop-shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-tight mb-2 uppercase tracking-wider">
              VIP <span className="text-primary">NETWORKS</span>
            </h1>
            <div className="h-[2px] w-48 bg-primary mx-auto mb-6" />
          </div>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed font-light tracking-wide italic">
            VISIONARY | INNOVATIVE | PRODUCTIVITY<br />
            "Where Technology Meet Reliability"
          </p>

          {/* CTA Button */}
          <div className="flex flex-col items-center gap-6">
            <Link href="/services">
              <button className="group px-12 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all flex items-center gap-3">
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>

            {/* Social Icons */}
            <div className="flex gap-6 mt-4">
              <a href="https://www.instagram.com/vip_networks/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-full text-white hover:scale-110 transition-transform shadow-lg">
                <SiInstagram size={24} />
              </a>
              <a href="https://wa.me/919326144739" target="_blank" rel="noopener noreferrer" className="p-3 bg-green-500 rounded-full text-white hover:scale-110 transition-transform shadow-lg">
                <SiWhatsapp size={24} />
              </a>
              <a href="https://linkedin.com/company/vipnetworks" target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-600 rounded-full text-white hover:scale-110 transition-transform shadow-lg">
                <SiLinkedin size={24} />
              </a>
            </div>

            {/* Rating Stars */}
            <div className="mt-4">
              <p className="text-gray-400 text-sm mb-3 uppercase tracking-widest">Rate Your Experience</p>
              <div className="flex gap-1 justify-center">
                {[...Array(5)].map((_, i) => (
                  <a 
                    key={i} 
                    href="https://g.page/r/your-google-review-link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform cursor-pointer"
                  >
                    <Star size={24} className="text-primary fill-primary" />
                  </a>
                ))}
              </div>
              <p className="text-gray-500 text-xs mt-3">Click to leave a Google review</p>
            </div>

            {/* Contact Details */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-2 flex flex-col items-center gap-3 text-gray-300 text-sm md:text-base"
            >
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:vip.itinfra@gmail.com" className="hover:text-primary transition-colors">vip.itinfra@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-primary shrink-0" />
                <a href="tel:+919326144739" className="hover:text-primary transition-colors">+91 9326144739</a>
              </div>
              <div className="flex items-center justify-center gap-1 max-w-xs text-center">
                <MapPin size={18} className="text-primary shrink-0 translate-x-3" />
                <span>Jogeshwari East, Mumbai - 400060, Maharashtra.</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 pointer-events-none z-10" />
    </div>
  );
}
