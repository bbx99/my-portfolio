import { Mail, Briefcase, User, Layout, FileText, Send, Github, Twitter, Instagram, Youtube, Linkedin, ArrowUpRight, Star, Circle, Square, Triangle, Sparkles, Pizza, Coffee, IceCream, Cat, Dog, Bird, Rabbit, Fish, Snail, Cookie, X, Copy, Check, Image, Download, Mouse, Palette, Megaphone, Wand2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const FloatingShapes = () => {
  const shapes = [
    // Original shapes
    { Icon: Star, color: 'text-brand-yellow', top: '10%', left: '5%', size: 40, delay: 0 },
    { Icon: Circle, color: 'text-brand-pink', top: '25%', left: '85%', size: 30, delay: 1 },
    { Icon: Square, color: 'text-brand-blue', top: '60%', left: '10%', size: 35, delay: 2 },
    { Icon: Triangle, color: 'text-brand-purple', top: '80%', left: '90%', size: 25, delay: 1.5 },
    { Icon: Sparkles, color: 'text-brand-pink', top: '45%', left: '75%', size: 30, delay: 0.5 },

    // New cute animals and food
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
      <div className="absolute top-[-15%] left-[-15%] w-[50%] h-[50%] bg-pink-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-15%] right-[-15%] w-[50%] h-[50%] bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-[30%] right-[10%] w-[40%] h-[40%] bg-yellow-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      <div className="absolute bottom-[10%] left-[5%] w-[40%] h-[40%] bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '6s' }}></div>
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4, y: [0, -30, 0], rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 5 + Math.random() * 3, repeat: Infinity, delay: s.delay, ease: "easeInOut" }}
          className={`absolute ${s.color}`}
          style={{ top: s.top, left: s.left }}
        >
          <s.Icon size={s.size} strokeWidth={3} />
        </motion.div>
      ))}
    </div>
  )
}

const Navbar = ({ onContactClick, onResumeClick }) => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let scrollTimeout;
    const handleScroll = () => {
      setHidden(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => { setHidden(false); }, 300);
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
    { name: 'Strengths', href: '#strengths' },
    { name: 'Projects', href: '#portfolio' },
    { name: 'Experience', href: '#experience' },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="nav-pill flex items-center justify-between p-2"
      >
        <img src="/food.png" alt="Dim Sum Icon" className="w-16 h-16 object-contain" />
        
        <div className="hidden md:flex items-center gap-3">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="font-bold text-lg hover:text-brand-pink transition-colors p-2">
              {item.name}
            </a>
          ))}
          <button onClick={onResumeClick} className="font-bold text-lg hover:text-brand-pink transition-colors bg-transparent border-none cursor-pointer p-2">
            Resume
          </button>
        </div>

        <button onClick={onContactClick} className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white brutal-border">
          <Mail size={20} />
        </button>
      </motion.div>
    </nav>
  );
};

