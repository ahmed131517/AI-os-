import React from 'react';
import { 
  Cpu, HardDrive, Zap, Layers, MonitorPlay, 
  Server, Activity, BrainCircuit, CheckCircle2, 
  ArrowRight, Clock, Database, 
  Bluetooth, Printer, Camera, Speaker, Usb
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-500/20 rounded-lg border border-indigo-500/30">
              <BrainCircuit className="w-6 h-6 text-indigo-400" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-white tracking-tight">AI-Optimized OS</h1>
              <p className="text-xs text-slate-400 font-mono uppercase tracking-wider">Stage 1: Planning & Architecture</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium px-3 py-1.5 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
            <CheckCircle2 className="w-4 h-4" />
            <span>Microkernel Architecture</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-12">
        {/* Architecture Diagram */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold text-white">High-Level Architecture</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-slate-800 to-transparent ml-4"></div>
          </div>
          
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 overflow-x-auto">
            <div className="flex items-center min-w-max gap-4 pb-4">
              <FlowStep icon={<HardDrive />} title="Firmware" subtitle="(UEFI)" color="slate" />
              <FlowArrow />
              <FlowStep icon={<Zap />} title="Bootloader" color="slate" />
              <FlowArrow />
              <FlowStep icon={<Cpu />} title="Kernel Core" subtitle="Microkernel" color="indigo" />
              <FlowArrow />
              <FlowStep icon={<Database />} title="Snapshot/Resume" subtitle="Engine" color="blue" />
              <FlowArrow />
              <FlowStep icon={<MonitorPlay />} title="Instant UI" color="emerald" />
              <FlowArrow />
              <FlowStep icon={<Layers />} title="Parallel Services" subtitle="Loader" color="amber" />
              <FlowArrow />
              <FlowStep icon={<Server />} title="Lazy Loading" subtitle="Engine" color="orange" />
              <FlowArrow />
              <FlowStep icon={<BrainCircuit />} title="AI Boot Optimizer" color="purple" />
              <FlowArrow />
              <FlowStep icon={<CheckCircle2 />} title="Full OS Ready" color="emerald" />
            </div>
          </div>
        </section>

        {/* Two Column Layout for Services & Goals */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Services */}
          <section className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-semibold text-white">Service Separation</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-slate-800 to-transparent ml-4"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Critical Services */}
              <div className="bg-slate-900/50 border border-red-500/20 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl -mr-10 -mt-10"></div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-red-500/20 rounded-lg text-red-400">
                    <Activity className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-medium text-white">Critical Services</h3>
                </div>
                <p className="text-sm text-slate-400 mb-6">Must start immediately with Kernel to ensure basic system functionality and stability.</p>
                <ul className="space-y-3">
                  <ServiceItem icon={<Cpu />} label="CPU Scheduler" />
                  <ServiceItem icon={<Database />} label="Memory Manager" />
                  <ServiceItem icon={<Zap />} label="Interrupt Handler" />
                  <ServiceItem icon={<HardDrive />} label="Minimal Filesystem" />
                  <ServiceItem icon={<MonitorPlay />} label="Console I/O" />
                </ul>
              </div>

              {/* Lazy Services */}
              <div className="bg-slate-900/50 border border-blue-500/20 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -mr-10 -mt-10"></div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-medium text-white">Lazy / Non-Critical</h3>
                </div>
                <p className="text-sm text-slate-400 mb-6">Loaded asynchronously after Instant UI to optimize boot time and resource usage.</p>
                <ul className="space-y-3">
                  <ServiceItem icon={<Printer />} label="Printer Drivers" />
                  <ServiceItem icon={<Camera />} label="Camera Drivers" />
                  <ServiceItem icon={<Bluetooth />} label="Bluetooth" />
                  <ServiceItem icon={<Usb />} label="USB Devices" />
                  <ServiceItem icon={<Speaker />} label="Audio/Multimedia" />
                </ul>
              </div>
            </div>
          </section>

          {/* Performance Goals */}
          <section className="space-y-6">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-semibold text-white">Performance Goals</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-slate-800 to-transparent ml-4"></div>
            </div>
            
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
              <GoalItem 
                value="<= 2s" 
                label="Boot Time Target" 
                description="Time to show Instant UI from power-on."
                color="emerald"
              />
              <GoalItem 
                icon={<Database className="w-5 h-5" />}
                label="Snapshot/Resume" 
                description="Save system state to disk for near-instant wake."
                color="blue"
              />
              <GoalItem 
                icon={<Layers className="w-5 h-5" />}
                label="Parallel Boot" 
                description="Concurrent loading of critical services."
                color="amber"
              />
              <GoalItem 
                icon={<BrainCircuit className="w-5 h-5" />}
                label="AI Optimization" 
                description="Predictive service order and driver preload based on user habits."
                color="purple"
              />
            </div>
          </section>
        </div>

        {/* Module Details */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold text-white">Module Details & Data Flow</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-slate-800 to-transparent ml-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ModuleCard 
              step="1"
              title="Firmware (UEFI)"
              description="Initializes hardware, performs POST, and hands off control to the Bootloader. Optimized for minimal hardware checks."
            />
            <ModuleCard 
              step="2"
              title="Bootloader"
              description="Loads the Microkernel into memory. Bypasses traditional full OS loading by looking for a valid Snapshot first."
            />
            <ModuleCard 
              step="3"
              title="Kernel Core"
              description="The Microkernel. Initializes ONLY the Critical Services (CPU, Memory, Interrupts, Minimal FS, Console)."
            />
            <ModuleCard 
              step="4"
              title="Snapshot/Resume Engine"
              description="Checks for a saved system state. If found, restores memory map directly. If not, proceeds with cold boot sequence."
            />
            <ModuleCard 
              step="5"
              title="Instant UI"
              description="A lightweight, pre-rendered display manager that gives the user immediate visual feedback and basic interaction within 2 seconds."
            />
            <ModuleCard 
              step="6"
              title="Parallel Services Loader"
              description="Spawns multiple threads to initialize remaining critical user-space services concurrently rather than sequentially."
            />
            <ModuleCard 
              step="7"
              title="Lazy Loading Engine"
              description="Defers loading of non-critical drivers (Printers, Bluetooth, etc.) until they are actually requested by the user or an app."
            />
            <ModuleCard 
              step="8"
              title="AI Boot Optimizer"
              description="A background daemon that learns user habits. It reorders the Lazy Loading queue to preload drivers the user is likely to need first."
            />
            <ModuleCard 
              step="9"
              title="Full OS Ready"
              description="The state where all requested services are running, background tasks are optimized, and the system is fully responsive."
            />
          </div>
        </section>

        {/* Recommendations */}
        <section className="space-y-6 pb-12">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold text-white">Design Recommendations</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-slate-800 to-transparent ml-4"></div>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-900/40 to-slate-900 border border-indigo-500/20 rounded-2xl p-8">
            <ul className="space-y-4">
              <RecommendationItem 
                title="eBPF for AI Telemetry" 
                description="Use eBPF (Extended Berkeley Packet Filter) to safely collect boot telemetry and user habits with near-zero overhead for the AI Boot Optimizer."
              />
              <RecommendationItem 
                title="Zero-Copy IPC" 
                description="Since it's a Microkernel, Inter-Process Communication (IPC) overhead can be high. Implement zero-copy message passing using shared memory pages between critical services."
              />
              <RecommendationItem 
                title="Predictive Paging" 
                description="Allow the AI Boot Optimizer to instruct the Memory Manager to pre-page specific shared libraries into RAM before the user clicks on their most frequently used apps."
              />
              <RecommendationItem 
                title="Asynchronous Device Probing" 
                description="Do not block the boot thread waiting for slow buses (like USB or Bluetooth) to enumerate. Enumerate them asynchronously in the Lazy Loading Engine."
              />
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

// Subcomponents

function FlowStep({ icon, title, subtitle, color }: { icon: React.ReactNode, title: string, subtitle?: string, color: 'slate' | 'indigo' | 'blue' | 'emerald' | 'amber' | 'orange' | 'purple' }) {
  const colorClasses = {
    slate: 'bg-slate-800 border-slate-700 text-slate-300',
    indigo: 'bg-indigo-500/20 border-indigo-500/40 text-indigo-300',
    blue: 'bg-blue-500/20 border-blue-500/40 text-blue-300',
    emerald: 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300',
    amber: 'bg-amber-500/20 border-amber-500/40 text-amber-300',
    orange: 'bg-orange-500/20 border-orange-500/40 text-orange-300',
    purple: 'bg-purple-500/20 border-purple-500/40 text-purple-300',
  };

  return (
    <div className={`flex flex-col items-center justify-center p-4 rounded-xl border ${colorClasses[color]} min-w-[140px] text-center`}>
      <div className="mb-3 opacity-80">{icon}</div>
      <div className="font-medium text-sm whitespace-nowrap text-white">{title}</div>
      {subtitle && <div className="text-xs opacity-70 mt-1">{subtitle}</div>}
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="flex items-center justify-center text-slate-600 px-2">
      <ArrowRight className="w-5 h-5" />
    </div>
  );
}

function ServiceItem({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <li className="flex items-center gap-3 p-3 rounded-lg bg-slate-950/50 border border-slate-800/50">
      <div className="text-slate-400 w-5 h-5 flex items-center justify-center">
        {icon}
      </div>
      <span className="text-sm font-medium text-slate-200">{label}</span>
    </li>
  );
}

function GoalItem({ value, icon, label, description, color }: { value?: string, icon?: React.ReactNode, label: string, description: string, color: string }) {
  const colorMap: Record<string, string> = {
    emerald: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    blue: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
    amber: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
    purple: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
  };

  return (
    <div className="flex items-start gap-4">
      <div className={`flex-shrink-0 w-12 h-12 rounded-xl border flex items-center justify-center font-bold ${colorMap[color]}`}>
        {value || icon}
      </div>
      <div>
        <h4 className="text-sm font-semibold text-white mb-1">{label}</h4>
        <p className="text-xs text-slate-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function ModuleCard({ step, title, description }: { step: string, title: string, description: string }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-indigo-500/30 transition-colors group">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-6 h-6 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center text-xs font-mono group-hover:bg-indigo-500/20 group-hover:text-indigo-400 transition-colors">
          {step}
        </div>
        <h4 className="font-medium text-white">{title}</h4>
      </div>
      <p className="text-sm text-slate-400 leading-relaxed pl-9">
        {description}
      </p>
    </div>
  );
}

function RecommendationItem({ title, description }: { title: string, description: string }) {
  return (
    <li className="flex items-start gap-3">
      <div className="mt-1 text-indigo-400">
        <CheckCircle2 className="w-5 h-5" />
      </div>
      <div>
        <h4 className="text-sm font-medium text-white mb-1">{title}</h4>
        <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
      </div>
    </li>
  );
}
