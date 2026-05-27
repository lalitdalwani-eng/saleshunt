import Link from "next/link";

export default function Footer() {
  return (

<footer className="bg-slate-950 border-t border-slate-800 py-8 px-8 mt-auto">

<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

<div>

<h2 className="text-xl font-bold text-white">

SalesHunt

<span className="text-blue-500">
.in
</span>

</h2>

<p className="text-slate-400 text-sm mt-2">
Sales-first hiring platform
</p>

</div>


<div className="flex gap-6 text-slate-400">

<Link href="/jobs">
Jobs
</Link>

<Link href="/candidate-signup">
Candidates
</Link>

<Link href="/recruiter-signup">
Recruiters
</Link>

<Link href="/login">
Login
</Link>

</div>

</div>

</footer>

  );
}