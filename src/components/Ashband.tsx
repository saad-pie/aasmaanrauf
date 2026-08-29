import React, { useState } from 'react';
import { Watch, Cpu, Zap, Activity, Waves, Fingerprint, Lock, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export function AshbandSection() {
  const [isExecuting, setIsExecuting] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleGesture = () => {
    if (isExecuting || completed) return;
    setIsExecuting(true);
    setTimeout(() => {
      setIsExecuting(false);
      setCompleted(true);
    }, 2000);
  };

  return (
    <div className="w-full bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden font-sans relative">
      <div className="absolute top-0 right-0 p-32 bg-indigo-500/10 blur-[100px] rounded-full -z-10 mix-blend-screen pointer-events-none"></div>
      
      <div className="p-8 border-b border-neutral-800">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-10 w-10 bg-indigo-500/10 text-indigo-400 rounded-xl flex items-center justify-center">
            <Watch className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-wider">Premium Wearable Idea • Screenless Control</h3>
            <h2 className="text-2xl font-bold text-white tracking-tight">ASH BAND Ecosystem</h2>
          </div>
        </div>
        <p className="text-neutral-400 mt-4 max-w-2xl text-sm md:text-base leading-relaxed">
          Physical wearable concept for controlling any technology with voice and gestures. From generating PDF reports to synthesizing videos and uploading them to YouTube. As co-owner, my network transformed this from a software MVP into a tangible hardware product vision.
        </p>
      </div>

      <div className="grid md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-neutral-800 bg-neutral-950">
        
        {/* Hardware Visual */}
        <div className="p-8 col-span-12 md:col-span-5 flex flex-col items-center justify-center relative min-h-[300px]">
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <div className="w-48 h-48 border border-indigo-500 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute w-64 h-64 border border-dashed border-indigo-500 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
          </div>
          
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="relative z-10 w-40 h-40 bg-gradient-to-br from-neutral-800 to-black border-4 border-neutral-800 rounded-[2rem] shadow-2xl flex flex-col items-center justify-center p-4 ring-1 ring-indigo-500/50"
          >
            <div className="text-indigo-400 font-bold tracking-widest text-lg mb-1">ASH</div>
            <div className="text-neutral-500 text-xs tracking-widest">BAND V2</div>
            <div className="mt-4 flex gap-2">
              <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)] animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-neutral-700"></div>
            </div>
          </motion.div>
          
          <div className="mt-8 text-center z-10">
            <h4 className="text-white font-bold tracking-widest mb-2">Ready to Control Any Tech</h4>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold rounded-full uppercase tracking-wider">
              <Activity className="h-3 w-3" /> Gesture Status: Active Ready
            </div>
          </div>
        </div>

        {/* Execution Details */}
        <div className="p-8 col-span-12 md:col-span-7 bg-[#0a0a0c]">
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl">
              <div className="text-neutral-500 text-xs font-bold uppercase tracking-wider mb-1">Core Goal</div>
              <div className="text-neutral-200 font-medium text-sm">"Anything to Voice/Gesture"</div>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl">
              <div className="text-neutral-500 text-xs font-bold uppercase tracking-wider mb-1">Complexity Filter</div>
              <div className="text-neutral-200 font-medium text-sm flex items-center gap-2">
                65% <div className="h-1.5 w-16 bg-neutral-800 rounded-full overflow-hidden"><div className="h-full w-[65%] bg-indigo-500 rounded-full"></div></div>
              </div>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl">
              <div className="text-neutral-500 text-xs font-bold uppercase tracking-wider mb-1">Target Tech</div>
              <div className="text-neutral-200 font-medium text-sm">YouTube, PDF, OS</div>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl">
              <div className="text-neutral-500 text-xs font-bold uppercase tracking-wider mb-1">Interaction Mode</div>
              <div className="text-neutral-200 font-medium text-sm">Acoustic HUD + Haptic</div>
            </div>
          </div>

          <div className="bg-neutral-900 border border-indigo-500/20 rounded-2xl p-6 shadow-lg relative overflow-hidden">
            {isExecuting && (
              <div className="absolute inset-0 bg-indigo-500/10 z-0 animate-pulse"></div>
            )}
            
            <h4 className="text-sm font-bold text-indigo-400 mb-4 flex items-center gap-2 uppercase tracking-wider relative z-10">
              <Zap className="h-4 w-4" /> Execution Pipeline
            </h4>
            
            <div className="bg-black/50 border border-neutral-800 rounded-xl p-4 mb-4 relative z-10 font-mono text-sm text-neutral-300">
              <div className="text-neutral-500 mb-1 text-xs">DISPATCHED COMMAND:</div>
              "Summarize meeting notes into SteveAI task backlog"
            </div>
            
            <button 
              onClick={handleGesture}
              disabled={isExecuting || completed}
              className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all relative z-10 ${
                isExecuting ? 'bg-indigo-600 text-white shadow-[0_0_30px_rgba(99,102,241,0.5)]' : 
                completed ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 
                'bg-neutral-800 text-neutral-300 hover:bg-neutral-700 border border-neutral-700'
              }`}
            >
              {isExecuting ? <><Waves className="h-5 w-5 animate-pulse" /> Processing Haptic Input...</> : 
               completed ? <><ShieldCheck className="h-5 w-5" /> Command Executed Seamlessly</> : 
               <><Fingerprint className="h-5 w-5" /> Double-Pinch to Execute</>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
