import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Network, Cpu } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col justify-center">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background z-0" />
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] z-0" />

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground/80 tracking-wide uppercase">
              Premium IT Solutions
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[1.1] mb-6">
            Where Technology Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Reliability</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
            VIP Networks delivers enterprise-grade infrastructure, advanced security systems, and seamless connectivity solutions for the modern world.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/services">
              <button className="group px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            
            <Link href="/contact">
              <button className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/20 transition-all">
                Contact Us
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Floating Abstract Tech Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[10%] top-[20%] text-primary/10 hidden lg:block z-0"
      >
        <Network size={400} strokeWidth={0.5} />
      </motion.div>

      {/* Bottom Features Ticker */}
      <div className="absolute bottom-0 left-0 right-0 bg-background/50 backdrop-blur-md border-t border-white/5 py-6">
        <div className="container mx-auto px-6 flex flex-wrap gap-8 md:gap-16 justify-center md:justify-start text-muted-foreground">
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-primary w-6 h-6" />
            <span className="font-medium">Enterprise Security</span>
          </div>
          <div className="flex items-center gap-3">
            <Cpu className="text-primary w-6 h-6" />
            <span className="font-medium">Advanced Hardware</span>
          </div>
          <div className="flex items-center gap-3">
            <Network className="text-primary w-6 h-6" />
            <span className="font-medium">Seamless Networking</span>
          </div>
        </div>
      </div>
    </div>
  );
}
