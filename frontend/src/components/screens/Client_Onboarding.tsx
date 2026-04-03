import React from "react";

import { useState } from "react";
export default function Client_Onboarding({ setActiveTab }: { setActiveTab: (t: string) => void }) {
  const [phase, setPhase] = useState(1);

  return (
    <div className="space-y-6 md:space-y-8 w-full max-w-7xl mx-auto animate-in fade-in duration-500">
      {/* Header Section / Extracted from Client_Onboarding */}

{/*  Header & Breadcrumb  */}
<div className="mb-12">
<div className="flex items-center gap-2 text-on-surface-variant text-sm mb-4">
<span>Clients</span>
<span className="material-symbols-outlined text-xs">chevron_right</span>
<span className="text-on-primary-container font-medium">New Client Onboarding</span>
</div>
<h2 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tighter text-on-surface">Digital Onboarding</h2>
<p className="text-on-surface-variant mt-4 text-lg max-w-2xl leading-relaxed">Initiating the sovereign analysis process. Please provide the precise financial coordinates for your client's portfolio architecture.</p>
</div>
{/*  Progress Indicator (Custom Implementation)  */}
<div className="mb-16">
<div className="flex justify-between mb-4">
<span className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-primary-container">Phase 01: Identity</span>
<span className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant">Step 1 of 3</span>
</div>
<div className="flex h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
<div className="w-1/3 primary-gradient rounded-full"></div>
<div className="w-2/3"></div>
</div>
<div className="grid grid-cols-3 mt-6 gap-4">
<div className="flex items-center gap-3 cursor-pointer" onClick={() => setPhase(1)}>
<div className="h-8 w-8 rounded-full bg-primary-container text-white flex items-center justify-center font-bold text-xs">01</div>
<span className="text-sm font-semibold text-on-surface">Basic Details</span>
</div>
<div className="flex items-center gap-3 cursor-pointer opacity-40 hover:opacity-80 transition-opacity" onClick={() => setPhase(2)}>
<div className="h-8 w-8 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-bold text-xs">02</div>
<span className="text-sm font-semibold text-on-surface-variant">Financial Info</span>
</div>
<div className="flex items-center gap-3 cursor-pointer opacity-40 hover:opacity-80 transition-opacity" onClick={() => setPhase(2)}>
<div className="h-8 w-8 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-bold text-xs">03</div>
<span className="text-sm font-semibold text-on-surface-variant">Summary</span>
</div>
</div>
</div>
{/*  Form Layout (Asymmetric Grid)  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
{/*  Information Panel (LHS)  */}
<div className="lg:col-span-4 space-y-8">
<div className="p-8 rounded-xl bg-surface-container-low relative overflow-hidden">
<div className="relative z-10">
<span className="material-symbols-outlined text-on-primary-container text-3xl mb-4" data-icon="verified_user" style={{"fontVariationSettings": "'FILL' 1"}}>verified_user</span>
<h3 className="text-xl font-bold font-headline mb-3">Institutional Trust</h3>
<p className="text-sm text-on-surface-variant leading-relaxed">Your client's data is encrypted using military-grade protocols and stored in high-security, tiered vaults.</p>
</div>
<div className="absolute -right-4 -bottom-4 opacity-5">
<span className="material-symbols-outlined text-[120px]" data-icon="lock">lock</span>
</div>
</div>
<div className="rounded-xl overflow-hidden shadow-2xl shadow-slate-900/10">
<img alt="Financial office" className="w-full h-48 object-cover" data-alt="Modern high-end glass office interior with city skyline view in soft morning light, professional and serene atmosphere" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBf1SFWsjJ1CiAYgpioyXx8lub4aE14aW93Hnde5vhPQFnXvMM-mP6E0xrWGokj4Io75XSf46-XMVeoIBCemP3fXLPG4c4z1SsHtQavh3VWi0a-6eTW5SOuLHoLCtFwsnNBrjCuHNsvNRm4Y5dI3PRcSsubzXWsylZRlWr2Zu2u6mvHO7RxN43v80e-BgyfUV2jRA1umywGbHgBoWQantqjupBk8bP-kqpCjmsS4DihhCQxLqqhfPI6WB6z6Zd5A92k2mBKj9DdQc"/>
<div className="p-6 bg-surface-container-lowest">
<p className="text-xs text-on-surface-variant italic leading-relaxed">"The transition to digital wealth management requires not just speed, but the absolute integrity of identity."</p>
</div>
</div>
</div>
{/*  Form Body (RHS)  */}
<div className="lg:col-span-8 bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-sm">
<form className="space-y-10">
<section>
<h4 className="text-[10px] uppercase tracking-[0.25em] font-bold text-on-surface-variant mb-8 border-b border-surface-container-low pb-4">Personal Identifiers</h4>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
{/*  Input Field  */}
<div className="space-y-2">
<label className="text-[11px] font-bold text-on-surface uppercase tracking-wider">Full Legal Name</label>
<input className="w-full bg-surface-container-low border-none rounded-lg p-4 text-sm focus:ring-2 focus:ring-on-primary-container/20 focus:bg-surface-container-lowest transition-all" placeholder="e.g. Alistair Sterling" type="text"/>
</div>
<div className="space-y-2">
<label className="text-[11px] font-bold text-on-surface uppercase tracking-wider">Date of Birth</label>
<div className="relative">
<input className="w-full bg-surface-container-low border-none rounded-lg p-4 text-sm focus:ring-2 focus:ring-on-primary-container/20 focus:bg-surface-container-lowest transition-all" type="date"/>
</div>
</div>
<div className="space-y-2">
<label className="text-[11px] font-bold text-on-surface uppercase tracking-wider">Tax Identification / PAN</label>
<input className="w-full bg-surface-container-low border-none rounded-lg p-4 text-sm focus:ring-2 focus:ring-on-primary-container/20 focus:bg-surface-container-lowest transition-all" placeholder="ABCDE1234F" type="text"/>
</div>
<div className="space-y-2">
<label className="text-[11px] font-bold text-on-surface uppercase tracking-wider">Current Occupation</label>
<select className="w-full bg-surface-container-low border-none rounded-lg p-4 text-sm focus:ring-2 focus:ring-on-primary-container/20 focus:bg-surface-container-lowest transition-all appearance-none">
<option>Executive Leadership</option>
<option>Business Owner</option>
<option>Professional Practice</option>
<option>Others</option>
</select>
</div>
</div>
</section>
<section>
<h4 className="text-[10px] uppercase tracking-[0.25em] font-bold text-on-surface-variant mb-8 border-b border-surface-container-low pb-4">Contact Gateway</h4>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-2">
<label className="text-[11px] font-bold text-on-surface uppercase tracking-wider">Secure Email Address</label>
<div className="flex items-center bg-surface-container-low rounded-lg focus-within:ring-2 focus-within:ring-on-primary-container/20 focus-within:bg-surface-container-lowest transition-all px-4">
<span className="material-symbols-outlined text-sm text-on-surface-variant" data-icon="mail">mail</span>
<input className="w-full bg-transparent border-none p-4 text-sm focus:ring-0" placeholder="client@privateoffice.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-[11px] font-bold text-on-surface uppercase tracking-wider">Mobile Terminal</label>
<div className="flex items-center bg-surface-container-low rounded-lg focus-within:ring-2 focus-within:ring-on-primary-container/20 focus-within:bg-surface-container-lowest transition-all px-4">
<span className="material-symbols-outlined text-sm text-on-surface-variant" data-icon="smartphone">smartphone</span>
<input className="w-full bg-transparent border-none p-4 text-sm focus:ring-0" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
</div>
</div>
</section>
<div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-surface-container-low">
<button className="order-2 md:order-1 text-on-surface-variant hover:text-on-surface font-semibold text-xs uppercase tracking-widest flex items-center gap-2 transition-colors" type="button">
<span className="material-symbols-outlined text-lg" data-icon="save">save</span>
                            Save Draft
                        </button>
<div className="order-1 md:order-2 flex items-center gap-4 w-full md:w-auto">
<button className="flex-1 md:flex-none py-4 px-10 rounded-xl bg-surface-container-highest text-on-surface font-bold text-xs uppercase tracking-widest hover:bg-surface-dim transition-colors" type="button">
                                Cancel
                            </button>
<button className="flex-1 md:flex-none py-4 px-12 rounded-xl primary-gradient text-white font-bold text-xs uppercase tracking-widest shadow-[0_12px_28px_rgba(15,23,42,0.08)] shadow-on-primary-container/20 active:scale-95 transition-transform" type="submit">
                                Next: Financial Intelligence
                            </button>
</div>
</div>
</form>
</div>
</div>
{/*  Footer Data Density  */}
<footer className="mt-24 border-t border-surface-container-low pt-12 pb-8 grid grid-cols-1 md:grid-cols-3 gap-8">
<div>
<p className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant mb-4">Onboarding Intelligence</p>
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container">
<span className="material-symbols-outlined text-lg" data-icon="speed" style={{"fontVariationSettings": "'FILL' 1"}}>speed</span>
</div>
<div>
<p className="text-sm font-bold">4.2 Minutes</p>
<p className="text-[11px] text-on-surface-variant">Average completion time</p>
</div>
</div>
</div>
<div>
<p className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant mb-4">Required Documents</p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full bg-surface-container-low text-[10px] font-bold text-on-surface-variant">PAN CARD</span>
<span className="px-3 py-1 rounded-full bg-surface-container-low text-[10px] font-bold text-on-surface-variant">AADHAAR / UID</span>
<span className="px-3 py-1 rounded-full bg-surface-container-low text-[10px] font-bold text-on-surface-variant">E-SIGN</span>
</div>
</div>
<div className="flex md:justify-end items-center">
<p className="text-[11px] text-on-surface-variant text-right leading-relaxed">
                    © 2024 The Sovereign Analyst. <br/> Private Wealth Protocol v4.2
                </p>
</div>
</footer>

    </div>
  );
}