const Hero = ({ onContactClick }) => {
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
          <button onClick={onContactClick} className="brutal-btn-black flex items-center gap-2 w-full sm:w-auto">
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

const About = ({ onContactClick }) => {
  return (
    <section id="about" className="py-20 px-4 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <div className="w-full aspect-square rounded-full border-4 border-black bg-brand-pink overflow-hidden brutal-shadow-lg">
           <img 
            src="/m2.JPG" 
            alt="About" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
      <div>
        <h2 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
          Get to know <br /> <span className="bg-brand-blue text-white px-4 brutal-border">my story</span>
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          I grew up in <strong>China</strong> and moved to the <strong>United States</strong> as a high school freshman. I first studied in <strong>Worcester, Massachusetts</strong>, and later moved to <strong>Los Angeles</strong>. I went on to earn my bachelor’s degree from <strong>UC San Diego</strong>. After a year working, I came to <strong>New York</strong> to pursue my master’s degree in <strong>Arts Administration</strong> at <strong>Columbia University</strong>. Living and studying across different places has given me a broader perspective and continues to shape my interests in arts, culture, and meaningful public engagement.
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
        <a
          href="https://www.linkedin.com/in/qinyan-zhao"
          target="_blank"
          rel="noopener noreferrer"
          className="brutal-btn-black inline-flex items-center gap-2"
        >
          <User size={20} /> More about me
        </a>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Arts Administration',
      desc: <>My experience in galleries, museums, and cultural environments has given me a strong foundation in <strong>exhibition support</strong>, <strong>cultural programming</strong>, <strong>gallery operations</strong>, and <strong>audience facing work</strong>. I’m especially interested in helping creative organizations run in a way that feels thoughtful, organized, and welcoming to the public.</>,
      color: 'bg-gray-100',
      icon: <Palette className="text-brand-blue" size={48} />
    },
    {
      title: 'Marketing & Comms',
      desc: <>Through work in media, branding, and digital content, I’ve built experience in <strong>audience communication</strong>, <strong>social media support</strong>, <strong>website updates</strong>, and <strong>online presentation</strong>. I enjoy using content and communication as a way to help brands and public facing organizations connect more clearly and meaningfully with their audiences.</>,
      color: 'bg-gray-100',
      icon: <Megaphone className="text-brand-pink" size={48} />
    },
    {
      title: 'Event Coordination',
      desc: <>I’ve supported events and projects in both <strong>student facing</strong> and <strong>public facing settings</strong>, which has helped me build a <strong>practical, adaptable approach to coordination</strong>. Growing up around multiple cultures has made me especially aware of how different communities may have different needs, and I try to bring that perspective into the way I <strong>support programs, communication, and audience experience</strong>.</>,
      color: 'bg-gray-100',
      icon: <Sparkles className="text-brand-purple" size={48} />
    }
  ];

  return (
    <section id="strengths" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
          My <span className="bg-brand-pink text-white px-4 brutal-border">core strengths</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="brutal-card p-0"
          >
            <div className={`h-40 ${s.color} flex items-center justify-center border-b-2 border-black`}>
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
    <section id="portfolio" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
          Take a look at my <br />
          <span className="bg-brand-yellow text-black px-4 brutal-border">brand project</span>
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
            <span className="text-2xl font-black">ANAM CARA</span>
          </div>
          <div className="inline-block bg-black text-white px-4 py-1 rounded-full text-sm font-bold w-fit mb-6">Jade Brand ｜ E-commerce ｜ Content ｜ Website</div>
          <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">A jade brand｜Co-created</h3>
          <p className="text-gray-600 text-lg mb-10 max-w-md">ANAM CARA is a jade brand I co-created with a friend. Through this project, I’ve been involved in brand presentation, website building, product storytelling, and digital content, which has helped me better understand how a creative brand connects with its audience online.</p>
          <a href="https://anamcarajade.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-black text-lg hover:gap-4 transition-all">Visit Anam Cara <ArrowUpRight size={24} /></a>
        </div>
        
        {/* Right Video */}
        <div className="flex-1 border-t-2 md:border-t-0 md:border-l-2 border-black overflow-hidden">
          <video 
            src="/brand-video.MP4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
};

const Experience = ({ onSeeResumeClick }) => {
  const jobs = [
    { date: 'Jan 2024 – Jan 2025', title: 'Gallery Intern', company: ':iidrr Gallery', description: 'Supported exhibitions, artist coordination, social media content, and visitor engagement in a fast paced contemporary art environment. This role gave me hands-on experience in both gallery operations and the public facing side of cultural work.', color: 'bg-brand-yellow', icon: <Image size={24} /> },
    { date: 'Jul 2022 – Feb 2023', title: 'Marketing Media Operations Coordinator', company: 'TVB (USA) Inc.', description: 'Supported digital media operations through content coordination, SEO, branding, and partnership work. This experience deepened my understanding of audience growth, platform communication, and how creative content connects with the market.', color: 'bg-brand-pink', icon: <Youtube size={24} /> },
    { date: 'Mar 2023 – Jun 2023', title: 'Account Executive Intern', company: 'Publicis Groupe – Leo Burnett', description: 'Worked across client communication, project coordination, timelines, and campaign support in an agency setting. It strengthened my ability to stay organized, communicate clearly, and adapt quickly in a collaborative environment.', color: 'bg-green-500', icon: <Briefcase size={24} /> }
  ];

  return (
    <section id="experience" className="bg-black py-32 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-end">
        <div className="flex flex-col h-full justify-between">
          <div>
            <h2 className="text-7xl md:text-8xl font-black text-white mb-8 leading-tight">
              My work in <br />
              <span className="bg-brand-purple text-white px-4 brutal-border">arts, media & events</span>
            </h2>
            <p className="text-2xl text-gray-400 mb-10">
              My professional experience spans galleries, museums, media, and event settings. Through these roles, I’ve developed skills in audience engagement, digital communication, project coordination, public facing support, and website building across cultural and creative environments.
            </p>
          </div>
          <button onClick={onSeeResumeClick} className="brutal-btn-white flex items-center gap-2 w-fit"> <FileText size={20} /> See full resume</button>
        </div>
        <div>
          <div className="text-center mb-4">
            <div className="inline-flex items-center gap-2 bg-brand-pink text-white font-bold px-4 py-2 rounded-full brutal-border">
              <Mouse size={20} />
              <span>Scroll for more</span>
            </div>
          </div>
          <div className="space-y-4 max-h-[38rem] overflow-y-auto p-4 bg-yellow-200 rounded-2xl">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="brutal-card p-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-bold text-gray-500">{job.date}</span>
                    <div className={`w-12 h-12 rounded-full border-2 border-black ${job.color} flex items-center justify-center`}>
                      {job.icon || <ArrowUpRight size={24} />}
                    </div>
                  </div>
                  <h3 className="text-2xl font-black mb-1">{job.title}</h3>
                  {job.company && <h4 className="text-lg font-bold text-gray-500 mb-3">{job.company}</h4>}
                  <p className="text-gray-600">{job.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ onResumeClick }) => {
  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Strengths', href: '#strengths' },
    { name: 'Projects', href: '#portfolio' },
    { name: 'Experience', href: '#experience' },
    { name: 'Resume', href: '#resume' },
  ];

  return (
    <footer className="bg-black text-white pt-32 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          whileHover="hover"
          className="relative text-center mb-32 group"
        >
          <motion.div 
            variants={{ hover: { scale: 1.2, rotate: -15, color: '#FFF500' }}}
            transition={{ type: 'spring', stiffness: 300 }}
            className="absolute -top-14 left-1/2 -translate-x-12 text-gray-700"
          >
            <Wand2 size={40} />
          </motion.div>
          <motion.div 
            variants={{ hover: { scale: [1, 1.5, 1], opacity: [0, 1, 0], color: '#FFF500' }}}
            transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 0.5 }}
            className="absolute -top-8 left-1/2 -translate-x-4 opacity-0 text-gray-700"
          >
            <Sparkles size={24} />
          </motion.div>
          
          <blockquote className="text-3xl md:text-4xl font-black text-white italic mb-4 transition-colors group-hover:text-gray-300">
            "You control your destiny, you don’t need magic to do it."
          </blockquote>
          <p className="text-xl text-gray-400 mb-6 transition-colors group-hover:text-gray-500">你掌握自己的命运，你并不需要魔法来做到这一点。</p>
          <p className="text-brand-yellow font-bold text-lg">— Merida, Brave</p>
        </motion.div>

        <div className="flex flex-col items-center justify-center mb-20">
          <h4 className="text-xl font-black mb-6">Explore</h4>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {navItems.map((item) => (
              item.name === 'Resume' ? (
                <button 
                  key={item.name} 
                  onClick={onResumeClick} 
                  className="font-bold text-lg text-gray-400 hover:text-brand-pink transition-colors bg-transparent border-none cursor-pointer p-0"
                >
                  {item.name}
                </button>
              ) : (
                <a key={item.name} href={item.href} className="font-bold text-lg text-gray-400 hover:text-brand-pink transition-colors">{item.name}</a>
              )
            ))}
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500"><p>© 2026 Kaylee Zhao. All rights reserved.</p></div>
      </div>
    </footer>
  );
};

