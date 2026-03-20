import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Mail, Briefcase, User, Layout, FileText, Send, Github, Twitter, Instagram, Youtube, Linkedin, ArrowUpRight, Star, Circle, Square, Triangle, Sparkles, Pizza, Coffee, IceCream, Cat, Dog, Bird, Rabbit, Fish, Snail, Cookie } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import HomePage from './HomePage';
import AboutMe from './AboutMe';

const FloatingShapes = () => {
  const shapes = [
    { Icon: Star, color: 'text-brand-yellow', top: '10%', left: '5%', size: 40, delay: 0 },
    { Icon: Circle, color: 'text-brand-pink', top: '25%', left: '85%', size: 30, delay: 1 },
    { Icon: Square, color: 'text-brand-blue', top: '60%', left: '10%', size: 35, delay: 2 },
    { Icon: Triangle, color: 'text-brand-purple', top: '80%', left: '90%', size: 25, delay: 1.5 },
    { Icon: Sparkles, color: 'text-brand-pink', top: '45%', left: '75%', size: 30, delay: 0.5 },
    { Icon: Circle, color: 'text-brand-yellow', top: '15%', left: '92%', size: 20, delay: 2.5 },
    { Icon: Sparkles, color: 'text-brand-purple', top: '70%', left: '5%', size: 45, delay: 1.2 },
    { Icon: Triangle, color: 'text-brand-blue', top: '35%', left: '3%', size: 30, delay: 0.8 },
    { Icon: Star, color: 'text-brand-yellow', top: '55%', left: '95%', size: 35, delay: 1.8 },
    { Icon: Sparkles, color: 'text-brand-blue', top: '5%', left: '50%', size: 25, delay: 2.2 },
    // Food & Animals
    { Icon: Pizza, color: 'text-orange-400', top: '12%', left: '20%', size: 35, delay: 0.2 },
    { Icon: Coffee, color: 'text-amber-700', top: '85%', left: '15%', size: 30, delay: 1.1 },
    { Icon: IceCream, color: 'text-pink-300', top: '40%', left: '90%', size: 40, delay: 0.7 },
    { Icon: Cat, color: 'text-gray-400', top: '65%', left: '80%', size: 35, delay: 2.1 },
    { Icon: Dog, color: 'text-amber-500', top: '20%', left: '40%', size: 30, delay: 1.4 },
    { Icon: Bird, color: 'text-sky-400', top: '5%', left: '80%', size: 25, delay: 0.9 },
    { Icon: Rabbit, color: 'text-rose-200', top: '75%', left: '30%', size: 40, delay: 1.6 },
    { Icon: Fish, color: 'text-blue-400', top: '50%', left: '5%', size: 30, delay: 2.3 },
    { Icon: Snail, color: 'text-emerald-400', top: '92%', left: '60%', size: 25, delay: 0.4 },
    { Icon: Cookie, color: 'text-yellow-700', top: '30%', left: '60%', size: 35, delay: 1.9 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-pink/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute top-[40%] right-[-5%] w-[30%] h-[30%] bg-brand-yellow/5 rounded-full blur-3xl"></div>

      {shapes.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 0.4,
            y: [0, -30, 0],
            rotate: [0, 15, -15, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            delay: s.delay,
            ease: "easeInOut"
          }}
          className={`absolute ${s.color}`}
          style={{ top: s.top, left: s.left }}
        >
          <s.Icon size={s.size} strokeWidth={3} />
        </motion.div>
      ))}
    </div>
  );
};

const Navbar = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let scrollTimeout;
    const handleScroll = () => {
      setHidden(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setHidden(false);
      }, 300); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Resume', href: '/#resume' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl px-4">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="nav-pill justify-between"
      >
        <Link to="/" className="w-10 h-10 rounded-full border-4 border-black flex items-center justify-center font-black text-xl">
          O
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.href} 
              className="font-bold text-xl hover:text-brand-pink transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <button className="w-10 h-10 bg-black rounded-xl flex items-center justify-center text-white brutal-border">
          <Mail size={20} />
        </button>
      </motion.div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-32 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-32">
          <div className="w-32 h-32 rounded-full bg-brand-blue brutal-border flex items-center justify-center">
             <Mail size={48} />
          </div>
          <div className="flex-1 bg-white p-4 rounded-3xl brutal-border flex flex-col md:flex-row items-center gap-4">
            <h3 className="text-black text-3xl font-black px-4">Subscribe to my newsletter</h3>
            <div className="flex-1 w-full relative">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full p-4 rounded-2xl border-2 border-black text-black focus:outline-none"
              />
              <button className="md:absolute right-2 top-2 bottom-2 bg-black text-white px-8 py-2 rounded-xl font-bold brutal-border mt-4 md:mt-0">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-brand-yellow brutal-border flex items-center justify-center text-black font-black">O</div>
              <span className="text-2xl font-black">Paperfolio X</span>
            </div>
            <p className="text-gray-400 mb-8">
              Lorem ipsum dolor sit amet consecte adipiscing elit. Lectus mattis nunc.
            </p>
            <div className="flex gap-4">
              {[Github, Twitter, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-brand-blue brutal-border flex items-center justify-center hover:bg-brand-pink transition-colors cursor-pointer">
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xl font-black mb-6">Pages</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Portfolio</li>
              <li>Single Project</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-black mb-6">Utility Pages</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Style Guide</li>
              <li>Start Here</li>
              <li>404 Not Found</li>
              <li>Password protected</li>
              <li>Licenses</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-black mb-6">Contact us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-2"><Mail size={18} /> nikhil@helpinggeeks.com</li>
              <li className="flex items-center gap-2"><Send size={18} /> +91-9000057810</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>© 2026 Paperfolio X. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <FloatingShapes />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
