import React from "react";

export default function Risk_Profiling({ setActiveTab }: { setActiveTab: (t: string) => void }) {
  return (
    <div className="space-y-6 md:space-y-8 w-full max-w-7xl mx-auto animate-in fade-in duration-500">
      {/* Header Section / Extracted from Risk_Profiling */}

{/*  Diagnostic Progress Header  */}
<div className="max-w-6xl mx-auto mb-10">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
<div>
<span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container text-[0.6875rem] font-bold uppercase tracking-widest rounded-full mb-2">Diagnostic Stage 3/5</span>
<h2 className="text-3xl font-extrabold text-on-surface font-headline tracking-tight">Risk Profiling</h2>
<p className="text-on-surface-variant mt-1">Establishing the sovereign risk tolerance for institutional allocation.</p>
</div>
<div className="w-full md:w-64 h-2 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full w-3/5 bg-on-primary-container"></div>
</div>
</div>
</div>
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
{/*  Question Canvas: Investment Horizon  */}
<div className="lg:col-span-7 space-y-8">
<div className="bg-surface-container-lowest p-10 rounded-xl shadow-sm relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-on-primary-container"></div>
<div className="relative z-10">
<span className="text-on-primary-container font-headline font-bold text-lg block mb-4">Question 04</span>
<h3 className="text-2xl font-bold font-headline text-on-surface mb-8 leading-tight">What is your intended Investment Horizon for this specific mandate?</h3>
<div className="space-y-4">
{/*  Radio Option 1  */}
<label className="group relative flex items-center p-5 cursor-pointer rounded-xl bg-surface-container-low hover:bg-on-primary-container/5 border-2 border-transparent hover:border-on-primary-container/20 transition-all duration-200">
<input defaultChecked className="w-5 h-5 text-on-primary-container border-outline-variant focus:ring-on-primary-container/20" name="horizon" type="radio"/>
<div className="ml-5">
<span className="block text-sm font-semibold text-on-surface group-hover:text-on-primary-container">&lt; 1 year</span>
<span className="block text-xs text-on-surface-variant mt-0.5">Short-term liquidity focus, capital preservation priority.</span>
</div>
</label>
{/*  Radio Option 2  */}
<label className="group relative flex items-center p-5 cursor-pointer rounded-xl bg-surface-container-low hover:bg-on-primary-container/5 border-2 border-transparent hover:border-on-primary-container/20 transition-all duration-200">
<input className="w-5 h-5 text-on-primary-container border-outline-variant focus:ring-on-primary-container/20" name="horizon" type="radio"/>
<div className="ml-5">
<span className="block text-sm font-semibold text-on-surface group-hover:text-on-primary-container">1–3 years</span>
<span className="block text-xs text-on-surface-variant mt-0.5">Conservative growth with moderate income requirement.</span>
</div>
</label>
{/*  Radio Option 3  */}
<label className="group relative flex items-center p-5 cursor-pointer rounded-xl bg-surface-container-low hover:bg-on-primary-container/5 border-2 border-transparent hover:border-on-primary-container/20 transition-all duration-200">
<input className="w-5 h-5 text-on-primary-container border-outline-variant focus:ring-on-primary-container/20" name="horizon" type="radio"/>
<div className="ml-5">
<span className="block text-sm font-semibold text-on-surface group-hover:text-on-primary-container">3–5 years</span>
<span className="block text-xs text-on-surface-variant mt-0.5">Strategic allocation for capital appreciation.</span>
</div>
</label>
{/*  Radio Option 4  */}
<label className="group relative flex items-center p-5 cursor-pointer rounded-xl bg-surface-container-low hover:bg-on-primary-container/5 border-2 border-transparent hover:border-on-primary-container/20 transition-all duration-200">
<input className="w-5 h-5 text-on-primary-container border-outline-variant focus:ring-on-primary-container/20" name="horizon" type="radio"/>
<div className="ml-5">
<span className="block text-sm font-semibold text-on-surface group-hover:text-on-primary-container">&gt; 5 years</span>
<span className="block text-xs text-on-surface-variant mt-0.5">Long-term wealth creation, high risk absorption.</span>
</div>
</label>
</div>
</div>
</div>
{/*  Step Navigation  */}
<div className="flex items-center justify-between">
<button className="flex items-center gap-2 px-6 py-3 text-on-surface-variant font-medium hover:bg-surface-container-high rounded-xl transition-all">
<span className="material-symbols-outlined text-lg">arrow_back</span>
                        Previous
                    </button>
<button className="flex items-center gap-2 px-10 py-3 bg-wealth-gradient text-white rounded-xl font-bold shadow-[0_8px_24px_rgba(15,23,42,0.06)] shadow-blue-500/10 active:scale-95 transition-all">
                        Next Question
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
</button>
</div>
</div>
{/*  Risk Result Analysis  */}
<div className="lg:col-span-5 space-y-8">
{/*  Result Card  */}
<div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm relative overflow-hidden">
<div className="flex items-center justify-between mb-8">
<h4 className="text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-on-surface-variant font-label">Risk Result Analysis</h4>
<span className="material-symbols-outlined text-on-primary-container">analytics</span>
</div>
<div className="flex items-baseline gap-4 mb-2">
<span className="text-6xl font-extrabold font-headline text-on-surface tracking-tighter">18</span>
<div className="pb-1">
<span className="block text-xs font-bold uppercase text-on-primary-container">Aggregate Score</span>
<div className="flex items-center gap-1 text-on-tertiary-container bg-tertiary-container/10 px-2 py-0.5 rounded text-[0.625rem] font-bold">
<span className="material-symbols-outlined text-[0.75rem]" style={{"fontVariationSettings": "'FILL' 1"}}>trending_up</span>
                                +2.4 vs Last
                            </div>
</div>
</div>
<div className="mb-8">
<div className="text-2xl font-bold text-on-surface font-headline mb-4">Moderate Risk Category</div>
{/*  Progress gauge  */}
<div className="relative pt-1">
<div className="overflow-hidden h-3 mb-4 text-xs flex rounded-full bg-surface-container-high">
<div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-200" style={{"width": "15%"}}></div>
<div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-on-primary-container" style={{"width": "35%"}}></div>
<div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-surface-container-highest" style={{"width": "50%"}}></div>
</div>
<div className="flex justify-between text-[0.625rem] font-bold uppercase text-on-surface-variant/60 tracking-wider">
<span>Conservative</span>
<span className="text-on-primary-container">Moderate</span>
<span>Aggressive</span>
</div>
</div>
</div>
{/*  Allocation Chart Section  */}
<div className="pt-8 border-t border-outline-variant/15">
<h5 className="text-xs font-bold uppercase text-on-surface-variant font-label tracking-widest mb-6">Implied Asset Allocation</h5>
<div className="flex items-center gap-8">
{/*  Visual Donut (Simplified via CSS)  */}
<div className="relative w-32 h-32 flex-shrink-0">
<svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
<path className="text-surface-container-highest" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="transparent" stroke="currentColor" strokeWidth="3" />
<path className="text-on-primary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="transparent" stroke="currentColor" strokeDasharray="50, 100" strokeLinecap="round" strokeWidth="3" />
<path className="text-slate-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="transparent" stroke="currentColor" strokeDasharray="50, 100" strokeDashoffset="-50" strokeLinecap="round" strokeWidth="3" />
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-xs font-bold text-on-surface">50/50</span>
<span className="text-[0.5rem] uppercase text-on-surface-variant">Split</span>
</div>
</div>
<div className="flex-1 space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-on-primary-container"></div>
<span className="text-sm font-medium text-on-surface">Equity</span>
</div>
<span className="text-sm font-bold text-on-surface">50%</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-slate-800"></div>
<span className="text-sm font-medium text-on-surface">Debt</span>
</div>
<span className="text-sm font-bold text-on-surface">50%</span>
</div>
<div className="pt-2">
<p className="text-[0.625rem] leading-relaxed text-on-surface-variant italic">
                                        "Balanced exposure targeting stability and capital growth."
                                    </p>
</div>
</div>
</div>
</div>
</div>
{/*  CTA  */}
<button className="w-full py-5 bg-wealth-gradient text-white rounded-xl font-bold font-headline text-lg hover:shadow-[0_12px_28px_rgba(15,23,42,0.08)] hover:shadow-on-primary-container/20 transition-all flex items-center justify-center gap-3">
                    Proceed to Proposal
                    <span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 1"}}>rocket_launch</span>
</button>
{/*  Helpful Context  */}
<div className="bg-surface-container-low p-6 rounded-xl">
<div className="flex gap-3">
<span className="material-symbols-outlined text-on-surface-variant">info</span>
<div>
<p className="text-xs font-bold text-on-surface mb-1">Methodology Note</p>
<p className="text-[0.6875rem] text-on-surface-variant leading-relaxed">
                                Our sovereign analyst engine uses a proprietary weighting system based on Modern Portfolio Theory and behavioral finance metrics to determine these limits.
                            </p>
</div>
</div>
</div>
</div>
</div>

    </div>
  );
}