const ContactModal = ({ email, onClose }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="brutal-card bg-white max-w-lg w-full relative"
      >
        <button onClick={onClose} className="absolute top-2 right-2 w-10 h-10 bg-brand-pink rounded-full flex items-center justify-center brutal-border text-white">
          <X size={24} strokeWidth={3} />
        </button>
        <div className="p-10">
          <h3 className="text-2xl font-black mb-4">Contact Me</h3>
          <p className="text-gray-600 mb-6">You can reach me at the email address below.</p>
          <div className="bg-gray-100 brutal-border p-4 rounded-lg flex items-center justify-between gap-4">
            <span className="font-mono text-lg truncate">{email}</span>
            <button onClick={copyToClipboard} className="brutal-btn-white flex-shrink-0">
              {copied ? <Check size={20} /> : <Copy size={20} />}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ResumeModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="brutal-card bg-white max-w-3xl w-full relative p-4"
      >
        <button onClick={onClose} className="absolute top-2 right-2 w-10 h-10 bg-brand-pink rounded-full flex items-center justify-center brutal-border text-white z-10">
          <X size={24} strokeWidth={3} />
        </button>
        <div className="p-4">
          <h3 className="text-2xl font-black mb-4 text-center">My Resume</h3>
          <div className="bg-gray-100 brutal-border rounded-lg mb-6 overflow-hidden h-[70vh]">
            <iframe
              src="/Qinyan_Zhao_Resume.pdf"
              title="My Resume"
              className="w-full h-full"
              frameBorder="0"
            ></iframe>
          </div>
          <a
            href="/Qinyan_Zhao_Resume.pdf"
            download
            className="brutal-btn-black w-full flex items-center justify-center gap-2"
          >
            <Download size={20} /> Download PDF
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const email = "kayleezhao99@gmail.com";

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openResumeModal = () => setIsResumeModalOpen(true);
  const closeResumeModal = () => setIsResumeModalOpen(false);

  return (
    <div className="min-h-screen">
      <FloatingShapes />
      <Navbar onContactClick={openModal} onResumeClick={openResumeModal} />
      <Hero onContactClick={openModal} />
      <About onContactClick={openModal} />
      <Services />
      <Portfolio />
      <Experience onSeeResumeClick={openResumeModal} />
      <Footer onResumeClick={openResumeModal} />

      <AnimatePresence>
        {isModalOpen && <ContactModal email={email} onClose={closeModal} />}
        {isResumeModalOpen && <ResumeModal onClose={closeResumeModal} />}
      </AnimatePresence>
    </div>
  );
}
