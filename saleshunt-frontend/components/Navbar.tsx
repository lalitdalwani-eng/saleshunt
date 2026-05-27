import Link from "next/link";

export default function Navbar() {
  return (

<nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-slate-950/80 backdrop-blur">

<div className="text-2xl font-bold">

SalesHunt

<span className="text-blue-500">
.in
</span>

</div>


<div className="hidden md:flex gap-8 text-slate-400">

<Link href="/jobs">
Find Jobs
</Link>

<Link href="/candidate-signup">
Candidate
</Link>

<Link href="/recruiter-signup">
Recruiter
</Link>

</div>


<div className="flex gap-4">

<Link
href="/login"
className="border border-slate-700 px-4 py-2 rounded-xl"
>

Login

</Link>


<Link
href="/register"
className="bg-blue-600 px-4 py-2 rounded-xl"
>

Register

</Link>

</div>

</nav>

  );
}