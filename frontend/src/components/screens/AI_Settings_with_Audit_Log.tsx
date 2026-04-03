import React from "react";

export default function AI_Settings_with_Audit_Log({ setActiveTab }: { setActiveTab: (t: string) => void }) {
  return (
    <div className="space-y-6 md:space-y-8 w-full max-w-7xl mx-auto animate-in fade-in duration-500">
      {/* Header Section / Extracted from AI_Settings_with_Audit_Log */}

<header className="mb-12">
<h2 className="text-3xl font-extrabold font-headline tracking-tight text-on-surface mb-2">AI Configuration</h2>
<p className="text-on-surface-variant font-body">Manage core intelligence providers and model endpoints for client reporting and market analysis.</p>
</header>
<div className="grid grid-cols-12 gap-8">
{/*  Settings Form Canvas  */}
<div className="col-span-12 lg:col-span-8 space-y-8">
{/*  Provider Selection Section  */}
<section className="bg-surface-container-lowest rounded-xl p-8 shadow-sm">
<div className="flex items-center gap-2 mb-6">
<span className="material-symbols-outlined text-on-primary-container" data-icon="hub">hub</span>
<h3 className="text-lg font-bold font-headline">AI Provider Selection</h3>
</div>
<div className="grid grid-cols-3 gap-4">
<label className="relative cursor-pointer group">
<input defaultChecked className="peer sr-only" name="provider" type="radio" value="openai"/>
<div className="p-6 rounded-xl border-2 border-transparent bg-surface-container-low peer-checked:border-on-primary-container peer-checked:bg-white transition-all">
<div className="flex flex-col items-center gap-3">
<span className="material-symbols-outlined text-4xl" data-icon="smart_toy">smart_toy</span>
<span className="font-semibold text-sm">OpenAI</span>
</div>
</div>
</label>
<label className="relative cursor-pointer group">
<input className="peer sr-only" name="provider" type="radio" value="gemini"/>
<div className="p-6 rounded-xl border-2 border-transparent bg-surface-container-low peer-checked:border-on-primary-container peer-checked:bg-white transition-all">
<div className="flex flex-col items-center gap-3">
<span className="material-symbols-outlined text-4xl" data-icon="auto_awesome">auto_awesome</span>
<span className="font-semibold text-sm">Gemini</span>
</div>
</div>
</label>
<label className="relative cursor-pointer group">
<input className="peer sr-only" name="provider" type="radio" value="custom"/>
<div className="p-6 rounded-xl border-2 border-transparent bg-surface-container-low peer-checked:border-on-primary-container peer-checked:bg-white transition-all">
<div className="flex flex-col items-center gap-3">
<span className="material-symbols-outlined text-4xl" data-icon="code">code</span>
<span className="font-semibold text-sm">Custom</span>
</div>
</div>
</label>
</div>
</section>
{/*  Configuration Details  */}
<section className="bg-surface-container-lowest rounded-xl p-8 shadow-sm space-y-6">
<div className="flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-on-primary-container" data-icon="tune">tune</span>
<h3 className="text-lg font-bold font-headline">Provider Credentials</h3>
</div>
<div className="space-y-4">
<div>
<label className="block text-[0.6875rem] font-label uppercase tracking-widest text-on-surface-variant mb-2">API Secret Key</label>
<div className="relative group">
<input className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 font-mono text-sm focus:ring-2 focus:ring-on-primary-container/20 transition-all" type="password" value="sk-proj-492049204920492049204920"/>
<button className="absolute right-3 top-1/2 -translate-y-1/2 text-outline-variant hover:text-on-surface transition-colors">
<span className="material-symbols-outlined text-lg" data-icon="visibility">visibility</span>
</button>
</div>
<p className="mt-2 text-xs text-outline italic">Keys are encrypted with AES-256 before storage.</p>
</div>
<div className="grid grid-cols-2 gap-6">
<div>
<label className="block text-[0.6875rem] font-label uppercase tracking-widest text-on-surface-variant mb-2">Inference Model</label>
<div className="relative">
<select className="w-full appearance-none bg-surface-container-low border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-on-primary-container/20 transition-all cursor-pointer">
<option>GPT-4o (Standard-2024)</option>
<option>GPT-4 Turbo</option>
<option>GPT-3.5-Turbo-16k</option>
<option>Custom Endpoint...</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-outline-variant" data-icon="expand_more">expand_more</span>
</div>
</div>
<div>
<label className="block text-[0.6875rem] font-label uppercase tracking-widest text-on-surface-variant mb-2">Max Token Length</label>
<input className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-on-primary-container/20 transition-all" placeholder="4096" type="number"/>
</div>
</div>
</div>
</section><section className="bg-surface-container-lowest rounded-xl p-8 shadow-sm">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-on-primary-container" data-icon="history">history</span>
<h3 className="text-lg font-bold font-headline">Configuration History</h3>
</div>
<button className="text-[0.6875rem] font-bold uppercase tracking-widest text-on-primary-container hover:underline">Download Full Log</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="border-b border-outline-variant/30">
<th className="pb-4 text-[0.6875rem] font-label uppercase tracking-widest text-outline">Date &amp; Time</th>
<th className="pb-4 text-[0.6875rem] font-label uppercase tracking-widest text-outline">Action</th>
<th className="pb-4 text-[0.6875rem] font-label uppercase tracking-widest text-outline">Performed By</th>
<th className="pb-4 text-[0.6875rem] font-label uppercase tracking-widest text-outline text-right">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/10">
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-4">
<p className="text-sm font-medium">Oct 12, 2023</p>
<p className="text-[10px] text-outline uppercase">04:32 PM</p>
</td>
<td className="py-4 text-sm">Provider switched to OpenAI</td>
<td className="py-4 text-sm">Marcus Chen (Senior Analyst)</td>
<td className="py-4 text-right">
<div className="flex items-center justify-end gap-1.5 text-on-tertiary-container">
<span className="material-symbols-outlined text-sm" data-icon="check_circle">check_circle</span>
<span className="text-[10px] font-bold uppercase tracking-wider">Success</span>
</div>
</td>
</tr>
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-4">
<p className="text-sm font-medium">Oct 11, 2023</p>
<p className="text-[10px] text-outline uppercase">11:15 AM</p>
</td>
<td className="py-4 text-sm">API Key Rotation</td>
<td className="py-4 text-sm">System Auto-Update</td>
<td className="py-4 text-right">
<div className="flex items-center justify-end gap-1.5 text-on-tertiary-container">
<span className="material-symbols-outlined text-sm" data-icon="check_circle">check_circle</span>
<span className="text-[10px] font-bold uppercase tracking-wider">Success</span>
</div>
</td>
</tr>
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-4">
<p className="text-sm font-medium">Oct 09, 2023</p>
<p className="text-[10px] text-outline uppercase">09:40 AM</p>
</td>
<td className="py-4 text-sm">Model Updated to GPT-4 Turbo</td>
<td className="py-4 text-sm">Sarah Jenkins (Admin)</td>
<td className="py-4 text-right">
<div className="flex items-center justify-end gap-1.5 text-on-tertiary-container">
<span className="material-symbols-outlined text-sm" data-icon="check_circle">check_circle</span>
<span className="text-[10px] font-bold uppercase tracking-wider">Success</span>
</div>
</td>
</tr>
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-4">
<p className="text-sm font-medium">Oct 08, 2023</p>
<p className="text-[10px] text-outline uppercase">02:22 PM</p>
</td>
<td className="py-4 text-sm">Custom Endpoint Modification</td>
<td className="py-4 text-sm">Marcus Chen (Senior Analyst)</td>
<td className="py-4 text-right">
<div className="flex items-center justify-end gap-1.5 text-amber-600">
<span className="material-symbols-outlined text-sm" data-icon="pending">pending</span>
<span className="text-[10px] font-bold uppercase tracking-wider">Pending</span>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</section>
{/*  Actions  */}
<div className="flex items-center justify-end gap-4 pt-4">
<button className="px-8 py-3 rounded-xl font-semibold text-sm text-on-surface-variant hover:bg-surface-container-high transition-colors">Discard Changes</button>
<button className="px-10 py-3 rounded-xl font-semibold text-sm text-white bg-primary-gradient shadow-[0_8px_24px_rgba(15,23,42,0.06)] shadow-on-primary-container/20 hover:opacity-90 active:scale-95 transition-all">
                        Save Settings
                    </button>
</div>
</div>
{/*  Contextual Sidebar / Stats  */}
<div className="col-span-12 lg:col-span-4 space-y-6">
<div className="bg-primary-container text-white rounded-xl p-8 relative overflow-hidden">
{/*  Subtle background decoration  */}
<div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full blur-3xl"></div>
<h4 className="text-[0.6875rem] uppercase tracking-widest font-label opacity-70 mb-4">Current Usage Tier</h4>
<div className="flex items-end gap-2 mb-1">
<span className="text-4xl font-extrabold font-headline tracking-tighter">84.2</span>
<span className="text-lg opacity-80 mb-1">%</span>
</div>
<p className="text-sm opacity-90 mb-6">of monthly token allowance used.</p>
<div className="w-full h-1.5 bg-white/20 rounded-full mb-2 overflow-hidden">
<div className="h-full bg-on-primary-container w-[84%]" style={{"boxShadow": "0 0 12px #497cff"}}></div>
</div>
<div className="flex justify-between text-[0.6875rem] font-medium opacity-60">
<span>4.2M Tokens</span>
<span>5.0M Limit</span>
</div>
</div>
<div className="bg-surface-container-low rounded-xl p-6 border-l-4 border-on-tertiary-container">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-on-tertiary-container" data-icon="info">info</span>
<div>
<h5 className="text-sm font-bold font-headline mb-1">Model Optimization</h5>
<p className="text-xs text-on-surface-variant leading-relaxed">Switching to GPT-4o is recommended for complex wealth proposals to ensure 99.9% semantic accuracy in financial terminology.</p>
</div>
</div>
</div>
<div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
<h5 className="text-[0.6875rem] uppercase tracking-widest font-label text-on-surface-variant mb-6">Recent Activity</h5>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-lg" data-icon="key">key</span>
</div>
<div>
<p className="text-xs font-semibold">API Key Rotation</p>
<p className="text-[10px] text-outline">Yesterday at 4:32 PM</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-lg" data-icon="update">update</span>
</div>
<div>
<p className="text-xs font-semibold">Provider switched to OpenAI</p>
<p className="text-[10px] text-outline">Oct 12, 2023</p>
</div>
</div>
</div>
</div>
</div>
</div>

    </div>
  );
}
