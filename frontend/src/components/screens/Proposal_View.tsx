import React from "react";

export default function Proposal_View({ setActiveTab }: { setActiveTab: (t: string) => void }) {
  return (
    <div className="space-y-6 md:space-y-8 w-full max-w-7xl mx-auto animate-in fade-in duration-500">
      {/* Header Section / Extracted from Proposal_View */}

{/*  TopNavBar (Shared Component)  */}
<header className="flex justify-between items-center h-16 px-8 sticky top-0 bg-white/60 dark:bg-slate-950/60 backdrop-blur-xl z-30 bg-slate-50 dark:bg-slate-900">
<div className="flex items-center gap-6">
<div className="relative group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="bg-surface-container-low border-none rounded-xl pl-10 pr-4 py-2 text-sm w-80 focus:ring-2 focus:ring-on-primary-container/20 transition-all" placeholder="Search clients or portfolios..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors">
<span className="material-symbols-outlined">help_outline</span>
</button>
<div className="h-8 w-[1px] bg-outline-variant/30 mx-2"></div>
<img alt="Advisor Profile Picture" className="w-8 h-8 rounded-full border border-outline-variant/30" data-alt="professional portrait of a financial advisor in business attire, clean corporate lighting, neutral background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdJBbA4zewUU1ddbSno8oTNIES1gvSr5sBgVRTJEmRum3tMfp1RJJ4jNxmc4c0gEw3B8D3-6mlUovVJ-ZFxOBIP60KXs0Njn4OIMTw5J9NXjUVKUrhkIDHpzNkC1IfqQjR7ZZDCIm-Z2Ak3do5uLrclTeSmEkfgh32BkqPMSSebVo0FnZ1PTZEs_OzVH_yZFFzPgN4WNEIq6F_oslPsbRU4FPo_BNSGNdUJK9A9v96PRHlrBjxNDfNFpB4i6bi4cT6TMfKnzp0PDw"/>
</div>
</header>
{/*  Page Content: The Sovereign Analyst Layout  */}
<div className="p-12 max-w-[1400px] mx-auto space-y-12">
{/*  Header Section  */}
<section className="flex justify-between items-end">
<div className="space-y-2">
<p className="text-[0.6875rem] uppercase tracking-widest text-on-surface-variant font-label">Investment Strategy 2024</p>
<h1 className="text-4xl font-extrabold tracking-tight text-on-surface font-headline">Wealth Proposal: Arthur P. Sterling</h1>
</div>
<div className="flex gap-4">
<button className="bg-surface-container-highest text-on-surface px-6 py-3 rounded-xl text-sm font-semibold hover:bg-surface-dim transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-lg">download</span>
                        Download PDF
                    </button>
<button className="premium-gradient text-white px-8 py-3 rounded-xl text-sm font-bold shadow-[0_8px_24px_rgba(15,23,42,0.06)] shadow-on-primary-container/20 flex items-center gap-2">
<span className="material-symbols-outlined text-lg">send</span>
                        Send to Client
                    </button>
</div>
</section>
{/*  Top Grid: Summary & Allocation  */}
<div className="grid grid-cols-12 gap-8">
{/*  Client Summary Card  */}
<div className="col-span-12 lg:col-span-4 bg-surface-container-lowest p-8 rounded-xl flex flex-col justify-between relative overflow-hidden">
<div className="space-y-6 relative z-10">
<div className="flex items-center gap-4">
<img alt="Client Avatar" className="w-16 h-16 rounded-full" data-alt="portrait of a senior elegant male executive with gray hair, sharp blue suit, high-end studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDN2LAUUl6OJEvNfU68HnfhdqG4OGWFa9taCgBXPtcSQHWb0HGUeLXeUfvLg-GHM9_p-6PJa8enlHw2kRDnYDVsxlfkzSS6yiwAfyoiHg_Q-NRQp0vsrJRsTC-UDop6zE2CmmdupUFH0cP9VPf7t-EeDZVjWWc28VLxvCvIstykkcAg0en4UkxxXwJSAso7_Cg6ldKvyPsFjXcCl90C6K-DCiOpdOdQd6VlmQkKPIzLYHGM0Fg0OqgZBfRtN3hvVYsBc1cN3_NvGN4"/>
<div>
<h3 className="text-xl font-bold font-headline">Arthur Sterling</h3>
<p className="text-sm text-on-surface-variant">Client since Oct 2018</p>
</div>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center pb-4 border-b border-outline-variant/10">
<span className="text-[0.6875rem] uppercase tracking-widest text-on-surface-variant font-label">Profile</span>
<span className="text-sm font-semibold">High Net Worth (HNW)</span>
</div>
<div className="flex justify-between items-center pb-4 border-b border-outline-variant/10">
<span className="text-[0.6875rem] uppercase tracking-widest text-on-surface-variant font-label">Risk Tolerance</span>
<span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-[0.6875rem] font-bold uppercase tracking-wider">Moderate</span>
</div>
<div className="flex justify-between items-center">
<span className="text-[0.6875rem] uppercase tracking-widest text-on-surface-variant font-label">Investment Horizon</span>
<span className="text-sm font-semibold">15 Years</span>
</div>
</div>
</div>
<div className="mt-8 pt-8 border-t border-outline-variant/10 relative z-10">
<div className="text-[0.6875rem] uppercase tracking-widest text-on-surface-variant font-label mb-2">Total Proposed Assets</div>
<div className="text-3xl font-extrabold font-headline">$4,250,000.00</div>
</div>
{/*  Aesthetic Glass Texture  */}
<div className="absolute -bottom-10 -right-10 w-40 h-40 bg-on-primary-container/5 rounded-full blur-3xl"></div>
</div>
{/*  Recommended Portfolio Bento Grid  */}
<div className="col-span-12 lg:col-span-8 grid grid-cols-2 gap-6">
{/*  Allocation Card  */}
<div className="col-span-2 bg-surface-container-low p-8 rounded-xl flex items-center justify-between">
<div className="max-w-[50%]">
<h3 className="text-lg font-bold font-headline mb-2">Portfolio Allocation</h3>
<p className="text-sm text-on-surface-variant leading-relaxed">A balanced approach focused on capital preservation with growth participation through diverse equity selection.</p>
<div className="mt-8 flex gap-6">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-on-primary-container"></div>
<span className="text-xs font-semibold">Equity 50%</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-secondary"></div>
<span className="text-xs font-semibold">Debt 50%</span>
</div>
</div>
</div>
<div className="w-48 h-48 relative">
{/*  SVG Donut Chart for Allocation  */}
<svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
<circle cx="18" cy="18" fill="transparent" r="15.915" stroke="#565e74" strokeDasharray="100 0" strokeWidth="3" />
<circle cx="18" cy="18" fill="transparent" r="15.915" stroke="#497cff" strokeDasharray="50 50" strokeWidth="3" />
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-xs font-label uppercase tracking-widest text-on-surface-variant">Split</span>
<span className="text-xl font-bold">50:50</span>
</div>
</div>
</div>
{/*  Small KPI: Volatility  */}
<div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10">
<div className="flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-secondary-fixed-dim">analytics</span>
<span className="text-[0.6875rem] font-bold text-on-tertiary-container bg-tertiary-container/10 px-2 py-0.5 rounded">-12% Low Var</span>
</div>
<div className="text-[0.6875rem] uppercase tracking-widest text-on-surface-variant font-label mb-1">Expected Volatility</div>
<div className="text-2xl font-bold font-headline">8.42%</div>
</div>
{/*  Small KPI: Yield  */}
<div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10">
<div className="flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-on-primary-container">payments</span>
<span className="text-[0.6875rem] font-bold text-on-tertiary-container bg-tertiary-container/10 px-2 py-0.5 rounded">Above Bench.</span>
</div>
<div className="text-[0.6875rem] uppercase tracking-widest text-on-surface-variant font-label mb-1">Indicative Yield</div>
<div className="text-2xl font-bold font-headline">4.15%</div>
</div>
</div>
</div>
{/*  Forecasting Section  */}
<section className="space-y-6">
<div className="flex justify-between items-center">
<h2 className="text-2xl font-bold font-headline">Projected Performance</h2>
<div className="flex gap-2">
<span className="px-3 py-1 rounded-lg bg-surface-container-highest text-xs font-medium">Conservative</span>
<span className="px-3 py-1 rounded-lg bg-primary-container/10 text-on-primary-container text-xs font-bold">Standard</span>
<span className="px-3 py-1 rounded-lg bg-surface-container-highest text-xs font-medium">Aggressive</span>
</div>
</div>
<div className="bg-surface-container-low p-10 rounded-xl h-[400px] flex flex-col">
<div className="flex-grow flex items-end gap-1">
{/*  Abstract Bar Chart for Projection  */}
<div className="bg-outline-variant/20 w-full h-[30%] rounded-t-lg"></div>
<div className="bg-outline-variant/20 w-full h-[35%] rounded-t-lg"></div>
<div className="bg-outline-variant/20 w-full h-[32%] rounded-t-lg"></div>
<div className="bg-on-primary-container/30 w-full h-[45%] rounded-t-lg"></div>
<div className="bg-on-primary-container/50 w-full h-[55%] rounded-t-lg"></div>
<div className="bg-on-primary-container/70 w-full h-[65%] rounded-t-lg"></div>
<div className="bg-on-primary-container w-full h-[80%] rounded-t-lg relative group">
<div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-on-surface text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">$7.4M Year 10</div>
</div>
<div className="bg-on-primary-container/80 w-full h-[75%] rounded-t-lg"></div>
<div className="bg-on-primary-container/60 w-full h-[85%] rounded-t-lg"></div>
<div className="bg-on-primary-container/90 w-full h-[100%] rounded-t-lg"></div>
</div>
<div className="flex justify-between mt-6 text-[0.6875rem] uppercase tracking-widest text-on-surface-variant font-label">
<span>Current</span>
<span>Year 2</span>
<span>Year 4</span>
<span>Year 6</span>
<span>Year 8</span>
<span>Year 10 (Target)</span>
</div>
</div>
</section>
{/*  Fund Details Table  */}
<section className="space-y-6 pb-20">
<h2 className="text-2xl font-bold font-headline">Fund Components</h2>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="bg-surface-container text-on-surface-variant">
<th className="p-5 text-[0.6875rem] uppercase tracking-widest font-label rounded-l-xl">Fund Name &amp; Class</th>
<th className="p-5 text-[0.6875rem] uppercase tracking-widest font-label">Allocation</th>
<th className="p-5 text-[0.6875rem] uppercase tracking-widest font-label text-right">3Y CAGR</th>
<th className="p-5 text-[0.6875rem] uppercase tracking-widest font-label text-right">Expense Ratio</th>
<th className="p-5 text-[0.6875rem] uppercase tracking-widest font-label text-right rounded-r-xl">Projected 1Y</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/10">
<tr className="hover:bg-surface-container-low transition-colors">
<td className="p-5">
<div className="flex flex-col">
<span className="font-bold text-sm">Vanguard Global Total Stock Index</span>
<span className="text-xs text-on-surface-variant">Equity | VTASX.L</span>
</div>
</td>
<td className="p-5">
<div className="w-32 h-1.5 bg-outline-variant/20 rounded-full overflow-hidden">
<div className="h-full bg-on-primary-container" style={{"width": "35%"}}></div>
</div>
<span className="text-[10px] font-bold mt-1 block">35.0%</span>
</td>
<td className="p-5 text-right font-medium text-sm">11.4%</td>
<td className="p-5 text-right font-medium text-sm text-on-surface-variant">0.08%</td>
<td className="p-5 text-right">
<span className="text-on-tertiary-container font-bold text-sm">+12.2%</span>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors">
<td className="p-5">
<div className="flex flex-col">
<span className="font-bold text-sm">PIMCO Diverse Income Fund</span>
<span className="text-xs text-on-surface-variant">Debt | PDI.US</span>
</div>
</td>
<td className="p-5">
<div className="w-32 h-1.5 bg-outline-variant/20 rounded-full overflow-hidden">
<div className="h-full bg-secondary" style={{"width": "25%"}}></div>
</div>
<span className="text-[10px] font-bold mt-1 block">25.0%</span>
</td>
<td className="p-5 text-right font-medium text-sm">4.8%</td>
<td className="p-5 text-right font-medium text-sm text-on-surface-variant">0.45%</td>
<td className="p-5 text-right">
<span className="text-on-tertiary-container font-bold text-sm">+5.1%</span>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors">
<td className="p-5">
<div className="flex flex-col">
<span className="font-bold text-sm">BlackRock Strategic Partners IX</span>
<span className="text-xs text-on-surface-variant">Alternative | BRSP.RE</span>
</div>
</td>
<td className="p-5">
<div className="w-32 h-1.5 bg-outline-variant/20 rounded-full overflow-hidden">
<div className="h-full bg-on-primary-container/60" style={{"width": "15%"}}></div>
</div>
<span className="text-[10px] font-bold mt-1 block">15.0%</span>
</td>
<td className="p-5 text-right font-medium text-sm">14.2%</td>
<td className="p-5 text-right font-medium text-sm text-on-surface-variant">1.20%</td>
<td className="p-5 text-right">
<span className="text-on-tertiary-container font-bold text-sm">+9.8%</span>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors">
<td className="p-5">
<div className="flex flex-col">
<span className="font-bold text-sm">Government Bond 10Y Ladder</span>
<span className="text-xs text-on-surface-variant">Debt | GOV-US.10</span>
</div>
</td>
<td className="p-5">
<div className="w-32 h-1.5 bg-outline-variant/20 rounded-full overflow-hidden">
<div className="h-full bg-secondary/80" style={{"width": "25%"}}></div>
</div>
<span className="text-[10px] font-bold mt-1 block">25.0%</span>
</td>
<td className="p-5 text-right font-medium text-sm">3.1%</td>
<td className="p-5 text-right font-medium text-sm text-on-surface-variant">0.00%</td>
<td className="p-5 text-right">
<span className="text-on-tertiary-container font-bold text-sm">+3.4%</span>
</td>
</tr>
</tbody>
</table>
</div>
</section>
</div>

    </div>
  );
}
