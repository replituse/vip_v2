import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Star, Instagram, Youtube, MessageCircle } from "lucide-react";
import networkingVideo from '@assets/generated_videos/networking_technology_background_video.mp4';

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
          <div className="mb-4">
            <h2 className="text-primary text-2xl md:text-3xl font-display font-bold tracking-[0.2em] uppercase mb-2">
              VIP NETWORKS
            </h2>
            <div className="h-[2px] w-24 bg-primary mx-auto mb-12" />
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-tight mb-6">
            Jewellery <span className="italic text-primary">Catalog</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed font-light tracking-wide">
            Discover Timeless Elegance and Exquisite Craftsmanship in Networking Infrastructure
          </p>

          {/* CTA Button */}
          <div className="flex flex-col items-center gap-8">
            <Link href="/services">
              <button className="group px-12 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all flex items-center gap-3">
                Explore Catalog
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>

            {/* Social Icons */}
            <div className="flex gap-6 mt-4">
              <a href="#" className="p-3 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-full text-white hover:scale-110 transition-transform shadow-lg">
                <Instagram size={24} />
              </a>
              <a href="#" className="p-3 bg-green-500 rounded-full text-white hover:scale-110 transition-transform shadow-lg">
                <MessageCircle size={24} />
              </a>
              <a href="#" className="p-3 bg-red-600 rounded-full text-white hover:scale-110 transition-transform shadow-lg">
                <Youtube size={24} />
              </a>
            </div>

            {/* Rating Stars */}
            <div className="mt-8">
              <p className="text-gray-400 text-sm mb-3 uppercase tracking-widest">Rate Your Experience</p>
              <div className="flex gap-1 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} className="text-primary fill-primary" />
                ))}
              </div>
              <p className="text-gray-500 text-xs mt-3">Click to leave a Google review</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 pointer-events-none z-10" />
    </div>
  );
}
