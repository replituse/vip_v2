import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Mail, Phone, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Our Services" },
    { href: "/contact", label: "Contact Us" },
  ];

  const variants = {
    closed: { x: "100%", opacity: 0 },
    open: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 30 } },
  };

  return (
    <>
      {/* Floating Header */}
      <header className="fixed top-0 left-0 right-0 z-50 p-4 flex justify-between items-center pointer-events-none">
        {/* Logo Area */}
        <Link href="/" className="pointer-events-auto">
          <div className="flex flex-col bg-background/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 shadow-lg">
            <span className="text-xl font-display font-bold text-white tracking-wide">
              VIP <span className="text-primary">NETWORKS</span>
            </span>
          </div>
        </Link>

        {/* Hamburger Trigger */}
        <button 
          onClick={toggleMenu}
          className="pointer-events-auto p-3 bg-primary text-primary-foreground rounded-full shadow-lg shadow-primary/20 hover:scale-110 active:scale-95 transition-transform"
        >
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Full Screen Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            
            {/* Drawer Content */}
            <motion.div
              variants={variants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 w-full md:w-[400px] bg-background border-l border-white/10 z-[70] p-8 flex flex-col shadow-2xl"
            >
              {/* Close Button */}
              <div className="flex justify-end mb-12">
                <button 
                  onClick={toggleMenu}
                  className="p-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col space-y-6">
                {menuItems.map((item) => (
                  <Link 
                    key={item.href} 
                    href={item.href} 
                    className={`text-3xl font-display font-bold hover:text-primary transition-colors ${location === item.href ? 'text-primary' : 'text-white'}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="flex-grow" />

              {/* Contact Info Footer within Drawer */}
              <div className="space-y-6 pt-8 border-t border-white/10">
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <p className="text-sm">
                    Jogeshwari East,<br />
                    Mumbai - 400060,<br />
                    Maharashtra, India
                  </p>
                </div>
                
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <a href="tel:+919326144739" className="text-sm hover:text-white transition-colors">
                    +91 9326144739
                  </a>
                </div>

                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <a href="mailto:vip.itinfra@gmail.com" className="text-sm hover:text-white transition-colors">
                    vip.itinfra@gmail.com
                  </a>
                </div>

                <p className="text-xs text-muted-foreground/50 pt-4">
                  © 2026 VIP Networks. All rights reserved.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
