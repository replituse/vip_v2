import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#0f172a] pt-32 pb-12 px-6 flex flex-col items-center">
      <div className="max-w-6xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to upgrade your infrastructure? Our team is ready to discuss your requirements.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#1e293b] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl h-full"
          >
            <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Visit Us</h3>
                  <p className="text-gray-400 leading-relaxed">
                    VIP Networks<br />
                    Jogeshwari East,<br />
                    Mumbai - 400060,<br />
                    Maharashtra, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Call Us</h3>
                  <p className="text-gray-400 mb-2">Mon-Sat from 9am to 7pm.</p>
                  <a href="tel:+919326144739" className="text-xl font-bold text-white hover:text-primary transition-colors inline-flex items-center gap-2">
                    +91 9326144739 <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Email Us</h3>
                  <p className="text-gray-400 mb-2">We'll respond within 24 hours.</p>
                  <a href="mailto:vip.itinfra@gmail.com" className="text-xl font-bold text-white hover:text-primary transition-colors inline-flex items-center gap-2">
                    vip.itinfra@gmail.com <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map / Visual Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#1e293b] rounded-3xl overflow-hidden border border-white/10 min-h-[450px] relative group h-full"
          >
            {/* Abstract Map Graphic since we don't have an API key */}
            <div className="absolute inset-0 bg-[#1e293b] flex items-center justify-center opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
               <div className="grid grid-cols-6 grid-rows-6 gap-2 w-full h-full p-4">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div 
                      key={i} 
                      className={`rounded-full bg-white/5 ${Math.random() > 0.7 ? 'bg-primary/20 animate-pulse' : ''}`}
                    />
                  ))}
               </div>
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-[#0f172a]/90 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center shadow-2xl transform group-hover:scale-105 transition-transform">
                <MapPin className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="text-white font-bold text-lg">Mumbai HQ</h3>
                <p className="text-sm text-gray-400">Serving All of Maharashtra</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
