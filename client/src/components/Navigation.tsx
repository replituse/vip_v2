import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Mail, Phone, MapPin, ArrowLeft, Gem, UserCheck, Handshake, Instagram, Youtube, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useServices } from "@/hooks/use-services";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const { data: services } = useServices();

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { href: "/", label: "Home", icon: Gem },
    { href: "/services", label: "Our Services", icon: UserCheck },
    { href: "/contact", label: "Contact Us", icon: Mail },
    { href: "/partners", label: "Partner", icon: Handshake },
  ];

  const isHomePage = location === "/";
  const isCatalogPage = location.startsWith("/services");

  const variants = {
    closed: { x: "100%", opacity: 0 },
    open: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 30 } },
  };

  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      setLocation("/");
    }
  };

  if (isHomePage) return null;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 p-4 flex items-center justify-between bg-[#0f172a]/80 backdrop-blur-md border-b border-white/5 shadow-sm">
        <div className="w-10">
          <button 
            onClick={handleBack}
            className="p-2 flex items-center justify-center hover:scale-110 transition-transform pointer-events-auto text-white"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        </div>

        <Link href="/" className="pointer-events-auto">
          <div className="flex flex-col px-4 py-2 text-center">
            <span className="text-xl md:text-2xl font-display font-bold text-white tracking-wide uppercase">
              VIP <span className="text-primary">NETWORKS</span>
            </span>
          </div>
        </Link>

        <div className="w-10 flex justify-end">
          <button 
            onClick={toggleMenu}
            className="pointer-events-auto p-2 text-white hover:scale-110 active:scale-95 transition-transform"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            
            <motion.div
              variants={variants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 w-full md:w-[400px] bg-white z-[70] p-8 flex flex-col shadow-2xl rounded-l-3xl overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-2xl font-display font-bold text-[#3b82f6] uppercase">Menu</span>
                <button 
                  onClick={toggleMenu}
                  className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-primary transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mb-8">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Categories</p>
                <nav className="flex flex-col space-y-2">
                  {menuItems.map((item) => (
                    <Link 
                      key={item.label} 
                      href={item.href} 
                      className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${location === item.href ? 'bg-[#3b82f6]/10 text-[#3b82f6]' : 'hover:bg-gray-50 text-gray-700'}`}
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-display font-bold uppercase tracking-wide">{item.label}</span>
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="flex-grow" />

              <div className="space-y-6 pt-8 border-t border-gray-100">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Shop Information</p>
                <div className="flex items-start gap-3 text-gray-500">
                  <MapPin className="w-5 h-5 text-[#3b82f6] shrink-0 mt-1" />
                  <p className="text-sm">Jogeshwari East, Mumbai - 400060, Maharashtra, India</p>
                </div>
                
                <div className="flex items-center gap-3 text-gray-500">
                  <Phone className="w-5 h-5 text-[#3b82f6] shrink-0" />
                  <a href="tel:+919326144739" className="text-sm hover:text-[#3b82f6] transition-colors">+91 9326144739</a>
                </div>

                <div className="flex items-center gap-3 text-gray-500">
                  <Mail className="w-5 h-5 text-[#3b82f6] shrink-0" />
                  <a href="mailto:vip.itinfra@gmail.com" className="text-sm hover:text-[#3b82f6] transition-colors">vip.itinfra@gmail.com</a>
                </div>

                <div className="pt-6">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Connect With Us</p>
                  <div className="flex gap-4">
                    <a href="https://www.instagram.com/vip_networks/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-full text-white hover:scale-110 transition-transform shadow-lg">
                      <Instagram size={20} />
                    </a>
                    <a href="https://wa.me/919326144739" target="_blank" rel="noopener noreferrer" className="p-3 bg-green-500 rounded-full text-white hover:scale-110 transition-transform shadow-lg">
                      <MessageCircle size={20} />
                    </a>
                    <a href="https://youtube.com/@vipnetworks" target="_blank" rel="noopener noreferrer" className="p-3 bg-red-600 rounded-full text-white hover:scale-110 transition-transform shadow-lg">
                      <Youtube size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
