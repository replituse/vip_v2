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
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-10 h-10 text-primary animate-spin" />
          <p className="text-gray-400 font-display tracking-widest uppercase text-sm">Loading Catalogue...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white p-6">
        <div className="max-w-md text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Unavailable</h2>
          <p className="text-gray-500">Unable to load services at this time. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f172a] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 md:mb-24 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 uppercase inline-block border-b-2 border-primary pb-2">
            Our Services
          </h1>
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
                className="group relative h-full bg-[#1e293b] border border-white/5 rounded-3xl p-8 hover:border-primary/50 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col items-center text-center shadow-xl"
              >
                <div className="relative z-10 flex flex-col items-center h-full">
                  {/* Icon */}
                  <div className="w-24 h-24 rounded-full bg-[#0f172a]/50 flex items-center justify-center mb-6 border border-white/5 group-hover:bg-primary/10 transition-colors">
                    <ServiceIcon iconName={service.icon} className="w-12 h-12 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-primary transition-colors uppercase">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {service.description}
                  </p>
                  
                  <div className="mt-auto flex items-center gap-2 text-sm font-bold text-primary">
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
