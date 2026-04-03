import React from "react";

export default function Edit_Proposal({ setActiveTab }: { setActiveTab: (t: string) => void }) {
  return (
    <div className="space-y-6 md:space-y-8 w-full max-w-7xl mx-auto animate-in fade-in duration-500">
      {/* Header Section / Extracted from Edit_Proposal */}

{/*  Header: Client Info Section  */}
<section className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<nav className="flex items-center gap-2 text-outline mb-4 text-xs font-label uppercase tracking-widest">
<span>Proposals</span>
<span className="material-symbols-outlined text-[14px]" data-icon="chevron_right">chevron_right</span>
<span className="text-on-surface">Editing Proposal</span>
</nav>
<h2 className="text-4xl font-extrabold font-headline tracking-tight text-on-surface mb-2">Rahul Sharma</h2>
<div className="flex items-center gap-4">
<span className="flex items-center gap-1.5 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-semibold">
<span className="material-symbols-outlined text-[16px]" data-icon="shield">shield</span>
                        MODERATE RISK
                    </span>
<span className="text-outline text-sm">Last Reviewed: Oct 24, 2023</span>
</div>
</div>
<div className="flex gap-3">
<button className="px-6 py-3 bg-surface-container-highest text-on-surface rounded-xl font-semibold text-sm transition-all hover:bg-surface-dim active:opacity-80">
                    Cancel Changes
                </button>
<button className="px-6 py-3 bg-signature-gradient text-white rounded-xl font-bold text-sm shadow-[0_12px_28px_rgba(15,23,42,0.08)] shadow-on-primary-container/10 transition-all hover:scale-[1.02] active:opacity-80">
                    Save Proposal
                </button>
</div>
</section>
<div className="grid grid-cols-12 gap-8">
{/*  Left Column: Assets & Funds  */}
<div className="col-span-12 lg:col-span-8 space-y-8">
{/*  Asset Allocation Bento Section  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
{/*  Equity Card  */}
<div className="bg-surface-container-lowest p-6 rounded-xl relative group overflow-hidden">
<div className="absolute top-0 right-0 p-4">
<button className="p-2 rounded-lg hover:bg-surface-container-low transition-colors text-on-primary-container">
<span className="material-symbols-outlined" data-icon="edit">edit</span>
</button>
</div>
<p className="font-label text-[0.6875rem] uppercase tracking-widest text-outline mb-1">Asset Class</p>
<h3 className="text-2xl font-bold font-headline mb-4">Equity</h3>
<div className="flex items-end justify-between">
<span className="text-5xl font-extrabold font-headline text-on-surface">50<span className="text-2xl text-outline-variant font-medium">%</span></span>
<div className="h-16 w-32">
<svg className="w-full h-full text-on-tertiary-container" viewBox="0 0 100 40">
<path d="M0,35 Q20,10 40,25 T80,5 T100,20" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
</svg>
</div>
</div>
<div className="mt-4 pt-4 border-t border-outline-variant/10 flex gap-4">
<div className="flex items-center gap-1">
<div className="w-2 h-2 rounded-full bg-on-primary-container"></div>
<span className="text-[0.6875rem] font-medium text-on-surface-variant">Growth Focused</span>
</div>
</div>
</div>
{/*  Debt Card  */}
<div className="bg-surface-container-lowest p-6 rounded-xl relative group overflow-hidden">
<div className="absolute top-0 right-0 p-4">
<button className="p-2 rounded-lg hover:bg-surface-container-low transition-colors text-on-primary-container">
<span className="material-symbols-outlined" data-icon="edit">edit</span>
</button>
</div>
<p className="font-label text-[0.6875rem] uppercase tracking-widest text-outline mb-1">Asset Class</p>
<h3 className="text-2xl font-bold font-headline mb-4">Debt</h3>
<div className="flex items-end justify-between">
<span className="text-5xl font-extrabold font-headline text-on-surface">50<span className="text-2xl text-outline-variant font-medium">%</span></span>
<div className="h-16 w-32">
<svg className="w-full h-full text-outline-variant" viewBox="0 0 100 40">
<path d="M0,30 Q25,30 50,32 T100,30" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
</svg>
</div>
</div>
<div className="mt-4 pt-4 border-t border-outline-variant/10 flex gap-4">
<div className="flex items-center gap-1">
<div className="w-2 h-2 rounded-full bg-outline"></div>
<span className="text-[0.6875rem] font-medium text-on-surface-variant">Preservation Focus</span>
</div>
</div>
</div>
</div>
{/*  Selected Funds Table-like List  */}
<div className="bg-surface-container-lowest rounded-xl overflow-hidden">
<div className="px-8 py-6 flex items-center justify-between">
<h3 className="text-lg font-bold font-headline">Selected Strategic Funds</h3>
<button className="flex items-center gap-2 text-sm text-on-primary-container font-semibold">
<span className="material-symbols-outlined text-[18px]" data-icon="add_circle">add_circle</span>
                            Add Instrument
                        </button>
</div>
<div className="divide-y divide-surface-container">
{/*  Fund Item 1  */}
<div className="px-8 py-5 flex items-center justify-between hover:bg-surface transition-colors">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center">
<span className="material-symbols-outlined text-on-surface-variant" data-icon="account_balance">account_balance</span>
</div>
<div>
<p className="font-bold text-sm">Vanguard Global Equity Fund</p>
<p className="text-xs text-outline font-label uppercase tracking-wider">Equity • High Growth</p>
</div>
</div>
<div className="flex items-center gap-12">
<div className="text-right">
<p className="text-sm font-bold">25.0%</p>
<p className="text-[0.625rem] text-on-tertiary-container font-semibold">+12.4% YTD</p>
</div>
<button className="px-4 py-1.5 bg-surface-container-low text-on-surface rounded-lg text-xs font-semibold hover:bg-surface-dim transition-colors">
                                    Change
                                </button>
</div>
</div>
{/*  Fund Item 2  */}
<div className="px-8 py-5 flex items-center justify-between hover:bg-surface transition-colors">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center">
<span className="material-symbols-outlined text-on-surface-variant" data-icon="corporate_fare">corporate_fare</span>
</div>
<div>
<p className="font-bold text-sm">PIMCO Income Fund Institutional</p>
<p className="text-xs text-outline font-label uppercase tracking-wider">Debt • Income Gen</p>
</div>
</div>
<div className="flex items-center gap-12">
<div className="text-right">
<p className="text-sm font-bold">30.0%</p>
<p className="text-[0.625rem] text-on-tertiary-container font-semibold">+4.2% YTD</p>
</div>
<button className="px-4 py-1.5 bg-surface-container-low text-on-surface rounded-lg text-xs font-semibold hover:bg-surface-dim transition-colors">
                                    Change
                                </button>
</div>
</div>
{/*  Fund Item 3  */}
<div className="px-8 py-5 flex items-center justify-between hover:bg-surface transition-colors">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center">
<span className="material-symbols-outlined text-on-surface-variant" data-icon="real_estate_agent">real_estate_agent</span>
</div>
<div>
<p className="font-bold text-sm">BlackRock Strategic Income</p>
<p className="text-xs text-outline font-label uppercase tracking-wider">Debt • Absolute Return</p>
</div>
</div>
<div className="flex items-center gap-12">
<div className="text-right">
<p className="text-sm font-bold">20.0%</p>
<p className="text-[0.625rem] text-on-tertiary-container font-semibold">+6.1% YTD</p>
</div>
<button className="px-4 py-1.5 bg-surface-container-low text-on-surface rounded-lg text-xs font-semibold hover:bg-surface-dim transition-colors">
                                    Change
                                </button>
</div>
</div>
</div>
</div>
</div>
{/*  Right Column: Notes & Export  */}
<div className="col-span-12 lg:col-span-4 space-y-6">
{/*  Advisor Notes Section  */}
<div className="bg-surface-container-lowest p-8 rounded-xl min-h-[400px] flex flex-col">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-bold font-headline">Advisor Commentary</h3>
<span className="material-symbols-outlined text-outline" data-icon="contract_edit">contract_edit</span>
</div>
<textarea className="flex-1 w-full bg-surface-container-low border-none rounded-xl p-6 text-sm text-on-surface-variant leading-relaxed focus:ring-2 focus:ring-on-primary-container/20 resize-none placeholder:italic" placeholder="Start typing your professional rationale here... Mention client risk profile, market outlook, and specific fund choices for Rahul's long-term objectives.">The proposed allocation maintains a 50/50 balance between Equity and Debt to align with Rahul Sharma's moderate risk appetite while capitalizing on current market volatility in the tech sector. 

The Vanguard Global Equity position offers broad exposure to high-growth international markets, while the PIMCO and BlackRock debt components provide a robust defensive cushion and consistent yield. 

Recommendation: Rebalance in Q2 2024 if equity outperforms the benchmark by &gt;15%.</textarea>
<div className="mt-4 flex items-center justify-between">
<p className="text-[10px] font-label uppercase tracking-widest text-outline">Last autosaved 2m ago</p>
<div className="flex gap-2">
<button className="p-2 hover:bg-surface-container rounded-lg text-outline transition-colors"><span className="material-symbols-outlined text-[18px]" data-icon="format_bold">format_bold</span></button>
<button className="p-2 hover:bg-surface-container rounded-lg text-outline transition-colors"><span className="material-symbols-outlined text-[18px]" data-icon="format_italic">format_italic</span></button>
<button className="p-2 hover:bg-surface-container rounded-lg text-outline transition-colors"><span className="material-symbols-outlined text-[18px]" data-icon="format_list_bulleted">format_list_bulleted</span></button>
</div>
</div>
</div>
{/*  Action Card  */}
<div className="bg-on-primary-container/5 p-8 rounded-xl border border-on-primary-container/10">
<h4 className="font-bold font-headline mb-2">Finalize Documentation</h4>
<p className="text-xs text-on-surface-variant mb-6 leading-relaxed">Once you generate the PDF, the proposal will be locked for editing until a new version is created.</p>
<button className="w-full flex items-center justify-center gap-3 py-4 bg-white border border-on-primary-container/20 text-on-primary-container rounded-xl font-bold text-sm shadow-sm hover:shadow-sm transition-all active:scale-95 mb-3">
<span className="material-symbols-outlined" data-icon="picture_as_pdf">picture_as_pdf</span>
                        Generate PDF Proposal
                    </button>
<button className="w-full flex items-center justify-center gap-3 py-4 bg-transparent text-outline hover:text-on-surface rounded-xl font-semibold text-xs transition-colors">
<span className="material-symbols-outlined text-[18px]" data-icon="share">share</span>
                        Share for Internal Review
                    </button>
</div>
</div>
</div>

    </div>
  );
}
