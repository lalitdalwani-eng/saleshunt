import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans">

      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-2">
          <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="8" stroke="#1A5CFF" strokeWidth="2"/>
            <path d="M6 14L10 6L14 14" stroke="#1A5CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="7.5" y1="11" x2="12.5" y2="11" stroke="#1A5CFF" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span className="text-xl font-bold tracking-tight">
            SalesHunt<span className="text-blue-500">.</span>in
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-slate-400">
          <Link
href="/jobs"
className="hover:text-white transition-colors"
>
Find jobs
</Link>
          <a href="#" className="hover:text-white transition-colors">Community</a>
          <a href="#" className="hover:text-white transition-colors">For recruiters</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
        </div>

        <div className="flex items-center gap-3">
          <Link
href="/login"
className="px-5 py-3 rounded-xl border border-slate-700"
>

Log in

</Link>
          <Link
href="/register"
className="bg-blue-600 px-5 py-3 rounded-xl"
>

Sign up free

</Link>
        </div>
      </nav>


      {/* ── HERO ── */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 pt-20 overflow-hidden">

        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

        {/* Eyebrow */}
        <div className="relative flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-medium px-4 py-2 rounded-full mb-8">
          <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse" />
          India's first sales-only career platform
        </div>

        {/* Headline */}
        <h1 className="relative text-5xl md:text-6xl lg:text-7xl font-bold max-w-4xl mb-6 leading-tight tracking-tight">
          Hire sales talent by{" "}
          <span className="text-teal-400">performance</span>,
          <br />not just resumes.
        </h1>

        <p className="relative text-slate-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          Revenue-driven profiles. Quota-based hiring.
          Verified sales professionals across India.
        </p>

        {/* CTAs */}
        <div className="relative flex flex-col sm:flex-row gap-4 mb-16">
          <Link
href="/candidate-signup"
className="bg-blue-600 px-8 py-4 rounded-2xl hover:bg-blue-700"
>

Join as Candidate →

</Link>
          <Link
href="/recruiter-signup"
className="bg-slate-900 border border-slate-700 px-8 py-4 rounded-2xl"
>

Join as Recruiter

</Link>
        </div>

        {/* Stats row */}
        <div className="relative flex flex-wrap justify-center gap-10 text-center border-t border-white/5 pt-10 w-full max-w-2xl">
          {[
            { num: "2,847", label: "Sales jobs live" },
            { num: "14,200+", label: "Candidates" },
            { num: "830+", label: "Companies hiring" },
            { num: "₹8–45L", label: "Salary range" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold text-white">{s.num}</div>
              <div className="text-xs text-slate-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>


      {/* ── WHAT MAKES US DIFFERENT ── */}
      <section className="px-8 py-24 border-t border-white/5">

        <p className="text-center text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
          Why SalesHunt
        </p>
        <h2 className="text-4xl font-bold text-center mb-3 tracking-tight">
          What makes us different?
        </h2>
        <p className="text-slate-400 text-center mb-14 max-w-lg mx-auto">
          Naukri shows job titles. We show what you've actually achieved.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {[
            {
              icon: "💰",
              color: "bg-teal-500/10 border-teal-500/15",
              iconColor: "text-teal-400",
              title: "Revenue generated",
              desc: "Show real sales performance numbers, not just job titles and years of experience.",
            },
            {
              icon: "🎯",
              color: "bg-blue-500/10 border-blue-500/15",
              iconColor: "text-blue-400",
              title: "Quota attainment",
              desc: "Measure achievement against real targets. See who consistently hits and who exceeds.",
            },
            {
              icon: "📊",
              color: "bg-orange-500/10 border-orange-500/15",
              iconColor: "text-orange-400",
              title: "Deal size",
              desc: "Know if a candidate sells ₹50K deals or ₹5Cr enterprise contracts. Context matters.",
            },
            {
              icon: "✅",
              color: "bg-green-500/10 border-green-500/15",
              iconColor: "text-green-400",
              title: "Verified talent",
              desc: "Community-backed profiles. Peer reviews from senior sales professionals only.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className={`bg-slate-900 border ${f.color} p-7 rounded-2xl hover:border-opacity-40 transition-all hover:-translate-y-1`}
            >
              <div className={`text-2xl mb-4 w-10 h-10 flex items-center justify-center rounded-xl ${f.color}`}>
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* ── CANDIDATE PROFILE ── */}
      <section className="px-8 py-24 bg-slate-900/50 border-t border-white/5">

        <p className="text-center text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
          Candidate profile
        </p>
        <h2 className="text-4xl font-bold text-center mb-3 tracking-tight">
          Profiles built for sales people
        </h2>
        <p className="text-slate-400 text-center mb-14">
          Not a resume. A performance record.
        </p>

        <div className="max-w-2xl mx-auto bg-slate-900 rounded-3xl p-8 border border-white/8">

          {/* Profile header */}
          <div className="flex justify-between items-start mb-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center text-lg font-bold">
                RK
              </div>
              <div>
                <h3 className="text-2xl font-bold">Rahul Kapoor</h3>
                <p className="text-slate-400 text-sm mt-0.5">ERP Sales · Channel Growth · B2B</p>
                <div className="flex gap-2 mt-2">
                  <span className="text-xs bg-teal-500/10 border border-teal-500/20 text-teal-400 px-3 py-1 rounded-full">
                    B2B Sales
                  </span>
                  <span className="text-xs bg-blue-500/10 border border-blue-500/20 text-blue-400 px-3 py-1 rounded-full">
                    SaaS
                  </span>
                  <span className="text-xs bg-orange-500/10 border border-orange-500/20 text-orange-400 px-3 py-1 rounded-full">
                    ERP
                  </span>
                </div>
              </div>
            </div>
            <span className="bg-teal-500/15 border border-teal-500/25 text-teal-400 text-xs font-semibold px-4 py-2 rounded-full">
              ✓ Verified
            </span>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {[
              { label: "Revenue generated", value: "₹2 Cr", trend: "↑ FY 2023–24", color: "text-teal-400" },
              { label: "Quota attainment", value: "118%", trend: "↑ 3 years running", color: "text-teal-400" },
              { label: "Avg deal size", value: "₹8L", trend: "Enterprise segment", color: "text-blue-400" },
              { label: "Industry", value: "ERP", trend: "B2B focus", color: "text-white" },
            ].map((m) => (
              <div key={m.label} className="bg-slate-800 p-5 rounded-2xl">
                <p className="text-slate-400 text-xs mb-1">{m.label}</p>
                <h4 className={`text-3xl font-bold ${m.color}`}>{m.value}</h4>
                <p className="text-xs text-slate-500 mt-1">{m.trend}</p>
              </div>
            ))}
          </div>

          {/* Quota bar */}
          <div className="bg-slate-800 rounded-2xl p-5">
            <div className="flex justify-between text-xs text-slate-400 mb-3">
              <span>Quota attainment — last 3 years</span>
              <span className="text-teal-400 font-semibold">Avg 114%</span>
            </div>
            {[
              { yr: "FY22", pct: 108, w: "86%" },
              { yr: "FY23", pct: 115, w: "92%" },
              { yr: "FY24", pct: 118, w: "94%" },
            ].map((b) => (
              <div key={b.yr} className="flex items-center gap-3 mb-2">
                <span className="text-xs text-slate-500 w-7">{b.yr}</span>
                <div className="flex-1 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-teal-500 rounded-full" style={{ width: b.w }} />
                </div>
                <span className="text-xs font-semibold text-white w-8">{b.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── RECRUITER DASHBOARD ── */}
      <section className="px-8 py-24 border-t border-white/5">

        <p className="text-center text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
          For recruiters
        </p>
        <h2 className="text-4xl font-bold text-center mb-3 tracking-tight">
          Filter by what actually matters
        </h2>
        <p className="text-slate-400 text-center mb-14">
          Stop reading resumes. Start comparing revenue numbers.
        </p>

        <div className="max-w-5xl mx-auto">

          {/* Filter chips */}
          <div className="flex flex-wrap gap-2 mb-6 justify-center">
            {["All candidates", "Hunter only", "₹1Cr+ revenue", "Quota 110%+", "B2B SaaS", "Immediate joiners"].map((chip, i) => (
              <span
                key={chip}
                className={`text-xs px-4 py-2 rounded-full border cursor-pointer transition-all ${
                  i === 0
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white"
                }`}
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 border border-white/8">

            {/* Table header */}
            <div className="grid grid-cols-6 gap-4 text-xs font-semibold text-slate-500 uppercase tracking-wide pb-4 border-b border-white/5 mb-2">
              <div className="col-span-2">Candidate</div>
              <div>Revenue/yr</div>
              <div>Quota</div>
              <div>Hunter score</div>
              <div>Action</div>
            </div>

            {/* Rows */}
            {[
              { init: "LD", name: "Lalit Dalwani", role: "Sr BDM · ERP · 7 yrs", rev: "₹2 Cr", quota: "118%", score: 89, scoreColor: "bg-teal-500/15 text-teal-400", avatarFrom: "from-blue-600", avatarTo: "to-teal-500" },
              { init: "RS", name: "Rahul Shah", role: "BDE · SaaS · 4 yrs", rev: "₹1.5 Cr", quota: "110%", score: 82, scoreColor: "bg-blue-500/15 text-blue-400", avatarFrom: "from-purple-600", avatarTo: "to-blue-500" },
              { init: "PM", name: "Priya Mehta", role: "Sales Manager · FMCG · 6 yrs", rev: "₹90L", quota: "125%", score: 91, scoreColor: "bg-orange-500/15 text-orange-400", avatarFrom: "from-orange-500", avatarTo: "to-amber-400" },
            ].map((c) => (
              <div
                key={c.name}
                className="grid grid-cols-6 gap-4 items-center py-4 border-b border-white/5 last:border-0 hover:bg-white/2 rounded-xl transition-colors cursor-pointer"
              >
                <div className="col-span-2 flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${c.avatarFrom} ${c.avatarTo} flex items-center justify-center text-xs font-bold flex-shrink-0`}>
                    {c.init}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{c.name}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{c.role}</div>
                  </div>
                </div>
                <div className="text-sm font-semibold text-white">{c.rev}</div>
                <div className="text-sm font-semibold text-teal-400">{c.quota}</div>
                <div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${c.scoreColor}`}>
                    {c.score} / 100
                  </span>
                </div>
                <div>
                  <button className="text-xs bg-blue-600/20 hover:bg-blue-600/40 text-blue-400 border border-blue-600/30 px-4 py-1.5 rounded-lg transition-all">
                    View profile
                  </button>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ── CTA ── */}
      <section className="px-8 py-28 text-center border-t border-white/5 bg-blue-600/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-950/20 pointer-events-none" />
        <p className="relative text-xs font-semibold text-blue-400 uppercase tracking-widest mb-4">
          Get started today
        </p>
        <h2 className="relative text-4xl md:text-5xl font-bold mb-5 tracking-tight max-w-2xl mx-auto">
          India's sales professionals are waiting
        </h2>
        <p className="relative text-slate-400 text-lg mb-10 max-w-xl mx-auto">
          Join 14,200+ candidates and 830+ companies already on SalesHunt. Free to get started.
        </p>
        <div className="relative flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-10 py-4 rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-600/30 text-lg">
            Get started free →
          </button>
          <button className="border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-medium px-10 py-4 rounded-xl transition-all hover:bg-white/5 text-lg">
            Post a job
          </button>
        </div>
      </section>


      {/* ── FOOTER ── */}
      <footer className="px-8 py-10 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="8" stroke="#1A5CFF" strokeWidth="2"/>
              <path d="M6 14L10 6L14 14" stroke="#1A5CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-sm font-semibold">SalesHunt<span className="text-blue-500">.</span>in</span>
            <span className="text-slate-600 text-sm ml-2">© 2025</span>
          </div>
          <div className="flex gap-8 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Find jobs</a>
            <a href="#" className="hover:text-white transition-colors">For recruiters</a>
            <a href="#" className="hover:text-white transition-colors">Community</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </footer>

    </main>
  );
}