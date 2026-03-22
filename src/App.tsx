import { Mail, Briefcase, User, Layout, FileText, Send, Github, Twitter, Instagram, Youtube, Linkedin, ArrowUpRight, Star, Circle, Square, Triangle, Sparkles, Pizza, Coffee, IceCream, Cat, Dog, Bird, Rabbit, Fish, Snail, Cookie } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

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
      {/* Decorative Blobs */}
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
      }, 300); // Adjust timeout as needed
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl px-4">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="nav-pill justify-between"
      >
        <div className="w-10 h-10 rounded-full border-4 border-black flex items-center justify-center font-black text-xl">
          O
        </div>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="font-bold text-xl hover:text-brand-pink transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
        <button className="w-10 h-10 bg-black rounded-xl flex items-center justify-center text-white brutal-border">
          <Mail size={20} />
        </button>
      </motion.div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-20 pb-20 px-4 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center md:text-left flex flex-col justify-center"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-8">
          I'm <span className="bg-brand-pink text-white px-4 inline-block brutal-border">Qinyan(Kaylee) Zhao</span>, <br />
          an Arts, Marketing & Events Professional base in <span className="bg-brand-blue text-white px-4 inline-block brutal-border">New York</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-lg mx-auto md:mx-0">
          Experience in arts administration, marketing, and event coordination across cultural and educational settings. I enjoy bringing people, ideas, and organizations together through thoughtful planning, strong communication, and audience focused experiences.
        </p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <button className="brutal-btn-black flex items-center gap-2 w-full sm:w-auto">
            <Mail size={20} /> Contact Me!
          </button>
        </div>
      </motion.div>
      <motion.div 
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="relative flex items-center justify-center"
      >
        <img 
          src="/my profo photo.png" 
          alt="Qinyan Zhao" 
          className="w-full max-w-md aspect-[4/5] object-cover rounded-3xl brutal-border brutal-shadow-lg"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 px-4 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <div className="w-full aspect-square rounded-full border-4 border-black bg-brand-pink overflow-hidden brutal-shadow-lg">
           <img 
            src="https://picsum.photos/seed/about/800/800" 
            alt="About" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
      <div>
        <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
          Get to know <span className="bg-brand-blue text-white px-4 brutal-border">my story</span>
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          I grew up in <strong>China</strong> and moved to the <strong>United States</strong> as a high school freshman. I first studied in <strong>Worcester, Massachusetts</strong>, at St. Peter Marian Junior Senior High School, and later moved to <strong>Los Angeles</strong>, where I attended San Gabriel Academy and graduated from high school. I went on to earn my bachelor’s degree from <strong>UC San Diego</strong>. After spending a year working, I came to <strong>New York</strong> to pursue my master’s degree in <strong>Arts Administration</strong> at <strong>Columbia University</strong>. Living and studying across different places has given me a broader perspective and continues to shape my interests in arts, culture, and meaningful public engagement.
        </p>
        <div className="space-y-8 mb-10">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 flex-shrink-0">
              <img src="/ucsd.png" alt="UCSD Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h4 className="font-black text-xl">University of California, San Diego</h4>
              <p className="text-gray-500 font-medium">[Provost Honors Student]</p>
              <p className="text-gray-600 mt-2">
                <span className="font-bold">Major:</span> Visual Art - Media<br/>
                <span className="font-bold">Minor:</span> Communication
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 flex-shrink-0">
               <img src="/tc.png" alt="Teachers College Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h4 className="font-black text-xl">Teachers College, Columbia University</h4>
              <p className="text-gray-600 mt-2">
                <span className="font-bold"> Degree: </span> Master of Art in Arts Administration
              </p>
            </div>
          </div>
        </div>
        <button className="brutal-btn-black flex items-center gap-2">
          <User size={20} /> More about me
        </button>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Arts Administration',
      desc: 'Strategic planning and operational support for cultural organizations.',
      color: 'bg-gray-100',
      icon: <Briefcase className="text-brand-blue" size={48} />
    },
    {
      title: 'Marketing & Comms',
      desc: 'Audience engagement and promotional campaigns for cultural events.',
      color: 'bg-gray-100',
      icon: <Send className="text-brand-pink" size={48} />
    },
    {
      title: 'Event Coordination',
      desc: 'Full-service planning for galas, exhibitions, and performances.',
      color: 'bg-gray-100',
      icon: <Sparkles className="text-brand-purple" size={48} />
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-black mb-6">
          My broad <span className="bg-brand-pink text-white px-4 brutal-border">set of services</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Lacus, adipiscing lectus convallis purus aliquet cursus magnaol montes augue donec cras turpis ultrices nulla sed doler.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="brutal-card p-0"
          >
            <div className={`h-64 ${s.color} flex items-center justify-center border-b-2 border-black`}>
              {s.icon}
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-black mb-4">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Portfolio = () => {
  return (
    <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-black mb-6">
          Take a look at my <br />
          <span className="bg-brand-yellow text-black px-4 brutal-border">design portfolio</span>
        </h2>
      </div>
      
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="brutal-card p-0 flex flex-col md:flex-row min-h-[500px]"
      >
        {/* Left Content */}
        <div className="flex-1 p-8 md:p-16 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-brand-purple rounded-lg brutal-border flex items-center justify-center text-white">
              <Layout size={16} />
            </div>
            <span className="text-2xl font-black">studio</span>
          </div>
          
          <div className="inline-block bg-black text-white px-4 py-1 rounded-full text-sm font-bold w-fit mb-6">
            UI/UX Design
          </div>
          
          <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Studio user research and analysis
          </h3>
          
          <p className="text-gray-600 text-lg mb-10 max-w-md">
            In ultricies viverra sed at hendrerit drogon nunc scelerisque nisl pellentesque et dignissim at aenean tempor adipiscing eget mi diam at tempus.
          </p>
          
          <a href="#" className="flex items-center gap-2 font-black text-lg hover:gap-4 transition-all">
            View case study <ArrowUpRight size={24} />
          </a>
        </div>
        
        {/* Right Illustration */}
        <div className="flex-1 bg-brand-purple flex items-center justify-center p-8 md:p-16 border-t-2 md:border-t-0 md:border-l-2 border-black">
          <div className="w-full max-w-md bg-white brutal-border rounded-xl p-4 brutal-shadow-lg">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-brand-pink brutal-border"></div>
              <div className="w-3 h-3 rounded-full bg-brand-yellow brutal-border"></div>
              <div className="w-3 h-3 rounded-full bg-brand-blue brutal-border"></div>
            </div>
            <div className="aspect-video bg-brand-purple brutal-border rounded-lg flex items-center justify-center text-white mb-4">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-2 w-3/4 bg-gray-200 rounded"></div>
              <div className="h-2 w-1/2 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Experience = () => {
  const jobs = [
    { date: 'Mar 2020 - Dec 2023', title: 'Head of Product Design', color: 'bg-brand-yellow' },
    { date: 'Sep 2017 - Feb 2020', title: 'Web Designer', color: 'bg-brand-pink' },
    { date: 'Sep 2011 - Feb 2020', title: 'TV Production', color: 'bg-brand-green' }
  ];

  return (
    <section id="experience" className="bg-black py-32 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-6xl md:text-7xl font-black text-white mb-8 leading-tight">
            Take a look at my <br />
            <span className="bg-brand-purple text-white px-4 brutal-border">past experience</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Eu pellentesque arcu ornare velit faucibus egestas gravida sed in purus enim molestie gravida imperdiet integer.
          </p>
          <button className="brutal-btn-white flex items-center gap-2">
            <FileText size={20} /> See full resume
          </button>
        </div>
        <div className="space-y-8">
          {jobs.map((job, i) => (
            <div key={i} className="brutal-card p-8">
              <div className="flex justify-between items-start mb-6">
                <span className="font-bold text-gray-500">{job.date}</span>
                <div className={`w-12 h-12 rounded-full border-2 border-black ${job.color} flex items-center justify-center`}>
                  <ArrowUpRight size={24} />
                </div>
              </div>
              <h3 className="text-3xl font-black mb-4">{job.title}</h3>
              <p className="text-gray-600">
                Vel facilisis volutpat est velit egestas dui. Urna nec cidu praesent semper feugiat. Vulputate ut pharetra sit.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
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
    <div className="min-h-screen">
      <FloatingShapes />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Experience />
      <Footer />
    </div>
  );
};
