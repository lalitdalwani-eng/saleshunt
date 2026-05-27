export default function RecruiterSignup() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-20">

      <div className="max-w-5xl mx-auto">

        <p className="text-blue-400 text-sm uppercase mb-3">
          Recruiter onboarding
        </p>

        <h1 className="text-5xl font-bold mb-4">
          Hire top sales talent
        </h1>

        <p className="text-slate-400 mb-10">
          Create your recruiter profile and start hiring by performance.
        </p>

        <div className="grid gap-5">

          <input
            className="bg-slate-900 p-5 rounded-2xl"
            placeholder="Company Name"
          />

          <input
            className="bg-slate-900 p-5 rounded-2xl"
            placeholder="Website"
          />

          <input
            className="bg-slate-900 p-5 rounded-2xl"
            placeholder="Recruiter Name"
          />

          <input
            className="bg-slate-900 p-5 rounded-2xl"
            placeholder="Designation"
          />

          <input
            className="bg-slate-900 p-5 rounded-2xl"
            placeholder="Work Email"
          />

          <input
            className="bg-slate-900 p-5 rounded-2xl"
            placeholder="Hiring Volume / Month"
          />

          <select
            className="bg-slate-900 p-5 rounded-2xl"
          >

            <option>
              SaaS
            </option>

            <option>
              ERP
            </option>

            <option>
              FMCG
            </option>

            <option>
              Retail
            </option>

            <option>
              Services
            </option>

          </select>

          <textarea
            className="bg-slate-900 p-5 rounded-2xl"
            rows={5}
            placeholder="Tell us about hiring requirements"
          />

          <button
            className="bg-blue-600 p-5 rounded-2xl text-lg"
          >
            Continue →
          </button>

        </div>

      </div>

    </main>
  );
}