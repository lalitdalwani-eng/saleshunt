export default function CandidateSignup() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-20">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold mb-4">
          Create Sales Profile
        </h1>

        <p className="text-slate-400 mb-10">
          Showcase performance recruiters care about.
        </p>

        <div className="grid gap-5">

          <input
            className="bg-slate-900 p-5 rounded-2xl"
            placeholder="Full Name"
          />

          <input
            className="bg-slate-900 p-5 rounded-2xl"
            placeholder="Email"
          />

          <input
            className="bg-slate-900 p-5 rounded-2xl"
            placeholder="Current Company"
          />

          <input
            className="bg-slate-900 p-5 rounded-2xl"
            placeholder="Revenue Generated"
          />

          <input
            className="bg-slate-900 p-5 rounded-2xl"
            placeholder="Quota Attainment %"
          />

          <button className="bg-blue-600 p-5 rounded-2xl">
            Continue →
          </button>

        </div>

      </div>

    </main>
  );
}