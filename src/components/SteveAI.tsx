import React, { useState } from 'react';
import { Bot, Terminal, Code2, Cloud, ArrowRight, CheckCircle2, Loader2, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function SteveAISection() {
  const [isExecuting, setIsExecuting] = useState(false);
  const [step, setStep] = useState(0);
  const [inputValue, setInputValue] = useState('Analyze repository, identify bottleneck, and deploy fix to cloud edge.');

  const executeIntent = () => {
    if (isExecuting) return;
    setIsExecuting(true);
    setStep(1);
    
    setTimeout(() => setStep(2), 1000);
    setTimeout(() => setStep(3), 2000);
    setTimeout(() => setStep(4), 3200);
    setTimeout(() => setStep(5), 4500);
    setTimeout(() => setIsExecuting(false), 4500);
  };

  return (
    <div className="w-full bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden font-sans">
      <div className="p-8 border-b border-neutral-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-10 w-10 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider">Flagship Orchestration Engine</h3>
                <h2 className="text-2xl font-bold text-white tracking-tight">SteveAI Multi-Modal v4.0</h2>
              </div>
            </div>
            <p className="text-neutral-400 mt-3 max-w-lg text-sm md:text-base">
              Co-created with Saadpie. As marketing manager, I led user acquisition and funding to scale these models.
            </p>
          </div>
          <a href="https://steveai-v4.vercel.app" target="_blank" rel="noopener noreferrer" className="shrink-0 flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors shadow-lg">
            Launch Actual Platform <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="flex flex-wrap gap-2 text-xs font-medium">
          <span className="px-3 py-1.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full flex items-center gap-1.5"><Sparkles className="h-3 w-3"/> Autonomous Agent Mode</span>
          <span className="px-3 py-1.5 bg-neutral-800 text-neutral-300 rounded-full border border-neutral-700">Neural Chat Hub</span>
          <span className="px-3 py-1.5 bg-neutral-800 text-neutral-300 rounded-full border border-neutral-700">Image Synthesis</span>
          <span className="px-3 py-1.5 bg-neutral-800 text-neutral-300 rounded-full border border-neutral-700">Video Generation</span>
          <span className="px-3 py-1.5 bg-neutral-800 text-neutral-300 rounded-full border border-neutral-700">Live Voice (Gemini)</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-neutral-800 bg-neutral-950">
        <div className="p-8">
          <h4 className="text-sm font-bold text-neutral-300 mb-4 flex items-center gap-2 uppercase tracking-wider">
            <Terminal className="h-4 w-4 text-neutral-500" /> Task / Intent Dispatcher
          </h4>
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-1 mb-4 shadow-inner">
            <textarea 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full bg-transparent text-neutral-200 p-4 outline-none resize-none font-mono text-sm min-h-[100px]"
              placeholder="Enter objective..."
            />
          </div>
          <button 
            onClick={executeIntent}
            disabled={isExecuting || step === 5}
            className={`w-full py-3 px-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
              isExecuting ? 'bg-neutral-800 text-neutral-500 cursor-not-allowed' : 
              step === 5 ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 
              'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-500/20'
            }`}
          >
            {isExecuting ? <><Loader2 className="h-4 w-4 animate-spin" /> Processing...</> : 
             step === 5 ? <><CheckCircle2 className="h-4 w-4" /> Intent Completed</> : 
             <><Code2 className="h-4 w-4" /> Execute Intent</>}
          </button>
        </div>

        <div className="p-8 bg-[#0a0a0c] font-mono">
          <h4 className="text-sm font-bold text-neutral-400 mb-4 uppercase tracking-wider flex justify-between items-center">
            <span>Multi-Model Reasoning Trace</span>
            {step > 0 && <span className="text-xs px-2 py-1 bg-neutral-800 rounded text-neutral-300">Chain-of-Thought</span>}
          </h4>
          
          <div className="space-y-4 text-sm">
            {step === 0 && (
              <div className="text-neutral-600 flex items-center justify-center h-40 border border-dashed border-neutral-800 rounded-xl">
                Awaiting intent dispatch...
              </div>
            )}
            
            {step > 0 && (
              <motion.div initial={{opacity:0, x:-10}} animate={{opacity:1, x:0}} className="text-neutral-300">
                <span className="text-blue-400">1.</span> Decomposing high-level objective into 5 atomic tasks...
              </motion.div>
            )}
            
            {step > 1 && (
              <motion.div initial={{opacity:0, x:-10}} animate={{opacity:1, x:0}} className="text-neutral-300">
                <span className="text-blue-400">2.</span> Scanning src/lib architecture for O(N^2) complexity...
              </motion.div>
            )}
            
            {step > 2 && (
              <motion.div initial={{opacity:0, x:-10}} animate={{opacity:1, x:0}} className="text-neutral-300">
                <span className="text-blue-400">3.</span> Synthesizing optimized patch and running unit tests...
              </motion.div>
            )}
            
            {step > 3 && (
              <motion.div initial={{opacity:0, x:-10}} animate={{opacity:1, x:0}} className="text-neutral-300 flex items-center gap-2">
                <span className="text-blue-400">4.</span> Dispatching deployment payload to Vercel/Cloudflare Edge.
                <Cloud className="h-4 w-4 text-blue-400" />
              </motion.div>
            )}

            {step > 4 && (
              <motion.div initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                <div className="text-green-400 font-bold mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" /> SteveAI Synthesized Output: Verified
                </div>
                <div className="text-neutral-400 text-xs space-y-1">
                  <div>[SteveAI Autonomous Agent Mode]</div>
                  <div>Status: Objective Accomplished</div>
                  <div>• Task 1: Repository scanned. Bottleneck found in data_mapper.ts.</div>
                  <div>• Task 2: Optimized O(N^2) loop to O(log N) using Hash Map.</div>
                  <div>• Task 3: 14/14 tests passed.</div>
                  <div>• Dispatch: Patch deployed to steveai-v4.vercel.app.</div>
                  <div className="mt-2 pt-2 border-t border-green-500/20 text-green-500/60 flex justify-between">
                    <span>Engine: SteveAI Multi-Modal v4.0</span>
                    <span>Latency: &lt; 400ms</span>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
