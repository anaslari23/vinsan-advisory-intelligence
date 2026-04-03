import React from "react";

export default function Comparison_Screen({ setActiveTab }: { setActiveTab: (t: string) => void }) {
  return (
    <div className="space-y-6 md:space-y-8 w-full max-w-7xl mx-auto animate-in fade-in duration-500">
      {/* Header Section / Extracted from Comparison_Screen */}

{/*  Header Section  */}
<div className="mb-12">
<div className="flex items-center gap-2 text-on-surface-variant mb-2">
<span className="font-label text-[0.6875rem] uppercase tracking-[0.15em]">Proposal Comparison</span>
<span className="material-symbols-outlined text-xs" data-icon="chevron_right">chevron_right</span>
<span className="font-label text-[0.6875rem] uppercase tracking-[0.15em] text-on-surface">Client: Alexander Thorne</span>
</div>
<h2 className="text-3xl font-headline font-extrabold text-on-surface tracking-tight mb-4">Investment Strategy Contrast</h2>
<p className="text-on-surface-variant max-w-2xl font-body leading-relaxed">
                Compare the conservative rule-based allocation against our proprietary Intelligence AI's predictive dynamic rebalancing model.
            </p>
</div>
{/*  Comparison Bento Grid  */}
<div className="grid grid-cols-12 gap-8">
{/*  HUMAN CARD  */}
<div className="col-span-12 lg:col-span-6 flex flex-col">
<div className="bg-surface-container-lowest rounded-xl p-8 h-full relative overflow-hidden flex flex-col transition-all">
<div className="flex justify-between items-start mb-10">
<div>
<span className="inline-block px-3 py-1 bg-surface-container-high rounded-full font-label text-[0.6rem] uppercase tracking-widest text-on-surface-variant mb-4">Standard Framework</span>
<h3 className="text-2xl font-headline font-bold text-on-surface">Human Advisor Model</h3>
</div>
<div className="w-12 h-12 bg-surface-container-low rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-on-surface-variant" data-icon="person">person</span>
</div>
</div>
{/*  Allocation Display  */}
<div className="grid grid-cols-2 gap-4 mb-10">
<div className="bg-surface-container-low p-6 rounded-xl">
<p className="font-label text-[0.6rem] uppercase tracking-widest text-on-surface-variant mb-1">Equity</p>
<p className="text-3xl font-headline font-extrabold text-on-surface">50.0%</p>
</div>
<div className="bg-surface-container-low p-6 rounded-xl">
<p className="font-label text-[0.6rem] uppercase tracking-widest text-on-surface-variant mb-1">Debt</p>
<p className="text-3xl font-headline font-extrabold text-on-surface">50.0%</p>
</div>
</div>
{/*  Funds  */}
<div className="space-y-4 mb-10">
<div className="flex items-center justify-between p-4 bg-surface rounded-lg">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-outline"></div>
<span className="font-headline font-semibold text-sm">Global Equity Fund A</span>
</div>
<span className="text-xs text-on-surface-variant font-body">25% Weight</span>
</div>
<div className="flex items-center justify-between p-4 bg-surface rounded-lg">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-outline"></div>
<span className="font-headline font-semibold text-sm">Strategic Bond Fund B</span>
</div>
<span className="text-xs text-on-surface-variant font-body">25% Weight</span>
</div>
</div>
{/*  Reasoning  */}
<div className="mt-auto">
<h4 className="font-label text-[0.6875rem] uppercase tracking-widest text-on-surface-variant mb-3 border-b border-outline-variant/10 pb-2">Reasoning &amp; Risk Framework</h4>
<p className="text-sm font-body text-on-surface-variant leading-relaxed italic">
                            "Allocation based on standard 50/50 balanced portfolio rules. Prioritizes capital preservation through traditional diversification metrics and long-term historical performance benchmarks."
                        </p>
</div>
<button className="mt-8 w-full py-4 rounded-xl border border-outline-variant text-on-surface font-headline font-bold text-sm hover:bg-surface-container-low transition-colors">
                        Select Human Model
                    </button>
</div>
</div>
{/*  AI CARD  */}
<div className="col-span-12 lg:col-span-6 flex flex-col">
<div className="ai-gradient rounded-xl p-8 h-full relative overflow-hidden flex flex-col text-white shadow-2xl shadow-on-primary-container/30">
{/*  Background Decoration  */}
<div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
<div className="flex justify-between items-start mb-10 relative z-10">
<div>
<span className="inline-block px-3 py-1 bg-on-primary-container/30 backdrop-blur rounded-full font-label text-[0.6rem] uppercase tracking-widest text-white mb-4">The Sovereign AI</span>
<h3 className="text-2xl font-headline font-bold">Predictive Intelligence Model</h3>
</div>
<div className="w-12 h-12 bg-white/10 backdrop-blur rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-tertiary-fixed" data-icon="auto_awesome" data-weight="fill" style={{"fontVariationSettings": "'FILL' 1"}}>auto_awesome</span>
</div>
</div>
{/*  Allocation Display  */}
<div className="grid grid-cols-2 gap-4 mb-10 relative z-10">
<div className="bg-white/10 backdrop-blur p-6 rounded-xl border border-white/5">
<p className="font-label text-[0.6rem] uppercase tracking-widest text-blue-200 mb-1">Equity</p>
<p className="text-3xl font-headline font-extrabold">60.0%</p>
<div className="flex items-center gap-1 mt-2">
<span className="material-symbols-outlined text-xs text-tertiary-fixed" data-icon="trending_up">trending_up</span>
<span className="text-[10px] text-tertiary-fixed font-bold">+10% Adj</span>
</div>
</div>
<div className="bg-white/10 backdrop-blur p-6 rounded-xl border border-white/5">
<p className="font-label text-[0.6rem] uppercase tracking-widest text-blue-200 mb-1">Debt</p>
<p className="text-3xl font-headline font-extrabold">40.0%</p>
<div className="flex items-center gap-1 mt-2">
<span className="material-symbols-outlined text-xs text-orange-300" data-icon="trending_down">trending_down</span>
<span className="text-[10px] text-orange-300 font-bold">-10% Adj</span>
</div>
</div>
</div>
{/*  AI Funds  */}
<div className="space-y-4 mb-10 relative z-10">
<div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/5">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-tertiary-fixed"></div>
<span className="font-headline font-semibold text-sm">Tech Multi-Cap Fund X</span>
</div>
<span className="text-xs text-blue-100 font-body">35% Weight</span>
</div>
<div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/5">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-tertiary-fixed-dim"></div>
<span className="font-headline font-semibold text-sm">Dynamic Yield Corp Y</span>
</div>
<span className="text-xs text-blue-100 font-body">25% Weight</span>
</div>
</div>
{/*  AI Reasoning  */}
<div className="mt-auto relative z-10">
<h4 className="font-label text-[0.6875rem] uppercase tracking-widest text-blue-200 mb-3 border-b border-white/10 pb-2 flex justify-between">
                            AI Sentiment &amp; Trend Analysis
                            <span className="text-tertiary-fixed font-bold">Risk Score: 4.2/10</span>
</h4>
<p className="text-sm font-body text-white leading-relaxed">
                            "AI identifies bullish sentiment in emerging tech sectors and low-duration debt. Model overweighting equities to capture momentum shift detected in cross-market volatility signals."
                        </p>
</div>
<button className="mt-8 w-full py-4 rounded-xl bg-white text-primary-container font-headline font-bold text-sm hover:bg-blue-50 transition-colors shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
                        Select AI Model
                    </button>
</div>
</div>
{/*  Detail Analysis Footer  */}
<div className="col-span-12">
<div className="bg-surface-container-low rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
<span className="material-symbols-outlined text-on-primary-container" data-icon="analytics">analytics</span>
</div>
<div>
<p className="text-sm font-headline font-bold text-on-surface">Deep Comparison Required?</p>
<p className="text-xs text-on-surface-variant font-body">Analyze back-tested performance of both models against the 2008 &amp; 2020 market events.</p>
</div>
</div>
<button className="px-8 py-3 rounded-xl bg-surface-container-lowest text-on-surface font-headline font-bold text-sm border border-outline-variant/30 hover:shadow-sm transition-all flex items-center gap-2">
                        Compare Detailed Metrics
                        <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
{/*  USP Feature Highlight: Bento Component  */}
<div className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
<div className="bg-surface-container-lowest p-6 rounded-xl">
<span className="material-symbols-outlined text-on-tertiary-container mb-4" data-icon="speed" style={{"fontVariationSettings": "'FILL' 1"}}>speed</span>
<h5 className="font-headline font-bold text-sm mb-2">Real-Time Pivot</h5>
<p className="text-xs text-on-surface-variant leading-relaxed">AI re-weights every 24 hours based on global news sentiment and bond yields.</p>
</div>
<div className="bg-surface-container-lowest p-6 rounded-xl">
<span className="material-symbols-outlined text-on-tertiary-container mb-4" data-icon="psychology" style={{"fontVariationSettings": "'FILL' 1"}}>psychology</span>
<h5 className="font-headline font-bold text-sm mb-2">Cognitive Overlays</h5>
<p className="text-xs text-on-surface-variant leading-relaxed">Identifies human bias in traditional portfolios and suggests neutralizing positions.</p>
</div>
<div className="bg-surface-container-lowest p-6 rounded-xl">
<span className="material-symbols-outlined text-on-tertiary-container mb-4" data-icon="shield_with_heart" style={{"fontVariationSettings": "'FILL' 1"}}>shield_with_heart</span>
<h5 className="font-headline font-bold text-sm mb-2">Dynamic Protection</h5>
<p className="text-xs text-on-surface-variant leading-relaxed">Automatic tail-risk hedging activated when systemic volatility crosses the 20% threshold.</p>
</div>
</div>
</div>

    </div>
  );
}
