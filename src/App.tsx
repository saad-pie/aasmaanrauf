/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Briefcase, 
  Trophy, 
  GraduationCap, 
  Globe, 
  Mail, 
  ChevronDown,
  Cpu,
  Phone,
  Bot
} from 'lucide-react';

import { Terminal } from './components/Terminal';
import { SteveAISection } from './components/SteveAI';
import { AshbandSection } from './components/Ashband';
import { CallerAISection } from './components/CallerAI';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 font-sans selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight text-white">AR.</span>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-neutral-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#achievements" className="hover:text-white transition-colors">Achievements</a>
          </div>
          <a 
            href="#contact" 
            className="px-4 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-neutral-200 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-neutral-950 to-neutral-950 -z-10"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-6 border border-indigo-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span>Available for new opportunities</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Hi, I'm Aasmaan Rauf. <br/>
              <span className="text-neutral-500 text-4xl md:text-6xl">Fundraiser & Entrepreneur.</span>
            </h1>
            
            <p className="text-lg text-neutral-400 leading-relaxed mb-10 max-w-xl">
              At 15 years old, I am the marketing manager and co-owner driving growth for innovative tech startups. Bridging the gap between software MVPs and real-world hardware products.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition-colors group"
              >
                Explore Ventures
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#achievements" 
                className="inline-flex items-center justify-center px-6 py-3 bg-neutral-900 text-white font-medium rounded-full border border-neutral-800 hover:bg-neutral-800 transition-colors"
              >
                Academic Record
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full"
          >
            <Terminal />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <GraduationCap className="mr-3 h-8 w-8 text-indigo-500" />
                The Journey So Far
              </h2>
              <div className="space-y-4 text-neutral-400 leading-relaxed text-lg">
                <p>
                  I am currently completing my O Levels at <strong className="text-neutral-200">Lahore Grammar School (LGS) Johar Town Paragon Main Branch</strong> in Lahore, Pakistan. 
                </p>
                <p>
                  Despite being 15, I've developed a strong track record of exceptional dedication and early entrepreneurial success. I specialize in marketing, fundraising, and forging the necessary connections to scale products.
                </p>
                <p>
                  Beyond business, I am an award-winning student debater and researcher, constantly seeking to expand my understanding of global economics and diplomacy.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-2xl">
                <h3 className="text-4xl font-black text-white mb-2">15</h3>
                <p className="text-sm text-neutral-500 font-medium uppercase tracking-wider">Years Old</p>
              </div>
              <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-2xl">
                <h3 className="text-4xl font-black text-white mb-2">3</h3>
                <p className="text-sm text-neutral-500 font-medium uppercase tracking-wider">Tech Startups</p>
              </div>
              <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-2xl col-span-2">
                <h3 className="text-2xl font-bold text-white mb-2">Co-owner & Manager</h3>
                <p className="text-sm text-neutral-500">Leading fundraising and marketing strategies.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Ventures</h2>
            <p className="text-neutral-400 max-w-2xl text-lg">
              Partnering with Saadpie, I lead the marketing and fundraising efforts across these innovative companies, directly impacting their growth and viability.
            </p>
          </div>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SteveAISection />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <CallerAISection />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <AshbandSection />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24 px-6 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Academic Excellence</h2>
              <p className="text-neutral-400 max-w-2xl text-lg">
                Beyond entrepreneurship, I am highly active in regional circuits for debate, public speaking, and economics.
              </p>
            </div>
            <div className="flex items-center space-x-2 text-indigo-400 font-medium bg-indigo-500/10 px-4 py-2 rounded-full w-fit">
              <Trophy className="h-5 w-5" />
              <span>LGS JTI Senior Delegation</span>
            </div>
          </div>

          <div className="space-y-6">
            {/* WSC */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 md:p-10"
            >
              <div className="flex flex-col md:flex-row gap-6 md:items-center">
                <div className="h-16 w-16 bg-yellow-500/10 text-yellow-500 rounded-full flex items-center justify-center shrink-0">
                  <Globe className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">World Scholar's Cup (WSC) 2026</h3>
                  <p className="text-neutral-400 leading-relaxed">
                    Competed at the Lahore Regional Round. Won a <strong className="text-yellow-500">Gold Medal</strong> in individual and team achievements. Contributed to LGS JTI's total haul of 11 gold and 19 silver medals, successfully qualifying the team for the Global Round.
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* MUN */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8"
              >
                <Briefcase className="h-10 w-10 text-blue-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">Model United Nations</h3>
                <p className="text-neutral-400">
                  Earned a <strong className="text-white">Special Mention</strong> award representing the Social, Humanitarian, and Cultural Committee (SOCHUM) at the LGS Muslim Town MUN.
                </p>
              </motion.div>

              {/* Research */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8"
              >
                <div className="flex space-x-2 mb-6">
                  <div className="h-10 w-2 bg-indigo-500 rounded-full"></div>
                  <div className="h-10 w-2 bg-indigo-500/50 rounded-full"></div>
                  <div className="h-10 w-2 bg-indigo-500/20 rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Research & Analysis</h3>
                <p className="text-neutral-400">
                  Recognized for co-authoring academic presentations, including data-driven comparative analyses on Pakistan's regional trade networks with neighboring countries.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-20 px-6 bg-black border-t border-neutral-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <span className="text-3xl font-black text-white tracking-tighter">AR.</span>
            <p className="text-neutral-500 mt-2 text-sm">
              Fundraiser, Marketer, and Entrepreneur.<br/>
              Lahore, Pakistan.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="https://www.instagram.com/aasmaanrauf/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-neutral-900 text-white border border-neutral-800 font-semibold rounded-full hover:bg-neutral-800 transition-colors"
            >
              Instagram
            </a>
            <a 
              href="mailto:aasmaanrauf@gmail.com" 
              className="flex items-center px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Aasmaan
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
