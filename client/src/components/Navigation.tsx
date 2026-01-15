import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Mail, Phone, MapPin, ArrowLeft, Gem, UserCheck, Handshake } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { href: "/", label: "Home", icon: Gem },
    { href: "/services", label: "Our Services", icon: UserCheck },
    { href: "/contact", label: "Contact Us", icon: Mail },
    { href: "#", label: "Partner", icon: Handshake },
  ];

  const isHomePage = location === "/";
  const isCatalogPage = location.startsWith("/services");

  const variants = {
    closed: { x: "100%", opacity: 0 },
    open: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 30 } },
  };

  if (isHomePage) return null;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 p-4 flex items-center justify-between bg-[#0f172a]/80 backdrop-blur-md border-b border-white/5 shadow-sm">
        <div className="w-10">
          {isCatalogPage && (
            <Link href="/" className="p-2 flex items-center justify-center hover:scale-110 transition-transform pointer-events-auto">
              <ArrowLeft className="w-5 h-5 text-white" />
            </Link>
          )}
        </div>

        <Link href="/" className="pointer-events-auto">
          <div className="flex flex-col px-4 py-2">
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

      {/* Full Screen Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
            />
            
            <motion.div
              variants={variants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 w-full md:w-[400px] bg-white z-[70] p-8 flex flex-col shadow-2xl rounded-l-3xl"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-2xl font-display font-bold text-primary uppercase">Menu</span>
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
                      className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${location === item.href ? 'bg-primary/10 text-primary' : 'hover:bg-gray-50 text-gray-700'}`}
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
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <p className="text-sm">Jogeshwari East, Mumbai - 400060, Maharashtra, India</p>
                </div>
                
                <div className="flex items-center gap-3 text-gray-500">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <a href="tel:+919326144739" className="text-sm hover:text-primary">+91 9326144739</a>
                </div>

                <div className="flex items-center gap-3 text-gray-500">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <a href="mailto:vip.itinfra@gmail.com" className="text-sm hover:text-primary">vip.itinfra@gmail.com</a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
