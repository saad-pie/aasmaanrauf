import React, { useState } from 'react';
import { PhoneCall, Phone, Mic, Hash, Contact, Settings2, ShieldAlert, CircleDot, Activity, Users } from 'lucide-react';

export function CallerAISection() {
  const [activePersona, setActivePersona] = useState('SteveAI Orchestrator');
  const [isCalling, setIsCalling] = useState(false);
  const [callDuration, setCallDuration] = useState(0);

  // Simulation of a call timer
  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isCalling) {
      interval = setInterval(() => {
        setCallDuration(prev => prev + 1);
      }, 1000);
    } else {
      setCallDuration(0);
    }
    return () => clearInterval(interval);
  }, [isCalling]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const personas = [
    { name: 'SteveAI Orchestrator', prompt: 'Adopt the persona of a high-level system orchestrator.' },
    { name: 'Quant Gold Strategist', prompt: 'Act as a professional gold trader with 10 years of experience.' },
    { name: 'LGS Cambridge Mentor', prompt: 'Be a supportive but rigorous O Level teacher at LGS.' },
    { name: 'Termux Kernel Bot', prompt: 'Respond with technical precision as a Linux kernel bot.' },
  ];

  return (
    <div className="w-full bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden font-sans">
      <div className="p-8 border-b border-neutral-800 bg-neutral-950 flex flex-col md:flex-row justify-between md:items-center gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center">
              <PhoneCall className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">Telephony AI Platform</h3>
              <h2 className="text-2xl font-bold text-white tracking-tight">CallerAI Telephony Hub</h2>
            </div>
          </div>
          <p className="text-neutral-400 mt-2 max-w-xl text-sm md:text-base">
            Call AIs with prompt-based persona adoption. Featuring 30+ voice modes, chat fallback, call recording, and literal AI phone number assignment.
          </p>
        </div>
        <div className="shrink-0 bg-neutral-900 border border-neutral-800 rounded-2xl p-4 flex flex-col items-end">
          <span className="text-neutral-500 text-xs font-bold uppercase tracking-wider mb-1">Available Credits</span>
          <span className="text-2xl font-mono font-bold text-emerald-400">1,240.00</span>
        </div>
      </div>

      <div className="grid md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-neutral-800">
        
        {/* Dialpad Area */}
        <div className="p-8 col-span-12 md:col-span-4 bg-[#0a0a0c] flex flex-col items-center">
          <div className="w-full max-w-[280px]">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full text-xs font-medium text-neutral-400 mb-3">
                <Hash className="h-3 w-3" /> Literal Number Assignment
              </div>
              <h3 className="text-2xl font-mono tracking-widest text-white">+92 3XX XXXXXXX</h3>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'].map((key) => (
                <button key={key} className="h-14 bg-neutral-900 border border-neutral-800 rounded-2xl text-xl font-medium text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors flex items-center justify-center">
                  {key}
                </button>
              ))}
            </div>

            <button 
              onClick={() => setIsCalling(!isCalling)}
              className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg ${
                isCalling ? 'bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500/20' : 'bg-emerald-600 text-white hover:bg-emerald-500 shadow-emerald-500/20'
              }`}
            >
              <Phone className={`h-5 w-5 ${isCalling ? 'rotate-[135deg]' : ''} transition-transform`} /> 
              {isCalling ? 'End Call' : 'Call AI Contact'}
            </button>
          </div>
        </div>

        {/* HUD Area */}
        <div className="p-8 col-span-12 md:col-span-8 bg-neutral-950 flex flex-col">
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-neutral-900">
            <h4 className="font-bold text-white flex items-center gap-2">
              <Activity className="h-5 w-5 text-emerald-400" /> Live Telephony HUD
            </h4>
            <div className="flex gap-3 text-xs font-medium">
              <span className="flex items-center gap-1.5 bg-red-500/10 text-red-400 px-3 py-1 rounded-full border border-red-500/20">
                <CircleDot className="h-3 w-3 animate-pulse" /> Rec: Active
              </span>
              <span className="flex items-center gap-1.5 bg-neutral-800 text-neutral-300 px-3 py-1 rounded-full border border-neutral-700">
                Chat Fallback: ON
              </span>
            </div>
          </div>

          {isCalling ? (
            <div className="flex-1 flex flex-col items-center justify-center min-h-[200px] mb-8 animate-in fade-in zoom-in duration-300">
              <div className="w-24 h-24 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center mb-4 relative">
                <div className="absolute inset-0 rounded-full border border-emerald-500/50 animate-ping"></div>
                <Mic className="h-10 w-10 text-emerald-400 animate-pulse" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Inbound Connection...</h3>
              <p className="text-emerald-400 font-mono text-lg mb-2">{formatTime(callDuration)}</p>
              <p className="text-neutral-500 text-sm">Persona: {activePersona}</p>
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center min-h-[200px] mb-8 text-neutral-500 border border-dashed border-neutral-800 rounded-2xl">
              <PhoneCall className="h-8 w-8 mb-3 opacity-50" />
              <p>Standby Mode</p>
              <p className="text-sm mt-1 max-w-xs text-center">AIs adopt personas based on your prompts. Dial or schedule a test inbound from the AI Bazar network.</p>
            </div>
          )}

          <div className="mt-auto">
            <div className="flex justify-between items-end mb-3">
              <h4 className="text-sm font-bold text-neutral-400 uppercase tracking-wider flex items-center gap-2">
                <Users className="h-4 w-4" /> Persona & Prompt Hub
              </h4>
              <div className="text-xs text-neutral-500 font-medium">Environment Audio: <span className="text-neutral-300">Cyber Lab</span></div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-3">
              {personas.map(p => (
                <div 
                  key={p.name}
                  onClick={() => !isCalling && setActivePersona(p.name)}
                  className={`p-3 rounded-xl border transition-colors cursor-pointer ${
                    activePersona === p.name ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-neutral-900 border-neutral-800 hover:bg-neutral-800'
                  } ${isCalling ? 'opacity-50 pointer-events-none' : ''}`}
                >
                  <div className={`font-bold text-sm mb-1 ${activePersona === p.name ? 'text-emerald-400' : 'text-neutral-300'}`}>{p.name}</div>
                  <div className="text-xs text-neutral-500 font-mono truncate">Prompt: {p.prompt}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
