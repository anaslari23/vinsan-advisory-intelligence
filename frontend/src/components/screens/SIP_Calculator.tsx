import React from "react";

export default function SIP_Calculator({ setActiveTab }: { setActiveTab: (t: string) => void }) {
  return (
    <div className="space-y-6 md:space-y-8 w-full max-w-7xl mx-auto animate-in fade-in duration-500">
      {/* Header Section / Extracted from SIP_Calculator */}

{/*  Header Section  */}
<header className="mb-12">
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-1 bg-primary-fixed text-on-primary-fixed-variant rounded-lg text-[10px] font-bold uppercase tracking-widest font-label">Financial Planning</span>
</div>
<h2 className="text-4xl font-extrabold font-headline text-on-surface tracking-tight">SIP Intelligence Engine</h2>
<p className="text-on-surface-variant max-w-2xl mt-4 leading-relaxed font-body">Calculate compound growth potential and visualize long-term wealth accumulation for your private equity and mutual fund portfolios.</p>
</header>
{/*  Bento Grid Layout  */}
<div className="grid grid-cols-12 gap-8 items-start">
{/*  Input Section (Left Column)  */}
<div className="col-span-12 lg:col-span-4 space-y-6">
<div className="bg-surface-container-lowest p-8 rounded-full shadow-sm">
<h3 className="font-headline font-bold text-lg mb-8 text-on-surface">Parameters</h3>
<div className="space-y-8">
<div>
<div className="flex justify-between mb-3">
<label className="text-[0.6875rem] font-bold uppercase tracking-widest text-outline font-label">Monthly Investment (₹)</label>
<span className="text-on-primary-container font-headline font-bold">25,000</span>
</div>
<div className="h-2 bg-surface-container-low rounded-full relative">
<div className="absolute left-0 top-0 h-full w-[40%] signature-gradient rounded-full"></div>
<div className="absolute left-[40%] -top-2 w-5 h-5 bg-white border-4 border-on-primary-container rounded-full shadow-sm cursor-pointer"></div>
</div>
<div className="flex justify-between mt-2 text-[10px] text-outline-variant font-label">
<span>₹5k</span>
<span>₹500k</span>
</div>
</div>
<div>
<div className="flex justify-between mb-3">
<label className="text-[0.6875rem] font-bold uppercase tracking-widest text-outline font-label">Time Period (Years)</label>
<span className="text-on-primary-container font-headline font-bold">15 Years</span>
</div>
<div className="h-2 bg-surface-container-low rounded-full relative">
<div className="absolute left-0 top-0 h-full w-[60%] signature-gradient rounded-full"></div>
<div className="absolute left-[60%] -top-2 w-5 h-5 bg-white border-4 border-on-primary-container rounded-full shadow-sm cursor-pointer"></div>
</div>
<div className="flex justify-between mt-2 text-[10px] text-outline-variant font-label">
<span>1Y</span>
<span>30Y</span>
</div>
</div>
<div>
<div className="flex justify-between mb-3">
<label className="text-[0.6875rem] font-bold uppercase tracking-widest text-outline font-label">Expected Return Rate (%)</label>
<span className="text-on-primary-container font-headline font-bold">12%</span>
</div>
<div className="h-2 bg-surface-container-low rounded-full relative">
<div className="absolute left-0 top-0 h-full w-[48%] signature-gradient rounded-full"></div>
<div className="absolute left-[48%] -top-2 w-5 h-5 bg-white border-4 border-on-primary-container rounded-full shadow-sm cursor-pointer"></div>
</div>
<div className="flex justify-between mt-2 text-[10px] text-outline-variant font-label">
<span>5%</span>
<span>25%</span>
</div>
</div>
</div>
<button className="w-full mt-12 py-4 signature-gradient text-white rounded-xl font-headline font-bold text-sm tracking-wide shadow-[0_8px_24px_rgba(15,23,42,0.06)] shadow-blue-500/20 active:scale-95 transition-all">
                        Execute Calculation
                    </button>
</div>
{/*  AI Suggestion Card  */}
<div className="bg-tertiary-container text-tertiary-fixed p-6 rounded-full flex gap-4 items-start relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-on-tertiary-container/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
<span className="material-symbols-outlined text-tertiary-fixed-dim" data-icon="auto_awesome">auto_awesome</span>
<div>
<p className="text-[0.6875rem] font-bold uppercase tracking-widest mb-1 opacity-70 font-label">Sovereign Recommendation</p>
<p className="text-sm leading-relaxed font-medium">Increase SIP by <span className="text-white font-bold">10% annually</span> to reach your goal of ₹5 Cr 3 years earlier.</p>
</div>
</div>
</div>
{/*  Results Section (Right Column)  */}
<div className="col-span-12 lg:col-span-8 space-y-8">
{/*  Main KPI Row  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-surface-container-lowest p-8 rounded-full transition-all hover:shadow-[0_12px_28px_rgba(15,23,42,0.08)] hover:shadow-slate-200/40">
<p className="text-[0.6875rem] font-bold uppercase tracking-widest text-outline mb-3 font-label">Invested Amount</p>
<h4 className="text-3xl font-extrabold font-headline text-on-surface">₹45,00,000</h4>
<div className="mt-4 flex items-center gap-2">
<span className="px-2 py-0.5 bg-surface-container text-on-surface-variant text-[10px] font-bold rounded">Fixed</span>
</div>
</div>
<div className="bg-surface-container-lowest p-8 rounded-full transition-all hover:shadow-[0_12px_28px_rgba(15,23,42,0.08)] hover:shadow-slate-200/40">
<p className="text-[0.6875rem] font-bold uppercase tracking-widest text-outline mb-3 font-label">Wealth Gained</p>
<h4 className="text-3xl font-extrabold font-headline text-on-tertiary-container">₹81,14,354</h4>
<div className="mt-4 flex items-center gap-2">
<span className="px-2 py-0.5 bg-tertiary-container text-on-tertiary-container text-[10px] font-bold rounded">+180.3%</span>
</div>
</div>
<div className="bg-surface-container-lowest p-8 rounded-full signature-gradient transition-all shadow-[0_12px_28px_rgba(15,23,42,0.08)] shadow-blue-500/20">
<p className="text-[0.6875rem] font-bold uppercase tracking-widest text-white/70 mb-3 font-label">Maturity Value</p>
<h4 className="text-3xl font-extrabold font-headline text-white">₹1,26,14,354</h4>
<div className="mt-4 flex items-center gap-2">
<span className="px-2 py-0.5 bg-white/20 text-white text-[10px] font-bold rounded">Projection</span>
</div>
</div>
</div>
{/*  Visual Chart Section  */}
<div className="bg-surface-container-lowest p-10 rounded-full shadow-sm relative overflow-hidden group">
<div className="flex justify-between items-end mb-12">
<div>
<h3 className="font-headline font-bold text-xl text-on-surface">Growth Projection</h3>
<p className="text-on-surface-variant text-sm font-body mt-1">15-year wealth accumulation timeline</p>
</div>
<div className="flex gap-6">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-surface-container"></div>
<span className="text-[10px] font-bold uppercase tracking-widest text-outline font-label">Principal</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full signature-gradient"></div>
<span className="text-[10px] font-bold uppercase tracking-widest text-outline font-label">Estimated Returns</span>
</div>
</div>
</div>
{/*  Asymmetric Chart Visualization  */}
<div className="relative h-[320px] flex items-end gap-1">
{/*  Year 1  */}
<div className="flex-1 flex flex-col justify-end gap-0.5 group/bar h-full">
<div className="w-full bg-on-primary-container/10 rounded-t-sm h-[5%] transition-all group-hover/bar:h-[6%]"></div>
<div className="w-full bg-surface-container rounded-b-sm h-[10%]"></div>
<span className="text-[8px] font-bold mt-2 text-center text-outline-variant">Y1</span>
</div>
{/*  Year 5  */}
<div className="flex-1 flex flex-col justify-end gap-0.5 group/bar h-full">
<div className="w-full bg-on-primary-container/20 rounded-t-sm h-[15%] transition-all group-hover/bar:h-[18%]"></div>
<div className="w-full bg-surface-container rounded-b-sm h-[20%]"></div>
<span className="text-[8px] font-bold mt-2 text-center text-outline-variant">Y5</span>
</div>
{/*  Year 10  */}
<div className="flex-1 flex flex-col justify-end gap-0.5 group/bar h-full">
<div className="w-full bg-on-primary-container/40 rounded-t-sm h-[35%] transition-all group-hover/bar:h-[38%]"></div>
<div className="w-full bg-surface-container rounded-b-sm h-[30%]"></div>
<span className="text-[8px] font-bold mt-2 text-center text-outline-variant">Y10</span>
</div>
{/*  Year 15  */}
<div className="flex-1 flex flex-col justify-end gap-0.5 group/bar h-full">
<div className="w-full signature-gradient rounded-t-sm h-[60%] transition-all group-hover/bar:h-[63%] shadow-[0_8px_24px_rgba(15,23,42,0.06)] shadow-blue-500/10"></div>
<div className="w-full bg-surface-container rounded-b-sm h-[35%]"></div>
<span className="text-[8px] font-bold mt-2 text-center text-on-surface">Y15</span>
</div>
{/*  Floating Glass Metric  */}
<div className="absolute right-12 top-0 glass-panel p-6 rounded-xl border border-white/20 shadow-2xl">
<div className="flex items-center gap-3 mb-2">
<span className="material-symbols-outlined text-on-primary-container text-lg" data-icon="trending_up">trending_up</span>
<span className="text-[0.6875rem] font-bold uppercase tracking-widest text-on-surface-variant font-label">Power of Compounding</span>
</div>
<p className="text-2xl font-extrabold font-headline text-on-surface">₹1.26 Cr</p>
<p className="text-[10px] text-on-tertiary-container font-bold mt-1">Growth: +280% vs Savings</p>
</div>
</div>
</div>
{/*  Secondary Data Grid  */}
<div className="grid grid-cols-2 gap-8">
<div className="bg-surface-container-low p-6 rounded-full border border-outline-variant/10">
<h5 className="text-[0.6875rem] font-bold uppercase tracking-widest text-outline mb-4 font-label">Historical context</h5>
<p className="text-sm font-medium text-on-surface-variant leading-relaxed">Based on Nifty 50 average returns (12.4%) over the last 15 years. Results may vary based on specific fund selection.</p>
</div>
<div className="bg-surface-container-low p-6 rounded-full border border-outline-variant/10 flex justify-between items-center">
<div>
<h5 className="text-[0.6875rem] font-bold uppercase tracking-widest text-outline mb-1 font-label">Risk Profile</h5>
<p className="text-lg font-bold font-headline text-on-surface">Moderate Growth</p>
</div>
<div className="w-12 h-12 rounded-full border-4 border-on-primary-container/20 flex items-center justify-center">
<div className="w-8 h-8 rounded-full border-4 border-on-primary-container border-t-transparent animate-spin-slow"></div>
</div>
</div>
</div>
</div>
</div>

    </div>
  );
}
