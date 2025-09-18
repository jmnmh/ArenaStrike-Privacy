import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, Download, Smartphone, Apple, ChevronDown, 
  Twitter, Instagram, Discord, Gamepad2, Trophy, 
  Map, Users, Star 
} from 'lucide-react';

const App = () => {
  const [openFaq, setOpenFaq] = useState(null);
  
  const faqItems = [
    {
      question: "What are the minimum system requirements?",
      answer: "Windows 10, Intel Core i5-4460 or AMD FX-6300, 8GB RAM, NVIDIA GeForce GTX 960 4GB"
    },
    {
      question: "Is cross-platform play supported?",
      answer: "Yes! ArenaStrike supports cross-platform play between PC, Android, and iOS devices."
    },
    {
      question: "How often are new updates released?",
      answer: "We release major updates every 6-8 weeks with new maps, weapons, and game modes."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
        className="bg-black/90 backdrop-blur-sm py-4 px-6 fixed w-full z-50"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="https://placehold.co/150x50/6A0DAD/FFFFFF?text=ArenaStrike" 
              alt="ArenaStrike Logo" 
              className="h-10"
            />
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-white hover:text-purple-400 transition-colors">Features</a>
            <a href="#news" className="text-white hover:text-purple-400 transition-colors">News</a>
            <a href="#download" className="text-white hover:text-purple-400 transition-colors">Download</a>
            <a href="#community" className="text-white hover:text-purple-400 transition-colors">Community</a>
            <a href="#faq" className="text-white hover:text-purple-400 transition-colors">Support</a>
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md font-medium transition-colors">
            Play Now
          </button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-b from-purple-900 to-black pt-20">
        <div className="max-w-7xl mx-auto px-6 h-full flex flex-col items-center justify-center text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300"
            >
              ARENASTRIKE
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto"
            >
              The ultimate battle experience. Join the arena and prove your skills in the most intense multiplayer combat.
            </motion.p>
            <motion.div variants={itemVariants}>
              <a href="#download" className="inline-block bg-white text-purple-800 font-bold px-10 py-4 rounded-full text-lg hover:bg-gray-200 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/30">
                Download Now
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400"
          >
            Game Features
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: <Shield size={40} className="text-purple-400" />, title: "Advanced Combat", desc: "Realistic physics and dynamic combat mechanics that reward skill and strategy." },
              { icon: <Trophy size={40} className="text-purple-400" />, title: "Ranked Matches", desc: "Climb the leaderboards and prove your skills in competitive ranked matches." },
              { icon: <Map size={40} className="text-purple-400" />, title: "Dynamic Maps", desc: "Experience ever-changing battlefields with interactive environments and destructible elements." },
              { icon: <Gamepad2 size={40} className="text-purple-400" />, title: "Custom Loadouts", desc: "Create and save your perfect weapon configurations for different combat scenarios." },
              { icon: <Users size={40} className="text-purple-400" />, title: "Team Play", desc: "Coordinate with your squad using advanced communication tools and战术 systems." },
              { icon: <Star size={40} className="text-purple-400" />, title: "Daily Rewards", desc: "Earn exclusive items and currency through daily challenges and achievements." }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-900 p-8 rounded-xl border border-purple-900/50 hover:border-purple-500/70 transition-all cursor-pointer"
              >
                <div className="mb-6 flex justify-center">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-center mb-4">{feature.title}</h3>
                <p className="text-gray-400 text-center">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-gradient-to-b from-purple-900 to-black">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 text-white"
          >
            Download ArenaStrike
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: <Download size={32} />, platform: "PC", color: "bg-blue-600" },
              { icon: <Smartphone size={32} />, platform: "Android", color: "bg-green-600" },
              { icon: <Apple size={32} />, platform: "iOS", color: "bg-gray-600" }
            ].map((platform, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex flex-col items-center justify-center p-6 rounded-xl text-white font-bold ${platform.color} hover:opacity-90 transition-all`}
              >
                {platform.icon}
                <span className="mt-3 text-lg">{platform.platform}</span>
                <span className="text-sm opacity-80 mt-1">Free Download</span>
              </motion.button>
            ))}
          </div>

          <div className="bg-black/50 backdrop-blur-sm rounded-xl p-8 border border-purple-900/50">
            <h3 className="text-2xl font-bold mb-6 text-center">System Requirements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-bold mb-3 text-purple-400">Minimum</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Windows 10 64-bit</li>
                  <li>• Intel Core i5-4460 / AMD FX-6300</li>
                  <li>• 8GB RAM</li>
                  <li>• NVIDIA GeForce GTX 960 4GB</li>
                  <li>• 50GB available space</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3 text-purple-400">Recommended</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Windows 11 64-bit</li>
                  <li>• Intel Core i7-9700K / AMD Ryzen 7 3700X</li>
                  <li>• 16GB RAM</li>
                  <li>• NVIDIA GeForce RTX 3070</li>
                  <li>• 50GB SSD available space</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-black">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className="border border-gray-800 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full text-left p-5 flex justify-between items-center"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-medium">{item.question}</span>
                  <ChevronDown 
                    className={`transform transition-transform ${openFaq === index ? 'rotate-180' : ''} text-purple-400`}
                    size={20}
                  />
                </button>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: openFaq === index ? 'auto' : 0,
                    opacity: openFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: 'hidden' }}
                >
                  <div className="p-5 pt-0 text-gray-300">
                    {item.answer}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 border-t border-purple-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <img 
                src="https://placehold.co/150x50/6A0DAD/FFFFFF?text=ArenaStrike" 
                alt="ArenaStrike Logo" 
                className="h-10"
              />
              <p className="text-gray-400 mt-2 max-w-xs">
                The ultimate battle experience since 2023
              </p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Discord size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>© 2023 ArenaStrike. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
