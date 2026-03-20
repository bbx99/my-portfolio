import { Mail, Briefcase, User, Layout, FileText, Send, Github, Twitter, Instagram, Youtube, Linkedin, ArrowUpRight, Star, Circle, Square, Triangle, Sparkles, Pizza, Coffee, IceCream, Cat, Dog, Bird, Rabbit, Fish, Snail, Cookie } from 'lucide-react';
import { motion } from 'motion/react';

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
            <Mail size={20} /> Get in touch
          </button>
          <button className="brutal-btn-white flex items-center gap-2 w-full sm:w-auto">
            <Briefcase size={20} /> View portfolio
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
          src="/avatar.png" 
          alt="Avatar" 
          className="w-full max-w-sm object-contain rounded-full"
          referrerPolicy="no-referrer"
        />
      </motion.div>
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
        <div className="space-y-6 mb-10">
          <div className="flex items-start gap-4">
            <div className="w-6 h-6 bg-brand-purple brutal-border rounded-md mt-1"></div>
            <div>
              <h4 className="font-black text-xl">15+ years of experience</h4>
              <p className="text-gray-600">Eu pellentesque arcu ornare velit faucibus egestas me gravida sed in purus enim molestie gravida.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-6 h-6 bg-brand-pink brutal-border rounded-md mt-1"></div>
            <div>
              <h4 className="font-black text-xl">100+ successfull projects</h4>
              <p className="text-gray-600">Eu pellentesque arcu ornare velit faucibus egestas me gravida sed in purus enim molestie gravida.</p>
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

const Experience = () => {
  const jobs = [
    { date: 'Mar 2020 - Dec 2023', title: 'Head of Product Design', color: 'bg-brand-yellow' },
    { date: 'Sep 2017 - Feb 2020', title: 'Web Designer', color: 'bg-brand-pink' }
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


const HomePage = () => {
    return (
        <>
          <Hero />
          <Services />
          <Portfolio />
          <About />
          <Experience />
        </>
      );
}

export default HomePage;
