import React from 'react';
import { motion } from 'motion/react';
import { Rocket, Code, ArrowUp } from 'lucide-react';

// Grid background component
const GridBackground = () => (
  <div className="absolute inset-0 z-[-1]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, #E5E7EB 1px, transparent 0)', backgroundSize: '2rem 2rem'}}></div>
);

// ID Card Component from the image
const IdCard = () => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 0.5 }}
    className="w-full max-w-sm mx-auto bg-white p-2 rounded-2xl border-2 border-black relative shadow-lg"
  >
    <div className="bg-[#90EE90] p-4 rounded-t-xl border-b-2 border-black flex justify-between items-center">
      <h3 className="font-bold text-sm">ID CARD</h3>
      <div className="w-8 h-8 rounded-full bg-pink-300 flex items-center justify-center text-xs font-bold border-2 border-black">XMX</div>
    </div>
    <div className="p-4 space-y-3">
      <div className="flex items-center gap-4">
        <img src="/avatar.png" alt="Ximen" className="w-20 h-20 rounded-full border-2 border-black object-cover"/>
        <div className="bg-yellow-200 p-2 rounded-lg border-2 border-black w-full">
          <p className="text-xs font-bold">NAME</p>
          <p className="text-lg font-black">西门</p>
        </div>
      </div>
      <div className="bg-blue-200 p-2 rounded-lg border-2 border-black">
        <p className="text-xs font-bold">MAJOR</p>
        <p className="font-black">电气工程及其自动化</p>
      </div>
      <div className="bg-purple-200 p-2 rounded-lg border-2 border-black">
        <p className="text-xs font-bold">JOB</p>
        <p className="font-black">toB 软件产品经理</p>
      </div>
    </div>
    <div className="absolute bottom-4 right-4 bg-white p-1 rounded-md border-2 border-black">
        <p className="text-xs font-bold">OFFICIAL VIBE</p>
    </div>
  </motion.div>
);

// Timeline Component from the image
const Timeline = () => {
  const mainQuests = [
    { date: '2025.09', title: 'toB 软件产品经理, RPA + AI 方向', icon: <Rocket size={24}/>, tag: '主线' },
  ];

  const sideQuests = [
    { date: '2026.01', title: '被动地开始 AI 编程, 上线了我的个人网站', icon: <Code size={24}/>, tag: '支线' },
  ];

  return (
    <div className="mt-20">
      <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
        地球Online <span className="bg-brand-pink text-white px-4 inline-block brutal-border">开放游戏进度</span>
      </h2>
      <div className="relative mt-12 w-full max-w-4xl mx-auto">
        {/* Center line */}
        <div className="absolute left-1/2 -translate-x-1/2 h-full border-l-2 border-dashed border-gray-400"></div>
        
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-8 h-8 rounded-full bg-black border-2 border-white flex items-center justify-center">
            <ArrowUp size={20} className="text-white"/>
        </div>

        {/* Main Quests */}
        <div className="mt-16">
          <h3 className="text-2xl font-black text-center mb-8"><span className="bg-brand-pink text-white px-4 brutal-border">主线任务</span></h3>
          {mainQuests.map((item, index) => (
            <div key={index} className="mb-8 flex justify-center relative">
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-black rounded-full border-2 border-white top-1/2 -translate-y-1/2"></div>
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="w-5/12 brutal-card bg-white p-4 flex items-center gap-4"
              >
                <div className="text-sm font-bold bg-blue-500 text-white p-1 rounded-md">{item.tag}</div>
                <div className="text-sm font-bold">{item.date}</div>
                <p className="text-sm flex-1">{item.title}</p>
                <div className="w-10 h-10 rounded-full bg-brand-yellow flex items-center justify-center brutal-border">{item.icon}</div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Side Quests */}
        <div className="mt-16">
            <h3 className="text-2xl font-black text-center mb-8"><span className="bg-brand-blue text-white px-4 brutal-border">支线任务</span></h3>
            {sideQuests.map((item, index) => (
                <div key={index} className="mb-8 flex justify-center relative">
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-black rounded-full border-2 border-white top-1/2 -translate-y-1/2"></div>
                  <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="w-5/12 ml-[58.33%] brutal-card bg-white p-4 flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-brand-purple flex items-center justify-center brutal-border text-white">{item.icon}</div>
                    <p className="text-sm flex-1 text-right">{item.title}</p>
                    <div className="text-sm font-bold">{item.date}</div>
                    <div className="text-sm font-bold bg-green-500 text-white p-1 rounded-md">{item.tag}</div>
                  </motion.div>
                </div>
            ))}
        </div>

      </div>
    </div>
  );
}

const AboutMe = () => {
  return (
    <div className="relative min-h-screen pt-40 pb-20 px-4 overflow-hidden">
      <GridBackground />
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Welcome + ID Card */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-left"
          >
            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
              Welcome to <br />
              <span className="bg-brand-blue text-white px-4 inline-block brutal-border">西门的世界!</span>
            </h1>
            <div className="space-y-4 text-gray-700">
              <p>我出生于 2000 年 5 月, 在浙江的一个小村镇长大。</p>
              <p>家庭环境比较自由, 家人都不会对我的选择做过多干涉。这导致我在肆意生长的过程中, 拥有了很多复杂的身分。Anyway, 欢迎来到西门的世界!</p>
              <p>我是一只高精力死宅, 对出去游山玩水无感, 但精力异常旺盛, 脑子里 idea 疯狂溢出。现实中轻微社恐, 但在网络上结交了一群素未谋面的电子好友!</p>
              <p>目前在一家 995 的 toB 软件公司做产品经理, 同时也是一名 B站小 up 主, 还佛系经营了一家女生情趣用品小店 (尽管我观念还是比较传统, 咳咳)。</p>
            </div>
          </motion.div>
          <IdCard />
        </div>

        {/* Bottom Section: Timeline */}
        <Timeline />
      </div>
    </div>
  );
};

export default AboutMe;
