import { useRoute, Link } from "wouter";
import { useService } from "@/hooks/use-services";
import { motion } from "framer-motion";
import { ServiceIcon } from "@/components/ServiceIcon";
import { ArrowLeft, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

export default function ServiceDetail() {
  const [, params] = useRoute("/services/:id");
  const id = params ? parseInt(params.id) : 0;
  const { data: service, isLoading, error } = useService(id);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-10 h-10 text-primary animate-spin" />
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background gap-4">
        <AlertCircle className="w-12 h-12 text-destructive" />
        <h2 className="text-xl font-bold text-white">Service Not Found</h2>
        <Link href="/services" className="text-primary hover:underline">Return to Catalogue</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Back Navigation */}
      <div className="fixed top-24 left-6 z-20">
        <Link href="/services">
          <button className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/5">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Services</span>
          </button>
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Panel - Visual/Hero */}
        <div className="lg:w-1/2 relative min-h-[50vh] lg:min-h-screen bg-secondary overflow-hidden flex items-center justify-center p-12">
          {/* Decorative Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-secondary to-secondary opacity-50" />
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
          
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-3xl bg-background/50 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-2xl shadow-black/50">
              <ServiceIcon iconName={service.icon} className="w-24 h-24 md:w-32 md:h-32 text-primary drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]" />
            </div>
          </motion.div>
        </div>

        {/* Right Panel - Content */}
        <div className="lg:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center">
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

            <p className="text-lg text-muted-foreground leading-relaxed mb-12 border-l-2 border-primary/30 pl-6">
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
