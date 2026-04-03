"use client";
import React, { useState } from "react";
import ClientOnboarding from "../components/screens/Client_Onboarding";
import RiskProfiling from "../components/screens/Risk_Profiling";
import ComparisonScreen from "../components/screens/Comparison_Screen";
import ProposalView from "../components/screens/Proposal_View";
import EditProposal from "../components/screens/Edit_Proposal";
import SIPCalculator from "../components/screens/SIP_Calculator";
import AISettings from "../components/screens/AI_Settings";
import AIAuditLog from "../components/screens/AI_Settings_with_Audit_Log";

export default function Dashboard() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Dashboard");

  const NAV_ITEMS = [
    { name: "Dashboard", icon: "dashboard" },
    { name: "Client Onboarding", icon: "person_add" },
    { name: "Risk Profiling", icon: "trending_up" },
    { name: "Comparison", icon: "compare_arrows" },
    { name: "Proposal View", icon: "description" },
    { name: "Edit Proposal", icon: "edit_document" },
    { name: "SIP Calculator", icon: "calculate" },
    { name: "Settings", icon: "settings" },
    { name: "Audit Log", icon: "receipt_long" },
  ];

  const RECENT_CLIENTS = [
    { initials: 'JD', name: 'Jonathan Dubois', email: 'jdubois@example.com', riskLevel: 2, profile: 'Moderate-High', status: 'Active', time: '2 hours ago', colorBg: 'bg-primary-fixed', colorText: 'text-on-primary-fixed' },
    { initials: 'SW', name: 'Sarah Whitmore', email: 'swhit@capital.net', riskLevel: 0, profile: 'Conservative', status: 'Proposal Sent', time: 'Yesterday', colorBg: 'bg-secondary-container', colorText: 'text-on-secondary-container' },
    { initials: 'RK', name: 'Robert Kingsley', email: 'rk@estates.org', riskLevel: 3, profile: 'Aggressive', status: 'Onboarding', time: 'Oct 24, 2023', colorBg: 'bg-tertiary-fixed', colorText: 'text-on-tertiary-fixed' }
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-background text-on-surface font-inter">
      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 xl:hidden transition-opacity" 
          onClick={() => setIsMobileMenuOpen(false)} 
        />
      )}

      {/* SideNavBar */}
      <aside className={`flex flex-col fixed left-0 top-0 h-full overflow-y-auto bg-slate-50 dark:bg-slate-900 w-64 border-r-0 z-50 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} xl:translate-x-0`}>
        <div className="p-8">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <img
                alt="Wealth Advisor Firm Logo"
                className="w-8 h-8 rounded-lg shadow-sm object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHnlTFg8K9BjxkwwXH0T_zaH3Woo2EwePjPG1fCZgPzUsHBIGwj7jnwFti4cjbdTqwlfiI41a5yPY-KVPtHZRYjLQCiaIcw1TO2bFYRGnqWPZJQU0MxPYZFNvnyK2FmGMuJrUAcHf6MHQzFtbbavWMzQGAZIPL50OB4zQW7S_QTfq-bT6whVTqu4rWMolMgNWrknFvbI8W8qFdJ-HRU-aP7pq4bsABm6TGz36-aEbgGo_50DqtN6UlwIO3_JoC4KNRc2b5JX3wpXE"
              />
              <div>
                <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-50 font-manrope">
                  Wealth Intelligence
                </h1>
                <p className="text-[0.625rem] uppercase tracking-widest text-slate-500 font-inter">
                  Private Office
                </p>
              </div>
            </div>
            {/* Mobile close button */}
            <button 
              className="xl:hidden text-slate-500 hover:text-slate-900 -mr-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>
          <nav className="space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeTab === item.name;
              return (
                <button
                  key={item.name}
                  onClick={() => {
                    setActiveTab(item.name);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 font-semibold transition-colors ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400 border-r-2 border-blue-600 dark:border-blue-400 bg-slate-100 dark:bg-slate-800/50"
                      : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200/50 dark:hover:bg-slate-800 border-r-2 border-transparent"
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {item.icon}
                  </span>
                  <span className="font-inter text-[0.875rem]">{item.name}</span>
                </button>
              );
            })}
          </nav>
        </div>
        <div className="mt-auto p-6">
          <button onClick={() => setActiveTab('Proposal View')} className="w-full bg-wealth-gradient text-white font-inter text-sm py-3 px-4 rounded-xl shadow-[0_8px_24px_rgba(15,23,42,0.06)] hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-sm">
              add_circle
            </span>
            Generate Proposal
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="w-full xl:ml-64 flex-1 flex flex-col min-h-screen">
        {/* TopNavBar */}
        <header className="flex justify-between items-center h-16 px-4 md:px-8 sticky top-0 bg-white/60 dark:bg-slate-950/60 backdrop-blur-xl z-30 border-b border-transparent">
          <div className="flex items-center flex-1 max-w-xl gap-4">
            <button 
              className="xl:hidden p-1 text-slate-500 hover:bg-surface-container rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <span className="material-symbols-outlined text-2xl">menu</span>
            </button>
            <div className="relative w-full group hidden md:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
                search
              </span>
              <input
                className="w-full bg-surface-container-low border-none rounded-xl pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-on-primary-container/20 transition-all font-inter outline-none"
                placeholder="Search clients, portfolios, or reports..."
                type="text"
              />
            </div>
            <button className="md:hidden p-2 text-slate-500">
              <span className="material-symbols-outlined">search</span>
            </button>
          </div>
          
          <div className="flex items-center gap-3 md:gap-6 ml-4">
            <div className="flex items-center gap-2 md:gap-4">
              <button className="text-slate-500 hover:text-slate-900 transition-colors relative">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full border-2 border-white pointer-events-none"></span>
              </button>
              <button className="hidden sm:block text-slate-500 hover:text-slate-900 transition-colors">
                <span className="material-symbols-outlined">help_outline</span>
              </button>
            </div>
            <div className="h-8 w-[1px] bg-outline-variant/30 hidden sm:block"></div>
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="hidden sm:block text-right">
                <p className="text-sm font-semibold text-slate-900 font-manrope leading-tight transition-colors">
                  Alexander Sterling
                </p>
                <p className="text-[0.625rem] text-slate-500 uppercase tracking-wider font-inter">
                  Senior Advisor
                </p>
              </div>
              <img
                alt="Advisor Profile Picture"
                className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-surface-container object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2apxGQ5bguwxIT2dy-lvBFR9GmRn_0xDG557dOJYBCmpL2djL4isEou12mkAM0GfmMWRSUJo25NpRF3OaZLZeqYMhmwbx5Rh1XZVXCfy4reOhfaVq6uOR7QUNM3_G5RGqv6NwqxhpNsM7vE7B3V3U7zcA82QDUNsbiqCjdX8tgbBTlZR4jzcR7AQsDpiRmE6_hZ0Q_rCIQdTo_12cJ3VeiGQeXIHTP1EbJ_LzulDULOqFz39Ygf13YxzlPnv2dRymfO0PL71B2-E"
              />
            </div>
          </div>
        </header>

        <main className="p-4 md:p-8 space-y-6 md:space-y-8 flex-1 overflow-y-auto">
          {activeTab === 'Dashboard' && (
            <div className="space-y-6 md:space-y-8 animate-in fade-in duration-500">
              {/* Header Section */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-5">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold font-manrope tracking-tight text-on-background">
                    Portfolio Overview
                  </h2>
                  <p className="text-on-surface-variant mt-1 font-inter text-sm md:text-base">
                    Good morning, Alexander. Here is your practice intelligence.
                  </p>
                </div>
                <div className="flex flex-wrap sm:flex-nowrap gap-3 w-full md:w-auto">
                  <button onClick={() => setActiveTab('Client Onboarding')} className="flex-1 sm:flex-none justify-center bg-surface-container-highest text-on-surface px-5 py-2.5 rounded-xl font-inter text-sm font-medium flex items-center gap-2 hover:bg-surface-dim transition-colors active:scale-95">
                    <span className="material-symbols-outlined text-lg">
                      person_add
                    </span>
                    Add Client
                  </button>
                  <button className="flex-1 sm:flex-none justify-center bg-wealth-gradient text-white px-5 py-2.5 rounded-xl font-inter text-sm font-medium flex items-center gap-2 shadow-sm hover:shadow-sm hover:opacity-95 hover:-translate-y-0.5 transition-all outline-none focus:ring-4 focus:ring-blue-200 active:scale-95">
                    <span className="material-symbols-outlined text-lg">
                      bolt
                    </span>
                    Quick Analysis
                  </button>
                </div>
              </div>
              {/* KPI Bento Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-surface-container-lowest p-6 rounded-xl relative overflow-hidden group shadow-[0_8px_24px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_28px_rgba(15,23,42,0.06)] transition-shadow">
                  <div className="relative z-10">
                    <p className="text-on-surface-variant uppercase tracking-widest font-inter text-[0.6875rem] font-semibold mb-4">
                      Total Clients
                    </p>
                    <div className="flex items-end justify-between">
                      <h3 className="text-5xl font-extrabold font-manrope text-slate-900">
                        54
                      </h3>
                      <div className="flex items-center text-on-tertiary-container bg-tertiary-container/10 px-2 py-1 rounded text-xs font-semibold">
                        <span className="material-symbols-outlined text-xs mr-1">
                          trending_up
                        </span>
                        +4.2%
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 w-24 h-16 opacity-10 group-hover:opacity-20 transition-opacity">
                    <img
                      alt="Growth chart"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX9vx_u4rKu-A3plqIOVndbZJkVCpwtZEmH9lYsettpkUKxOfdqtTajODAuQqT-RwgLVN_IK-7h4DOS4dxP9ndcemOvlYgz6uYJsaedS3y0SL3TsB9T1DPqQl3-6bXlVD_IjAuoNqakIbx_ChuS8237YGaIPHAAfA6na_h7k4G7rRV-8esg570aSZQ7bIRCbV4iWdx5nJHzkcEsvjxFQnuNv3Pp-qnrmHagP33LTuyCD7McwE15mcE4cbjemP_EAsdAK0_CB_T5H0"
                    />
                  </div>
                </div>
                
                <div className="bg-surface-container-lowest p-6 rounded-xl relative overflow-hidden group shadow-[0_8px_24px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_28px_rgba(15,23,42,0.06)] transition-shadow">
                  <div className="relative z-10">
                    <p className="text-on-surface-variant uppercase tracking-widest font-inter text-[0.6875rem] font-semibold mb-4">
                      Active Proposals
                    </p>
                    <div className="flex items-end justify-between">
                      <h3 className="text-5xl font-extrabold font-manrope text-slate-900">
                        12
                      </h3>
                      <div className="text-xs text-on-surface-variant font-medium">
                        Pending Review: 3
                      </div>
                    </div>
                  </div>
                  <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <span className="material-symbols-outlined text-[120px]">
                      description
                    </span>
                  </div>
                </div>
                
                <div className="bg-surface-container-lowest p-6 rounded-xl relative overflow-hidden group shadow-[0_8px_24px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_28px_rgba(15,23,42,0.06)] transition-shadow md:col-span-2 lg:col-span-1">
                  <div className="relative z-10">
                    <p className="text-on-surface-variant uppercase tracking-widest font-inter text-[0.6875rem] font-semibold mb-4">
                      Conversion Rate
                    </p>
                    <div className="flex items-end justify-between">
                      <h3 className="text-5xl font-extrabold font-manrope text-slate-900">
                        85%
                      </h3>
                      <div className="flex items-center text-on-tertiary-container bg-tertiary-container/10 px-2 py-1 rounded text-xs font-semibold">
                        <span className="material-symbols-outlined text-xs mr-1">
                          expand_less
                        </span>
                        +12%
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                    <div className="bg-on-primary-container h-full w-[85%] rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Recent Clients Table Section */}
              <div className="bg-surface-container-lowest rounded-xl shadow-[0_8px_24px_rgba(15,23,42,0.04)] overflow-hidden">
                <div className="px-5 md:px-8 py-6 flex justify-between items-center bg-surface-container-low/30">
                  <h3 className="text-lg font-bold font-manrope text-slate-900">
                    Recent Clients
                  </h3>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-surface-container rounded-lg transition-colors text-on-surface-variant">
                      <span className="material-symbols-outlined">filter_list</span>
                    </button>
                    <button className="p-2 hover:bg-surface-container rounded-lg transition-colors text-on-surface-variant">
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[700px]">
                    <thead>
                      <tr className="bg-surface-container-low">
                        <th className="px-5 md:px-8 py-4 font-inter text-[0.6875rem] uppercase tracking-widest text-on-surface-variant font-medium">
                          Name
                        </th>
                        <th className="px-5 md:px-8 py-4 font-inter text-[0.6875rem] uppercase tracking-widest text-on-surface-variant font-medium">
                          Risk Profile
                        </th>
                        <th className="px-5 md:px-8 py-4 font-inter text-[0.6875rem] uppercase tracking-widest text-on-surface-variant font-medium">
                          Status
                        </th>
                        <th className="px-5 md:px-8 py-4 font-inter text-[0.6875rem] uppercase tracking-widest text-on-surface-variant font-medium">
                          Last Active
                        </th>
                        <th className="px-5 md:px-8 py-4 font-inter text-[0.6875rem] uppercase tracking-widest text-on-surface-variant font-medium text-right">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/10">
                      {RECENT_CLIENTS.map((client, idx) => (
                        <tr key={idx} className="hover:bg-surface transition-colors cursor-pointer group">
                          <td className="px-5 md:px-8 py-5">
                            <div className="flex items-center gap-3">
                              <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs ${client.colorBg} ${client.colorText}`}>
                                {client.initials}
                              </div>
                              <div>
                                <p className="font-semibold text-slate-900 text-sm group-hover:text-blue-600 transition-colors">
                                  {client.name}
                                </p>
                                <p className="text-xs text-on-surface-variant">
                                  {client.email}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-5 md:px-8 py-5">
                            <div className="flex items-center gap-2">
                              <div className="flex">
                                {[...Array(3)].map((_, i) => (
                                  <div key={i} className={`w-1.5 h-4 rounded-full mr-0.5 ${i < client.riskLevel ? (client.riskLevel > 2 ? 'bg-on-primary-container' : client.riskLevel === 2 ? 'bg-error' : 'bg-on-tertiary-container') : 'bg-outline-variant/30'}`} />
                                ))}
                              </div>
                              <span className="text-sm font-medium text-slate-700">
                                {client.profile}
                              </span>
                            </div>
                          </td>
                          <td className="px-5 md:px-8 py-5">
                            <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                              client.status === 'Active' ? 'bg-tertiary-container/10 text-on-tertiary-container' :
                              client.status === 'Proposal Sent' ? 'bg-on-primary-container/10 text-on-primary-container' :
                              'bg-surface-container-highest text-on-surface-variant'
                            }`}>
                              {client.status}
                            </span>
                          </td>
                          <td className="px-5 md:px-8 py-5 text-sm text-on-surface-variant">
                            {client.time}
                          </td>
                          <td className="px-5 md:px-8 py-5 text-right">
                            <button onClick={() => setActiveTab('Proposal View')} className="text-on-primary-container font-semibold text-sm hover:underline decoration-2 underline-offset-4">
                              View
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="px-8 py-4 bg-surface-container-low/20 border-t border-outline-variant/10 text-center">
                  <button className="text-xs font-bold font-inter uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors">
                    See all 54 clients
                  </button>
                </div>
              </div>

              {/* Bottom Dashboard Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                {/* Market Context (Visual Accent) */}
                <div className="bg-wealth-gradient p-8 rounded-xl text-white relative overflow-hidden flex flex-col justify-between min-h-[220px] md:h-[240px]">
                  <div className="relative z-10">
                    <h4 className="text-xl font-bold font-manrope mb-2">
                       Market Outlook
                    </h4>
                    <p className="text-white/70 max-w-xs text-sm leading-relaxed">
                      Global equities showing resilience. Recommended tactical
                      rebalancing for Tier 1 client portfolios initiated.
                    </p>
                  </div>
                  <div className="relative z-10 flex gap-4 mt-4">
                    <div className="bg-white/10 backdrop-blur-md p-3 rounded-lg flex-1 border border-white/5">
                      <p className="text-[10px] text-white/60 uppercase font-inter">
                        S&amp;P 500
                      </p>
                      <p className="font-bold text-lg">+1.24%</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-3 rounded-lg flex-1 border border-white/5">
                      <p className="text-[10px] text-white/60 uppercase font-inter">
                        Bonds 10Y
                      </p>
                      <p className="font-bold text-lg">4.12%</p>
                    </div>
                  </div>
                  {/* Abstract Background Graphic */}
                  <div className="absolute right-[-20%] bottom-[-20%] w-64 h-64 bg-on-primary-container/20 rounded-full blur-3xl"></div>
                </div>

                {/* Recent Activity Feed */}
                <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
                  <h4 className="text-lg font-bold font-manrope text-slate-900 mb-6">
                    Recent Activity
                  </h4>
                  <div className="space-y-6">
                    <div className="flex gap-4 cursor-pointer hover:bg-surface/50 p-2 -m-2 rounded-lg transition-colors">
                      <div className="w-2 h-2 rounded-full bg-on-primary-container mt-1.5 shrink-0"></div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          Proposal Approved:{" "}
                          <span className="font-normal text-on-surface-variant">
                            The Sterling Trust rebalance has been finalized.
                          </span>
                        </p>
                        <p className="text-[10px] text-slate-400 mt-1 font-inter">
                          12 MINUTES AGO
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 cursor-pointer hover:bg-surface/50 p-2 -m-2 rounded-lg transition-colors">
                      <div className="w-2 h-2 rounded-full bg-on-tertiary-container mt-1.5 shrink-0"></div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          New Client Onboarded:{" "}
                          <span className="font-normal text-on-surface-variant">
                            Welcome Jonathan Dubois to the platform.
                          </span>
                        </p>
                        <p className="text-[10px] text-slate-400 mt-1 font-inter">
                          2 HOURS AGO
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 cursor-pointer hover:bg-surface/50 p-2 -m-2 rounded-lg transition-colors">
                      <div className="w-2 h-2 rounded-full bg-error mt-1.5 shrink-0"></div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          Task Overdue:{" "}
                          <span className="font-normal text-on-surface-variant">
                            Quarterly report for Whitmore Group is 2 days late.
                          </span>
                        </p>
                        <p className="text-[10px] text-slate-400 mt-1 font-inter">
                          OCT 25, 2023
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Dynamic Tabs Content */}
          {activeTab === 'Client Onboarding' && <ClientOnboarding setActiveTab={setActiveTab} />}
          {activeTab === 'Risk Profiling' && <RiskProfiling setActiveTab={setActiveTab} />}
          {activeTab === 'Comparison' && <ComparisonScreen setActiveTab={setActiveTab} />}
          {activeTab === 'Proposal View' && <ProposalView setActiveTab={setActiveTab} />}
          {activeTab === 'Edit Proposal' && <EditProposal setActiveTab={setActiveTab} />}
          {activeTab === 'SIP Calculator' && <SIPCalculator setActiveTab={setActiveTab} />}
          {activeTab === 'Settings' && <AISettings setActiveTab={setActiveTab} />}
          {activeTab === 'Audit Log' && <AIAuditLog setActiveTab={setActiveTab} />}
        </main>
      </div>
    </div>
  );
}
