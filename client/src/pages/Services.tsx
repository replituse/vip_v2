import { Link } from "wouter";
import { motion } from "framer-motion";
import { useServices } from "@/hooks/use-services";
import { ServiceIcon } from "@/components/ServiceIcon";
import { ArrowRight, Loader2 } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};

export default function Services() {
  const { data: services, isLoading, error } = useServices();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-10 h-10 text-primary animate-spin" />
          <p className="text-muted-foreground font-display tracking-widest uppercase text-sm">Loading Catalogue...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-6">
        <div className="max-w-md text-center">
          <h2 className="text-2xl font-bold text-destructive mb-2">Unavailable</h2>
          <p className="text-muted-foreground">Unable to load services at this time. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-primary font-bold tracking-widest uppercase mb-4 text-sm">Our Expertise</h2>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Comprehensive <br/>
            <span className="text-muted-foreground">Infrastructure Solutions</span>
          </h1>
          <div className="h-1 w-24 bg-primary rounded-full" />
        </motion.div>

        {/* Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services?.map((service) => (
            <Link key={service.id} href={`/services/${service.id}`}>
              <motion.div 
                variants={item}
                className="group relative h-full bg-card border border-white/5 rounded-3xl p-8 hover:border-primary/50 transition-colors duration-300 cursor-pointer overflow-hidden"
              >
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 text-primary border border-white/5">
                    <ServiceIcon iconName={service.icon} className="w-7 h-7" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                    {service.description}
                  </p>
                  
                  <div className="mt-auto flex items-center gap-2 text-sm font-bold text-white group-hover:text-primary transition-colors">
                    View Details
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
