import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

interface CommandOutput {
  id: string;
  command: string;
  output: React.ReactNode;
}

export function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      id: 'init',
      command: '',
      output: (
        <div className="text-neutral-300 mb-2">
          <div className="text-indigo-400 font-bold">⚡ Saad Pie & Aasmaan • Termux Master & Hub v4.2 [x86_64-termux-android]</div>
          <div>15-year-old O Level Scholar (LGS) | SteveAI builder | 1000+ Systems</div>
          <div>Type <span className="text-green-400">help</span> or click suggestions below to explore.</div>
          <div className="text-neutral-500 text-sm mt-1">Terminal Shell: bash 5.2 | UTF-8</div>
        </div>
      )
    }
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    let output: React.ReactNode = '';

    switch (trimmed) {
      case 'help':
        output = (
          <div className="text-neutral-300">
            Available commands:
            <br /> <span className="text-green-400">whoami</span> - Display profile information
            <br /> <span className="text-green-400">steveai</span> - SteveAI orchestrator details
            <br /> <span className="text-green-400">callerai</span> - CallerAI telephony hub details
            <br /> <span className="text-green-400">ashband</span> - Ashband hardware ecosystem
            <br /> <span className="text-green-400">honors</span> - Academic and debate awards
            <br /> <span className="text-green-400">bench-wsc</span> - World Scholar's Cup stats
            <br /> <span className="text-green-400">neofetch</span> - System info
            <br /> <span className="text-green-400">quote</span> - Random inspiration
            <br /> <span className="text-green-400">clear</span> - Clear terminal
          </div>
        );
        break;
      case 'whoami':
        output = "Aasmaan Rauf. 15 yo fundraiser, marketing manager, co-owner of SteveAI, CallerAI, and Ashband. O Levels student at LGS JTI.";
        break;
      case 'steveai':
        output = "SteveAI: A Multi-Modal AI Orchestrator. Co-created with Saadpie. Handled marketing, user acquisition, and secured vital funding to scale models.";
        break;
      case 'callerai':
        output = "CallerAI: Telephony AI Platform. Call AIs with prompt-based persona adoption. Established B2B partnerships and managed brand market positioning.";
        break;
      case 'ashband':
        output = "Ashband: Premium Wearable Idea for Screenless Control. Transitioned from software MVP to physical hardware via strong networking and contacts.";
        break;
      case 'honors':
        output = "Debate & Economics honors: LGS JTI Senior Delegation. Special Mention at LGS Muslim Town MUN (SOCHUM). Data-driven comparative analysis co-author.";
        break;
      case 'bench-wsc':
        output = "World Scholar's Cup (WSC) 2026: Gold Medal in individual and team achievements. Contributed to 11 gold and 19 silver medals. Qualified for Global Round.";
        break;
      case 'neofetch':
        output = (
          <div className="flex gap-4">
            <div className="text-indigo-500 font-mono font-bold">
              {`   /\\`} <br/>
              {`  /  \\`} <br/>
              {` /____\\`} <br/>
              {`/      \\`} 
            </div>
            <div>
              <span className="text-indigo-400 font-bold">aasmaan@lgs-jti</span><br/>
              ----------------<br/>
              <span className="text-green-400">OS</span>: Entrepreneur_OS 1.0<br/>
              <span className="text-green-400">Host</span>: LGS Johar Town Paragon Main Branch<br/>
              <span className="text-green-400">Uptime</span>: 15 years<br/>
              <span className="text-green-400">Packages</span>: SteveAI, CallerAI, Ashband<br/>
              <span className="text-green-400">Shell</span>: bash 5.2<br/>
              <span className="text-green-400">Role</span>: Marketing Manager & Fundraiser
            </div>
          </div>
        );
        break;
      case 'quote':
        output = '"Innovation distinguishes between a leader and a follower."';
        break;
      case 'agi':
        output = "Initiating AGI protocols... [Access Denied] - Requires level 5 clearance.";
        break;
      default:
        output = <span className="text-red-400">Command not found: {trimmed}. Type 'help' for available commands.</span>;
    }

    setHistory(prev => [...prev, { id: Date.now().toString(), command: cmd, output }]);
    setInput('');
  };

  return (
    <div className="w-full bg-[#0a0a0c] border border-neutral-800 rounded-xl overflow-hidden font-mono text-sm sm:text-base shadow-2xl">
      <div className="bg-neutral-900 border-b border-neutral-800 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TerminalIcon className="h-4 w-4 text-neutral-400" />
          <span className="text-neutral-400 text-xs font-semibold uppercase tracking-wider">Live Termux Command Center</span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
        </div>
      </div>
      
      <div className="p-4 h-[400px] overflow-y-auto flex flex-col">
        {history.map((entry, i) => (
          <div key={entry.id} className="mb-4">
            {entry.command && (
              <div className="flex items-center text-neutral-300 mb-1">
                <span className="text-green-400 mr-2">$</span>
                <span>{entry.command}</span>
              </div>
            )}
            <div className="text-neutral-400">
              {entry.output}
            </div>
          </div>
        ))}
        <div className="flex items-center text-neutral-300 mt-2">
          <span className="text-green-400 mr-2">$</span>
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleCommand(input);
            }}
            className="flex-1 bg-transparent outline-none border-none text-neutral-300 w-full"
            autoFocus
            autoComplete="off"
            spellCheck="false"
          />
        </div>
        <div ref={endRef} />
      </div>
      
      <div className="bg-neutral-900/50 border-t border-neutral-800 p-2 flex flex-wrap gap-2 text-xs">
        {['help', 'steveai', 'callerai', 'ashband', 'bench-wsc', 'neofetch'].map(cmd => (
          <button 
            key={cmd}
            onClick={() => handleCommand(cmd)}
            className="px-2 py-1 bg-neutral-800 hover:bg-neutral-700 text-neutral-400 rounded transition-colors"
          >
            ${cmd}
          </button>
        ))}
      </div>
    </div>
  );
}
